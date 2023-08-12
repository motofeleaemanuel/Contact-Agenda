import Contact from "../Contact";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../reducers/contactsReducer";

const Contacts = () => {
  const contacts = useSelector((state) => state.contact.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/contact")
      .then((response) => {
        const { data } = response;
        dispatch(fetchContacts(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {contacts &&
        contacts?.map((contact) => {
          return (
            <div key={contact._id}>
              <Link
                to={`/${contact._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Contact
                  id={contact._id}
                  name={contact.name}
                  phone={contact.phone}
                />
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Contacts;
