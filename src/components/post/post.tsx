"use client"

import React from 'react';
import styles from "./post.module.scss";
import Link from 'next/link';
import { useEffect } from 'react';

interface PostProps {
  numberPost: number;
  title: string;
  content: string;
  maxPosts: number;
}

const Post: React.FC<PostProps> = ({ title, content, numberPost, maxPosts }) => {
  useEffect(() => {
    console.log(numberPost)
  }, []);
  return (
    <div className={styles.post}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{content}</p>
      <div className={styles.pagination}>
        {numberPost > 1 ? (
          <Link className={styles.link} href={`/posts/${numberPost - 1}`}>
            <p>Назад</p>
          </Link>
        ) : (
          <p className={styles.pagination_text}></p>
        )}
        <p className={styles.pagination_text}>Номер поста: {numberPost}</p>
        {numberPost < maxPosts ? (
          <Link className={styles.link} href={`/posts/${numberPost + 1}`}>
            <p className={styles.pagination_text}>Вперед</p>
          </Link>
        ) : (
          <p className={styles.pagination_text}></p>
        )}
      </div>
    </div>
  );
};

export default Post;
