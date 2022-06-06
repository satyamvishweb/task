import React from "react";
import { imagesObj } from "./Images";

export default function Batch() {
  return (
    <>
      {/* <!-- batches sec --> */}
      <section>
        <div class="container">
          <div class="row">
            <div class="col p-4 fw-semibold">
              <h3>Available Batches</h3>
            </div>
          </div>
          <div class="row my-3">
            <div class="col-md-4">
              <div
                class="card text-start|center|end"
                // style={{ border: "2px solid  #84cc16" }}
              >
                <img class="card-img-top" src="holder.js/100px180/" alt="" />
                <div class="card-body">
                  <h4
                    class="card-title  pb-3 text-secondary text-center"
                    style={{ borderBottom: "2px solid  #84cc16" }}
                  >
                    Starting in 2 Days
                  </h4>
                  <ul class="my-2">
                    <li class="p-1">Monday, Wednesday</li>

                    <li class="p-1">6:00 PM to 7:00 PM</li>

                    <li class="p-1">Date- Monday, Jun 6</li>
                  </ul>
                  <p class="card-text fs-6 text-secndary">Instructor</p>
                  <div class="row">
                    <div class="col-4">
                      <img src={imagesObj.cardpic} width="100%" alt="" />
                    </div>
                    <div class="col-8 ">
                      <h5 style={{ color: "#01afed" }}>Pooja Tegginmath</h5>
                      <div class="row">
                        <div class="col">
                          <p>Certified international Vedic Math tutor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col text-center text-danger my-3">
                      <p>Hurry only 7 slots are left</p>
                      <div class="row">
                        <div class="col text-center">
                          <button
                            style={{
                              border: "none",
                              width: "80%",
                              padding: "7px",
                              color: "white",
                              backgroundColor: "#84cc16",
                              borderRadius: "4px",
                            }}
                          >
                            ENROLL NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="card text-start|center|end"
                // style={{ border: "2px solid  #84cc16" }}
              >
                <img class="card-img-top" src="holder.js/100px180/" alt="" />
                <div class="card-body">
                  <h4
                    class="card-title  pb-3 text-secondary text-center"
                    style={{ borderBottom: "2px solid  #84cc16" }}
                  >
                    Starting in 2 Days
                  </h4>
                  <ul class="my-2">
                    <li class="p-1">Monday, Wednesday</li>

                    <li class="p-1">6:00 PM to 7:00 PM</li>

                    <li class="p-1">Date- Monday, Jun 6</li>
                  </ul>
                  <p class="card-text fs-6 text-secndary">Instructor</p>
                  <div class="row">
                    <div class="col-4">
                      <img src={imagesObj.cardpic} width="100%" alt="" />
                    </div>
                    <div class="col-8 ">
                      <h5 style={{ color: "#01afed" }}>Pooja Tegginmath</h5>
                      <div class="row">
                        <div class="col">
                          <p>Certified international Vedic Math tutor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col text-center text-danger my-3">
                      <p>Hurry only 7 slots are left</p>
                      <div class="row">
                        <div class="col text-center">
                          <button
                            style={{
                              border: "none",
                              width: "80%",
                              padding: "7px",
                              color: "white",
                              backgroundColor: "#84cc16",
                              borderRadius: "4px",
                            }}
                          >
                            ENROLL NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="card text-start|center|end"
                // style={{ border: "2px solid  #84cc16" }}
              >
                <img class="card-img-top" src="holder.js/100px180/" alt="" />
                <div class="card-body">
                  <h4
                    class="card-title  pb-3 text-secondary text-center"
                    style={{ borderBottom: "2px solid  #84cc16" }}
                  >
                    Starting in 2 Days
                  </h4>
                  <ul class="my-2">
                    <li class="p-1">Monday, Wednesday</li>

                    <li class="p-1">6:00 PM to 7:00 PM</li>

                    <li class="p-1">Date- Monday, Jun 6</li>
                  </ul>
                  <p class="card-text fs-6 text-secndary">Instructor</p>
                  <div class="row">
                    <div class="col-4">
                      <img src={imagesObj.cardpic} width="100%" alt="" />
                    </div>
                    <div class="col-8 ">
                      <h5 style={{ color: "#01afed" }}>Pooja Tegginmath</h5>
                      <div class="row">
                        <div class="col">
                          <p>Certified international Vedic Math tutor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col text-center text-danger my-3">
                      <p>Hurry only 7 slots are left</p>
                      <div class="row">
                        <div class="col text-center">
                          <button
                            style={{
                              border: "none",
                              width: "80%",
                              padding: "7px",
                              color: "white",
                              backgroundColor: "#84cc16",
                              borderRadius: "4px",
                            }}
                          >
                            ENROLL NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- batches sec --> */}
    </>
  );
}
