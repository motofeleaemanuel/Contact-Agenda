import { useLocation } from "react-router-dom";
import ContactDetails from "../../Components/ContactDetails";
import Contacts from "../../Components/Contacts";
import SearchBar from "../../Components/SearchBar";
import { ContactDetailsContainer } from "../../StyledComponents/StyledContactDetailsComponent";
import {
  ContactsContainer,
  PageContainer,
} from "../../StyledComponents/StyledHomeComponents";
import AddContact from "../../Components/AddContact";
import { useState } from "react";

const Home = () => {
  const location = useLocation();
  const [searchText, setSearchText] = useState(""); // Lifted state for search text

  const handleOnChangeInput = (text) => {
    setSearchText(text);
  };

  return (
    <PageContainer>
      <ContactsContainer>
        <SearchBar handleOnChangeInput={handleOnChangeInput} />
        <Contacts searchText={searchText} />
      </ContactsContainer>
      <ContactDetailsContainer>
        {location.pathname === "/addContact" ? (
          <AddContact />
        ) : (
          <ContactDetails />
        )}
      </ContactDetailsContainer>
    </PageContainer>
  );
};

export default Home;
