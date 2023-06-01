import { useParams } from "react-router";

import { useGetBook } from "../../hooks/useGetBook";
import Layout from "../../components/Layout/Layout";

const Books = () => {
  const { id } = useParams();
  const { singleBookData, isLoading, isError } = useGetBook(id as string);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Book not found</div>;
  }

  return (
    <Layout>
      <div className="container">
        <div className="mt-6">
          <h1>{singleBookData?.title}</h1>
          <p>Author: {singleBookData?.author}</p>
          <div className="w-60 my-3">
            <img src={singleBookData?.cover} alt={singleBookData?.title} />
          </div>
          <p>Book ID: {singleBookData?.id}</p>
        </div>
      </div>
      {/* {singleBookData && <pre>{JSON.stringify(singleBookData, null, 2)}</pre>} */}
    </Layout>
  );
};

export default Books;
