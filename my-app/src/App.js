import "./App.css";
import React from "react";
import "bootstrap";
import { Routes, Link, BrowserRouter } from "react-router-dom";
import AutoCompleteText from "./AutoCompleteText";

const Header = () => {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-opacity-75">
        <div class="container-fluid">
          <Link to="/">
            <a href="#" class="navbar-brand">
              <img src="images/logo.png" height="51" alt="logo" />
            </a>
          </Link>
        </div>
      </nav>
    </BrowserRouter>
  );
};

const Main = () => {
  return (
    <body class="d-flex flex-column h-100">
      <main>
        <section class="py-5 text-center container">
          <div class="container align-content-center">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto"></div>
              <h2>Welcome to Powder Portal</h2>
              <p class="welcome">
                Enter a resort and dates you plan on skiing and we’ll
                provide the data you need to plan the perfect trip.
              </p>

              <form action="search">
                <div class="row gx-1 specialRow">
                  <div class="col-1">
                    <div class="input-group date" id="datepicker">
                      <input
                        type="text"
                        placeholder="Day"
                        class="form-control"
                      />
                      <span class="input-group-append">
                        <span class="input-group-text bg-white d-block">
                          <i class="fa fa-calendar"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="col-7 padding-0">
                    <AutoCompleteText
                      input
                      type="text"
                      placeholder="Enter Resort"
                      className="form-control"
                    />
                  </div>
                  <div class="col-1 padding-0">
                    <Link to="/ski">
                      <button
                        type="button"
                        class="go-button btn btn-outline-light bt-light"
                      >
                        Let's Go
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

const Ski = () => {
  return (
    <body class="d-flex flex-column h-400">
      <main>
        <div
          class="container-fluid"
          style={{ minHeight: "500px", backgroundColor: "white" }}
        >
          <div class="row bg-white" style={{ height: "100px;" }}>
            <div class="container">
              <div class="row">
                <div class="col-11">
                  <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto"></div>
                    <div class="container">
                      <div class="text-muted">Results for "some resort"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row bg-white"
            style={{ height: "250px;" }}
            style={{ paddingTop: "50px;" }}
          >
            <div col-12>
              <div
                class="row iconRow"
                style={{ paddingLeft: "54px;", paddingBottom: "50px;" }}
              >
                <div class="col custom-icon">
                  <button
                    type="button"
                    class="btn btn-lg"
                    data-toggle="popover"
                    title="Ticket Info"
                    data-content="Tickets"
                  >
                    <img
                      src="images/ticket.png"
                      class="custom-icon"
                      style={{ width: "5rem;", height: "auto;" }}
                    />
                  </button>{" "}
                  <span class="icon-label">Tickets</span>
                </div>
                <div class="col custom-icon">
                  <button
                    type="button"
                    class="btn btn-lg"
                    data-toggle="popover"
                    title="Snow Report"
                    data-content="Snow"
                  >
                    <img
                      src="images/snow.png"
                      class="custom-icon"
                      style={{ width: "5rem;", height: "auto;" }}
                    />
                  </button>{" "}
                  <span class="icon-label">Snow Report</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row bg-white">
            <div col-12>
              <div
                class="row"
                style={{ paddingLeft: "54px;", paddingTop: "80px;" }}
              >
                <div class="col custom-icon">
                  <button
                    type="button"
                    class="btn btn-lg"
                    data-toggle="popover"
                    title="Weather Report"
                    data-content="Weather"
                  >
                    <img
                      src="images/weather.png"
                      class="custom-icon"
                      alt="Weather"
                      style={{ width: "5rem;", height: "auto;" }}
                    />
                  </button>{" "}
                  <span class="icon-label">Weather Report</span>
                </div>
                <div class="col custom-icon">
                  <button
                    type="button"
                    class="btn btn-lg"
                    data-toggle="popover"
                    title="Lodging"
                    data-content="Lodging"
                  >
                    <img
                      src="images/house.png"
                      class="custom-icon"
                      alt="Lodge"
                      style={{ width: "5rem;", height: "auto;" }}
                    />
                  </button>{" "}
                  <span class="icon-label">Lodging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div class="footer footer-margin fixed-bottom">
        <footer class="card-footer footer-font-style text-muted footer-position" />
        <div class="col-1" style={{ minWidth: "400px;" }}>
          <i class="fa fa-facebook-f fab"></i>
          <i class="fa fa-twitter fab"></i>
          <i class="fa fa-instagram fab"></i>
          <div class="footer_logo">
            <img
              src="images/footer.png"
              style={{ height: "90px;" }}
              class="footerLogo"
            />
          </div>
        </div>
      </div>
    </body>
  );
};
const Footer = () => {
  return (
    <div class="footer footer-margin fixed-bottom">
      <footer
        class="card-footer footer-font-style text-muted footer-position"
        style={{ minHeight: "230px" }}
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-10 bg-white">
              <div class="row gx-0">
                <div class="col-sm-3">
                  <div class="card shadow" style={{ width: "12rem" }}>
                    <img
                      src="images/bridgerbowl.png"
                      class="card-img-top"
                      alt="..."
                      style={{ width: "11.9rem" }}
                    />
                    <div class="card-body" style={{ height: "78px" }}>
                      <h7 class="card-title">Bridger Bowl </h7>
                      <button class="btn-sm">Let's go</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="card shadow" style={{ width: "12rem" }}>
                    <img
                      src="images/bigsky.png"
                      class="card-img-top"
                      alt="..."
                      style={{ width: "11.9rem" }}
                    />
                    <div class="card-body" style={{ height: "78px" }}>
                      Big Sky Resort
                      <button class="btn-sm">Let's go</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="card shadow" style={{ width: "12rem" }}>
                    <img
                      src="images/whitefish.png"
                      class="card-img-top"
                      alt="..."
                      style={{ width: "11.9rem" }}
                    />
                    <div class="card-body" style={{ height: "78px" }}>
                      Whitefish Mountain
                      <button class="btn-sm">Let's go</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 resorts fs-6">
                  <h5 class="h7">Recommended Resorts</h5>
                  <p class="sm">
                    Don't know where to go? Scroll through some of Montana's
                    most popular Ski Destinations.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-1 socialmedia">
              <i class="fa fa-facebook-f icon-style"></i>
              <i class="fa fa-twitter icon-style"></i>
              <i class="fa fa-instagram icon-style"></i>
              <div class="footer_logo">
                <img src="images/footer.png" style={{ height: "90px" }} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Header, Footer, Main, Ski };
