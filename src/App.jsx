import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import data from './data.json'

function App() {
  return (
    <div className="App min-h-screen">
      <Nav />

      <Homepage/>

      <Footer />
    </div>
  );
}

export default App;
