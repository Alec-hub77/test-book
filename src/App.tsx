import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Dashboard, EditBook, AddBook } from "./pages";
import { Header } from "./components";
import { Input } from "./components/Input/Input";


const App: React.FC = () => {

  React.useEffect(() => {
    
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/edit/:id" element={<EditBook/>} />
          <Route path="/add-book" element={<AddBook/>} />
          <Route path="/input" element={<Input/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
