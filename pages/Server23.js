import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { ImageUrl } from "../utils";
import Link from "next/link";

function Server23() {
    const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const router = useRouter();
  const { number } = router.query;

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.secondry_url}/${number}`);
      const data = await response.json();
    //   console.log("data", data);
      setResult(data);
      setLoading(false);
    } catch (error) {
      alert("Error:", "Server is donw Please try again later");

      // return null;
    }
  }, [number]);
  const handleRetry = useCallback(async () => {
    router.push("/");
  }, []);
 
  useEffect(() => {
    if (number !== "") {
      fetchData();
    }
  }, [number, fetchData]);
  return (
    <div>
    <NextSeo
      title="Welcome to my blog home page"
      description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support"
      openGraph={{
        url: "http://officialrajdeepsingh.dev",
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
          <div className="ad-790"></div>
          <h1 className="text-center my-4 fw-bold">{`Results Against ${number}`}</h1>
          <div className="text-center">
         
            {!loading && !result?.success  && (
              <button className="btn btn-style" onClick={handleRetry}>
                Make Another Query
              </button>
            )}
          </div>
          <div className="row mt-3">
            <div className="col-12 col-md-10 m-auto">
              <div
                className="bg-light rounded m-auto"
                style={{ width: "100px", height: "100px" }}
              >
                {loading ? "Loading..." : "image"}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="FormControlInput1"
                  className="form-label fw-bold"
                  style={{ color: "#007AFF" }}
                >
                  Owner Name
                </label>
                <input
                  type="text"
                  value={loading ? "Loading..." : result?.server22?.name}
                  className="form-control input_style disabled"
                  id="FormControlInput1"
                  placeholder=""
                  disabled
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="FormControlInput1"
                  className="form-label fw-bold"
                  style={{ color: "#007AFF" }}
                >
                  Owner CNIC Number
                </label>
                <input
                  type="text"
                  className="form-control input_style disabled"
                  id="FormControlInput1"
                  placeholder=""
                  disabled
                  value={loading ? "Loading..." : result?.server22?.cnic}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="FormControlInput1"
                  className="form-label fw-bold"
                  style={{ color: "#007AFF" }}
                >
                  Owner Sim Network
                </label>
                <input
                  type="text"
                  className="form-control input_style disabled"
                  id="FormControlInput1"
                  placeholder=""
                  disabled
                  value={loading ? "Loading..." : result?.server22?.network}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="FormControlInput1"
                  className="form-label fw-bold"
                  style={{ color: "#007AFF" }}
                >
                  Owner Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control input_style disabled"
                  id="FormControlInput1"
                  placeholder=""
                  disabled
                  value={result?.server22?.mobileNo}
                />
              </div>
            </div>
          </div>
          <div className="ad-790"></div>
          <div className="row">
            <div className="col-12 col-md-10 m-auto">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label fw-bold "
                  style={{ color: "#007AFF" }}
                >
                  Owner Address
                </label>
                <textarea
                  className="form-control input_style"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  disabled
                  value={loading ? "Loading..." : result?.server22?.address}
                ></textarea>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="FormControlInput1"
                  className="form-label fw-bold"
                  style={{ color: "#007AFF" }}
                >
                  Owner Gmail Account
                </label>
                <input
                  type="text"
                  className="form-control input_style"
                  id="FormControlInput1"
                  placeholder=""
                  disabled
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="FormControlInput1"
                  className="form-label fw-bold"
                  style={{ color: "#007AFF" }}
                >
                  Owner Facebook Account
                </label>
                <input
                  type="text"
                  className="form-control input_style disabled"
                  id="FormControlInput1"
                  placeholder=""
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="text-center my-3">
            <Link href="/">
              <button
                type="button"
                className="btn btn-style btn-lg px-4 py-3"
              >
                <span>Try Another query</span>
                <span>
                  <i className="icon icon-small icon-search icon-white-bg align-middle ms-2"></i>
                </span>
              </button>
            </Link>
          </div>
          <div className="ad-790"></div>

          {/* <div className="ad-790"></div> */}

          {/* <div className="ad-790"></div> */}
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
  )
}

export default Server23