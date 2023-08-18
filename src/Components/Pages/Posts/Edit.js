import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./CreateUpdate.css";

const Edit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [edited, setEdited] = useState(false);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const titleRef = useRef();
  const bodyRef = useRef();

  const editPost = async () => {
    setLoading(true);
    setEdited(true);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: title,
          body: body,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();

      setLoading(false);
      setEdited(false);
      setConfirmEdit(true);
      setTitle("");
      setBody("");
      console.log(`Edited Post ${id}:`, data); 
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setEdited(false);
    }

    setTimeout(() => {
      setConfirmEdit(false);
    }, 3000);
  };

  const handleEvent = (e) => {
    e.preventDefault();
    editPost();
    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <>
      {loading && <div className="text-center"><span className="spinner-border spinner-border-sm text-light mt-3"></span></div>}
      {error && <div className="text-center"><p className="text-light">Edit - {error}</p></div>}
      {edited && <div className="text-center"><p className="text-light">Post is being edited</p></div>}
      {confirmEdit && (
        <div className="text-center">
          <p className="text-light mt-3">Post {id} was edited successfully ✔️</p>
          <p>Please check the console...</p>
        </div>
      )}
      <div className="createUpdate container">
        <div className="row">
          <div className="col-12 bg-dark p-5 my-3 text-white rounded-2 shadow-lg">
            <form onSubmit={handleEvent}>
              <div className="d-block mb-4 text-start">
                <label htmlFor="title" className="mb-1">Title:</label>
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  ref={titleRef}
                />
                {title ? null : <p className="text-info">This field is required</p>}
                {title.length > 1 && title.length < 5 ? <p className="text-warning">Less than 5 characters</p> : null}
                {title.length > 16 ? <p className="text-warning">More than 16 characters</p> : null}
              </div>
              <div className="d-block text-start">
                <label htmlFor="body" className="mb-1">Body:</label>
                <textarea
                  placeholder="Body"
                  className="form-control"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  ref={bodyRef}
                />
                {body ? null : <p className="text-info">This field is required</p>}
                {body.length > 1 && body.length < 5 ? <p className="text-warning">Less than 5 characters</p> : null}
                {body.length > 50 ? <p className="text-warning">More than 50 characters</p> : null}
              </div>
              <div className="d-block text-center mt-3">
                <button className="btn btn-warning text-capitalize mt-4" disabled={title === "" || body === ""}>Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
