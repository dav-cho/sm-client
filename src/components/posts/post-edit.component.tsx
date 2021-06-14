import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Post } from '../../types/index.types';
import { getApiDetail } from '../../utils/api.utils';
import { putPatchApi } from '../../utils/api.utils';

import { FormInput } from '../generics/forms/form-input.component';
import { FormButton } from '../generics/forms/form-button.component';
import { FormTextArea } from '../generics/forms/form-textarea.component';

import './styles/post-edit.styles.scss';

const initialFormState = {
  title: '',
  body: '',
};

export const PostEdit = ({ match, user }: any) => {
  const [post, setPost] = useState<Post>();
  const [formState, setFormState] = useState(initialFormState);
  const { id } = match.params;
  const { push } = useHistory();

  const getPost = useCallback(async () => {
    const post = await getApiDetail('posts', id);

    if (!post) return;

    const { title, body } = post;
    setPost(post);
    setFormState({ title, body });
  }, [id]);

  useEffect(() => {
    if (id) getPost();
  }, [id, getPost]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const responseStatus = await putPatchApi({
      url: `posts/${post!.id}/`,
      method: 'patch',
      formData: formState,
    });
    console.log('~ responseStatus', responseStatus);

    // if (responseStatus === 403) {
    // return (
    //   <Redirect to={{ pathname: '/error', state: { type: 'access' } }} />
    // );
    // }

    push('/posts');
  };

  return post ? (
    <div className="edit-post-container">
      <h2 className="edit-post-title">edit post: {post.id}</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="title"
          id="title"
          type="text"
          value={formState.title}
          onChange={handleChange}
          style={{ width: '43em' }}
        />
        <FormTextArea
          label="post body"
          id="body"
          value={formState.body}
          onChange={handleChange}
          rows={4}
          cols={50}
          style={{ width: '43em' }}
        />
        <FormButton type="submit" label="SAVE CHANGES" />
      </form>
    </div>
  ) : (
    <>
      {/* <Redirect to={{ pathname: '/error', state: { type: 'access' } }} /> */}
    </>
  );
};
