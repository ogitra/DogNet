import React from 'react';
import styles from './User.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UseContext } from '../../Hooks/useStorage';
import Account from './Account/Account';
import Stats from './Stats/Stats';
import Post from './Post/Post';

const User = () => {
  const { user } = React.useContext(UseContext);
  if (!user) {
    return <Navigate to='/login'></Navigate>;
  }

  return (
    <div className={styles.container}>
      <Routes>
        <Route path={'/*'} element={<Account user={user}></Account>}></Route>
        <Route path={'/estatisticas/*'} element={<Stats />}></Route>
        <Route path={'/postar'} element={<Post />}></Route>
      </Routes>
    </div>
  );
};

export default User;
