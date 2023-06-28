import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { sortByDate, slugify, ImageUrl } from "../utils";

export default function Home({ posts }) {
  const router = useRouter();
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSearch = async () => {
    if (number.length == 10 || number == "" || number.length == 13) {
      setIsValid(false);
      router.push({
        pathname: "/pakResults",
        query: { number },
      });
    } else {
      setIsValid(true);
    }
  };
  const handleChange = (e) => {
    setNumber(e.target.value);
    setIsValid(false); // Reset the isValid state when the input value changes
  };
  return (
    <div>
      <NextSeo
        title="Welcome to my blog home page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support"
        openGraph={{
          url: "",
          title: "Welcome to my blog home page",
          description:
            "Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support",
          images: [
            {
              url: `${ImageUrl("banner.png")}`,
              width: 1224,
              height: 724,
              alt: "banner",
              type: "image/jpeg",
            },
          ],
          site_name: "",
        }}
      />
      <div className="custom-container">
        <div className="row">
          <div className="col-2 d-none d-lg-block">
            <div
              className="side_ad position-sticky"
              style={{ top: "10px" }}
            ></div>
          </div>
          <div className="col-12 col-lg-8">
            <h1 className="text-center mt-4 fw-bold">
              Sim Owner Details Checker
            </h1>
            <p className="text-center ">
              You can find the sims owner details with mobile number and also
              CNIC number.You can find the sims owner details with mobile number
              and also CNIC number.{" "}
            </p>
            {/* <div className="ad-790"></div> */}
            <div className="row">
              <div className="col-12 col-md-8 m-auto">
                <div
                  className={`input-container-bg shadow p-3 rounded my-4 ${
                    isValid ? "has-validation" : ""
                  }`}
                >
                  <div className="mb-3">
                    <label
                      htmlFor="FormControlInput1"
                      className="form-label fw-bold"
                      style={{ color: "#007AFF" }}
                    >
                      Enter Phone Number Or CNIC Number
                    </label>
                    <input
                      type="number"
                      className={`form-control input_style ${
                        !isValid ? "" : "is-invalid"
                      }`}
                      id="FormControlInput1"
                      placeholder="3007123456/3310012344578"
                      value={number}
                      onChange={handleChange}
                    />
                    {isValid && (
                      <div className="invalid-feedback fw-bold">
                        Please insert correct format.
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center my-3">
                  <button
                    type="button"
                    className="btn btn-style btn-lg px-4 py-3"
                    onClick={handleSearch}
                  >
                    <span>Search</span>
                    <span>
                      <i className="icon icon-small icon-search icon-white-bg align-middle ms-2"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="ad-790"></div>
            </div>
            {/* <div className="ad-790"></div> */}

            <div className="shadow p-3 rounded my-3">
              <h2 className="text-center heading-color fw-bold my-3">
                Frequestly Asked Questions
              </h2>
              <div className="ad-790"></div>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <div className="ad-790"></div>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
              <div className="ad-790"></div>
              <p className="fw-bold mb-1 mt-3">Can i used for personal</p>
              <p>yes you can used it for personal use</p>
            </div>
            <div className="b-ad my-3"></div>
          </div>

          <div className="col-2 d-none d-lg-block">
            <div
              className="side_ad position-sticky "
              style={{ top: "10px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
