import React from 'react';
import styles from './DogCard.module.css';
import { ReactComponent as ViewsLogo } from '../../../Assets/visualizacao.svg';

const DogCard = ({ img, counter, onClick }) => {
  return (
    <>
      <li className={styles.container} onClick={onClick}>
        <img className={styles.photo} src={img} alt={img}></img>
        <div className={styles.containerCounter}>
          <ViewsLogo />
          {counter}
        </div>
      </li>
    </>
  );
};

export default DogCard;
