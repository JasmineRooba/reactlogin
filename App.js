import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
     LOGIN PAGE
    <form>
      <label>Username
        <input type="text" />
      </label>
      <label>Password
        <input type="text" />
      </label>
      <input type="submit" />
    </form>

ReactDOM.render(<App />, document.getElementById('root'));

    </div>
  );
}

export default App;
