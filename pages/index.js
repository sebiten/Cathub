import { useState } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import SectionBreeds from "../components/SectionBreeds";
import useDogs from "../hooks/useDogs";

export default function Home() {
  const { search, setSearch, searched, handleSubmit, results, fetchBreeds } =
    useDogs();
  return (
    <div>
      <div>
        <Navbar />
        <Form />
      </div>
      {searched ? <Search /> : <SectionBreeds />}
    </div>
  );
}
