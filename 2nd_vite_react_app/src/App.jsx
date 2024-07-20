import Chai from "./Chai";
import Coffee from "./Coffee";

function App() {
  const username = <a href="https://www.instagram.com/___mr____maharaja/">Visit</a>
  return (
    <>
      <Chai />
      <h3>Chai aur React</h3>
      <p>Instagram Username - {username}</p>
      <Coffee />
    </>
  );
}

export default App;
