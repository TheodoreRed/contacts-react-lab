import { useState } from "react";
import Contact from "../models/Contact";
import ContactCard from "./ContactCard";
import "./ContactList.css";

interface Props {
  allContacts: Contact[];
  onDelete: (location: number) => void;
  onUpdate: (location: number) => void;
}

const ContactList = ({ allContacts, onDelete, onUpdate }: Props) => {
  const [filterFavorites, setFilterFavorites] = useState(false);
  return (
    <ul className="ContactList">
      <div className="filter-by">
        <p>Filter by:</p>
        <button
          onClick={() => {
            setFilterFavorites(false);
          }}
          className={filterFavorites ? "" : "isActive"}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilterFavorites(true);
          }}
          className={filterFavorites ? "isActive" : ""}
        >
          Favorites
        </button>
      </div>
      {!filterFavorites
        ? allContacts
            .sort((a, b) => {
              return a.lastName.localeCompare(b.lastName);
            })
            .map((contact, i) => {
              return (
                <ContactCard
                  key={contact.phoneNumber}
                  singleContact={contact}
                  onDelete={() => onDelete(i)}
                  onUpdate={() => onUpdate(i)}
                />
              );
            })
        : allContacts
            .filter((contact) => contact.isFavorite)
            .sort((a, b) => {
              return a.lastName.localeCompare(b.lastName);
            })
            .map((contact, i) => {
              return (
                <ContactCard
                  key={contact.phoneNumber}
                  singleContact={contact}
                  onDelete={() => onDelete(i)}
                  onUpdate={() => onUpdate(i)}
                />
              );
            })}
    </ul>
  );
};

/* const cities = ['Tokyo', 'New York', 'London', 'Paris', 'Sydney'];

cities.sort((city1, city2) => city1.localeCompare(city2));

console.log(cities);
 */

export default ContactList;
