import React from "react";
import Breadcurmb from "../components/layout/Breadcurmb";
import Button from "../components/layout/Button";
import Container from "../components/layout/Container";
import InputBox from "../components/layout/InputBox";

const Contact = (props) => {
  return (
    <Container>
      <Breadcurmb />
      <div className="w-full md:w-2/4">
        <h2 className="mb-5 font-dm text-2xl font-bold md:mb-10 md:text-4xl ">
          Fill up a Form
        </h2>
        <InputBox as="input" placeholder="Your name here" title="Name" />
        <InputBox as="input" placeholder="Your email here" title="Email" />
        <InputBox
          as="textarea"
          placeholder="Your Message here"
          title="Message"
        />
        <Button title="Post" />
      </div>
    </Container>
  );
};

export default Contact;
