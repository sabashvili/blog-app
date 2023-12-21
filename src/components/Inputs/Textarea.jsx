import React from "react";
import classes from "./Textarea.module.css";

const Textarea = ({ labelTaxt, validationList, placeholder }) => {
  return (
    <div className={classes["blog-form-textarea-container"]}>
      <label className={classes["blog-form-label"]}>{labelTaxt}</label>
      <textarea
        placeholder={placeholder}
        className={classes["blog-form-textarea"]}
      />
      <ul className={classes["valid-text-list"]}>
        <li>
          {validationList.map((cur) => {
            return <li>{cur}</li>;
          })}
        </li>
      </ul>
    </div>
  );
};

export default Textarea;
