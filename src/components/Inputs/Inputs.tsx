import React, { useReducer } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import { idGenerate } from "../../helpers/idGenerator";
// import styles from "./AddBook.module.scss";
import { inputs } from "../../constants/inputs";
import { ADD_BOOK } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface IValues {
  id: string;
  title: string;
  author: string;
  isbn: number | null;
  category: string;
}

export const AddBook = () => {
  const [values, setValues] = React.useState<IValues>({
    id: idGenerate(),
    title: "",
    author: "",
    isbn: null,
    category: "horror",
  });


  const navigate = useNavigate();

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
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} handleChange={handleChange} />
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
