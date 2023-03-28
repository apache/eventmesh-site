import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Hero.module.css';
import ArchitectureImg from '../../static/images/eventmesh-architecture-3.png';
import Translate, {translate} from '@docusaurus/Translate';

const Hero = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1 className={styles.title}>
              {siteConfig.title}
            </h1>
            <h2 className={styles.subtitle}>
              Incubating
            </h2>

            <p className={styles.description}>
              <Translate id="eventmesh_intro">{siteConfig.tagline}</Translate>
            </p>

            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/introduction"
              >
                <Translate id="eventmesh_quick_start">Get Started</Translate>
              </Link>

              <Link
                className="button button--secondary button--outline button--lg"
                href="https://github.com/apache/eventmesh"
              >
                GitHub
              </Link>
            </div>
          </div>

          <div className={clsx('col col--6', styles.heroImage)}>
            <img
              src={ArchitectureImg}
              alt="EventMesh Architecture"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
