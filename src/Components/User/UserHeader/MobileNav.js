import React from 'react';
import styles from './MobileNav.module.css';

const MobileNav = () => {
  return (
    <nav className={styles.profileNavMobile}>
      <NavLink to={'/conta'}>
        <UserIcon />
      </NavLink>
      <NavLink to={'/conta/estatisticas'}>
        <StatsIcon />
      </NavLink>
      <NavLink to={'/conta/postar'}>
        <PostIcon />
      </NavLink>
      <button onClick={handleLogOut}>
        <ExitIcon />
      </button>
    </nav>
  );
};

export default MobileNav;
