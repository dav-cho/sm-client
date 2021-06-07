import './form-input.styles.scss';

type FormInputProps = {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = ({
  onChange,
  label,
  id,
  value,
  ...otherProps
}: FormInputProps) => (
  <div className="form-input-container">
    <label htmlFor={id} className="form-input-label">
      {label}:
    </label>
    <input id={id} {...otherProps} onChange={onChange} className="form-input" />
  </div>
);
