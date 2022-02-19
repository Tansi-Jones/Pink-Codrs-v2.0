import Head from "next/head";

export const Meta = ({ title }) => {
  return (
    <Head>
      <title>Pink Codrs Africa {title ? `| ${title}` : ""}</title>
    </Head>
  );
};
