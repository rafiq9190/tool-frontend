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
        pathname: "/PakResults",
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
        title="Free Sim Owner Checker - Track the Number Details"
        description="sim owner checker helps you to track the name, CNIC, address & social media profile of a sim owner in Pakistan. Just enter the number and get the information.
        "
        openGraph={{
          url: "",
          title: "Free Sim Owner Checker - Track the Number Details",
          description:
            "sim owner checker helps you to track the name, CNIC, address & social media profile of a sim owner in Pakistan. Just enter the number and get the information.",
          images: [
            {
              url: `${ImageUrl("logo.png")}`,
              width: 1224,
              height: 724,
              alt: "banner",
              type: "image/jpeg",
            },
          ],
          site_name: "Sim Owner Checker",
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
            <h1 className="text-center mt-4 fw-bold">Free Sim Owner Checker</h1>
            <p className="text-center ">
              Retrieve personal information associated with a phone number or
              identity card, including the registered owner name, address,
              photo, and social links.
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
              <h2>What Is Sim Number Tracker?</h2>
              <p>
                Uso kahao is heading for 2 short paragraphs, explaining kray
                tool ko, kia cheez ha and kasy kaam krta ha etc…
              </p>
              <h3 className="text-center  text-md-start heading-color fw-bold my-3">
                Features Of Our Sim Details Checker
              </h3>
              <div className="ad-790"></div>

              <ul>
                <li>
                  <span className="fs-4">Check SIM Owner</span>
                  <p>
                    Cross-reference the number with an extensive sim database to
                    check phone number owner name..
                  </p>
                </li>
                <li>
                  <span className="fs-4">Find Home Address</span>
                  <p>
                    Trace the permanent or current residential address of the
                    sim owner linked to the given phone number in real-time.
                  </p>
                </li>
                <li>
                  <span className="fs-4">View Owner Photo</span>
                  <p>
                    Look up a phone or identity card number to see the face
                    behind the digits, going beyond mere name or address
                    details.
                  </p>
                </li>
                <li>
                  <span className="fs-4">Discover Social Profile </span>
                  <p>
                    Track links to the owner's social media accounts including
                    FB and Instagram by entering their sim or id number{" "}
                  </p>
                </li>
              </ul>
              <div className="ad-790"></div>
              <h2>Track Phone Number and CNIC Details </h2>
              <p>
                Now no more anonymous calls or mystery surrounding an unknown
                number. Using our highly-functional and secure SIM owner details
                checker, you can gain instant access to the original identity
                behind a phone number. It takes only a few seconds to facilitate
                SIM owner details online check, scanning the database and
                extracting all the associated information.
              </p>
              <p>
                You can also enter any computerized identity card number (CNIC)
                to check and verify any individual's information registered in
                the national database.
              </p>
              <p>
                Our tool employs advanced algorithms to establish a direct line
                of communication with data sources, constantly refreshing and
                updating its database. This way it ensures that you get
                up-to-date sim owner details pakistan.
              </p>
              <p>
                Provide a phone number or identity card number and our tool will
                display the following information linked to it right away:
              </p>
              <ul>
                <li>Name</li>
                <li>Photo</li>
                <li>Address</li>
                <li>Social Network</li>
              </ul>
              <p>
                It works for free of cost, enabling you to perform a quick and
                reliable SIM ownership check without any worries. There are no
                restrictions on checking SIM information with a number online.{" "}
              </p>
              <div className="ad-790"></div>
              <h2>Why Use Our Sim Owner Checker?</h2>
              <p>
                You can not rely on every other resource to get valid number
                details online check Pakistan for free. It takes powerful
                algorithms to fetch accurate sim information with number details
                in real-time. That's exactly what our tool does.{" "}
              </p>
              <p>
                We have built our SIM owner checker to be reliable, fast, and
                secure. It offers every feature required to ensure a seamless
                experience.{" "}
              </p>
              <h2>Intuitive Access </h2>
              <p>
                Designed with user convenience in mind, our sim name check
                online tool enables easy navigation throughout the entire
                process. It makes information retrieval as seamless as possible,
                helping you leverage all features without any hassle. Simply
                access it and enter the number to fetch the associated details.
                No complex steps to follow along.{" "}
              </p>
              <h2>Accurate Results</h2>
              <p>
                Based on future-driven technology, our sim details checker works
                to deliver reliable results with 100% precision level. This way
                it saves you from unwanted troubles which come with
                double-verification processes. You can confidently use our sim
                number tracker to find validated information, including the
                owner's name, photo, social links and more.{" "}
              </p>
              <h2>Faster Checking</h2>
              <p>
                We understand that speed matters the most when you are looking
                for information about someone. That's why our SIM details
                checker is built to process your request right away. It takes
                only a moment to cross-check the given number in the national
                database, retrieving sim number details online.
              </p>
              <h2>Free Usage </h2>
              <p>
                Why spend money on identifying the person who has been annoying
                you with non-stop anonymous calls—when you can do it for free.
                Use our tool without paying any charges to look up details
                linked to a phone number or even a CNIC number. You can check
                and verify as many numbers you want. There is no restriction.
              </p>
              <div className="ad-790"></div>
              <h2>Data Privacy </h2>
              <p>
                Your privacy is important to us and that's why our sim number
                tracker employs industry standard protocols to keep your data
                confidential and secure. The information you enter and retrieve
                using our tool is automatically deleted after you reload it. No
                one can gain unauthorized access to your data, which means you
                can fearlessly use our tool.
              </p>
            </div>
            <div className="b-ad my-3"></div>
            <h2 className="fw-bold text-center text-md-start">
              Frequently Asked Questions
            </h2>
            <div className="shadow p-3 rounded my-3">
              <h4 className="fs-4">Can I check the SIM owner against CNIC? </h4>
              <p>
                Yes. Our SIM Number Tracker is designed to check CNIC ownership
                as well. Enter the CNIC number into our tool's search bar and
                run it. Wait for a moment until it fetches the details about the
                person whose SIM card is registered on the respective CNIC.{" "}
              </p>
              <h4>Can I check the SIM owner's name by mobile number?</h4>
              <p>
                Yes. Using our sim name check online tool, you can find SIM
                information with a number online for free of cost. Just enter
                the number and click on check. The SIM number details online
                checker will take only a moment to display its owner
                information.{" "}
              </p>
              <h4>Who can use the SIM Owner Checker?</h4>
              <p>
                The general public may want to check mobile number information
                or CNIC owner details for personal or security reasons, such as
                confirming the identity of a caller or verifying the
                authenticity of an individual. Anyhow, the use cases of SIM
                owner checker extends beyond commoners as businesses and
                professionals can also use it, as follows:
              </p>
              <ul>
                <li>
                  Law enforcement agencies may need to check SIM or CNIC owner
                  details for investigative purposes
                </li>
                <li>
                  Telecom service providers may need to verify SIM or CNIC owner
                  details for customer registration and authentication.
                </li>
                <li>
                  Government agencies may require access to SIM or CNIC owner
                  details for national security or regulatory purposes.
                </li>
                <li>
                  Financial institutions may need to verify SIM or CNIC owner
                  details for customer identification and fraud prevention
                </li>
              </ul>
              <h4>Is it legal to check the owner of a SIM card or CNIC?</h4>
              <p>
                In some cases, accessing personal information without proper
                authorization is considered a breach of privacy and may be
                illegal. It is important to stay within the boundary of the law
                while looking up SIM owner or CNIC owner details. Always ensure
                that you have a legitimate reason for checking and verifying sim
                owner details in Pakistan.{" "}
              </p>
              <h4>Can I check the owner of a SIM card or CNIC anonymously?</h4>
              <p>
                Yes. Using our SIM name check online tool, you can anonymously
                check the owner of a SIM card or CNIC. It doesn't require you to
                go through any identification process in order to proceed.
                Simply access the tool and use it to your advantage. No need to
                reveal who you are and why you are leveraging it. Perform a free
                SIM detail check however you want!
              </p>
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
