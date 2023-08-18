import { useRef, useState } from "react";
import "./CreateUpdate.css"
const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [created, setCreated] = useState(false)
    const [confirmCreate, setConfirmCreate] = useState(false)
    let titleRef = useRef();
    let bodyRef = useRef();
    const createPost = async () => {
        setLoading(true)
        setCreated(true)
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            let res = await data.json();
            console.log(res);
            setLoading(false)
            setCreated(false)
            setConfirmCreate(true)
            setTitle("");
            setBody("");  
        } catch (error) {
            setError(error.message);
            setLoading(true);
            setCreated(false)
        }
        setTimeout(() => {
            setConfirmCreate(false)
        }, 3000);
    }

    const handlerEvent = (e) => {
        e.preventDefault();
        createPost();
        titleRef.current.value = ""
        bodyRef.current.value = ""
    }

    return (
        <>
            {loading && <div className="text-center"><span className="spinner-border spinner-border-sm text-danger mt-3" ></span></div>}

            {error && <div className="text-center"><p className="text-danger">Create - {error}</p></div>}

            {created && <div className="text-center"><p className="text-bg-danger">Post is being create</p></div>}

            {confirmCreate && <div className="text-center"><p className="text-bg-success mt-3">Post 101 was created successfully ✔️</p>
                <p>Please check the console...</p></div>}

            <h3 className="text-center mt-4 ">RESTful-API-Create</h3>

            <div className="createUpdate container ">
                <div className="row">

                    <div className="col-6 offset-3 bg-dark p-5 my-3 text-white rounded-2 shadow-lg">
                        <form onSubmit={(e) => handlerEvent(e)}>
                            <div className="d.block mb-4 text-start">
                                <label htmlFor="title" className="mb-1">Title:</label>
                                <input
                                    type="text"
                                    placeholder="title"
                                    className="form-control"
                                    onChange={(e) => setTitle(e.target.value)}
                                    ref={titleRef}
                                />
                                {title ? "" : <p className="text-info">this filed is required</p>}

                                {title.length > 1 && title.length < 5 ? (
                                    <p className="text-warning" >less than 5 character</p>) : ("")}

                                {title.length > 16 ? (
                                    <p className="text-warning">more than 16 character</p>) : ("")}
                            </div>
                            <div className="d.block text-start">
                                <label htmlFor="body" className="mb-1">Body:</label>
                                <textarea
                                    type="text"
                                    placeholder="body"
                                    className="form-control"
                                    onChange={(e) => setBody(e.target.value)}
                                    ref={bodyRef}
                                />
                                {body ? "" : <p className="text-info">this filed is required</p>}

                                {body.length > 1 && body.length < 5 ? (
                                    <p className="text-warning" >less than 5 character</p>) : ("")}

                                {body.length > 50 ? (
                                    <p className="text-warning">more than 50 character</p>) : ("")}
                            </div>
                            <div className="d-block text-center mt-3">
                                <button className="btn btn-primary text-capitalize mt-4" disabled={title === "" || body === "" ? "disabled" : ""}>Create</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
       
        </>
    );
}
export default Create;