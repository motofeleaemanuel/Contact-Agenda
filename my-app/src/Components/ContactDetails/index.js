import { Avatar, Grid, Typography } from "@mui/material";
import {
  ContactDetailsContentContainer,
  ContactDetailsHeaderContainer,
  ContactDetailsHeaderWrapper,
} from "../../StyledComponents/StyledContactDetailsComponent";

import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import AddContact from "../AddContact";
import EditIcon from "@mui/icons-material/Edit";
import { getContactById, updateContact } from "../../reducers/contactsReducer";

const ContactDetails = () => {
  const [editEnable, setEditEnable] = useState(false);
  const selectedContact = useSelector((state) => state.contact.selectedContact);

  const dispatch = useDispatch();

  const url = window.location.hash;
  const id = url.substring(2);

  const handleOnEdit = () => {
    setEditEnable(!editEnable);
  };

  const handleOnUpdateContact = (data) => {
    axios
      .put(`http://localhost:8080/api/contact/${id}`, data)
      .then((response) => {
        dispatch(updateContact({ updatedValues: response.data.contact, id }));
      })
      .catch((err) => console.log(err));

    setEditEnable(false);
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/contact/${id}`)
        .then((response) => {
          dispatch(getContactById({ contactData: response.data.contact }));
        })
        .catch((err) => console.log(err));
    } else return;
  }, [id, dispatch]);

  return (
    <>
      {selectedContact ? (
        <>
          <ContactDetailsHeaderContainer>
            <ContactDetailsHeaderWrapper>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  fontSize: "3em",
                  marginBottom: "12px",
                }}
              >
                {selectedContact.name.trim().split("")[0].toUpperCase()}
              </Avatar>
              <Typography variant="h4" fontWeight="bold">
                {selectedContact.name}{" "}
                <span onClick={handleOnEdit}>
                  <EditIcon style={{ cursor: "pointer" }} />
                </span>
              </Typography>
            </ContactDetailsHeaderWrapper>
          </ContactDetailsHeaderContainer>
          <ContactDetailsContentContainer>
            <div style={{ marginBottom: "64px" }}>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <div style={{ display: "flex" }}>
                    <PhoneIcon
                      fontSize="large"
                      color="primary"
                      style={{ marginRight: "12px" }}
                    />
                    <div>
                      <Typography>Phone</Typography>
                      <Typography>{selectedContact.phone}</Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ display: "flex" }}>
                    <LocationOnIcon
                      fontSize="large"
                      color="primary"
                      style={{ marginRight: "12px" }}
                    />
                    <div>
                      <Typography>Location</Typography>
                      <Typography>{selectedContact.location}</Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ display: "flex" }}>
                    <InfoIcon
                      fontSize="large"
                      color="primary"
                      style={{ marginRight: "12px" }}
                    />
                    <div>
                      <Typography>Info</Typography>
                      <Typography>{selectedContact.info}</Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div style={{ display: "flex" }}>
                    <EmailIcon
                      fontSize="large"
                      color="primary"
                      style={{ marginRight: "12px" }}
                    />
                    <div>
                      <Typography>Email</Typography>
                      <Typography>{selectedContact.email}</Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            {editEnable && (
              <div>
                <AddContact handleOnUpdateContact={handleOnUpdateContact} />
              </div>
            )}
          </ContactDetailsContentContainer>
        </>
      ) : null}
    </>
  );
};
export default ContactDetails;
