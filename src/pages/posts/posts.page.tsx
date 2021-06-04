import { useEffect, useState } from 'react';

import { Post } from '../../models/api.models';
import { fetchPosts } from '../../utils/api.utils';

import { CardList } from '../../components/card-list/card-list.component';

export const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then(data => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      <h2>posts page</h2>
      <CardList data={posts} />
    </>
  );
};
