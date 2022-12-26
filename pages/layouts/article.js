import Head from "next/head";

const Article = ({ children, title }) => {
  return (
    <>
      {title && (
        <Head>
          <title>{title} - Thornbeam</title>
        </Head>
      )}
      {children}
    </>
  );
};

export default Article;
