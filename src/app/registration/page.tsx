"use client"

import UserDataForm from "../../components/userDataForm/userDataForm"
import { useRouter } from 'next/navigation';
import styles from './registration.module.scss';

export default function registration() {
    const router = useRouter();

    const registrationSubmit = () => {
        router.push('/authorization');
    };

    return (
        <div>
            <h2 className={styles.title}>Регистрация</h2>
            <UserDataForm formSubmit={registrationSubmit} />
        </div>
    );
}