const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');

const rewriteMarkdown = (file) => {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replaceAll(/]\(.*images\//g, '](/images/');
  content = content.replaceAll('?raw=true', '');
  content = content.replace('[点我查看中文版](../cn/README.md)', '');
  content = content.replace(
    'getExtension(Class<T> extensionType, String extensionName)',
    '`getExtension(Class<T> extensionType, String extensionName)`',
  );
  fs.writeFileSync(file, content, 'utf-8');
};

const copyFolder = (srcDir, tarDir) => {
  const files = fs.readdirSync(srcDir);
  if (fs.existsSync(tarDir) === false) {
    fs.mkdirSync(tarDir);
  }
  files.forEach((file) => {
    const srcPath = path.join(srcDir, file);
    const tarPath = path.join(tarDir, file);

    const stats = fs.statSync(srcPath);
    if (stats.isDirectory()) {
      if (!fs.existsSync(tarPath)) {
        fs.mkdirSync(tarPath);
      }
      copyFolder(srcPath, tarPath);
    } else {
      fs.copyFileSync(srcPath, tarPath);
      if (tarPath.endsWith('.md')) {
        rewriteMarkdown(tarPath);
      }
    }
  });
};

const sync = async () => {
  console.log('Cloning https://github.com/apache/incubator-eventmesh.git');
  const git = simpleGit();
  await git.clone(
    'https://github.com/apache/incubator-eventmesh.git',
    './tmp/incubator-eventmesh',
  );

  console.log('Extracting docs from apache/incubator-eventmesh');
  await git.cwd('./tmp/incubator-eventmesh').checkout('develop', ['-f']);
  copyFolder('./tmp/incubator-eventmesh/docs/images/', './static/images/');
  copyFolder('./tmp/incubator-eventmesh/docs/en/', './docs/');

  console.log('Removing tmp/incubator-eventmesh');
  fs.rmSync('./tmp', {
    recursive: true,
  });
};

sync();
