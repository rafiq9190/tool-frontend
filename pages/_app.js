import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Script from "next/script";
import Footer from "../components/Footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  function addFaqSJsonLd() {
    return {
      __html: `{
        
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can I check the SIM owner against CNIC? ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": " Yes. Our SIM Number Tracker is designed to check CNIC ownership\n                as well. Enter the CNIC number into our tool's search bar and\n                run it. Wait for a moment until it fetches the details about the\n                person whose SIM card is registered on the respective CNIC."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I check the SIM owner's name by mobile number? ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Using our sim name check online tool, you can find SIM information with a number online for free of cost. Just enter the number and click on check. The SIM number details online checker will take only a moment to display its owner information. \n"
                    }
                },
                {
                    "@type": "Question",
                    "name": "Who can use the SIM Owner Checker?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The general public may want to check mobile number information or CNIC owner details for personal or security reasons, such as confirming the identity of a caller or verifying the authenticity of an individual. Anyhow, the use cases of SIM owner checker extends beyond commoners as businesses and professionals can also use it, as follows:\nLaw enforcement agencies may need to check SIM or CNIC owner details for investigative purposes.\nTelecom service providers may need to verify SIM or CNIC owner details for customer registration and authentication.\nGovernment agencies may require access to SIM or CNIC owner details for national security or regulatory purposes.\nFinancial institutions may need to verify SIM or CNIC owner details for customer identification and fraud prevention.\n"
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is it legal to check the owner of a SIM card or CNIC?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In some cases, accessing personal information without proper authorization is considered a breach of privacy and may be illegal. It is important to stay within the boundary of the law while looking up SIM owner or CNIC owner details. Always ensure that you have a legitimate reason for checking and verifying sim owner details in Pakistan. "
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I check the owner of a SIM card or CNIC anonymously?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Using our SIM name check online tool, you can anonymously check the owner of a SIM card or CNIC. It doesn't require you to go through any identification process in order to proceed. Simply access the tool and use it to your advantage. No need to reveal who you are and why you are leveraging it. Perform a free SIM detail check however you want! "
                    }
                }
            ]
        }
  `,
    };
  }
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addFaqSJsonLd()}
          key="faqs-jsonld"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
