import React from "react";
import "./Content.css";
import portfolio from "../data/portfolio";

export default function Content() {
  return (
    <main className="bg-header py-3">
      <div className="container text-white ">
        <div className="text-center mb-5">
          <h1 className="text-port-head mb-3">Portfolio</h1>
          <p className="text-port-des">
            Digital product consultant, focused on ux/ui & service <br />
            designed by XD program and develop customized software for companies
            <br />
            who want to increase their sales and reduce costs.
          </p>
        </div>
        <div className="row g-4">
          {portfolio.map((port) => (
            <div key={port.id} className="col-lg-4 col-md-6 ">
              <div className="text-center text-md-start">
                <img
                  src={port.img}
                  alt={port.img}
                  className="img-fluid img-port  pe-2"
                />
                <h5 className="font-poppins portfoio-title my-3">
                  {port.title}
                </h5>
                {port.type.map((val, index) => (
                  <button
                    key={index}
                    className={
                      val === "Content MGMT"
                        ? "btn-type me-1 mb-1 btn-pink"
                        : val === "Setting Database"
                        ? "btn-type me-1 mb-1 btn-red"
                        : val === "Account MGMT"
                        ? "btn-type me-1 mb-1 btn-blue"
                        : val === "Employee MGMT"
                        ? "btn-type me-1 mb-1 btn-sky"
                        : val === "Service MGMT"
                        ? "btn-type me-1 mb-1 btn-yellow"
                        : val === "Data Analysis System"
                        ? "btn-type me-1 mb-1 btn-violet"
                        : val === "Purchasing System"
                        ? "btn-type me-1 mb-1 btn-blue"
                        : val === "Document MGMT"
                        ? "btn-type me-1 mb-1 btn-purple"
                        : val === "Shop online"
                        ? "btn-type me-1 mb-1 btn-orange"
                        : val === "Paint Collection System"
                        ? "btn-type me-1 mb-1 btn-moon"
                        : val === "Report Statistics" &&
                          "btn-type me-1 mb-1 btn-moon"
                    }
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
