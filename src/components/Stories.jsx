import { useContext } from "react";
import Card from "./Card";
import { AppContext } from "./Context";
const Stories = () => {
  const { hits, isLoading, removeStorie } = useContext(AppContext);
  if (isLoading) {
    return (
      <>
        <h2>...Loading</h2>
      </>
    );
  }
  return (
    <>
      <div className="stories-div">
        {hits.map((curPost) => {
          const { title, author, url, num_comments, objectID } = curPost;
          return (
            <section key={objectID}>
              <Card
                title={title}
                author={author}
                url={url}
                num_comments={num_comments}
                objectID={objectID}
                removeStorie={removeStorie}
              />
            </section>
          );
        })}
      </div>
    </>
  );
};
export default Stories;
