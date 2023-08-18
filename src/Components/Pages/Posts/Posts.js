import { memo, useEffect, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import Create from "./Create";

const Posts = () => {
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const fetchPosts = async () => {
        try {
            let data = await fetch("https://jsonplaceholder.typicode.com/posts");
            let res = await data.json();
            setPosts(res.slice(0, 9));
            setLoading(false);
            setError("");
        } catch (error) {
            setError(error.message);
            setLoading(true);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <h3 className="text-center mt-4 ">RESTful-API-Read</h3>

            {loading && <div className="text-center"><span className="spinner-border spinner-border-sm " ></span></div>}

            {error && <div className="text-center"><p className="text-danger">Read - {error}</p></div>}

            <div className="text-start mb-5 offset-2">
                {posts && posts.map((elem) => (
                    <Post post={elem} key={elem.id} />
                ))}
            </div>
            <div className="text-center mb-5">

                <Create />

                <Link to="/" className="btn btn-dark text-capitalize mb-5 ">Back to Home</Link>
            </div>
        </>
    );
}

export default memo(Posts);
