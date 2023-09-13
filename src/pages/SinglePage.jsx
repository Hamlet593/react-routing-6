import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SinglePage = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, [id]);

  return (
    <div>
      {post && (
        <div>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </div>
      )}
    </div>
  );
};

export default SinglePage;
