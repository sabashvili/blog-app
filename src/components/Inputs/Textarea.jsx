import React from "react";
import classes from "./Textarea.module.css";

const Textarea = ({
  labelTaxt,
  validationList,
  placeholder,
  name,
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
  return (
    <div className={classes["blog-form-textarea-container"]}>
      <label className={classes["blog-form-label"]}>{labelTaxt}</label>
      <textarea
        placeholder={placeholder}
        className={`${classes["blog-form-textarea"]} ${
          classes[validInputUpdateClass(name)]
        }`}
        name={name}
        onChange={onChange}
      />
      <ul className={classes["valid-text-list"]}>
        {validationList.map((cur, index) => (
          <li
            className={classes[validListUpdateClass(index, name)]}
            key={index}
          >
            {cur}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Textarea;
