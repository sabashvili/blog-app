import classes from "./Input.module.css";

const Input = ({ labelTaxt, inputType, validationList, placeholder }) => {
  return (
    <div>
      <label className={classes["blog-form-label"]}>{labelTaxt}</label>
      <input
        className={classes["blog-form-text-input"]}
        type={inputType}
        placeholder={placeholder}
      />
      <ul className={classes["valid-text-list"]}>
        {validationList.map((cur) => {
          return <li>{cur}</li>;
        })}
      </ul>
    </div>
  );
};

export default Input;
