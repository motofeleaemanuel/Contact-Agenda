import { Avatar, Divider, Typography } from "@mui/material";
import LongMenu from "../LongMenu";

const Contact = ({ id, name, phone }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          padding: "24px 0px 24px 0px",
          cursor: "pointer",
        }}
      >
        <div>
          <Avatar sx={{ width: 54, height: 54 }}>
            {name.trim().split("")[0]}
          </Avatar>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: "4",
            marginLeft: "32px",
          }}
        >
          <Typography fontWeight="bold">{name}</Typography>
          <Typography>{phone}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <LongMenu id={id} />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Contact;
