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
          <Link to="/main">
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
                Enter a resort and dates you plan on skiing and we’ll provide
                the data you need to plan the perfect trip.
              </p>

              <form action="search">
                <div class="row gx-1 specialRow">
                  <div class="col-1">
                    <div class="input-group date" id="datepicker">
                      <input
                        type="text"
                        placeholder="Date"
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
          style={{ minHeight: "800px", backgroundColor: "white" }}
        >
          <div class="row bg-white" style={{ height: "100px;", paddingLeft:'20px' }}>
            <div class="container">
              <form action="search" style={{ width: "590px;", margin: "auto" }}>
                <div class="row gx-1">
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

                  <div class="col-1 padding-0">
                    <input
                      type="number"
                      placeholder="Skiiers"
                      class="form-control"
                    />
                  </div>
                  <div class="col-5 padding-0">
                    <input
                      type="text"
                      placeholder="Enter a different resort"
                      class="form-control"
                    />
                  </div>

                  <div class="col-2 padding-0">
                    <a href="page.html">
                      <button
                        type="button"
                        class="go-button btn"
                        style={{ backgroundColor: "#78A9DD;" }}
                      >
                        Let's Go
                      </button>
                    </a>
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="col-11">
                  <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto"></div>
                    <div class="container">
                      <div class="text-muted" style={{ paddingLeft: "30px" }}>
                        Results for "some resort"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row bg-white"
            style={{ height: "250px;" }}
            style={{ paddingTop: "10px;" }}
          >
            <div col-12>
              <div
                class="row iconRow"
                style={{ paddingLeft: "84px;", paddingBottom: "1000px;" }}
              >
                <div class="col custom-icon">
                  <button
                    type="button"
                    id="popup-page"
                    class="btn btn-lg"
                    title="Ticket Info"
                  >
                    <img
                      src="images/ticket.png"
                      class="custom-icon"
                      style={{ width: "5rem;", height: "auto;" }}
                    />
                    <div id="myModal" class="modal">
                      <div class="modal-content">
                        <p>Ticket data goes in here</p>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Ages</th>
                              <th scope="col">1 Day</th>
                              <th scope="col">2+ Days</th>
                              <th scope="col">Half Day</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Child</th>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <th scope="row">Student</th>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <th scope="row">Adult</th>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </button>
                  <span class="icon-label">Tickets</span>
                </div>
                <div class="col custom-icon">
                  <button
                    type="button"
                    id="popup-page"
                    class="btn btn-lg"
                    title="Snow Report"
                  >
                    <img
                      src="images/snow.png"
                      class="custom-icon"
                      style={{ width: "5rem;", height: "auto;" }}
                    />
                    <div id="myModal" class="modal">
                      <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Snow data</p>
                      </div>
                    </div>
                  </button>

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
                    id="popup-page"
                    class="btn btn-lg"
                    title="Weather Report"
                  >
                    <img
                      src="images/weather.png"
                      class="custom-icon"
                      alt="Weather"
                      style={{ width: "5rem;", height: "auto;" }}
                    />
                    <div id="myModal" class="modal">
                      <div class="modal-content">
                        <p>Snow data</p>
                      </div>
                    </div>
                    <div id="myModal" class="modal"></div>
                  </button>{" "}
                  <span class="icon-label">Weather Report</span>
                </div>
                <div class="col custom-icon">
                  <button
                    type="button"
                    id="popup-page"
                    class="btn btn-lg"
                    title="Lodging"
                    data-content="Lodging"
                  >
                    <img
                      src="images/house.png"
                      class="custom-icon"
                      alt="Lodge"
                      style={{ width: "5rem;", height: "auto;" }}
                    />
                    <div id="myModal" class="modal">
                      <div class="modal-content">
                        <p>Snow data</p>
                      </div>
                    </div>
                    <div id="myModal" class="modal"></div>
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
              style={{ height: "90px;", marginRight:'-50px'}}
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
                    Don't know where to go? Here's some of Montana's most
                    popular Ski Destinations.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-1 footer_logo ">
              <img src="images/footer.png" style={{ height: "90px" }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Header, Footer, Main, Ski };
