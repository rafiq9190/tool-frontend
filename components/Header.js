import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname ? "active_link" : "";
  };
  return (
    <>
      <div className="header-main-container">
        <div className="container-fluid px-0">
          <div className="container px-0">
            <div className="row mx-0 header-inner-container">
              <div className="col-12 col-lg-3 my-auto">
                <Image src={logo} className="img-fluid" alt="logo"/>
              </div>
              <div
                className="google_ad d-none d-lg-flex px-0 flex-row-reverse col-lg-9 my-auto pe-xl-1 bg-light mb-2"
                style={{ height: "90px" }}
              >
                <div className="">header-ad</div>
                {/* <div
                  className="d-flex align-items-center"
                  data-freestar-ad="__320x100"
                  id=""
                  name=""
                  data-google-query-id=""
                >
                  <div id="" style={{ border: "0pt none" }}>
                    <iframe
                      id=""
                      name=""
                      title=""
                      width={728}
                      height={90}
                      scrolling="no"
                      marginWidth={0}
                      marginHeight={0}
                      frameBorder={0}
                      role="region"
                      aria-label="Advertisement"
                      tabIndex={0}
                      style={{ border: 0, verticalAlign: "bottom" }}
                      data-load-complete="true"
                      data-google-container-id={2}
                      data-integralas-id-f4c7b6c4-1c57-c6d8-e5f8-ba474af6d84c=""
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 menu-container">
          <div className="container px-0 menu-inner-container">
            <div className="row mx-0">
              <div className="col-lg-12 px-1">
                <nav className="navbar navbar-expand-md navbar-dark">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                  className="collapse navbar-collapse" id="navbarNavAltMarkup"
>
                    <ul className="navbar-nav menu-nav-list me-auto w-100 align-items-lg-center">
                      <li
                        className={`nav-item menu-nav-list-item ${isActive(
                          "/"
                        )}`}
                      >
                        <Link href="/">
                          <a className="nav-link">Pakistani Database</a>
                        </Link>
                      </li>
                      {/* <li
                        className={`nav-item menu-nav-list-item ${isActive(
                          "/india"
                        )}`}
                      >
                        <Link href="/india">
                          <a className="nav-link">Indian Database</a>
                        </Link>
                      </li>
                      <li
                        className={`nav-item menu-nav-list-item ${isActive(
                          "/usa"
                        )}`}
                      >
                        <Link href="/usa">
                          <a className="nav-link">USA Database</a>
                        </Link>
                      </li> */}
                   
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
