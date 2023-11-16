import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import "./Home.css";
import Contact from "../models/Contact";

const Home = () => {
  const initialContacts: Contact[] = [
    {
      firstName: "Mario",
      lastName: "Bro",
      phoneNumber: 1234567890,
      isFavorite: false,
    },
    {
      firstName: "Luigi",
      lastName: "Bro",
      phoneNumber: 2345678901,
      isFavorite: true,
    },
    {
      firstName: "Lara",
      lastName: "Croft",
      phoneNumber: 3456789012,
      isFavorite: false,
    },
    {
      firstName: "Sonic",
      lastName: "the Hedgehog",
      phoneNumber: 4567890123,
      isFavorite: true,
    },
    {
      firstName: "Samus",
      lastName: "Aran",
      phoneNumber: 5678901234,
      isFavorite: false,
    },
    {
      firstName: "Link",
      lastName: "Hero",
      phoneNumber: 1029384756,
      isFavorite: false,
    },
    {
      firstName: "Zelda",
      lastName: "Princess",
      phoneNumber: 5647382910,
      isFavorite: true,
    },
    {
      firstName: "Gordon",
      lastName: "Freeman",
      phoneNumber: 8473625109,
      isFavorite: false,
    },
    {
      firstName: "Master",
      lastName: "Chief",
      phoneNumber: 1928374650,
      isFavorite: true,
    },
    {
      firstName: "Geralt",
      lastName: "Rivia",
      phoneNumber: 7461829305,
      isFavorite: false,
    },
    {
      firstName: "Arthur",
      lastName: "Morgan",
      phoneNumber: 6594728130,
      isFavorite: true,
    },
    {
      firstName: "Aloy",
      lastName: "Sobeck",
      phoneNumber: 4738291065,
      isFavorite: false,
    },
    {
      firstName: "Peter",
      lastName: "Parker",
      phoneNumber: 6789012345,
      isFavorite: true,
    },
    {
      firstName: "Bruce",
      lastName: "Wayne",
      phoneNumber: 7890123456,
      isFavorite: false,
    },
    {
      firstName: "Clark",
      lastName: "Kent",
      phoneNumber: 8901234567,
      isFavorite: false,
    },
    {
      firstName: "Diana",
      lastName: "Prince",
      phoneNumber: 9012345678,
      isFavorite: true,
    },
    {
      firstName: "Tony",
      lastName: "Stark",
      phoneNumber: 1234567809,
      isFavorite: false,
    },
  ];

  const [contacts, setContacts] = useState<Contact[]>(initialContacts);

  const addNewContact = (newContact: Contact): void => {
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (location: number): void => {
    setContacts((prev) => [
      ...prev.slice(0, location),
      ...prev.slice(location + 1),
    ]);
  };

  const updateContact = (location: number): void => {
    setContacts((prev) => {
      //// opt 1
      // copy of array
      const copyOfEmployees = prev.slice(0);
      // copy of obj to update
      const copyOfEmp = { ...prev[location] };
      // modify object
      copyOfEmp.isFavorite = !copyOfEmp.isFavorite;
      // modify array
      copyOfEmployees[location] = copyOfEmp;
      // return new state
      return copyOfEmployees;
    });
  };

  return (
    <main className="Home">
      <ContactForm onAdd={addNewContact} />
      <ContactList
        allContacts={contacts}
        onDelete={deleteContact}
        onUpdate={updateContact}
      />
    </main>
  );
};

export default Home;
