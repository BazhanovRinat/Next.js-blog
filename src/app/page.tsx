"use client";

import Image from "next/image";
import styles from "../app/page.module.scss";
import Link from 'next/link';
import { fetchPosts, ApiResponse } from '../lib/api';
import { useEffect, useState } from 'react';


export default function Home() {
  const [data, setData] = useState<ApiResponse>({ posts: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setData(data);
      } catch (error) {
        setError('Не удалось получить посты');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}></h1>
      <div className={styles.postsList}>
        {data.posts && data.posts.length > 0 ? (
          data.posts.map((post) => (
            <Link className={styles.link} key={post.id} href={`/posts/${post.id}`}>
              <div className={styles.post}>
                <h2 className={styles.post_title}>{post.title}</h2>
              </div>
            </Link>
          ))
        ) : (
          <p>Постов нет</p>
        )}
      </div>
    </div>
  );
}
