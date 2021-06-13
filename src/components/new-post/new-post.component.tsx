import { useState, useEffect } from 'react';

import { useUserContext } from '../../contexts/user.context';
import { postApiData } from '../../utils/api.utils';

import { FormInput } from '../form-input/form-input.component';
import { FormTextArea } from '../form-textarea/form-textarea.component';
import { FormButton } from '../form-button/form-button.component';

import './new-post.styles.scss';

const initialFormState = {
  title: '',
  body: '',
};

export const NewPost = () => {
  const { user } = useUserContext();
  const [formState, setFormState] = useState({
    ...initialFormState,
    // author: user?.username,
    author: user?.username,
  });

  useEffect(() => {
    console.log('~ FORMSTATE', formState);
  }, [formState]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    setFormState({ ...formState, [id]: value, author: user?.username });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await postApiData('posts', formState);
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
