import "./topbar.scss";
import { Home, Person, Mail } from "@mui/icons-material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";

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
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onClick={
                ("change",
                () => {
                  let btnArrowDown = document.querySelector(".arrowDown").src;

                  if (btnArrowDown.includes("black")) {
                    btnArrowDown = btnArrowDown.replace(
                      "assets/down-black.png",
                      "assets/down.png"
                    );
                    document.querySelector(".arrowDown").src = btnArrowDown;
                  } else {
                    btnArrowDown = btnArrowDown.replace(
                      "assets/down.png",
                      "assets/down-black.png"
                    );
                    document.querySelector(".arrowDown").src = btnArrowDown;
                  }

                  document
                    .querySelector(".intro")
                    .classList.toggle("darkIntro");
                  document
                    .querySelectorAll("h1, h2, h3")
                    .forEach((element) => element.classList.toggle("darkText"));
                  document
                    .querySelector(".portfolio")
                    .classList.toggle("darkPortfolio");
                  document
                    .querySelectorAll(".portfolioList")
                    .forEach((element) =>
                      element.classList.toggle("darkPortfolioText")
                    );

                  let btnArrows = document.querySelector(".arrows").src;

                  if (btnArrows.includes("black")) {
                    btnArrows = btnArrows.replace(
                      "assets/arrow-black.png",
                      "assets/arrow.png"
                    );
                    document
                      .querySelectorAll(".arrows")
                      .forEach((ele) => (ele.src = btnArrows));
                  } else {
                    btnArrows = btnArrows.replace(
                      "assets/arrow.png",
                      "assets/arrow-black.png"
                    );
                    document
                      .querySelectorAll(".arrows")
                      .forEach((ele) => (ele.src = btnArrows));
                  }
                  document
                    .querySelector(".about")
                    .classList.toggle("darkAbout");
                  document
                    .querySelector(".itemAbout")
                    .classList.toggle("darkAboutItem");

                  document
                    .querySelector(".contact")
                    .classList.toggle("darkContact");
                })
              }
            ></input>
            <label for="checkbox" className="label">
              <Brightness7Icon className="fas fa-sun" />
              <NightsStayIcon className="fas fa-moon" />
              <div className="ball"></div>
            </label>
          </div>
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
