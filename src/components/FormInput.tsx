import "./formInput.css";

export default function FormInput(props) {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div className="formInput">
      <label>{label}:&emsp;</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
}
