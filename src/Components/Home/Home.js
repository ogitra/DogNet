import React, { useState, useContext, useEffect } from 'react';
import styles from './Home.module.css';
import { UseContext } from '../../Hooks/useStorage';
import DogCard from './DogCard/DogCard';
import CardModal from './CardModal/CardModal';
import Loading from '../UI/Loading/Loading';
import HeadTitle from '../UI/HeadTitle/HeadTitle';

const Home = () => {
  const [photo, setPhoto] = useState(false);
  const { setModal, modal, photos, photosGet, loading, loadingModal } = useContext(UseContext);

  useEffect(() => {
    photosGet();
  }, []);

  function toggleModal(indx) {
    setModal(!modal);
    setPhoto(photos[indx]);
  }

  function closeModalOnly(evt) {
    if (evt.target === evt.currentTarget) {
      setModal(!modal);
    }
  }

  return (
    <>
      <HeadTitle title='Home ' />
      {loading && <Loading></Loading>}
      <ul className={`${styles.container} animeLeft`}>
        {photos &&
          photos.map((item, indx) => {
            return (
              <DogCard
                img={item.src}
                alt={item.id}
                key={item.id}
                counter={item.acessos}
                onClick={() => toggleModal(indx)}
              ></DogCard>
            );
          })}
      </ul>

      {modal && (
        <div className={styles.background} onClick={closeModalOnly}>
          {loadingModal && <Loading></Loading>}
          <div className={`${styles.containerModal} ${styles.fadeOut}`}>
            <CardModal photoWithId={photo}></CardModal>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
