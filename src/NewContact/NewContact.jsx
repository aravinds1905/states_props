import React, { useState } from "react";
import "./NewContact.css";

const NewContact = (props) => {
  const [enterdName, setName] = useState(" ");
  const [enterdMail, setMail] = useState(" ");
  const [enterdPhone, setPhone] = useState(" ");
  const [enterImgUrl, setImgUrl] = useState(" ");
  const [EditingContact, setEditingContact] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const contactSubmitHandler = (event) => {
    event.preventDefault();

    if (
      enterdName.trim().length == 0 ||
      enterImgUrl.trim().length == 0 ||
      enterdMail.trim().length == 0 ||
      enterdPhone.trim().length == 0
    ) {
      setIsValid(false);
      setEditingContact(true);
    } else {
      const contactDetails = {
        key: Math.random(),
        name: enterdName,
        mail: enterdMail,
        phone: enterdPhone,
        img: enterImgUrl,
      };

      props.onFormSave(contactDetails);
      setName(" ");
      setImgUrl(" ");
      setMail(" ");
      setPhone(" ");
      setEditingContact(false);
    }
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const mailChangeHandler = (event) => {
    setMail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  const imgChangeHandler = (event) => {
    setImgUrl(event.target.value);
  };

  const EditingContentHandler = () => {
    setEditingContact(true);
  };

  const CancelEditingHandler = () => {
    setEditingContact(false);
  };

  if (EditingContact == false) {
    return (
      <form className="contact-form" onSubmit={contactSubmitHandler}>
        <button
          className="contact-form__button"
          style={{ marginLeft: "30%" }}
          onClick={EditingContentHandler}
        >
          Add New Contact
        </button>
      </form>
    );
  }

  return (
    <form className="contact-form" onSubmit={contactSubmitHandler}>
      <label
        className="contact-form__label"
        style={{ color: isValid ? "black" : "red" }}
      >
        Name
      </label>
      <input
        style={{
          background: isValid ? "rgb(231, 231, 231)" : "orange",
          border: `2px solid ${isValid ? "#fec328" : "orange"}`,
        }}
        type="text"
        value={enterdName}
        className="contact-form__input"
        placeholder="Enter the name"
        onChange={nameChangeHandler}
      />

      <label className="contact-form__label">Mail</label>
      <input
        type="text"
        value={enterdMail}
        className="contact-form__input"
        placeholder="Enter Mail"
        onChange={mailChangeHandler}
      />

      <label className="contact-form__label">Phone</label>
      <input
        type="text"
        value={enterdPhone}
        className="contact-form__input"
        placeholder="Enter phone number"
        onChange={phoneChangeHandler}
      />

      <label className="contact-form__label">img</label>
      <input
        type="text"
        value={enterImgUrl}
        className="contact-form__input"
        placeholder="Enter the image url"
        onChange={imgChangeHandler}
      />

      <div className="form-Buttons">
        <button className="contact-form__button" onClick={CancelEditingHandler}>
          Cancel
        </button>
        <button className="contact-form__button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewContact;
