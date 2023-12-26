import classes from "./Input.module.css";
import EmailErrorMessage from "../ErrorMessages/EmailErrorMessage";

const Input = ({
  name,
  fullLineClass,
  labelTaxt,
  inputType,
  validationList,
  placeholder,
  onChange,
  validationData,
}) => {
  const validListUpdateClass = (index, name) => {
    if (index === 0) {
      if (validationData[`${name}Validation`][index] === true) {
        return "valid";
      } else if (validationData[`${name}Validation`][index] === false) {
        return "invalid";
      }
    }

    if (index === 1) {
      if (validationData[`${name}Validation`][index] === true) {
        return "valid";
      } else if (validationData[`${name}Validation`][index] === false) {
        return "invalid";
      }
    }

    if (index === 2) {
      if (validationData[`${name}Validation`][index] === true) {
        return "valid";
      } else if (validationData[`${name}Validation`][index] === false) {
        return "invalid";
      }
    }
  };

  const validInputUpdateClass = (name) => {
    if (validationData[`${name}Validation`].every((cur) => cur === true)) {
      return "validBackground";
    } else if (
      validationData[`${name}Validation`].every((cur) => cur === false)
    ) {
      return "invalidBackground";
    }
  };

  const isEmailValid = () => {
    if (validationData.authorEmailValidation[0] === false) {
      console.log("first");
      return (
        <EmailErrorMessage message="მეილი უნდა მთავრდებოდეს @redberry.ge-ით" />
      );
    } else return true;
  };

  return (
    <div className={classes?.[fullLineClass]}>
      <label className={classes["blog-form-label"]}>{labelTaxt}</label>
      <input
        className={`${classes["blog-form-text-input"]} ${
          classes[validInputUpdateClass(name)]
        }`}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
      {name === "authorEmail" ? isEmailValid() : ""}
      <ul className={classes["valid-text-list"]}>
        {validationList.map((cur, index) => {
          return (
            <li
              className={classes[validListUpdateClass(index, name)]}
              key={index}
            >
              {cur}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Input;
