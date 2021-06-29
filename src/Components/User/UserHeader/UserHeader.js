import React, { useContext, useState } from 'react';
import styles from './UserHeader.module.css';
import Title from '../../UI/Title/Title';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../../../Assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../../Assets/estatisticas.svg';
import { ReactComponent as PostIcon } from '../../../Assets/adicionar.svg';
import { ReactComponent as ExitIcon } from '../../../Assets/sair.svg';
import { UseContext } from '../../../Hooks/useStorage';

const UserHeader = ({ pageTitle }) => {
  const [mobile, setMobile] = useState(false);
  const { handleLogOut } = useContext(UseContext);

  return (
    <div className={styles.container}>
      <Title>{pageTitle}</Title>
      <button
        className={[styles.mobileNavButton, mobile && styles.mobileNavButtonActive].join(' ')}
        onClick={() => setMobile(!mobile)}
      ></button>

      <nav className={[styles.profileNav, mobile && styles.showMobileNav].join(' ')}>
        <NavLink
          to={'/conta'}
          end
          className={mobile ? styles.mobileNavItem : styles.navItem}
          activeClassName={!mobile && styles.navItem__active}
        >
          <UserIcon /> {mobile && 'Perfil'}
        </NavLink>
        <NavLink
          to={'/conta/estatisticas'}
          className={mobile ? styles.mobileNavItem : styles.navItem}
          activeClassName={!mobile && styles.navItem__active}
        >
          <StatsIcon /> {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink
          to={'/conta/postar'}
          className={mobile ? styles.mobileNavItem : styles.navItem}
          activeClassName={!mobile && styles.navItem__active}
        >
          <PostIcon /> {mobile && 'Postar'}
        </NavLink>
        <button onClick={handleLogOut} className={mobile ? styles.mobileNavItem : styles.navItem}>
          <ExitIcon /> {mobile && 'Sair'}
        </button>
      </nav>
    </div>
  );
};

export default UserHeader;
