import React from "react";
import { Field } from "redux-form";
import style from "./FormsControls.module.css";
const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={style.formControl + "" + (hasError ? style.error : "")}>
      <div>{children}</div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const CreateField = (
  placeholder,
  name,
  validators,
  component,
  props,
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        validate={validators}
        component={component}
        name={name}
        {...props}
      />
      {text}
    </div>
  );
};
