// interface FormButtonProps {
type FormButtonProps = {
  label: string;
  type?: 'button' | 'submit';
};
export const FormButton = ({ label, ...otherProps }: FormButtonProps) => (
  <button {...otherProps}>{label}</button>
);
