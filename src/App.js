import React from "react";
import Header from "./components/header";
import Headline from "./components/headline/Headline";
import './app.scss';

const dataArray = [{
  fName: "Pancho",
  lName: "Elizalde",
  age: 26,
  online: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" description="Click the button to render post" tempArray={dataArray}/>
      </section>
    </div>
  );
}

export default App;
