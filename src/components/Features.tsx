import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';
import EcosystemImg from '../../static/img/eventmesh-ecosystem.png';
import ArchitectureImg from '../../static/img/eventmesh-architecture.png';
import CloudNativeImg from '../../static/img/eventmesh-cloud-native.png';

interface FeatureProps {
  title: string,
  image: string,
}

const FeatureList: FeatureProps[] = [
  {
    title: 'EventMesh Ecosystem',
    image: EcosystemImg,
  },
  {
    title: 'EventMesh Architecture',
    image: ArchitectureImg,
  },
  {
    title: 'EventMesh Cloud Native',
    image: CloudNativeImg,
  },
];

const Feature = ({
  title,
  image,
}: FeatureProps): JSX.Element => (
  <div className={clsx('col col--4')}>
    <div className="text--center padding-horiz--md">
      <p>{title}</p>
      <img
        src={image}
        alt={title}
      />
    </div>
  </div>
);

const Features = (): JSX.Element => (
  <section className={styles.features}>
    <div className="container">
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
