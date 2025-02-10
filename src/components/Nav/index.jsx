import "./nav.css";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function Nav() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav>
      <div className="container nav-container">
        <div className="pages">
          <Link to="/">Coins</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="logo">
          <a href="/">
            <img src="https://coincap.io/static/logos/black.svg" />
          </a>
        </div>
        <div className="settings">
          <div>USD</div>
          <div>English</div>
          <div>
            <IconButton aria-label="settings" onClick={handleOpen}>
              <SettingsIcon />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>hello....</Box>
            </Modal>
          </div>
        </div>
      </div>
    </nav>
  );
}
