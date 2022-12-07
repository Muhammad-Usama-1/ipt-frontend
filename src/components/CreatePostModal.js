import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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
  const [files, setFiles] = useState("");

  const upload = (e) => {
    if (e.target.files) {
      setFiles(e.target.files[0]);
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = useState("");

  const handlecreatePost = async () => {
    // Form for miltipart-data
    try {
      const form = new FormData();
      // Append form data
      form.append("photo", files);
      form.append("text", text);

      // make an api call to create a post in db
      const { data } = await client.post("/posts", form);
      // show success message on post upload
      toast.success("Post Succecfully created");
      // Close the modal
      setOpen(!open);
    } catch ({ response }) {
      // Catch unwanted 400-499 error
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };

  return (
    <div>
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

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            cols={55}
            rows={11}
            placeholder="Write something"
          ></textarea>
          <input
            type="file"
            accept="image/*"
            id="photo"
            name="photo"
            onChange={upload}
          />

          <button onClick={handlecreatePost} className="create-post-btn">
            Post Now
          </button>
        </Box>
      </Modal>
    </div>
  );
}
