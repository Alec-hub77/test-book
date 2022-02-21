import React from "react";
import styles from "./Input.module.scss";
import { inputs } from '../../constants/inputs'

export const Input = () => {
  return (
    <div className={styles.container}>
      <form >
        {inputs.map((input) => (
          <input key={input.id}/>
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
