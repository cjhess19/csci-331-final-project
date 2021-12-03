import "./App.css";
import "bootstrap";
import Table from "./Table";
import React, { Component } from "react";
import { useState } from "react";
import Data from "./Data";
import AutoCompleteText from "./AutoCompleteText";

export default function App() {
  //active changes state based on which Resort the user enters
  //active's state affects which ticket price table is displayed

  //data changes state based on the Resort the user enters and is used to update
  //actives state
  const [data, setData] = useState("");

  //this state is to keep track of if the user has clicke lets go
 
  function getData(){
    return data;
  }
  
  return (
    <div>
      <body>
        <Header />

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
                    {/* <AutoCompleteText input
                          type="text"
                          placeholder="Enter Resort"
                          className="form-control"
                          onChange={event => setData(event.target.value)}
                          
                          /> */}
                          <input
                            type="text"
                            placeholder="Enter Resort"
                            className="form-control"
                            onChange={event => setData(event.target.value)}
                            ></input>
                    </div>
                    <div class="col-1 padding-0">
                      <button
                        type="button"
                        class="go-button btn btn-outline-light bt-light"
                        onClick={getData}
                      >
                        Let's Go
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        <div>
          {/* if active = desired result, render the table to display data from 
        the index in the json associated with that resort */}
          {/* {active === "Bridger" && <Table data={Data} tableIndex={0} />}
          {active === "Whitefish" && <Table data={Data} tableIndex={1} />} */}
        </div>
        <Footer />
      </body>
    </div>
  );
}
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-opacity-75">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">
          <img src="images/logo.png" height="51" alt="logo" />
        </a>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <div class="footer footer-margin fixed-bottom">
      <footer class="card-footer footer-font-style text-muted footer-position" />
      <div class="col-1" style={{ minWidth: "400px;" }}>
        <i class="fa fa-facebook-f fab"></i>
        <i class="fa fa-twitter fab"></i>
        <i class="fa fa-instagram fab"></i>
        <div class="footer_logo">
          <img
            src="images/footer.png"
            style={{ height: "90px;", marginRight: "-50px" }}
            class="footerLogo"
          />
        </div>
      </div>
    </div>
  );
};

export { Header, Footer, App };
