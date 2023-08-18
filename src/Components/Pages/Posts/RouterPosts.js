import { Route, Routes } from "react-router-dom";
import Posts from "./Posts";
import ShowPosts from "./ShowPosts";
import Create from "./Create";
import Edit from "./Edit";

const RouterPosts = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/:id" element={<ShowPosts />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit' element={<Edit />} />
        </Routes>
    );
}

export default RouterPosts;