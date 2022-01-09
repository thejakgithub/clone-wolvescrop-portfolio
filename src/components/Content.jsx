import { useState } from "react";
import "./Content.css";
import portfolio from "../data/portfolio";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Content() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-header py-3">
      <div className="container text-white ">
        <div className="text-center mb-5 mx-4 mx-lg-0">
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
            <div key={port.id} className=" col-lg-4 col-md-6 ">
              <div className="text-center text-md-start   mx-1 mx-lg-0">
                <div className="wrapper-img ">
                  <div className="img-hover ">
                    <LazyLoadImage
                      className="img-fluid  px-lg-0 pe-0 pe-md-2 "
                      alt={port.img}
                      src={port.img}
                      effect="blur"
                      afterLoad={() => setIsLoading(false)}
                    />
                  </div>
                  {isLoading === false && (
                    <LazyLoadImage
                      className="img-fluid  project-hover  px-lg-0 pe-0 pe-md-2 "
                      alt="https://wolvescorp.com/main/portfolio/img/project_hover.svg"
                      src="https://wolvescorp.com/main/portfolio/img/project_hover.svg"
                    />
                  )}
                </div>

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
