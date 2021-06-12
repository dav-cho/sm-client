import { useState, useEffect } from 'react';

import { useUserContext } from '../../contexts/user.context';

import { FormInput } from '../form-input/form-input.component';
import { FormTextArea } from '../form-textarea/form-textarea.component';
import { FormButton } from '../form-button/form-button';

import './new-post.styles.scss';

const initialFormState = {
  title: '',
  body: '',
  // published: '',
  // author: '',
};

export const NewPost = () => {
  const { user } = useUserContext();
  const [formState, setFormState] = useState({
    ...initialFormState,
    // author: user.id,
    // author: user!.id,
    author: user ? user.id : '',
  });

  useEffect(() => {
    console.log('~ formState', formState);
  }, [formState]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        />
        <FormTextArea
          label="post body"
          id="body"
          value={formState.body}
          onChange={handleChange}
          rows={6}
          cols={40}
        />
        <FormButton type="submit" label="POST" />
      </form>
    </div>
  );
};
