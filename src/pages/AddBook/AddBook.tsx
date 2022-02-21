import React, { useReducer } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import { idGenerate } from "../../helpers/idGenerator";
import styles from "./AddBook.module.scss";
import { inputs } from "../../constants/inputs";
import { ADD_BOOK } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { Inputs } from "../../components/Inputs/Inputs";

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

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: ADD_BOOK,
  //     payload: values,
  //   });
  //   navigate("/");
  // };

  return (
    // <div className={styles.container}>
    //   <form onSubmit={handleSubmit}>
    //     {inputs.map((input) => (
    //       <FormInput key={input.id} {...input} handleChange={handleChange} />
    //     ))}
    //     <div className={styles.select}>
    //       <span>Set Category*</span>
    //       <select onChange={selectChange}>
    //         <option value="Horror">Horror</option>
    //         <option value="Fantasy">Fantasy</option>
    //         <option value="Detective">Detective</option>
    //         <option value="Science fiction">Science fiction</option>
    //       </select>
    //     </div>
    //     <button>Add a Book</button>
    //   </form>
    // </div>
    <Inputs />
  );
};

{
  /* <Select
labelId="demo-simple-select-label"
id="demo-simple-select"
label="Set Category"
onChange={selectChange}
value={cat}
>
<MenuItem value={'Horror'}>Horror</MenuItem>
<MenuItem value={'Fantasy'}>Fantasy</MenuItem>
<MenuItem value={'Detective'}>Detective</MenuItem>
<MenuItem value={'Science fiction'}>Science fiction</MenuItem>
</Select> */
}

// const selectChange = (event: SelectChangeEvent) => {
//   // setValues({...values, event.target.value as string});
//   console.log(event.target.value)
//   setCat(event.target.value as string)
// };
