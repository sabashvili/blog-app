import classes from "./Input.module.css";

const Input = ({ name, fullLineClass, labelTaxt, inputType, validationList, placeholder, onChange }) => {
  return (
    <div className={classes?.[fullLineClass]}>
      <label className={classes["blog-form-label"]}>{labelTaxt}</label>
      <input
        className={`${classes["blog-form-text-input"]} `}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
      <ul className={classes["valid-text-list"]}>
        {validationList.map((cur, index) => {
          return <li key={index}>{cur}</li>;
        })}
      </ul>
    </div>
  );
};

export default Input;
