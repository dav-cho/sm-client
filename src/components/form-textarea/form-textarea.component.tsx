import './form-textarea.styles.scss';

type FormTextAreaProps = {
  label: string;
  id: string;
  value: string;
  rows?: number;
  cols?: number;
  style?: React.CSSProperties;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const FormTextArea = ({
  label,
  id,
  value,
  onChange,
  ...otherProps
}: FormTextAreaProps) => (
  <div className="form-textarea-container">
    <label htmlFor={id} className="form-textarea-label">
      {label}:
    </label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      className="form-textarea"
      {...otherProps}
    />
  </div>
);
