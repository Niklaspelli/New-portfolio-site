const TextareaField = (props) => {
  const { handleChange, label, name, value } = props;
  return (
    <section>
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={handleChange}
        name={name}
        cols="45"
        rows="10"
        value={value}
        style={{ color: "orange" }}
      >
        Your message
      </textarea>
    </section>
  );
};

export default TextareaField;
