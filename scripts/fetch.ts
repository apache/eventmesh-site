import fs from 'fs';
import path from 'path';
import simpleGit from 'simple-git';

const rewriteMarkdown = (file: string) => {
  const content = fs.readFileSync(file, 'utf-8');
  fs.writeFileSync(file, content, 'utf-8');
};

const copyFolder = (srcDir: string, tarDir: string) => {
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

const fetch = async () => {
  console.log('[Apache EventMesh Site] Fetch apache/incubator-eventmesh');
  if (fs.existsSync('./tmp')) {
    fs.rmSync('./tmp', {
      recursive: true,
    });
  }
  const git = simpleGit();
  await git.clone(
    'https://github.com/apache/incubator-eventmesh.git',
    './tmp/incubator-eventmesh',
  );

  console.log('[Apache EventMesh Site] Extract documentation from apache/incubator-eventmesh');
  await git.cwd('./tmp/incubator-eventmesh').checkout('master', ['-f']);
  copyFolder('./tmp/incubator-eventmesh/docs/images/', './static/images/');
  copyFolder('./tmp/incubator-eventmesh/docs/en/', './docs/');
  copyFolder('./tmp/incubator-eventmesh/docs/zh/', './i18n/zh/docusaurus-plugin-content-docs/current/');

  console.log('[Apache EventMesh Site] Removed tmp/incubator-eventmesh');
  fs.rmSync('./tmp', {
    recursive: true,
  });
};

fetch();
