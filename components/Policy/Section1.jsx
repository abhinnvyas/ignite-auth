import React from "react";

function Section1() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="leading-relaxed">
        <div className="text-center mx-auto ">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="">
            We are on a mission to make the web a better place. The following
            terms, as well as our Policy, Terms of Service and Account Access
            Policy, apply to all users.
          </p>
          <p>Last Update: January 1, 2024</p>
        </div>

        <div className="container text-left mx-auto my-8 border-2 p-5 rounded-lg">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          {/* Introduction Section */}
          <section className="mb-8">
            <p className="mb-4">
              Your privacy is important to us, and we do take it seriously.
              DOUBLE SLASH INTERNET PRIVATE LIMITED has created the following
              Privacy Policy to let you know what information we collect when
              you visit our Site, why we collect it, and how it is used. This
              Privacy Policy explains the data collection and use practices of
              our website, www.upigateway.com (“Site”); it does NOT apply to
              other online or offline DOUBLE SLASH INTERNET PRIVATE LIMITED
              sites, products, or services.
            </p>
            <p className="mb-4">
              The terms “you,” “your,” and “yours” refer to the Customer/User,
              Individual or Individual representing an Organization, using our
              Site. The terms “upigateway”, “UPIGateway”, “UPI-Gateway”, ”we”,
              ”us” and “Company” refer to DOUBLE SLASH INTERNET PRIVATE LIMITED
              and its subsidiaries and affiliates. This Privacy Policy is
              governed by our Terms and Conditions. By using this site, you
              consent to the data practices prescribed in this statement.
            </p>
            <p className="mb-4">
              We may periodically make changes to this Privacy Policy and the
              updated version will be made available to you on this page{" "}
              <a href="www.upigateway.com/policy" className="text-blue-500">
                www.upigateway.com/policy
              </a>
              . It is your responsibility to review this Privacy Policy
              frequently and remain informed about any changes to it, so we
              encourage you to visit this page often.
            </p>
          </section>

          {/* Collection Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Collection</h2>
            <p className="mb-4">
              Personally Identifiable Information (“PII”) furnished by the User
              during signing up on the Site or subsequently, including but not
              limited to, Email address, Full Name, Mobile number, Physical
              address, Aadhaar ID Number is collected by the Company while a
              User signs up on the Site or thereafter.
            </p>
            <p className="mb-4">
              The Company also automatically receives and records information on
              our server logs from your browser, including but not limited to,
              your IP address, cookie information, and the page you requested.
              You can choose not to provide us with certain information, but
              then you might not be able to take advantage of many of our
              features.
            </p>
          </section>

          {/* Uses Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Uses</h2>
            <p className="mb-4">
              The Company uses your PII to contact you for various
              Service-related activities and related information that is
              collected from the site. Automatically collected data is used to
              better your experience on the Site while using the Services. This
              data is also used for data analytics by the Company.
            </p>
            <p className="mb-4">
              The Company does not use the stored data and information collected
              in the provision of the KYC Solution for any other transactions or
              information sharing.
            </p>
          </section>

          {/* Data Sharing Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              DATA SHARING OR DISCLOSURE
            </h2>
            <p className="mb-4">
              Personal Information about our users is an integral part of our
              business. We neither rent nor sell your Personal Information to
              anyone. We may share your Personal Information only with your
              consent to our customers in respect of whom you have chosen, or in
              respect of whom you have acted upon, to use the Services of
              UPIGateway or to business partners and affiliates as described
              below:
            </p>
            <p className="mb-4">
              <strong>AGENTS</strong>
              <br />
              We may employ other companies and people to perform tasks on our
              behalf and need to share your information with them to provide
              products or services to you. Unless we tell you differently, the
              Company’s agents do not have any right to use Personal Information
              we share with them beyond what is necessary to assist us. You
              hereby consent to our sharing of Personal Information for the
              above purpose.
            </p>
            <p className="mb-4">
              <strong>BUSINESS PARTNERS AND CUSTOMERS</strong>
              <br />
              In some cases, we may enter into business partnership arrangements
              wherein we will share your Personal Information with such a
              partner only to enable such partner to integrate its technology
              with the Company’s technology and render its own services bundled
              with our services. Unless you are previously notified, all
              business partners will treat your information in the same manner
              as the Company under this policy. However, the Company is not
              responsible for monitoring or enforcing each partner and/or
              customer’s handling of your Personal Information.
            </p>
            <p className="mb-4">
              <strong>BUSINESS TRANSFERS</strong>
              <br />
              In some cases, we may choose to buy or sell assets. In these types
              of transactions, user/customer information is typically one of the
              business assets that is transferred. Moreover, if the Company or
              substantially all of its assets were acquired, user/customer
              information would be one of the assets that are transferred or
              acquired by a Third-party. You acknowledge that such transfers may
              occur and that any acquirer of the Company may continue to use
              your Personal Information as set forth in this policy.
            </p>
            <p className="mb-4">
              <strong>PROTECTION OF THE COMPANY AND OTHERS</strong>
              <br />
              We may release Personal Information when we believe in good faith
              that release is necessary to comply with any law or regulation;
              enforce or apply our terms of use and other agreements; or protect
              the rights, property, or safety of the Company, our employees, our
              customers, or others.
            </p>
            <p className="mb-4">
              <strong>
                COMPLIANCE WITH LAW ENFORCEMENT AND JUDICIAL AUTHORITIES
              </strong>
              <br />
              We shall be bound to disclose Personal Information in response to
              a request/summons from a law enforcement authority; a court of
              law; or a quasi-judicial body.
            </p>
          </section>

          {/* Aadhaar-based eKYC Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              AADHAAR-BASED EKYC VERIFICATION & INFORMATION STORAGE
            </h2>
            <p className="mb-4">
              We conduct Aadhaar-based eKYC (Electronic Know Your Customer)
              process to verify the user's identity. Once the user is
              successfully verified, we do not store their personal information.
              We prioritize user privacy and ensure that their data is not
              retained in our systems.
            </p>
          </section>

          {/* International Transfers Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">INTERNATIONAL TRANSFERS</h2>
            <p className="mb-4">
              Personal Information collected on this website may be stored and
              processed in India or any other country in which the Company or
              its affiliates, subsidiaries or agents maintain facilities, and by
              using this Site, you consent to any such transfer of information
              outside of your country.
            </p>
          </section>

          {/* Children Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">CHILDREN</h2>
            <p className="mb-4">
              This Site is not intended for or directed to persons under the age
              of 15. Any person who provides their information to the Company
              through the Account Login page for new customers, Signup Page, or
              any other part of the Site represents to the company that they are
              15 years of age or older.
            </p>
          </section>

          {/* Cookies Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">COOKIES</h2>
            <p className="mb-4">
              Cookies are small text files stored by your browser on your
              computer when you visit our Site. We use cookies to improve our
              Site and make it easier to use. Cookies permit us to recognize
              users and avoid repetitive requests for the same information.
              Cookies from our Site cannot be read by other Sites. Most browsers
              will accept cookies until you change your browser settings to
              refuse them.
            </p>
          </section>

          {/* Retention Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Retention</h2>
            <p className="mb-4">
              All User data collected by the Company on the Site is retained
              perpetually unless stated otherwise in a particular application
              flow or the contract. This is required for establishing an audit
              trail of Content submitted by the User on the Site. The User
              consents to such a retention policy of the Company for being able
              to use the Site and Services.
            </p>
          </section>

          {/* Your Consent Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Your Consent to this Privacy Policy
            </h2>
            <p className="mb-4">
              By using this Site, you agree to this Privacy Policy. This is our
              entire and exclusive Privacy Policy and it supersedes any earlier
              version. Our Terms and Conditions take precedence over any
              conflicting Privacy Policy provision. We may change this Privacy
              Policy by posting a new version of this Privacy Policy on this
              Site which it is your responsibility to review.
            </p>
          </section>

          {/* Legal Disclaimer Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Legal Disclaimer</h2>
            <p className="mb-4">
              This Site operates “AS-IS” and “AS-AVAILABLE,” without liability
              of any kind. We are not responsible for events beyond our direct
              control. This Privacy Policy is governed by Indian laws, excluding
              conflicts of law principles. Any legal actions against us must be
              commenced in the courts of Rajkot, India, and within one (1) year
              after the claim arose, or such action(s) will be barred.
            </p>
          </section>

          {/* Opting out Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Opting out</h2>
            <p>
              If you would like to cancel your subscription and/or unsubscribe
              from our email list, email us at{" "}
              <a href="mailto:support@upigateway.com" className="text-blue-500">
                support@upigateway.com
              </a>{" "}
              and we will assist you.
            </p>
          </section>

          {/* Contacting the Company Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contacting the Company</h2>
            <p>
              If you believe that the Company has not adhered to this Privacy
              Policy, please contact us by email at{" "}
              <a href="mailto:support@upigateway.com" className="text-blue-500">
                support@upigateway.com
              </a>{" "}
              and we will use commercially reasonable efforts to remedy the
              problem.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Section1;
