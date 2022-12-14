import Head from "next/head";

// Defines:
// * Page-title for each page 

const Article = ({ children, title, bgColor }) => {
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
