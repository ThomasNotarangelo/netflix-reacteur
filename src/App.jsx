import "./App.css";
import data from "./assets/data.json";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      {/* Ajout titre Netflix */}
      <h1>Netflix</h1>
      {/* Construction du nouveau tableau affichable en HTML */}
      {data.map((type) => {
        return (
          <Section category={type.category} images={type.image} />
          // <div>
          //   <h2>{type.category}</h2>
          //   {type.images.map((image) => {
          //     return <img src={image} alt="Couverture film" />;
          //   })}
          // </div>
        );
      })}
    </div>
  );
}

export default App;
