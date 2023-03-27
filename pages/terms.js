import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";

export default function terms() {
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
          Terms & Conditions
        </h1>
        <p className="text-slate-500 font-open font-light text-base text-left">
          Effective: March 20, 2022.
        </p>

        <section>
          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Personal Information
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              This refers to any information that identifies an individual, such
              as name, age, contact details, education, and employment history.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Consent
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              This refers to the explicit agreement given by women who join our
              online network and companies interested in working with us to the
              collection and use of their personal information.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Data Collection
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              This refers to the process of gathering personal information from
              women who join our online network and companies interested in
              working with us.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Data Use
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              This refers to how we use the personal information collected from
              women who join our online network and companies interested in
              working with us, such as for connecting women with potential
              employers, sharing relevant information and resources, and
              improving our services.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Data Protection
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              This refers to the measures we take to protect the personal
              information collected from women who join our online network and
              companies interested in working with us from unauthorized access,
              theft, or loss.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Data Sharing
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              This refers to the sharing of personal information collected from
              women who join our online network with companies interested in
              working with us, subject to their explicit consent.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Privacy Policy
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              This refers to the official document that outlines how we collect,
              use, protect and share personal information collected from women
              who join our online network and companies interested in working
              with us.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Data Retention
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              This refers to the length of time we retain personal information
              collected from women who join our online network and companies
              interested in working with us.
            </p>
          </div>

          <div className="my-10 space-y-5">
            <h1 className="font-noto text-3xl font-medium capitalize text-secondary text-left">
              Data Deletion
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              This refers to the process of permanently removing personal
              information collected from women who join our online network and
              companies interested in working with us from our systems.
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
              Data Access
            </h1>
            <p className="text-slate-500 font-open font-normal text-base lg:text-lg text-left">
              This refers to the right of women who join our online network and
              companies interested in working with us to access and review the
              personal information collected from them.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <Footer />
      </footer>
    </>
  );
}
