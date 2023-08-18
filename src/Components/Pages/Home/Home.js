import { Link } from "react-router-dom"
import Article from "../Article.js/Article";
const Home = () => {
  return (

    <>
      <Article />
      <Link to="/posts" className="btn btn-primary text-capitalize d-block mx-auto col-2 my-5 ">Go To CRUD</Link>
    </>

  );
}

export default Home;