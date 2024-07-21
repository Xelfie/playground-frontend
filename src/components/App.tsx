import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import About from "./About";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <main className="min-h-screen flex flex-col gap-8 bg-slate-900">
      <Navbar />
      <div className="w-screen h-full flex flex-1 px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
