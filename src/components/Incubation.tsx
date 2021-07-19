import React from 'react';
import styles from './Incubation.module.css';
import IncubatorLogo from '../../static/img/incubator-logo.png';

const Incubation = (): JSX.Element => (
  <div className="container container--fluid">
    <img
      src={IncubatorLogo}
      alt="Apache Incubator Logo"
      width="318px"
    />

    <p
      className={styles.subtitle}
    >
      Apache EventMesh is an effort undergoing incubation at The Apache Software Foundation (ASF),
      sponsored by the Apache Incubator. Incubation is required of all newly accepted projects
      until a further review indicates that the infrastructure, communications, and decision making
      process have stabilized in a manner consistent with other successful ASF projects.
      While incubation status is not necessarily a reflection of the completeness or stability of
      the code, it does indicate that the project has yet to be fully endorsed by the ASF.
    </p>
  </div>
);

export default Incubation;
