import { useState } from "react";

const Delete = ({ id }) => {
    const [loading, setLoading] = useState(false);
    const [errorDelete, setErrorDelete] = useState("");
    const [confirmDelete, setConfirmDelete] = useState("");

    const deletePost = async () => {
        setLoading(false); 
        setConfirmDelete(false)
        setErrorDelete("");

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });

           const data =await response.json()
                setConfirmDelete(true)
           console.log(`Deleted Post ${id}:`, data); 
        } catch (error) {
            setErrorDelete(error.message);
            setLoading(true); 
        } 
       
            setTimeout(() => {
            setConfirmDelete(false)
        }, 3000);
    };

    return (
       <>
     
            <button onClick={deletePost} className="btn btn-danger ">Delete</button>
           

            {confirmDelete && (
                <div className="text-center">
                    <span className="text-bg-success  fw-light h6">Post {id} was deleted successfully ✔️</span>
                </div>
            )}

            {loading && (
                <div className="text-center">
                    <span className="spinner-border spinner-border-sm text-light mt-3"></span>
                </div>
            )}

            {errorDelete && (
                <div className="text-center">
                    <p className="text-light">Delete - {errorDelete}</p>
                </div>
        )}
        </>
    );
}

export default Delete;




// ------------Another method white SweetAlert----------------

// import { useState } from "react";
// import {useNavigate} from "react-router-dom"
// import Swal from "sweetalert2";

// const Delete = ({ id }) => {
//     const navigate = useNavigate();

//     const deletePost = async () => {
//       
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//           }).then(async(result) => {
//             if (result.isConfirmed) {
//                 try {
//                     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//                         method: 'DELETE',
//                     });
        
//          
//                 } catch (error) {
//                  console.log("error.message")
//                 } 
//               Swal.fire(
//                 'Deleted!',
//                 'Your file has been deleted.',
//                 'success'
//               )
//             }
//           })
//           navigate("/posts")
//     };

//     return (
//         <>
//             <button onClick={deletePost} className="btn btn-danger mx-2">Delete</button>

//         </>
//     );
// }

// export default Delete;