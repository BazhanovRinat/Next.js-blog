"use client";

import React, { useState } from 'react';
import styles from './userDataForm.module.scss';

const UserDataForm: React.FC<{ formSubmit: (username: string, password: string) => void }> = ({ formSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);

    formSubmit(username, password);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.lable} htmlFor="username">Логин:</label>
      <input className={styles.input} type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <span></span>
      <label className={styles.lable} htmlFor="password">Пароль:</label>
      <input className={styles.input} type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <span></span>
      <button className={styles.submitButton}type="submit">Подтвердить</button>
    </form>
  );
};

export default UserDataForm;