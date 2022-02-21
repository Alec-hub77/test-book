import React from "react";
import styles from "./FormInput.module.scss";



interface InputProps {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMsg: string;
  label: string;
  required: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = (props: InputProps) => {
    const [focused, setFocused] = React.useState<string | boolean>(false)
    const {id, label, handleChange, errorMsg, ...inputProps } = props;

    const handleFocused = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true)
      }

  return (
    <div className={styles.container}>
        <label htmlFor="">{label}</label>
        <input
        {...inputProps} 
        onChange={handleChange}
        onBlur={handleFocused}
        data-focused={focused.toString()}
        />
        <span className={styles.errorMsg}>{errorMsg}</span>
    </div>
  );
};
