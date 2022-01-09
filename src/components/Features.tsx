import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';
import OrchestrationImg from '../../static/images/eventmesh-orchestration.png';
import FederationImg from '../../static/images/eventmesh-federation.png';

interface FeatureProps {
  title: string,
  description: string,
  image: string,
}

const FeatureList: FeatureProps[] = [
  {
    title: 'Orchestration',
    description: 'Event Orchestration and Streaming',
    image: OrchestrationImg,
  },
  {
    title: 'Federation',
    description: 'Full Mesh and Federation Governance',
    image: FederationImg,
  },
];

const Feature = ({
  title,
  description,
  image,
}: FeatureProps): JSX.Element => (
  <div className={clsx('col col--6 text--center', styles.feature)}>
    <p className={styles.featureTitle}>
      {title}
    </p>
    <p className={styles.description}>
      {description}
    </p>
    <img
      src={image}
      alt={title}
    />
  </div>
);

const Features = (): JSX.Element => (
  <section className={styles.features}>
    <div className="container">
      <h2 className={clsx('col text--center', styles.title)}>
        Core Features
      </h2>
      <div className="row">
        {FeatureList.map(({
          title,
          description,
          image,
        }) => (
          <Feature
            key={title}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
