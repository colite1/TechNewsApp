const Card = ({ title, author, url, num_comments, objectID, removeStorie }) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <p>
          By <span>{author}</span> | <span>{num_comments}</span>
        </p>
        <div className="card-button">
          <a href={url} target="_blank" rel="noreferrer">
            Read More
          </a>
          <a href="#" onClick={() => removeStorie(objectID)}>
            Remove
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
