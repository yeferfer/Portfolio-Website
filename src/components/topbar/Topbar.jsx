import "./topbar.scss";
import { Home, Person, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <Home
              className="logo"
              onClick={() => {
                window.location.href = "#intro";
              }}
            ></Home>
            <Person className="icon" />
            <span>+57 3223446744</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>jefer.1142@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
