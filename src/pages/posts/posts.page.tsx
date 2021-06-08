import { useEffect, useState } from 'react';

import { Post } from '../../types/api.types';
import { fetchApiData } from '../../utils/api.utils';

import { CardList } from '../../components/card-list/card-list.component';

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchApiData('posts').then(data => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      <h2>posts page</h2>
      <CardList listData={posts} properties={['author', 'title', 'body']} />
    </>
  );
};

export default PostsPage;
