import React, { useContext } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { UseContext } from '../../Hooks/useStorage';
import { ReactComponent as LogoDogs } from '../../Assets/dogs.svg';
import { ReactComponent as User } from '../../Assets/usuario.svg';

const Header = () => {
  const { user } = useContext(UseContext);

  return (
    <header>
      <nav className={styles.headerNav}>
        <Link to='/'>
          <LogoDogs />
        </Link>
        {user ? (
          <Link to='/conta'>{user} </Link>
        ) : (
          <Link to='/login'>
            Login | Criar <User></User>{' '}
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
