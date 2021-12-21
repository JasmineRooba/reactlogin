import './App.css';
import { useState } from "react";
import ReactDOM from 'react-dom';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Saved Successfully')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Registration Form</label>
      <label>FirstName
        <input type="text" value={fname}onChange={(e) => setName(e.target.value)} />
      </label>
      <label>LastName
        <input type="text" value={lname}onChange={(e) => setName(e.target.value)} />
      </label>
      <label>Address
        <input type="text" value={addr}onChange={(e) => setName(e.target.value)} />
      </label>
      <label>Phone No
        <input type="text" value={phone}onChange={(e) => setName(e.target.value)} />
      </label>
      <label>Email
        <input type="text" value={email}onChange={(e) => setName(e.target.value)} />
      </label>
      <label>Password
        <input type="text" value={pass}onChange={(e) => setName(e.target.value)} />
      </label>
      <label>Confirm Password
        <input type="text" value={pass1}onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
export default App;