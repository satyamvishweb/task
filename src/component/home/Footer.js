import React from "react";

export default function Header() {
  return (
    <>
      {/* <!-- footer --> */}
      <footer style={{ backgroundColor: "#bddc78" }}>
        <div class="container py-2">
          <div class="row gx-4">
            {/* <!--  --> */}
            <div class="col-md-4">
              <p>
                Your friend, your guide and your partner in the journey of
                parenting
              </p>
              <div class="row">
                <div class="col">facebook</div>
              </div>
              <div class="row">
                <div class="col">© 2022 All Rights Reserved. Younglabs</div>
              </div>
            </div>
            {/* <!--  --> */}
            <div class="col-md-4">
              Quick Links
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="#"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="#"
                  >
                    Terms & Conditions{" "}
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="#"
                  >
                    Shipping & Delivery{" "}
                  </a>
                </li>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="#"
                  >
                    Return, Refunds & Exchange Policy{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              Address
              <ul style={{ listStyleType: "none" }}>
                <li>A-39, Sector - 4, Noida -201301</li>
                <li>( +91) 92890 29696</li>
                <li>info@younglabs.in</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- footer --> */}
    </>
  );
}
