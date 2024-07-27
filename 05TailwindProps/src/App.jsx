import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-white text-black p-4 rounded-lg mb-2">Tailwind Test</h1>
      <Card username="Aman" btn="Open profile" />
      <Card username="Shoury" btn="Visit profile" />
      <Card />
      <Card />
    </>
  );
}

export default App;
