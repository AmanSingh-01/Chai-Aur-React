/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!~@#$%^&*=?><";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordOnClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(4, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md shadow-gray-500 rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center mb-5">Password Generator</h1>
        <div className="flex shadow-md shadow-blue-600 rounded-lg overflow-hidden mb-4 shrink-0">
          <input
            type="text"
            value={password}
            className="w-full outline-none py-0.5 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-600 hover:bg-green-700 text-white px-3 py-1 "
            onClick={copyPasswordOnClipboard}
          >
            copy
          </button>
        </div>

        <div className="flex text-md gap-x-2">
          <div className="flex items-center gap-x-1 hover:text-green-600">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1 hover:text-green-600">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={(e) => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="cursor-pointer">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1 hover:text-green-600">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              className="cursor-pointer"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput" className="cursor-pointer">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
