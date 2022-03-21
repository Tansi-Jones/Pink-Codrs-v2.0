import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";

export default function privacy() {
  return (
    <>
      <Meta title="Coming Soon" />

      <nav>
        <Navigation
          textColor="text-secondary"
          logoSrc="/pink-codrs-2.svg"
          menuBarColor="bg-secondary"
        />
      </nav>

      <main className=" w-[90%] lg:w-[45%] mx-auto tex-secondary space-y-10 my-20 ">
        <h1 className="font-noto text-5xl font-bold capitalize text-secondary text-center">
          Privacy Notice
        </h1>
        <p className="text-slate-500 font-open font-light text-base text-left">
          Effective: March 20, 2022.
        </p>

        <section>
          <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
            We take your privacy seriously. Pink Codrs remains committed to
            respecting your privacy while you use our website. The policy below
            is applicable to our site visitor information collection practices.
          </p>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Definitions of Terms
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              {
                'Any information relating to a natural person is termed "Personally Identifiable Information" (or "PII"). Either indirectly or directly, this information, used in combination with other information available or likely available to a corporate body, is capable and can possibly identify such a person.'
              }
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Information We Collect
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              Unless you choose to fill out and submit your information on our
              website through our specifically provided forms, interactive live
              chat features, or other means, Pink Codrs does not collect
              Personally Identifiable Information about you. In order to provide
              our visitors with a better experience and usability, we do
              automatically collect certain information. When you visit our
              website, we collect the operating system you use, your IP address,
              and the browser you are using in order to provide a better, more
              personal experience. Pink Codrs shall only process the information
              we receive to pursue legitimate business interests to establish
              communications with possible clients/customers and other persons
              with general, business-related inquiries.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Normal Information Usage About You
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              To improve our website, we use certain information to analyze our
              site usage. Any Personally Identifiable Information you provide,
              we use to respond to your inquiry or process an application form
              you completed on our website. We may also use it to respond to
              legal process or as required by law in response to a subpoena, law
              enforcement agency, court order, to take action against any
              potential threat to the physical safety of a person or any illegal
              activity.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Our Information Sharing Policy
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              We may share your Personally Identifiable Information within Pink
              Codrs, authorized third-party agents in any part of the world, or
              our business partners for purposes of data enrichment, storage,
              processing, or to provide services to a transaction that was
              requested, after ensuring that such entities are they, themselves
              bound contractually by data privacy obligations. You have the
              right to know the type of business we disclose your information to
              on a per request bases. If and when we transfer Personally
              Identifiable Information outside SA, it is either to countries
              determined by the African Commission to have an adequate level of
              protection, or have been determined to have in place the
              appropriate safeguards.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Your Privacy Rights
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              Visitors to our site may have certain rights pertaining to their
              Personally Identifiable Information that are provided under
              applicable law. These rights are:
            </p>
            <ul className="text-slate-500 font-open font-normal text-base lg:text-lg text-left list-disc ml-5">
              <li>
                The right to request access to your Personally Identifiable
                Information and related processing activities.
              </li>
              <li>
                The right to request that any inaccurate or incomplete
                Personally Identifiable Information be rectified.
              </li>
              <li>
                The right to request that your Personally Identifiable
                Information be erased under certain circumstances.
              </li>
              <li>
                The right to request that your Personally Identifiable
                Information processing be restricted under certain
                circumstances.
              </li>
              <li>
                The right to object to having your Personally identifiable
                Information be processed under certain circumstances.
              </li>
              <li>
                The right to receive from us, a controller, your provided
                Personally identifiable Information in a machine-readable,
                commonly used format under certain circumstances.
              </li>
              <li>
                The right to report a complaint to a supervisory authority.
              </li>
              <li>
                The right to contact us at any time to withdraw your provided
                consent
              </li>
              <li>
                Should you wish to exercise your rights in respect to the
                articles listed above regarding your Personally Identifiable
                Information, please use the contact section provided below. As
                required by law, we will respond to you within the appropriate
                time.
              </li>
            </ul>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Opt Out and Withdrawal Rights
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              Pink Codrs respects your privacy and provides you the option
              during any information-collection activities to refuse to provide
              your Personally Identifiable Information. You have the right to
              opt-out of having your personal information shared with third
              parties on a per request bases. The option to subscribe / opt-in
              to new alerts, marketing content, and newsletters, is yours. You
              can opt-out of such communication options by clicking the link
              marked {'"unsubscribe"'} at the bottom of email newsletters or
              alerts you have received from us. Pink Codrs. will respect your
              wishes and adhere to your communications preferences.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Authenticity Responsibility
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              Pink Codrs will not be responsible for the authenticity of the
              information you provide and it is your duty to ensure the
              information you provide is authentic.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Cookies and other technologies
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              We use cookies on our website. A cookie allows a website to
              remember who you are by placing a text-only string of information
              on your {"computer's"} hard disk that is transferred to your
              browser. To review how we use and collect cookie data on our site.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Data Storage and Retention Policy
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              {
                "Your Personally Identifiable Information is stored in our databases on servers of cloud-based data management services with which Pink Codrs engages. Pink Codrs. will keep your PII to pursue business purposes and it will be kept in line with our data retention policies. Any PII that is received from prospective clients / customers will be retained for the entire duration of the prospective clients' / customers' business relationship with Pink Codrs."
              }
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              {"Protection of Minor's Information"}
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              The Pink Codrs website, is not aimed or directed to children under
              sixteen (16) years of age. Pink Codrs. does not knowingly solicit
              Personally Identifiable Information or market its services to
              anyone under the age of sixteen (16). If you have reason to
              believe that we have received information from a minor, please
              contact us as soon as possible and we will make all reasonable
              efforts to remove that information from our database.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Links to Outside / Third Party Websites
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              The Pink Codrs website, may have links to other websites,
              including social media platforms and third party sites, whose data
              collection and information gathering practices are different from
              ours. Pink Codrs does not control those privacy practices or
              sites, and you should read the privacy notices associated with any
              outside website. Pink Codrs. does not make any representations,
              nor do we endorse, third-party websites.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Our Continued Commitment to Your Security
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              To safeguard the information we collect, Pink Codrs. uses
              appropriate technical, administrative, and physical procedures. To
              ensure that all matters relating to Personally Identifiable
              Information are processed lawfully and fairly, Pink Codrs, takes
              reasonable steps in its PII dealings. As long as there is a
              business requirement, or if required under other applicable laws,
              Pink Codrs may retain your PII.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Addressing of Grievances
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              Any complaint or grievance relating to the processing of
              information, should be sent in writing to Pink Codrs. Please see
              below for contact information.
            </p>
            <ul className="text-slate-500 font-open font-normal text-base lg:text-lg text-left list-disc ml-5">
              <li>Filing a Grievance:</li>
              <li>Pink Codrs</li>
              <li>Email:</li>
              <li>Address:</li>
            </ul>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Policy Changes
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              Pink Coders has the right to amend these Terms of Use at any time
              and without intimation by posting the revised Terms on its
              website. From time to time, this policy may change. Please check
              back periodically for any updates or changes to this page.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              General Provisions
            </h1>
            <ol className="text-slate-500 font-open font-normal text-base lg:text-lg text-left list-decimal ml-5">
              <li>
                The terms and conditions are subject to and apply the applicable
                laws of the South Africa and the parties agree on the
                jurisdiction of the judicial authority in South Africa , any
                dispute or claim arising from the terms and conditions
              </li>
              <li>
                The affiliate member may not use the Pink Coders information for
                any unlawful or statutory purpose or for any unauthorized
                purpose and is not entitled to use the information in any way
                that is in violation of any private system or law - copyright
                and intellectual property rights laws, and Pink Codrs has the
                right to withdraw and cancel the affiliation of the account of
                any person who has violated this article from its site.
              </li>
              <li>
                {
                  " The affiliate member acknowledges that he will not  reproduce, duplicate, copy, sell, resell or exploit any part of the company's information /services or use or access it without obtaining the express permission of Pink Codrs."
                }
              </li>
              <li>
                Terms and conditions will be available in English and Arabic .
                In the event of any inconsistency or inconsistency between the
                English terms of use and the terms of use available in the
                Arabic language, the English version is the version approved.
              </li>
              <li>
                Verbal or verbal abuse of any kind, including threats of abuse
                or retaliation, to employees, members of officers or clients of
                Pink Coders will subject you to legal liability as well as to
                the termination of your account completely.
              </li>
              <li>
                Pink Codrs is the owner of the licensee of all intellectual
                property rights in its site, and in the material published on
                it. Those works are protected by the relevant copyright laws and
                treaties.
              </li>
            </ol>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Payment of fees
            </h1>
            <ol className="text-slate-500 font-open font-normal text-base lg:text-lg text-left list-decimal ml-5">
              <li>
                The fees are calculated between Pink Codes and the placement
                companies after employing the client.
              </li>
              <li>
                Fees are calculated as follows: <br />
                the standard placement fee is 15% junior; 25% senior of the
                client’s annual salary to the company.
              </li>
              <li>
                Payment of fees shall be in the agreed and recognized currency
              </li>
              <li>
                Cryptocurrencies, including Bitcoin, and Ethereum, are not
                accepted as physical currency to pay the standard placement fee.
              </li>
              <li>
                Any dispute that arises between the client and the placement
                company, the Pink Codrs is not responsible for it and does not
                rely on it to settle the dispute.
              </li>
            </ol>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <Footer />
      </footer>
    </>
  );
}
