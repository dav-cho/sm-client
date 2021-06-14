import { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

import { Post } from '../../types/index.types';
import { useUserContext } from '../../contexts/user.context';
import { getApiList } from '../../utils/api.utils';

import { PostList } from '../../components/posts/post-list.component';
import { PostDetail } from '../../components/posts/post-detail.component';
import { NewPost } from '../../components/posts/new-post.component';
import { PostEdit } from '../../components/posts/post-edit.component';

import './posts.styles.scss';

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { push } = useHistory();
  const { user } = useUserContext();

  const getPosts = async () => {
    const postsList = await getApiList('posts');

    if (postsList) setPosts(postsList);
  };

  useEffect(() => {
    getPosts();
  }, [user]);

  const handleNewPostClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    push('/posts/new');
  };

  return (
    <>
      <button onClick={handleNewPostClick} className="new-post-button">
        NEW POST
      </button>
      <Route
        exact
        path="/posts"
        render={() => <PostList postsList={posts} />}
      />
      <Route path="/posts/new" component={NewPost} />
      <Route
        exact
        path="/posts/:id"
        render={({ match }) => <PostDetail match={match} />}
      />
      <Route
        path="/posts/:id/edit"
        render={({ match }) => <PostEdit match={match} user={user} />}
      />
    </>
  );
};

export default PostsPage;
