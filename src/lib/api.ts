export interface PostApi {
  id: number;
  title: string;
}

export interface ApiResponse {
  posts: PostApi[];
}

export const fetchPosts = async (): Promise<ApiResponse> => {
  const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data: PostApi[] = await res.json();
  return { posts: data };
};
  