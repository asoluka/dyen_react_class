export const Input = ({
  type,
  placeholder,
  labelTxt,
  name,
  onChange,
  value,
}) => {
  return (
    <>
      <label htmlFor={name}>{labelTxt}</label>
      <input
        onChange={onChange}
        value={value}
        id={name}
        type={type}
        placeholder={placeholder}
        style={{ marginBottom: "8px", fontSize: "12px", padding: "6px" }}
      />
    </>
  );
};
