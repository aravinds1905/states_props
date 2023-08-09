import { set } from "mongoose";
import React, { useState } from "react";
import Contact from "./Contact/Contact";
import NewContact from "./NewContact/NewContact";

//here we are make use of the main things that all the libraries is capable of thst is PROPS
//It make the code not to be hard coded and let our code to be reusable everytime

const Dummy_Details = [
  {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(212) 555-1234",
    mail: "mr.whiskaz@catnap.meow",
    id: 1,
  },
  {
    img: "./images/fluffykins.png",
    name: "Fluffykins",
    phone: "(212) 555-2345",
    mail: "fluff@me.com",
    id: 2,
  },
  {
    img: "./images/felix.png",
    name: "Felix",
    phone: "(212) 555-4567",
    mail: "thecat@hotmail.com",
    id: 3,
  },
  {
    img: "./images/pumpkin.png",
    name: "Pumpkin",
    phone: "(0800) CAT KING",
    mail: "pumpkin@scrimba.com",
    id: 4,
  },
];

//in react it is good to maintain the js logics outside the return statement and it is good to maintain only the jsx code inside the return statement

//adding js variables can be done by { } in jsx code
export default function App() {
  const [Details, setDetails] = useState(Dummy_Details);

  const formSaveHandler = (details) => {
    if (
      details.img != " " ||
      details.mail != " " ||
      details.phone != " " ||
      details.name != " "
    ) {
      setDetails((prevDetail) => {
        return [details, ...prevDetail];
      });
    }
  };

  return (
    //rendering the amount
    <div>
      <h2 className="form-header">Enter your details here</h2>
      <NewContact onFormSave={formSaveHandler}></NewContact>

      <div className="contacts">
        {Details.map((detail) => (
          <Contact
            key={detail.id}
            img={detail.img}
            name={detail.name}
            phone={detail.phone}
            mail={detail.mail}
          />
        ))}
      </div>
    </div>
  );
}
