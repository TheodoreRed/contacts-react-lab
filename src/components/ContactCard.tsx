import "./ContactCard.css";
import Contact from "../models/Contact";

interface Props {
  singleContact: Contact;
  onDelete: () => void;
  onUpdate: () => void;
}

const ContactCard = ({ singleContact, onDelete, onUpdate }: Props) => {
  const { firstName, lastName } = singleContact;

  const formatNumber = (phoneNum: number): string => {
    const phoneNumStr: string = phoneNum.toString();
    return `(${phoneNumStr.slice(0, 3)}) ${phoneNumStr.slice(
      3,
      6
    )}-${phoneNumStr.slice(6)}`;
  };

  return (
    <li className="ContactCard">
      <p className="name">
        {firstName} {lastName}
      </p>
      <div className="details">
        <p className="number">{formatNumber(singleContact.phoneNumber)}</p>
        <div>
          {singleContact.isFavorite ? (
            <i
              onClick={onUpdate}
              className="fa-solid fa-heart scale-up"
              style={{ color: "#e36940" }}
            ></i>
          ) : (
            <i onClick={onUpdate} className="fa-regular fa-heart scale-up"></i>
          )}
          <i
            className="fa-solid fa-trash scale-up"
            style={{ marginLeft: `15px`, color: "#5a7d7c" }}
            onClick={onDelete}
          ></i>
        </div>
      </div>
    </li>
  );
};

export default ContactCard;
