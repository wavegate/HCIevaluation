import "./App.scss";
import Instructions from "./components/Instructions";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="App">
      {/* <Form password="ugum53" variant="text" /> */}
      <Form password="POYGPS" variant="graphical" />
    </div>
  );
};

export default App;
