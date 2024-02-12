import Content from "./components/Content/Content";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Content />
      <ToastContainer />
    </div>
  );
}

export default App;
