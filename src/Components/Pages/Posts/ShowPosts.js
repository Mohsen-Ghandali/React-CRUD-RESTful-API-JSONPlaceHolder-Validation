import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Delete from "./Delete";
import Edit from "./Edit";

const ShowPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const backPosts = () => {
        navigate("/posts");
    };

    const fetchPost = useCallback(async () => {
        try {
            let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            let res = await data.json();
            setPost(res);
            setLoading(false);
            setError("")
        } catch (error) {
            setError(error.message)
            setLoading(true)
        }
    }, [id]);
    useEffect(() => {
        fetchPost();
    }, [fetchPost]);


    return (
        <>
            {loading && <div className="text-center mt-5"><span className="spinner-border spinner-border-sm" ></span></div>}

            {error && <div className="text-center"><p className="text-danger">{error}</p></div>}

            {post && (
                <>
                    <h3 className="text-center my-4 ">RESTful-API: Delete & Edit</h3>
                    <div className="card d-inline-block shadow-lg border-0 col-6 text-start  mb-5 offset-3">
                        <div className="d-flex text-dark justify-content-between p-4  h5 bg-secondary rounded-top-2 ">
                            <span className="fw-bold mt-1"> Post Number: {id}</span>
                           
                            <span><Delete id={id} /></span>
                        </div>
                        
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item m-2 mb-3">
                                <span className="fw-bold pb-4">Title: </span>
                                {post.title}. <br />

                                <span className="fw-bold">Body: </span>{post.body}.
                            </li>
                        </ul>
                        <div className="card-header bg-secondary text-center shadow-sm">
                            <Edit id={id} />
                        </div>

                        <button className="btn btn-primary col-2 offset-5 my-4 " onClick={backPosts}>Back</button>
                    </div>
                </>
            )}
        </>
    );
};

export default ShowPost;
