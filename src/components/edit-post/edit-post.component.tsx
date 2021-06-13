import { useState } from 'react';

import { FormInput } from '../form-input/form-input.component';
import { FormButton } from '../form-button/form-button.component';

import './edit-post.styles.scss';

const initialFormState = {
  title: '',
  body: '',
};

export const EditPost = () => {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Title"
        id="title"
        type="text"
        value={formState.title}
        onChange={handleChange}
      />
      <FormButton type="submit" label="SAVE CHANGES" />
    </form>
  );
};
