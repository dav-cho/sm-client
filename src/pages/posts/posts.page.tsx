import { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

import { Post } from '../../types/index.types';
import { useUserContext } from '../../contexts/user.context';
import { getApiData } from '../../utils/api.utils';

import { NewPost } from '../../components/posts/new-post.component';
import { PostDetail } from '../../components/posts/post-detail.component';
import { EditPost } from '../../components/posts/edit-post.component';
import { PostList } from '../../components/posts/post-list.component';

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { push } = useHistory();
  const { user } = useUserContext();

  const getPosts = async () => {
    const postsList = await getApiData('posts');
    console.log('~ postsList', postsList);

    if (postsList) setPosts(postsList);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleNewPostClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    push('/posts/new');
  };

  return (
    <>
      {/* <NewPost /> */}
      {/* <Link to="/posts/new">NEW POST</Link> */}
      <button onClick={handleNewPostClick}>NEW POST</button>
      {/* <Route exact path="/posts" component={PostList} /> */}
      <Route path="/posts/:id" component={PostDetail} />
      <Route path="/posts/:id/edit" component={EditPost} />
      <Route path="/posts/new" component={NewPost} />
      <PostList postsList={posts} />
    </>
  );
};

export default PostsPage;
