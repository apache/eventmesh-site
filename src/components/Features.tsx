import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';
import EcosystemImg from '../../static/images/eventmesh-ecosystem.png';
import ArchitectureImg from '../../static/images/eventmesh-architecture.png';
import CloudNativeImg from '../../static/images/eventmesh-cloud-native.png';

interface FeatureProps {
  title: string,
  description: string,
  image: string,
}

const FeatureList: FeatureProps[] = [
  {
    title: 'EventMesh Ecosystem',
    description: 'What is EventMesh',
    image: EcosystemImg,
  },
  {
    title: 'EventMesh Architecture',
    description: 'EventMesh ability and architecture',
    image: ArchitectureImg,
  },
  {
    title: 'EventMesh Cloud Native',
    description: 'Panels and cloud native deployment',
    image: CloudNativeImg,
  },
];

const Feature = ({
  title,
  description,
  image,
}: FeatureProps): JSX.Element => (
  <div className={clsx('col col--4 text--center', styles.feature)}>
    <p className={styles.title}>
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
