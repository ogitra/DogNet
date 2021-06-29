import React, { useState } from 'react';
import axios from '../Axios';
import axiosForLogin from 'axios';
import { useNavigate } from 'react-router-dom';

export const UseContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(window.localStorage.getItem('name'));
  const [loading, setLoading] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [photos, setPhotos] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState();
  const [stats, setStats] = useState();

  const navigate = useNavigate();

  function handleLogin(evt, body) {
    evt.preventDefault();
    setLoading(true);
    axiosForLogin
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDy2HzO_5nE-nxkW_VajkKm7PMr2eMMUX0',
        body
      )
      .then((r) => {
        setUser(r.data.displayName);
        setLoading(false);
        setError(null);
        window.localStorage.setItem('token', r.data.idToken);
        window.localStorage.setItem('name', r.data.displayName);
        setLoading(false);
        navigate('/conta');
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  function handleCreateUser(evt, body) {
    evt.preventDefault();
    setLoading(true);
    axiosForLogin
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDy2HzO_5nE-nxkW_VajkKm7PMr2eMMUX0',
        body
      )
      .then((r) => {
        setError(null);
        setLoading(false);
        handleLogin(evt, body);
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  function handleLogOut() {
    window.localStorage.clear();
    setUser(null);
    setError(null);
    setLoading(false);
    navigate('/login');
  }

  function photosGet() {
    setLoading(true);
    let dataFromApi = [];

    fetch(`https://dognet-233d6-default-rtdb.firebaseio.com/data.json`, {
      cache: 'no-store',
    })
      .then((r) => {
        return r.json();
      })
      .then((json) => {
        for (const key in json) {
          const dataItem = {
            id: key,
            acessos: Math.floor(Math.random() * (1000 - 1) + 1),
            ...json[key],
          };
          dataFromApi.push(dataItem);
        }
        setLoading(false);
        setPhotos(dataFromApi);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  function photoGetById(id) {
    setLoadingModal(true);

    fetch(`https://dognet-233d6-default-rtdb.firebaseio.com/data/${id}.json`, {
      cache: 'no-store',
    })
      .then((r) => {
        return r.json();
      })
      .then((json) => {
        setPhoto({ ...json, id: id });
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function commentPost(id, body) {
    axios.put(`/data/${id}.json`, body).then(photoGetById(id)).then(setModal(!modal));
  }

  function commentsGet(id) {
    axios.get(`/api/comments/${id}`).then((r) => {});
  }

  function statsGet(token) {
    setLoading(true);
    setError(null);

    axios
      .get('api/stats', { headers: { Authorization: 'Bearer ' + token } })
      .then((r) => {
        setStats(r);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  function cleanError() {
    setError(null);
  }

  return (
    <UseContext.Provider
      value={{
        modal,
        setModal,
        user,
        handleLogin,
        handleLogOut,
        loading,
        loadingModal,
        setLoading,
        setError,
        error,
        handleCreateUser,
        photosGet,
        photoGetById,
        photos,
        photo,
        commentPost,
        commentsGet,
        statsGet,
        stats,
        cleanError,
      }}
    >
      {children}
    </UseContext.Provider>
  );
};
