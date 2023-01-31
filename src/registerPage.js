import React, { useState } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
   
    const loginData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
    };
    //this using without axios
    // const url = `http://localhost:8000/studentInfo`;
    // console.log(loginData);
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(loginData),
    // }).then((res) => console.log("database Connected", res));

    //post data using axios
    Axios.post("http://localhost:8000/studentInfo", loginData)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
      window.location.reload()
  };

  return (
    <form
      className="container mt-3"
      style={{ alignItems: "center" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input placeholder="name" {...register("name")} />
      <br />
      <br />
      <input placeholder="name@gmail.com" {...register("email")} />
      <br />
      <br />
      <input placeholder="Phone" {...register("phone")} />
      <br />
      <br />
      <input placeholder="Address" {...register("address")} />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default RegisterPage;
