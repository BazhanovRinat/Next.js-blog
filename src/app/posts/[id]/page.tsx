import { fetchPosts } from '../../../lib/api';
import Post from '../../../components/post/post';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostPageProps {
  params: { id: string };
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const { posts } = await fetchPosts();
  const post = posts.find((p) => p.id === parseInt(params.id, 10));

  if (!post) {
    return <div>Посты не найдены</div>;
  }

  return (
    <Post
      title={post.title}
      content={post.title}
      numberPost={post.id}
      maxPosts={posts.length}
    />
  );
};

export const generateStaticParams = async () => {
  const { posts } = await fetchPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
};

export default PostPage;