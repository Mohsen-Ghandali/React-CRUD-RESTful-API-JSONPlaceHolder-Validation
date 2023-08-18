import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import NotFound from "../Pages/NotFound/NotFound";
import RouterPosts from "../Pages/Posts/RouterPosts";



const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/posts/*" element={<RouterPosts />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;