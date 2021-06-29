import React, { useState } from 'react';
import styles from './Post.module.css';
import { UseContext } from '../../../Hooks/useStorage';
import Input from '../../UI/Input/Input';
import UserHeader from '../UserHeader/UserHeader';
import useForm from '../../../Hooks/useForm';
import Button from '../../UI/Button/Button';
import Error from '../../UI/Error/Error';
import HeadTitle from '../../UI/HeadTitle/HeadTitle';
import { storage } from '../../../Firebase';
import axios from '../../../Axios';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const [photoToPreview, setPhotoToPreview] = useState();
  const [photoToBody, setPhotoToBody] = useState();

  const { loading, error, setError, setLoading } = React.useContext(UseContext);
  const useName = useForm('newPost_Name');
  const useWeight = useForm('newPost_Weight');
  const useAge = useForm('newPost_Age');

  const navigate = useNavigate();

  function handleImg({ target }) {
    setPhotoToPreview(URL.createObjectURL(target.files[0]));
    setPhotoToBody(target.files[0]);
  }

  const loggedUser = window.localStorage.getItem('name');

  const bodyToFetch = {
    author: loggedUser,
    src: '',
    name: useName.value,
    peso: useWeight.value,
    idade: useAge.value,
    comments: [],
  };

  function photoPostToAPI(evt) {
    evt.preventDefault();
    let nameAvoidDuplicate = Math.random() + photoToBody.name;
    const uploadFireBase = storage.ref(`image/${nameAvoidDuplicate}`).put(photoToBody);
    uploadFireBase.on(
      'state_changed',
      (snapshot) => {},
      (error) => {},
      () => {
        storage
          .ref('image')
          .child(nameAvoidDuplicate)
          .getDownloadURL()
          .then((url) => {
            completePostToAPI({ ...bodyToFetch, src: url });
          });
      }
    );
  }

  function completePostToAPI(body) {
    setLoading(true);
    axios
      .post('/data.json', body)
      .then(() => {
        setError(null);
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  return (
    <>
      <HeadTitle title='Novo Post ' />
      <UserHeader pageTitle={'Postar'} />

      <div className={styles.container}>
        <form onSubmit={(evt) => photoPostToAPI(evt)}>
          <Input label={'Nome'} {...useName}></Input>
          <Input label={'Peso'} {...useWeight}></Input>
          <Input label={'Idade'} {...useAge}></Input>
          <input type='file' onChange={handleImg}></input>
          {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
          {error && <Error>{error}</Error>}
        </form>
        {photoToPreview && <div className={styles.preview} style={{ backgroundImage: `url(${photoToPreview})` }}></div>}
      </div>
    </>
  );
};

export default Post;
