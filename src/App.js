
import './app.css'
function App() {

  let age = 22
  let number = 102

  return (
    <div className="App">
      <p className="first-text"> User age is: {age} </p>
      <p> Random Number is: {number + 5 } </p>
    </div>
  );
}

export default App;
