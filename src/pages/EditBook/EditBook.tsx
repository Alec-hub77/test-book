import React from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import styles from "./EditBook.module.scss";
import { Inputs } from "../../components";
import { useParams } from 'react-router-dom' 

type Props = {};

export const EditBook = () => {
  const [book, setBook] = React.useState(null)
  const {id} = useParams()
  

  React.useEffect(()=> {
    fetch(`http://localhost:3001/books/${id}`)
    .then(res => res.json())
    .then(result =>setBook(result))
  }, [])


  return (
    <Inputs />
  );
};
