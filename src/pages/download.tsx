import React from 'react';
import {
  MdCalendarToday,
  MdInsertDriveFile,
  MdCode,
} from 'react-icons/md';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './download.module.css';

interface Release {
  version: string,
  date: Date,
  notes: string,
  source: {
    tar: string,
    asc: string,
    sha512: string,
  },
  binary: {
    tar: string,
    asc: string,
    sha512: string,
  },
}

const releaseList: Release[] = [
  {
    version: 'v1.8.0',
    date: new Date(2022, 12, 29),
    notes: 'https://eventmesh.apache.org/events/release-notes/v1.8.0',
    source: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.8.0-incubating/apache-eventmesh-1.8.0-incubating-source.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.8.0-incubating/apache-eventmesh-1.8.0-incubating-source.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.8.0-incubating/apache-eventmesh-1.8.0-incubating-source.tar.gz.sha512',
    },
    binary: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.8.0-incubating/apache-eventmesh-1.8.0-incubating-bin.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.8.0-incubating/apache-eventmesh-1.8.0-incubating-bin.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.8.0-incubating/apache-eventmesh-1.8.0-incubating-bin.tar.gz.sha512',
    },
  },
  {
    version: 'v1.7.0',
    date: new Date(2022, 11, 4),
    notes: 'https://eventmesh.apache.org/events/release-notes/v1.7.0',
    source: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.7.0-incubating/apache-eventmesh-1.7.0-incubating-source.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.7.0-incubating/apache-eventmesh-1.7.0-incubating-source.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.7.0-incubating/apache-eventmesh-1.7.0-incubating-source.tar.gz.sha512',
    },
    binary: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.7.0-incubating/apache-eventmesh-1.7.0-incubating-bin.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.7.0-incubating/apache-eventmesh-1.7.0-incubating-bin.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.7.0-incubating/apache-eventmesh-1.7.0-incubating-bin.tar.gz.sha512',
    },
  },
  {
    version: 'v1.6.0',
    date: new Date(2022, 8, 1),
    notes: 'https://eventmesh.apache.org/events/release-notes/v1.6.0',
    source: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.6.0-incubating/apache-eventmesh-1.6.0-incubating-source.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.6.0-incubating/apache-eventmesh-1.6.0-incubating-source.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.6.0-incubating/apache-eventmesh-1.6.0-incubating-source.tar.gz.sha512',
    },
    binary: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.6.0-incubating/apache-eventmesh-1.6.0-incubating-bin.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.6.0-incubating/apache-eventmesh-1.6.0-incubating-bin.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.6.0-incubating/apache-eventmesh-1.6.0-incubating-bin.tar.gz.sha512',
    },
  },
  {
    version: 'v1.5.0',
    date: new Date(2022, 6, 4),
    notes: 'https://eventmesh.apache.org/events/release-notes/v1.5.0',
    source: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.5.0-incubating/apache-eventmesh-1.5.0-incubating-source.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.5.0-incubating/apache-eventmesh-1.5.0-incubating-source.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.5.0-incubating/apache-eventmesh-1.5.0-incubating-source.tar.gz.sha512',
    },
    binary: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.5.0-incubating/apache-eventmesh-1.5.0-incubating-bin.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.5.0-incubating/apache-eventmesh-1.5.0-incubating-bin.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.5.0-incubating/apache-eventmesh-1.5.0-incubating-bin.tar.gz.sha512',
    },
  },
  {
    version: 'v1.4.0',
    date: new Date(2022, 2, 20),
    notes: 'https://eventmesh.apache.org/events/release-notes/v1.4.0',
    source: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.4.0-incubating/apache-eventmesh-1.4.0-incubating-source.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.4.0-incubating/apache-eventmesh-1.4.0-incubating-source.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.4.0-incubating/apache-eventmesh-1.4.0-incubating-source.tar.gz.sha512',
    },
    binary: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.4.0-incubating/apache-eventmesh-1.4.0-incubating-bin.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.4.0-incubating/apache-eventmesh-1.4.0-incubating-bin.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.4.0-incubating/apache-eventmesh-1.4.0-incubating-bin.tar.gz.sha512',
    },
  },
  {
    version: 'v1.3.0',
    date: new Date(2021, 11, 28),
    notes: 'https://eventmesh.apache.org/events/release-notes/v1.3.0',
    source: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.3.0-incubating/apache-eventmesh-1.3.0-incubating-source.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.3.0-incubating/apache-eventmesh-1.3.0-incubating-source.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.3.0-incubating/apache-eventmesh-1.3.0-incubating-source.tar.gz.sha512',
    },
    binary: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.3.0-incubating/apache-eventmesh-1.3.0-incubating-bin.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.3.0-incubating/apache-eventmesh-1.3.0-incubating-bin.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.3.0-incubating/apache-eventmesh-1.3.0-incubating-bin.tar.gz.sha512',
    },
  },
  {
    version: 'v1.2.0',
    date: new Date(2021, 7, 11),
    notes: 'https://eventmesh.apache.org/events/release-notes/v1.2.0',
    source: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.2.0-incubating/apache-eventmesh-1.2.0-incubating-source.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.2.0-incubating/apache-eventmesh-1.2.0-incubating-source.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.2.0-incubating/apache-eventmesh-1.2.0-incubating-source.tar.gz.sha512',
    },
    binary: {
      tar: 'https://www.apache.org/dyn/closer.lua/incubator/eventmesh/1.2.0-incubating/apache-eventmesh-1.2.0-incubating-bin.tar.gz',
      asc: 'https://downloads.apache.org/incubator/eventmesh/1.2.0-incubating/apache-eventmesh-1.2.0-incubating-bin.tar.gz.asc',
      sha512: 'https://downloads.apache.org/incubator/eventmesh/1.2.0-incubating/apache-eventmesh-1.2.0-incubating-bin.tar.gz.sha512',
    },
  },
];

const ReleaseCard = ({
  version,
  date,
  notes,
  source,
  binary,
}: Release): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx(styles.card)}>
      <div className={clsx(styles.body)}>
        <h2>
          EventMesh
          {' '}
          {version}
        </h2>
        <p className={clsx(styles.description)}>
          <MdCalendarToday />
          {' '}
          Release Date:
          {' '}
          {date.toISOString().split('T')[0]}
          <br />
          <MdInsertDriveFile />
          {' '}
          <Link
            href={notes}
          >
            Release Notes
          </Link>
        </p>
        <p className={clsx(styles.description)}>
          {siteConfig.tagline}
        </p>
      </div>

      <div className={clsx(styles.link, 'row')}>
        <div className="col-6">
          <span className={clsx(styles.description)}>
            <MdCode />
            {' '}
            Source Code
          </span>

          <div className="button-group button-group--block">
            <Link
              className="button button--primary"
              href={source.tar}
            >
              tar
            </Link>
            <Link
              className="button button--primary"
              href={source.asc}
            >
              asc
            </Link>
            <Link
              className="button button--primary"
              href={source.sha512}
            >
              sha512
            </Link>
          </div>
        </div>

        <div className="col-6">
          <span className={clsx(styles.description)}>
            <MdInsertDriveFile />
            {' '}
            Binary Distribution
          </span>

          <div className="button-group button-group--block">
            <Link
              className="button button--primary"
              href={binary.tar}
            >
              tar
            </Link>
            <Link
              className="button button--primary"
              href={binary.asc}
            >
              asc
            </Link>
            <Link
              className="button button--primary"
              href={binary.sha512}
            >
              sha512
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Download = (): JSX.Element => (
  <Layout
    title="Download"
    description="Apache EventMesh (Incubating)"
  >
    <main>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.title)}>
          <h1>Download</h1>
          <p>
            The downloaded files should be
            {' '}
            <a href="https://www.apache.org/info/verification.html">verified</a>
            {' '}
            with the OpenPGP signature.
            The signature should be matched against the
            {' '}
            <a href="https://downloads.apache.org/incubator/eventmesh/KEYS">KEYS</a>
            {' '}
            file which contains
            the OpenPGP keys of EventMesh&apos;s Release Managers.
            The SHA-512 checksum is provided for each release file.
            The checksum of the downloaded files should be calculated to verify their integrity.
          </p>
        </div>

        {
        releaseList.map(({
          version,
          date,
          notes,
          source,
          binary,
        }) => (
          <ReleaseCard
            key={version}
            version={version}
            date={date}
            notes={notes}
            source={source}
            binary={binary}
          />
        ))
      }
      </div>
    </main>
  </Layout>
);

export default Download;
