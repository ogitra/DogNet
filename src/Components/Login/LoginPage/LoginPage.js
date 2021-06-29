import React from 'react';
import styles from './LoginPage.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UseContext } from '../../../Hooks/useStorage';
import LoginForm from '../LoginForm/LoginForm';
import CreateUser from '../CreateUser/CreateUser';
import LoginPasswordLost from '../LoginPasswordLost/LoginPasswordLost';
import HeadTitle from '../../UI/HeadTitle/HeadTitle';

const LoginPage = () => {
  const { user } = React.useContext(UseContext);

  if (user) {
    return <Navigate to='/conta'></Navigate>;
  }

  return (
    <section className={styles.container}>
      <HeadTitle title='Login ' />
      <div className={styles.imgContainer}></div>
      <div className={[styles.contentContainer, 'animeLeft'].join(' ')}>
        <Routes>
          <Route path={'/'} element={<LoginForm />}></Route>
          <Route path={'/cadastro'} element={<CreateUser />}></Route>
          <Route path={'/perdeu'} element={<LoginPasswordLost />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default LoginPage;
