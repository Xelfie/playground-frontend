import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import About from "./About";
import PageNotFound from "./PageNotFound";
import PowerOutages from "./PowerOutages/PowerOutages";

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-slate-900">
      <Navbar />

      <main className="flex h-full w-screen flex-1 px-8 md:px-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/power-outages" element={<PowerOutages />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
