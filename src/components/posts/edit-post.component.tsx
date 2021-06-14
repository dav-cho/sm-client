import { useState, useEffect } from 'react';

import { putPatchApiData } from '../../utils/api.utils';

import { FormInput } from '../generics/forms/form-input.component';
import { FormButton } from '../generics/forms/form-button.component';
import { FormTextArea } from '../generics/forms/form-textarea.component';

import './styles/edit-post.styles.scss';

const initialFormState = {
  title: '',
  body: '',
};

export const EditPost = () => {
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    console.log('~ FORMSTATE', formState);
  }, [formState]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await putPatchApiData({
      endPoint: 'posts',
      method: 'patch',
      formData: formState,
    });
  };

  return (
    <div className="edit-post-container">
      <h2 className="edit-post-title">edit post</h2>
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
  );
};
