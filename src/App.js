import logo from "./logo.svg";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <AboutUs />
        <Reviews />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
