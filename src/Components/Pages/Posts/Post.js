import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <>
            <div className="card d-inline-block shadow-lg border-0 m-2 w-25 text-start" >
                <div className="card-header bg-dark">
                    <Link className="d-block text-center" to={`/posts/${post.id}`}>
                        Go to
                        <span className="text-warning"> Update</span>  & <span className="text-warning"> Delete</span>
                    </Link>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="fw-bold ">Title: </span><span >{post.title.substr(0, 16)}</span><br />
                        <span className="fw-bold">body: </span>   {post.body.substr(0, 127)}
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Post;