import React from "react";
import styled from "styled-components";
import "./style.css";
import { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { SignUp } from "./SignUp";
const Block = styled.div`
  width: 450px;
  height: 500px;
  background-color: black;
  position: absolute;
  top: 36%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  border-radius: 2%;
`;

function Image() {
  return (
    <img
      className="avatar"
      src={
        "https://png.pngtree.com/png-vector/20191024/ourlarge/pngtree-lock-line-icon-vector-png-image_1859174.jpg"
      }
    ></img>
  );
}
const Header = styled.h1`
  color: white;
  text-align: center;
`;
const InputEmail = styled.input`
  height: 30px;
  width: 270px;
  text-align: center;
  display: block;
  color: grey;
  margin: 0 auto;
  border-radius: 2%;
  background-color: black;
  border: solid 5px
    ${(props) => {
      if (props.value != "") {
        return props.value.includes("@") ? "green" : "red";
      }
    }};
`;
const numbers = "123456789";
let k = 0;
const InputPassword = styled.input`
  height: 30px;
  width: 270px;
  text-align: center;
  display: block;
  color: grey;
  background-color: black;
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 2%;
  border: solid 5px
    ${(props) => {
      if (props.value != "") {
        return props.value.includes(
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ) && props.value.length >= 8
          ? "green"
          : "red";
      }
    }};
`;

const CheckBox = styled.input`
  color: white;
`;

const Button = styled.button`
  width: 200px;
  height: 35px;
  display: block;
  margin: 0 auto;
  background-color: #03a5fc;
  margin-top: 1cm;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
    color: black;
    box-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
    border: 1px solid #cccccc;
    background-color: aqua;
  }
`;

const Button1 = styled.button`
  background-color: black;
  color: #03a5fc;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
    color: white;
  }
`;

const Button2 = styled.button`
  background-color: black;
  color: #03a5fc;
  margin-left: 2cm;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
    color: white;
  }
`;

function SignIn() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const handlerSignIn = () => {
    inputOne.includes("@") &&
    inputTwo.includes("1", "2", "3", "4", "5", "6", "7", "8", "9") &&
    inputTwo.length >= 8
      ? alert("Succes!")
      : alert("Input right data!");
  };
  return (
    <>
      <Block>
        <Image />
        <Header>Sign In</Header>

        <InputEmail
          value={inputOne}
          onChange={(event) => setInputOne(event.target.value)}
          type="email"
          placeholder="Email adress"
        />
        <InputPassword
          placeholder="Password"
          onChange={(event) => setInputTwo(event.target.value)}
          value={inputTwo}
          type="password"
        />
        <span>
          <CheckBox type="checkbox" name="Remember me"></CheckBox>
          Remember me
        </span>
        <Button onClick={handlerSignIn}>Sign In</Button>
        <span className="small">
          <Button1>Forgot password</Button1>

          <Link className="name" to="/signin">
            <Button2>Don't have an account?Sign Up </Button2>
          </Link>
        </span>
      </Block>
    </>
  );
}
export { SignIn };
export { Button2 };
