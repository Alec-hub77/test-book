import React, { useReducer } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import { idGenerate } from "../../helpers/idGenerator";
import styles from "./Inputs.module.scss";
import { inputs } from "../../constants/inputs";
import { useNavigate } from "react-router-dom";

interface IValues {
  id: string;
  title: string;
  author: string;
  isbn: number | null;
  category: string;
}

export const Inputs = () => {
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

//   const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setValues({
//       ...values,
//       category: e.target.value,
//     });
//   };


  return (
    <div className={styles.container}>
      <form >
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} handleChange={handleChange} />
        ))}
        <div className={styles.select}>
          <span>Set Category*</span>
          <select >
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
