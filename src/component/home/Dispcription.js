import React from "react";

export default function Header() {
  return (
    <>
      {/* <!-- dispcription --> */}
      <section>
        <div class="container my-5">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item my-4">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <div class="row">
                    <div class="col ">
                      <h3 class="text-primary">Description</h3>
                      <div class="row">
                        <div class="col">
                          The course aims at enhancing mathematical skills and
                          brain development. It improves one's number sense and
                          helps them gain the ability to understand
                          relationships between quantities, while stimulating
                          their brain and improving observation skills
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <ul>
                    <li>CLASS 1- Criss-cross multiplication</li>

                    <li>
                      CLASS 2- Subtraction with numbers near to 10 and multiples
                      of 10 Cutoff method addition/ Vyavakalanam method Dot
                      method addition/ Rekhanth method
                    </li>

                    <li>CLASS 3- Multiplication upto 100 (Done mentally)</li>

                    <li>
                      CLASS 4- Subtraction with Numbers near 10 and multiple of
                      10
                    </li>

                    <li>
                      CLASS 5- Digit sum method Multiplication using base method
                      part 1/ Nikhilam method, Fractions
                    </li>

                    <li>
                      CLASS 6- Base method multiplication part 2 Division part 1
                    </li>

                    <li>CLASS 7 - LCM and HCF</li>

                    <li>
                      CLASS 8- Multiplication with series of 9 Division part 2
                    </li>

                    <li>
                      CLASS 9- Multiplication with series of 1 Multiplication
                      with 21,31 41 91 Base complement method subtraction/
                      Nikhil am method ,Division of any number by 11
                    </li>

                    <li>
                      CLASS 10- Division with series of 9 Multiplication by
                      digits 12 to 19 Multiplication with 5, 25, 125 Percentage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <h3 class="text-primary">Homework</h3>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  Comprehensive home assignments will be provided , which will
                  be an extension of what is done is the class
                </div>
              </div>
            </div>
            <div class="accordion-item my-3">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <h3 class="text-primary">Learning Goals</h3>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  Have Fun with Math! Get rid of your Math phobia. Become a
                  Human Calculator yourself and be able to calculate 10-15 times
                  faster than before!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- dispcription --> */}
    </>
  );
}
