import React from "react";
import { render } from "react-dom";
import "./styles.css";

import {MainHeader} from "./components/MainHeader";
import {Content} from "./components/Content";

function App() {
   return (
     <div className="App">
      <div className="wrapper">
        <MainHeader></MainHeader>
        <Content></Content>
        <footer>
          Powered by Plan&times;beta
        </footer>
      </div>
     </div>
   );
}

render(<App />, document.getElementById("root"));
