import React from "react";
import styles from "./Input.module.scss";
import { inputs } from "../../constants/inputs";
import { idGenerate } from "../../helpers/idGenerator";

interface IValues {
  id: string;
  title: string;
  author: string;
  isbn: number | null;
  category: string;
}

export const Input = () => {
  const [focused, setFocused] = React.useState<string | boolean>(false);
  const [values, setValues] = React.useState<IValues>({
    id: idGenerate(),
    title: "",
    author: "",
    isbn: null,
    category: "horror",
  });

  const handleFocused = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({
      ...values,
      category: e.target.value,
    });
  };
  

  return (
    <div className={styles.container}>
      <form>
        {inputs.map((input) => (
          <>
            <label htmlFor="">{input.label}</label>
            <input
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              required={input.required}
              onChange={handleChange}
              onBlur={handleFocused}
              data-focused={focused.toString()}
            />
            <span className={styles.errorMsg}>{input.errorMsg}</span>
          </>
        ))}
        <div className={styles.select}>
          <span>Set Category*</span>
          <select onChange={selectChange}>
            <option value="Horror">Horror</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Detective">Detective</option>
            <option value="Science fiction">Science fiction</option>
          </select>
        </div>
        <button>Add a Book</button>
      </form>
    </div>
  );
};
