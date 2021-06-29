import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UseStorage } from './Hooks/useStorage';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import LoginPage from './Components/Login/LoginPage/LoginPage';
import User from './Components/User/User';

import HeadTitle from './Components/UI/HeadTitle/HeadTitle';

function App() {
  return (
    <BrowserRouter>
      <UseStorage>
        <HeadTitle title={'Home'} />
        <Header />
        <main className={'mainContainer'}>
          <Routes>
            <Route path={'/'} element={<Home />}></Route>
            <Route path={'/login/*'} element={<LoginPage />}></Route>
            <Route path={'/conta/*'} element={<User />}></Route>
          </Routes>
        </main>

        <Footer />
      </UseStorage>
    </BrowserRouter>
  );
}

export default App;
