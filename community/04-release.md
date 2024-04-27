---
title: How to Release
sidebar_position: 3
---

# Apache publish guide


## Understand the content and process of Apache's release

Source Release is the focus of Apache’s attention and is also a required content for release; Binary Release is optional. Please refer to the following link to find more ASF release guidelines:

- [Apache Release Guide](http://www.apache.org/dev/release-publishing)
- [Apache Release Policy](http://www.apache.org/dev/release.html)
- [Maven Release Info](http://www.apache.org/dev/publishing-maven-artifacts.html)


## Tool preparation

Mainly include the preparation of the signature tool GnuPG, Maven repository certification

### 1. Install GPG

Download the binary installation package (GnuPG binary releases) at [GnuPG official website](https://www.gnupg.org/download/index.html). The commands of GnuPG 1.x version and 2.x version are slightly different. The following description takes **GnuPG-2.x** version as example.

```sh
$ gpg --version #Check the version, it should be 2.x
```

### 2. Generate key with gpg

According to the prompt, generate the key

> Note：please use Apache mail box generate GPG Key

```shell
$ gpg --full-gen-key
gpg (GnuPG) 2.0.12; Copyright (C) 2009 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
  (1) RSA and RSA (default)
  (2) DSA and Elgamal
  (3) DSA (sign only)
  (4) RSA (sign only)
Your selection? 1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048) 4096
Requested keysize is 4096 bits
Please specify how long the key should be valid.
        0 = key does not expire
     <n>  = key expires in n days
     <n>w = key expires in n weeks
     <n>m = key expires in n months
     <n>y = key expires in n years
Key is valid for? (0)
Key does not expire at all
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

Real name: ${please enter the username}
Email address: ${enter the email address}
Comment: CODE SIGNING KEY
You selected this USER-ID:
   "${username} (CODE SIGNING KEY) <${email address}>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
You need a Passphrase to protect your secret key. # enter the password for protecting your secret key
```

### 3. Check the key

```shell
$ gpg --list-keys
pub   rsa4096/579C25F5 2021-04-26 # 579C25F5 is key id
uid           [ultimate] ${username} <${email address}>
sub   rsa4096 2021-04-26

# upload the public key to keyserver with key id
# Currently available in China: pgp.mit.edu, keyserver.ubuntu.com
$ gpg --keyserver keyserver.ubuntu.com --send-key 579C25F5

# keyserver.ubuntu.com is the corresponding keyserver, The keyserver list is: https://sks-keyservers.net/status/, which are automatically synchronized with each other, and you can choose any one.
$ gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys 579C25F5 # Verify whether it is synchronized to the public network. If the network is not good, you may need to try a few more times
```

**Note: If there are multiple public keys, set the default key. **Modify `~/.gnupg/gpg.conf`

```sh
# If you have more than 1 secret key in your keyring, you may want to
# uncomment the following option and set your preferred keyid.
default-key 28681CB1
```

**If there are multiple public keys, useless keys can also be deleted：**

```shell
$ gpg --delete-secret-keys 29BBC3CB # first delete the private key and specify the key id
gpg (GnuPG) 2.2.27; Copyright (C) 2021 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

sec  rsa4096/EE8DAE7D29BBC3CB 2021-04-27 mikexue <mikexue@apache.org>

Delete this key from the keyring? (y/N) y
This is a secret key! - really delete? (y/N) y
```

```shell
$ gpg --delete-keys 29BBC3CB # delete the public key, specify the key id
gpg (GnuPG) 2.2.27; Copyright (C) 2021 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.


pub  rsa4096/EE8DAE7D29BBC3CB 2021-04-27 mikexue <mikexue@apache.org>

Delete this key from the keyring? (y/N) y
```

Since the public key server has no checking mechanism, anyone can upload the public key in your name, so there is no way to guarantee the reliability of the public key on the server. Usually, you can publish a public key fingerprint on the website, so that others can check whether the downloaded public key is genuine.

```shell
# use fingerprint parameter generates a public key fingerprint:
$gpg --fingerprint mikexue
pub   rsa4096 2021-04-26 [SCA]
      F84A 0041 D70B 37AF 9C7B  F0B3 39F4 29D7 579C 25F5
uid           [ultimate] mikexue <mikexue@apache.org>
sub   rsa4096 2021-04-26 [E]
```

Log in to  [https://id.apache.org](https://id.apache.org/), paste the above fingerprint (ie F84A 0041 D70B 37AF 9C7B  F0B3 39F4 29D7 579C 25F5) into your user information OpenPGP Public Key Primary Fingerprint



## Publish to the Apache Maven repository

> Note: EventMesh is built using Gradle, and gradle-related configuration needs to be modified

### 1. Export private key file

```shell
$ gpg --export-secret-keys -o secring.gpg #the private key file is properly kept, and it is required for later configuration
```

### 2. Prepare branch

Pull the new branch from the master branch as the release branch. If you want to release the $`{release_version}` version now, pull the new branch `${release_version}-prepare` from the master branch, and then `${release_version}` Release Candidates involves The modification and labeling of all files are carried out in the `${release_version}-prepare` branch, and merged into the main branch after the final release is completed.

### 3. Update the release note

Update the following files of the official website project and submit them to the master branch:

https://github.com/apache/eventmesh-site/tree/master/events/release-notes

### 4. Configure the gradle.properties file under the root project

```shell
group=org.apache.eventmesh
version=1.2.0-release
#the last 8 digits of the 40-digit public key
signing.keyId=579C25F5
#the passphrase filled in when generating the key
signing.password=
#the path of the exported private key file secring.gpg, absolute path, such as /home/root/secring.gpg
signing.secretKeyRingFile=/home/root/secring.gpg
#apache account
apacheUserName=
#apache password
apachePassWord=
#sign switch
signEnabled=true
```

### 5. Check the gradle.properties file under the submodule

```shell
group=org.apache.eventmesh
version=${release_version}
```

### 6. Check and configure the build.gradle file under the root project

```shell
publishing {
    publications {
        mavenJava(MavenPublication) {
            from components.java
            artifact packageSources
            artifact packageJavadoc
            versionMapping {
                usage('java-api') {
                    fromResolutionOf('runtimeClasspath')
                }
                usage('java-runtime') {
                    fromResolutionResult()
                }
            }
            pom {
                name = 'EventMesh'
                description = 'Apache EventMesh'
                url = 'https://github.com/apache/eventmesh'
                licenses {
                    license {
                        name = 'The Apache License, Version 2.0'
                        url = 'http://www.apache.org/licenses/LICENSE-2.0.txt'
                    }
                }
                developers {
                    developer {
                        id = 'Apache EventMesh'
                        name = 'Apache EventMesh of ASF'
                        url = 'https://eventmesh.apache.org/'
                    }
                }
                scm {
                    connection = 'scm:git:git@github.com:apache/eventmesh.git'
                    developerConnection = 'scm:git:git@github.com:apache/eventmesh.git'
                    url = 'https://github.com/apache/eventmesh'
                }
            }
        }
    }
    repositories {
        maven {
            def releasesRepoUrl = 'https://repository.apache.org/service/local/staging/deploy/maven2/'
            def snapshotsRepoUrl = 'https://repository.apache.org/content/repositories/snapshots/'
            url = version.endsWith('SNAPSHOT') ? snapshotsRepoUrl : releasesRepoUrl
            credentials {
                username apacheUserName
                password apachePassWord
            }

        }
    }
}

signing {
    sign publishing.publications.mavenJava
}
```

### 7. Upload release package

Execute the following command, you need to sign and encrypt files such as jar, source package, doc and pom

```shell
$ gradle signMavenJavaPublication publish
```

After the above command is executed successfully, the version to be released will be automatically uploaded to Apache's staging repository. All Artifacts that are deployed to the remote [maven repository](http://repository.apache.org/) will be in the staging state，visit https://repository.apache.org/#stagingRepositories ,log in with Apache's LDAP account, You will see the uploaded version, and the content of the `Repository` column is ${STAGING.REPOSITORY}. Click `Close` to tell Nexus that the build is complete and only then will the build be usable. If there is a problem with the electronic signature, `Close` will fail, and you can view the failure information through `Activity`.



## Publish to the Apache SVN repository

### 1. Prepare the svn native environment (Apache uses svn to host the published content of the project)

### 2. Checkout to local directory

```shell
$ svn checkout https://dist.apache.org/repos/dist/dev/eventmesh/
# the local directory is assumed to be ~/apache/eventmesh
```

### 3. Add gpg public key

Add the public key to the [KEYS](https://dist.apache.org/repos/dist/dev/eventmesh/KEYS) file and submit it to the SVN warehouse (the first time the person who publishes needs to do this operation, specifically refer to the description in the KEYS file for operation). KEYS is mainly for voters to import locally to verify the correctness of sign

Windows

```sh
$ gpg --list-sigs <your name> | out-file -append KEYS -encoding utf8
$ gpg --armor --export <your name> | out-file -append KEYS -encoding utf8
```

> Mac OS/Linux

```sh
$ (gpg --list-sigs <your name> && gpg --armor --export <your name>) >> KEYS
```

### 4. Add packages to be published to the SVN directory

```shell
$ cd ~/apache/eventmesh # eventmesh svn root path
$ mkdir ${release_version}-${rc_version}
```

#### 4.1 Create tags

Create a tag on `${release_version}-prepare` branch, with rc version, which is a pre-release version

```shell
$ git tag -a v{$release_version}-{$rc_version} -m "Tagging the ${release_version} first Release Candidate (Candidates start at zero)"
$ git push origin --tags
```

#### 4.2 Package source code

Check the naming format of the project source package, name the source code `apache-eventmesh-${release_version}-src`, and package it in tar.gz format

```shell
$ tar -czvf apache-eventmesh-${release_version}-source.tar.gz apache-eventmesh-${release_version}-src
```

> Note: Make sure that there are no binary files in the source package, such as gradle-wrapper.jar, etc.

#### 4.3 Build binary package

> Package the binary release on the `${release_version}-prepare` branch.

> Note: The `dist` task depends on `generateDistLicense` and `generateDistNotice` tasks, which will automatically generate `LICENSE` and `NOTICE` files under the `tools/dist-licenses` directory. The `dist` task itself will copy the contents from the `tools/dist-licenses` directory to the `/dist` directory.

```shell
$ ./gradlew clean dist && ./gradlew installPlugin
```

Check the compiled file naming, renaming the `/dist` directory to `apache-eventmesh-${release_version}`.

```shell
$ tar -czvf apache-eventmesh-${release_version}-bin.tar.gz apache-eventmesh-${release_version}
```

Compress the source package and the binary package, and copy the relevant compressed packages to the local SVN repository under `/apache/eventmesh/${release_version}-${rc_version}`.

### 5. Generate signature/sha512 file

> Generate signature/sha512 files for source and binary packages

```shell
$ for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i > $i.sha512 ; done #compute sha512
$ for i in *.tar.gz; do echo $i; gpg --armor --output $i.asc --detach-sig $i ; done #compute signature
```

### 6. Commit to Apache SVN

```shell
$ cd ~/apache/eventmesh # eventmesh svn root directory
$ svn status
$ svn commit -m 'prepare for ${release_version}-${rc_version}'
```



## Verify Release Candidates

For a detailed check list, please refer to the official [check list](https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist)

Download the Release Candidates to be released to the local environment from the following address:

```shell
https://dist.apache.org/repos/dist/dev/eventmesh/${release_version}-${rc_version}/
```

Then start the verification link, which includes but is not limited to the following content and forms

### 1. Check information such as signature and hash

> Due to different operating systems, the check command may be different. For details, please refer to [Official Verification Steps](https://www.apache.org/info/verification.html)

#### 1.1 Check the sha512 hash

> Mac OS/Linux

```shell
$ shasum -a apache-eventmesh-${release_version}-source.tar.gz
#and compare the output with the contents of the apache-eventmesh-${release_version}-${rc_version}-source.tar.gz.sha512 file
$ shasum -a apache-eventmesh-${release_version}-bin.tar.gz
#and compare the output with the contents of the apache-eventmesh-${release_version}-${rc_version}-bin.tar.gz.sha512 file
```

> Windows

```shell
$ certUtil -hashfile apache-eventmesh-${release_version}-source.tar.gz SHA512
#and compare the output with the contents of the apache-eventmesh-${release_version}-${rc_version}-source.tar.gz.sha512 file
$ certUtil -hashfile apache-eventmesh-${release_version}-bin.tar.gz SHA512
#and compare the output with the contents of the apache-eventmesh-${release_version}-${rc_version}-bin.tar.gz.sha512 file
```

#### 1.2 Check gpg signature

First import the release manager's public key. Import KEYS from the svn repository to the local environment. (The release manager does not need to import again, the person who helps to do the verification needs to import, and the user name can be filled with the user name of the release manager)

```shell
$ curl https://dist.apache.org/repos/dist/dev/eventmesh/KEYS >> KEYS
$ gpg --import KEYS
$ gpg --edit-key "${release manager gpg name}"
  > trust

Please decide how far you trust this user to correctly verify other users' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don't know or won't say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Your decision? 5

  > save
```

Then check the signature with the following command

```shell
$ gpg --verify apache-eventmesh-${release_version}-source.tar.gz.asc apache-eventmesh-${release_version}-source.tar.gz
$ gpg --verify apache-eventmesh-${release_version}-bin.tar.gz.asc apache-eventmesh-${release_version}-bin.tar.gz
```

### 2. Check the file content of the source package

Extract `apache-eventmesh-${release_version}-source.tar.gz` and perform the following checks:

- Check if the source package contains unnecessary files that make the tar package too large.
- Ensure the existence of `LICENSE` and `NOTICE` files.
- Verify that the year in the `NOTICE` file is correct.
- Verify that only text files exist and there are no binary files.
- Ensure that all files begin with the ASF license (use `license-eye header check` command of the `skywalking-eyes` tool for verification).
- Ensure successful compilation, passing unit tests (`./gradlew build`) (currently supporting JAVA 8/gradle 7.0/idea 2021.1.1 and above).
- Check for any redundant files or folders, such as empty folders.

### 3. Check the file content of the binary package

- Ensure the existence of `LICENSE` and `NOTICE` files.
- Verify that the year in the `NOTICE` file is correct.
- Ensure that all text files begin with the ASF license (use `license-eye header check` command of the `skywalking-eyes` tool for verification).
- According to the [ASF 3RD PARTY LICENSE POLICY](https://apache.org/legal/resolved.html), check the licenses of third-party dependencies:
  - Ensure third-party dependencies' licenses are compatible with Apache-2.0 (run the `checkDeniedLicense` task, focusing on the compatibility of newly added license files under the `tools/dist-licenses` directory).
  - Ensure all third-party dependencies' licenses are declared in the `LICENSE` file.
  - Ensure the complete versions of dependency licenses are in the `license` directory (pay attention to the warning logs of the `generateDistLicense` task and supplement the license content of outdated artifacts).
  - If the dependency is under the Apache license and there is a `NOTICE` file, include these `NOTICE` files in the version's `NOTICE` file.

## Initiates a vote

> EventMesh has graduated from incubation and only needs to be voted by the community

- EventMesh community vote, send email to: `dev@eventmesh.apache.org`
- In ${Your EventMesh Release Manager} in the body of the community voting email, fill in the person responsible for this release, usually the sender of the email

### 1. EventMesh community voting stage

1. The EventMesh community votes, send a voting email to `dev@eventmesh.apache.org`. PMC needs to check the correctness of the version according to the document before voting. After at least 72 hours and counting 3 `+1 PMC member` votes, you can enter the next stage of voting.
2. Announce the voting result, and send the voting result email to `dev@eventmesh.apache.org`.

### 2. EventMesh community voting template

Title：

```
[VOTE] Release Apache EventMesh ${release_version} ${rc_version}
```

Content：

```
Hello EventMesh Community,

    This is a call for vote to release Apache EventMesh version ${release_version}-${rc_version}.

	Release notes:
	https://github.com/apache/eventmesh/releases/tag/v${release_version}-${rc_version}

    The release candidates:
    	https://dist.apache.org/repos/dist/dev/eventmesh/${release_version}-${rc_version}/

    Maven artifacts are available in a staging repository at:
    https://repository.apache.org/content/repositories/orgapacheeventmesh-{staging-id}

	Git tag for the release:
	https://github.com/apache/eventmesh/tree/v${release_version}-${rc_version}

	Keys to verify the Release Candidate:
	https://downloads.apache.org/eventmesh/KEYS

	Hash for the release tag:
	#hashCode of this release tag

	GPG user ID:
	${YOUR.GPG.USER.ID}

	The vote will be open for at least 72 hours or until necessary number of votes are reached.

	Please vote accordingly:

	[ ] +1 approve

	[ ] +0 no opinion

	[ ] -1 disapprove with the reason

	Checklist for reference:

	[ ] Download links are valid.

	[ ] Checksums and PGP signatures are valid.

	[ ] Source code distributions have correct names matching the current release.

	[ ] LICENSE and NOTICE files are correct for each EventMesh repo.

	[ ] All files have license headers if necessary.

	[ ] No compiled archives bundled in source archive.

	More detail checklist  please refer:
    https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist

Thanks,
${Your EventMesh Release Manager}
```

### 3. Announcing voting results template

Title：

```
[RESULT][VOTE] Release Apache EventMesh ${release_version} ${rc_version}
```

Content：

```
Hello Apache EventMesh PMC and Community,

    The vote closes now as 72hr have passed. The vote PASSES with

    xx (+1 binding) votes from the PMC members,
    member one
    member two
    member three
    ...
    
    xx (+1 non-binding) votes from the rest of the developer community,
    and no further 0 or -1 votes.

    The vote thread: {vote_mail_address}

    Many thanks for all people helping us with the release procedure. I will be working on publishing the artifacts soon.

Thank you for your support.
${Your EventMesh Release Manager}
```

## Official release

### 1. Merging code branch

Merge the changes of the `${release_version}-prepare` branch to the `master` branch, delete the `release` branch after the merge is complete

```shell
$ git checkout master
$ git merge origin/${release_version}-prepare
$ git pull
$ git push origin master
$ git push --delete origin ${release_version}-prepare
$ git branch -d ${release_version}-prepare
```

### 2. Migrating source and binary packages

Move source and binary packages from the svn `dev` directory to the `release` directory

```shell
$ svn mv https://dist.apache.org/repos/dist/dev/eventmesh/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/eventmesh/ -m "transfer packages for ${release_version}-${rc_version}" #Move source and binary packages
$ svn delete https://dist.apache.org/repos/dist/release/eventmesh/KEYS -m "delete KEYS" #Clear the KEYS in the original release directory
$ svn cp https://dist.apache.org/repos/dist/dev/eventmesh/KEYS https://dist.apache.org/repos/dist/release/eventmesh/ -m "transfer KEYS for ${release_version}-${rc_version}" #Copy dev directory KEYS to release directory
```

### 3. Confirm that the packages under dev and release are correct

- Confirmed that `${release_version}-${rc_version}` under [dev](https://dist.apache.org/repos/dist/dev/eventmesh/) has been removed
- Delete the release package of the previous version under the directory [release](https://dist.apache.org/repos/dist/release/eventmesh/), these packages will be automatically saved in [here](https:/ /archive.apache.org/dist/eventmesh/)

```shell
$ svn delete https://dist.apache.org/repos/dist/release/eventmesh/${last_release_version} -m "Delete ${last_release_version}"
```

### 4. Publish releases in the Apache Staging repository

- Log in to http://repository.apache.org, log in with your Apache account
- Click Staging repositories on the left,
- Search for the EventMesh keyword, select the warehouse you uploaded recently, and the warehouse specified in the voting email
- Click the `Release` button above, this process will perform a series of checks

> It usually takes 24 hours for the warehouse to synchronize to other data sources

### 5. GitHub version release

1. Tag the commit (on which the vote happened) with the release version without `-${RELEASE_CANDIDATE}`. such as: after a successful vote on `v1.2-rc5`, the hash will be tagged again with `v1.2` only.

2. Click `Edit` on the `${release_version}` version of the [GitHub Releases](https://github.com/apache/eventmesh/releases) page to edit the version number and version description, and click `Publish release`

### 6. Update download page

After waiting and confirming that the new release version is synchronized to the Apache mirror, update the following page:

https://eventmesh.apache.org/download/

https://eventmesh.apache.org/zh/download/

Download links for GPG signature files and hash verification files should use this prefix：`https://downloads.apache.org/eventmesh/`

> Note: The project download link should use https://www.apache.org/dyn/closer.lua instead of closer.cgi or mirrors.cgi

### 7. Announce version is released

> Please make sure that the Apache Staging warehouse has been released successfully, usually after 24 hours of this step.

Email to `dev@eventmesh.apache.org` 、 `announce@apache.org`

Title：

```
[ANNOUNCE] Apache EventMesh ${release_version} available
```

Content：

```
Hi all,

Apache EventMesh Team is glad to announce the new release of Apache EventMesh ${release_version}.

Apache EventMesh is a dynamic cloud-native eventing infrastructure used to decouple the application and backend middleware layer, which supports a wide range of use cases that encompass complex multi-cloud, widely distributed topologies using diverse technology stacks.

Download Links: https://eventmesh.apache.org/projects/eventmesh/download/

Release Notes: https://eventmesh.apache.org/events/release-notes/v${release_version}/

Website: https://eventmesh.apache.org/

EventMesh Resources:
- Issue: https://github.com/apache/eventmesh/issues
- Mailing list: dev@eventmesh.apache.org


Apache EventMesh Team
```

