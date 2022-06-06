import React from "react";
import { imagesObj } from "./Images";
import style from "../../component/home/home.module.css";
import Batch from "./Batch";
import Dispcription from "./Dispcription";

export default function Header() {
  return (
    <>
      <section>
        <div
          class="container  pt-4 mt-5"
          style={{
            borderBottom: "2px solid #84cc16",
          }}
        >
          <div class="row">
            {/* <!--  --> */}
            <div class="row">
              <div class="col text-primary fs-5 fw-semibold">
                <p>Maths</p>
              </div>
            </div>
            {/* <!--  --> */}
            {/* <!--  --> */}
            <div class="row">
              <div className={`${style.men_math}col my-4 fw-bold `}>
                <h2>MENTAL MATHS</h2>
              </div>
            </div>
            {/* <!--  --> */}
            <div class="col-md-6">
              <div class="row">
                <div className={`${style.para_sec}col fs-5 fw-semibold`}>
                  <p>
                    Have Fun with Math! Get rid of your Math phobia. Become a
                    Human Calculator yourself and be able to calculate 10-15
                    <br />
                    times faster than before!
                  </p>
                </div>
              </div>
              {/* <!--  --> */}
              {/* <!--  --> */}
              <div class="row gx-4 my-4 fs-5">
                <div class="col-6">6 - 8 Years</div>
                <div class="col-6">6 - 8 Years</div>
              </div>
              {/* <!--  --> */}
              {/* <!--  --> */}
              <div class="row fs-5 ">
                <div class="col-6">6 - 8 Years</div>
                <div class="col-6">6 - 8 Years</div>
              </div>
              {/* <!--  --> */}
              <div class="row mb-4">
                <div
                  className={`${style.Inr}col Inner text-center p-4`}
                  style={{
                    border: "2px solid #84cc16",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "5px",
                    marginTop: "40px",
                  }}
                >
                  <h2>₹1499 INR For 10 Live Classes</h2>
                </div>
              </div>
              {/* <!--  --> */}
            </div>
            <div class="col-md-6 mb-4">
              <img src={imagesObj.imgstudy} width="100%" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Batch />
      <Dispcription />
    </>
  );
}
