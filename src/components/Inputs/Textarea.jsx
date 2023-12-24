import React from "react";
import classes from "./Textarea.module.css";

const Textarea = ({ labelTaxt, validationList, placeholder, name, onChange }) => {
  return (
    <div className={classes["blog-form-textarea-container"]}>
      <label className={classes["blog-form-label"]}>{labelTaxt}</label>
      <textarea
        placeholder={placeholder}
        className={classes["blog-form-textarea"]}
        name={name}
        onChange={onChange}
      />
      <ul className={classes["valid-text-list"]}>
        {validationList.map((cur, index) => (
          <li key={index}>{cur}</li>
        ))}
      </ul>
    </div>
  );
};

export default Textarea;
