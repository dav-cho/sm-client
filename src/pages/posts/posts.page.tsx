import { useEffect, useState } from 'react';

import { Post } from '../../types/index.types';
import { getApiData } from '../../utils/api.utils';

import { NewPost } from '../../components/new-post/new-post.component';
import { PostList } from '../../components/post-list/post-list.component';
import { CardList } from '../../components/card-list/card-list.component';

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const postsList = await getApiData('posts');
    console.log('~ postsList', postsList);

    if (postsList) setPosts(postsList);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <NewPost />
      <PostList postsList={posts} />
      <CardList listData={posts} properties={['author', 'title', 'body']} />
    </>
  );
};

export default PostsPage;
