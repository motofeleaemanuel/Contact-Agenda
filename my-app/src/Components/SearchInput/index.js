import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState } from "react";
import { fetchContacts } from "../../reducers/contactsReducer";
import { useDispatch } from "react-redux";

export default function SearchInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInput(e.target.value); // Call the prop function with the input value
  };

  const handleOnClick = () => {
    axios
      .get(`http://localhost:8080/api/contact?searchText=${input}`)
      .then((response) => dispatch(fetchContacts(response.data)))
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ width: "100%" }}>
      <TextField
        id="search"
        type="text"
        label="Search"
        sx={{ width: "100%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <div onClick={handleOnClick}>
                <SearchIcon style={{ cursor: "pointer" }} />
              </div>
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
      />
    </div>
  );
}
