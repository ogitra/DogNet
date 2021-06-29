import React from 'react';
import styles from './Loading.module.css';
import { ReactComponent as Bone } from '../../../Assets/carregando.svg';

const Loading = () => {
  return (
    <div className={styles.loader}>
      <Bone></Bone>
    </div>
  );
};

export default Loading;
