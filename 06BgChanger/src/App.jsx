import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen duration-200 flex justify-center"
      style={{ background: color }}
    >
      <div className="shadow-lg bg-white px-3 py-2 rounded-3xl fixed bottom-12">
        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg mx-2 my-1"
          style={{ background: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg mx-2 my-1"
          style={{ background: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg mx-2 my-1"
          style={{ background: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg mx-2 my-1"
          style={{ background: "olive" }}
          onClick={() => setColor("olive")}
        >
          Olive
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg mx-2 my-1"
          style={{ background: "Gray" }}
          onClick={() => setColor("gray")}
        >
          Gray
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black mx-2 my-1"
          style={{ background: "Yellow" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black mx-2 my-1"
          style={{ background: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg mx-2 my-1"
          style={{ background: "purple" }}
          onClick={() => setColor("purple")}
        >
          Purple
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black mx-2 my-1"
          style={{ background: "lavender" }}
          onClick={() => setColor("lavender")}
        >
          Lavender
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black mx-2 my-1"
          style={{ background: "white" }}
          onClick={() => setColor("white")}
        >
          White
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg mx-2 my-1"
          style={{ background: "Black" }}
          onClick={() => setColor("black")}
        >
          Black
        </button>

        <button
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black mx-2 my-1"
          style={{ background: "aqua" }}
          onClick={() => setColor("aqua")}
        >
          Aqua
        </button>
      </div>
    </div>
  );
}

export default App;