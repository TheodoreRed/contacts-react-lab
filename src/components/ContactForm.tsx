import { FormEvent, useState } from "react";
import Contact from "../models/Contact";
import "./ContactForm.css";

interface Props {
  onAdd: (contact: Contact) => void;
}

const ContactForm = ({ onAdd }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const [phoneNumberError, setPhoneNumberError] = useState("");

  const validatePhoneNumber = () => {
    if (phoneNumber.length !== 10) {
      setPhoneNumberError("Phone number must be 10 digits");
      return false;
    } else {
      setPhoneNumberError("");
      return true;
    }
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (validatePhoneNumber()) {
      onAdd({ firstName, lastName, phoneNumber: +phoneNumber, isFavorite });
    }
  };

  return (
    <form className="ContactForm" onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber.toString()}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {phoneNumberError && (
        <div className="phone-error-message">{phoneNumberError}</div>
      )}
      <div className="submit-block">
        <div className="checkbox-favorite-area">
          <label htmlFor="isFavorite">Set as Favorite? </label>
          <input
            type="checkbox"
            id="isFavorite"
            checked={isFavorite}
            onChange={(e) => setIsFavorite(e.target.checked)}
          />
        </div>

        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
};

export default ContactForm;
