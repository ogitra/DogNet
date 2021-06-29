import React, { useEffect, useContext } from 'react';
import { UseContext } from '../../../Hooks/useStorage';
import styles from './CardModal.module.css';
import Title from '../../UI/Title/Title';
import Loading from '../../UI/Loading/Loading';
import { ReactComponent as ViewsLogo } from '../../../Assets/visualizacao-black.svg';
import Comments from '../CardModal/Comments/Comments';

const CardModal = ({ photoWithId, photoSingle }) => {
  const { photoGetById, photo } = useContext(UseContext);

  useEffect(() => {
    photoGetById(photoWithId.id);
  }, []);

  return (
    <>
      {!photo ? (
        <Loading></Loading>
      ) : (
        <>
          <img alt='dog' className={photoSingle ? styles.photoSingle : styles.photo} src={photo.src} />
          <div className={styles.containerRight}>
            <div className={!photoSingle && styles.info}>
              <div className={styles.infoNameAccess}>
                @{photo.author}
                <div className={styles.infoLogoAccess}>
                  <ViewsLogo></ViewsLogo>
                  <p>{photoWithId.acessos}</p>
                </div>
              </div>

              <Title>{photo.name}</Title>

              <div className={styles.weightAge}>
                <p>| {photo.peso} kg</p>
                <p>| {photo.idade} anos</p>
              </div>
            </div>

            <Comments comments={photo.comments} photo={photo}></Comments>
          </div>
        </>
      )}
    </>
  );
};

export default CardModal;
