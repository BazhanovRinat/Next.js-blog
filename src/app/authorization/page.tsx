"use client"

import React, { useState } from 'react';
import UserDataForm from '../../components/userDataForm/userDataForm';
import { useRouter } from 'next/navigation';
import styles from './authorization.module.scss';

export default function Authorization() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const authorizationSubmit = async (username: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();

      if (!Array.isArray(users) || users.length === 0) {
        throw new Error('Users data is empty or not an array');
      }

      const user = users.find(
        (user: { username: string; password: string }) => user.username === username && user.password === password
      );

      if (user) {
        router.push('/');
      } else {
        console.log('Неправильный логин или пароль');
      }
    } catch (error) {
      console.log('Проблема с данными');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className={styles.title}>Авторизация</h2>
      <UserDataForm formSubmit={authorizationSubmit} />
      {loading && <p>Загрузка...</p>}
    </div>
  );
}

// "use client";

// import UserDataForm from "../../components/userDataForm"
// import { useRouter } from 'next/navigation';

// export default function Authorization() {
//   const router = useRouter();

//   const authorizationSubmit = async (username: string, password: string) => {
//     try {
//       const response = await fetch('/api/auth', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data.message);
//         router.push('/');
//       } else {
//         const errorData = await response.json();
//         console.error(errorData.message);
//       }
//     } catch (error) {
//       console.error('Error during authorization:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Authorization</h2>
//       <UserDataForm formSubmit={authorizationSubmit} />
//     </div>
//   );
// }