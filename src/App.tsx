import Header from "./Header";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  return (
    <div className="max-w-[1728px] mx-auto my-0">
      <Header />
      <main>
        <About />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;
