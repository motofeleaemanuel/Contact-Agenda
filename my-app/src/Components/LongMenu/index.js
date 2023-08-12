import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../reducers/contactsReducer";

const options = ["Delete"];

export default function LongMenu({ id }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/contact/${id}`)
      .then((response) => {
        dispatch(deleteContact(id));
      })
      .catch((err) => {
        console.log(err);
      });

    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Delete"}
            onClick={handleDelete}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
