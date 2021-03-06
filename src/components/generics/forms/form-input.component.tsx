import './styles/form-input.styles.scss';

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  style?: React.CSSProperties;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  label,
  id,
  value,
  onChange,
  ...otherProps
}: FormInputProps) => (
  <div className="form-input-container">
    <label htmlFor={id} className="form-input-label">
      {label}:
    </label>
    <input
      id={id}
      value={value}
      onChange={onChange}
      className="form-input"
      {...otherProps}
    />
  </div>
);
