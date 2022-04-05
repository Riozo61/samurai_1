import SamuraiJSApp from "./App";
import ReactDOM from "react-dom";

test("renders withput crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
