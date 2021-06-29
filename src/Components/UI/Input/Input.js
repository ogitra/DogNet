import React from 'react';
import styles from './Input.module.css';

const Input = ({ id, label, type, error, onBlur, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <input id={id} type={type} className={styles.input} onBlur={onBlur} placeholder={placeholder}></input>
      {error && <p className={styles.inputError}>{error}</p>}
    </div>
  );
};

export default Input;
