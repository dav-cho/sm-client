import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useUserContext } from '../../contexts/user.context';
import { postApi } from '../../utils/api.utils';

import { FormInput } from '../generics/forms/form-input.component';
import { FormTextArea } from '../generics/forms/form-textarea.component';
import { FormButton } from '../generics/forms/form-button.component';

import './styles/new-post.styles.scss';

const initialFormState = {
  title: '',
  body: '',
};

export const NewPost = () => {
  const { user } = useUserContext();
  const { push } = useHistory();
  const [formState, setFormState] = useState({
    ...initialFormState,
    author: user?.username,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    setFormState({ ...formState, [id]: value, author: user?.username });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await postApi('posts', formState);
    push('/posts');
  };

  return (
    <div className="new-post-container">
      <h2 className="new-post-title">new post</h2>
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
        <FormButton type="submit" label="POST" />
      </form>
    </div>
  );
};
