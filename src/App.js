import "./App.css";

import Wrapper from "./components/Wrapper";
import Wrapper2 from "./components/Wrapper2";
import Wrapper3 from "./components/Wrapper3";
const shoe = "/shoe2.gltf";
const arbol = "/Arbol.gltf";
const astro = "/Astronaut.gltf";


function App() {
  return (
    <div className="App">
      <h1>Edit Me!</h1>
      <Wrapper3
        customAstro={{
          astro: astro,
        }}
      />
      <Wrapper
        customShoes={{
          shoe: shoe,
        }}
      />
      <Wrapper2
        customArbol={{
          arbol: arbol,
        }}
      />
    </div>
  );
}

export default App;
