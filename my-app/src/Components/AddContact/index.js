import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CustomizedSnackbars from "../SnackBar";
import { useDispatch } from "react-redux";
import { addContact } from "../../reducers/contactsReducer";

const AddContact = ({ handleOnUpdateContact }) => {
  const [responseMessage, setResponseMessage] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const location = useLocation();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/api/contact", data)
      .then((response) => {
        dispatch(addContact(response.data.contact));
        setSeverity("success");
        setResponseMessage(response.data.message);
        setShowMessage(true);
      })
      .catch((err) => {
        setSeverity("error");
        setResponseMessage(err.response.data.message);
        setShowMessage(true);
      });
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {location.pathname === "/addContact" ? (
        <div style={{ marginBottom: "24px" }}>
          <Typography variant="h4" fontWeight="bold">
            Add Contact
          </Typography>
        </div>
      ) : null}
      <form
        onSubmit={
          location.pathname === "/addContact"
            ? handleSubmit(onSubmit)
            : handleSubmit(handleOnUpdateContact)
        }
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                {...field}
                label="Name"
                InputProps={{ style: { width: "500px" } }}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                {...field}
                label="Phone"
                InputProps={{ style: { width: "500px" } }}
              />
            )}
          />
          <Controller
            name="location"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                {...field}
                label="Location"
                InputProps={{ style: { width: "500px" } }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                {...field}
                label="Email"
                InputProps={{ style: { width: "500px" } }}
              />
            )}
          />
          <Controller
            name="info"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                {...field}
                label="Info"
                InputProps={{ style: { width: "500px" } }}
              />
            )}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </div>

        <CustomizedSnackbars
          showMessage={showMessage}
          responseMessage={responseMessage}
          severity={severity}
        />
      </form>
    </div>
  );
};

export default AddContact;
