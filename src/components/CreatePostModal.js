import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { toast } from "react-toastify";
import { client } from "../api/client";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  bgcolor: "#fff",
  border: "2px solid #469AD9",
  boxShadow: 24,
  p: 4,
};

export default function CreatePostModal() {
  const [files, setFiles] = React.useState("");

  const upload = (e) => {
    if (e.target.files) {
      setFiles(e.target.files[0]);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = React.useState("");

  const handlecreatePost = async () => {
    const form = new FormData();
    form.append("photo", files);
    form.append("text", text);
    // TOken
    // const config = {
    //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    // };
    // make an api call to create a post in db with specfic user
    // client.post("/users/login", { email, password });
    // const { data } = await client.post("/posts", form);
    console.log(text);

    // show success message on post upload
    // toast.success("Post Succecfully created");
    // Close the modal
    // setOpen(!open);
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      {/* <button onClick={handleOpen} className="big-post-btn">
        {" "}
        I am button{" "}
      </button> */}
      <div onClick={handleOpen} className="big-post-btn">
        <AddIcon color="action" fontSize="large" />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Your Post, And Build your Audeince
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {/* <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Write something on your mind"
            minRows={9}
            // minCloumns={10}
            style={{ width: 200 }}
          /> */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            cols={55}
            rows={11}
            placeholder="Write something"
          ></textarea>
          <input
            // className="form__upload"
            type="file"
            accept="image/*"
            id="photo"
            name="photo"
            onChange={upload}
          />
          {/* <Button onClick={handlecreatePost} fullWidth variant="contained"> */}
          {/* </Button> */}
          <button onClick={handlecreatePost} className="create-post-btn">
            Post Now
          </button>
          {/* Post Now */}
        </Box>
      </Modal>
    </div>
  );
}
