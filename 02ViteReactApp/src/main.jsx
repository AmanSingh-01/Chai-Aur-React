import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App ! Chai</h1>
//     </div>
//   );
// }

//-------------------------------> End of the day this function MyApp() converted in the object. Then what we can ---------------------------------> run ReactElement here.

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

// ------------------------> we can create a object as according to react then react render function can render.
// const anotherUser = "gangwarsaurabh1414";
// const ReactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "Click me to visit Google",
// anotherUser;
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  // MyApp()
  // ----------------------------> This method we can use outside from the React.StrictMode. <---------------

  <React.StrictMode>
    <>
      <App />

      {/* -----------------------> We can define a function here and can render this type. <--------------- */}
      {/* <MyApp /> */}

      {/* -----------------------> We can not use ReactElement here because this object parameter react can't ---------------------------> render. In custom react app i create own a custom render function. */}
      {/* <ReactElement /> */}
    </>
  </React.StrictMode>

  //  -------------------------------> We can run it outside from the fragment of the react.
  //  anotherElement
  //  ReactElement
);
