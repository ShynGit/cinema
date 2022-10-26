import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { About } from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilmDetail } from "./components/FilmDetail";
import { Contact } from "./components/Contact";
import { News } from "./components/News";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/home" element={<Main />} />
                    <Route path="/detail/:id" element={<FilmDetail />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
