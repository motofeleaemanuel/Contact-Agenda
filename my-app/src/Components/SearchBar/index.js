import {
  AddIconContainer,
  SearchBarContainer,
} from "../../StyledComponents/StyledContactsComponents";
import AddIcon from "@mui/icons-material/Add";
import SearchInput from "../SearchInput";
import { Link } from "react-router-dom";

const SearchBar = ({ handleOnChangeInput }) => {
  return (
    <SearchBarContainer>
      <SearchInput handleOnChangeInput={handleOnChangeInput} />
      <AddIconContainer>
        <Link to={`/addContact`}>
          <AddIcon color="primary" style={{ cursor: "pointer" }} />
        </Link>
      </AddIconContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
