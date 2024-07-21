import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";

function App() {
  return (
    <main className="min-h-screen flex flex-col gap-4 bg-slate-900">
      <Navbar />

      <div className="w-screen h-full flex flex-1 justify-center items-center text-5xl font-light ">
        Welcome to my Playground!
      </div>

      <Footer />
    </main>
  );
}

export default App;
