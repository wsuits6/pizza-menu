// Importing components 
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";

function App() {
  return (
    <div className="App">

      <Herosection />
      <section className="menu-section">
        <Pizza />
        <Pizza />
        <Pizza />
      </section>

      <Footer />
    </div>
  );
};

export default App;
