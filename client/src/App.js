<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

=======
>>>>>>> d-8
function App() {
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
       <h1>Welcome to Shrinkenator</h1>
       <p>Crushing your ugly long links into neat little packages</p>
        <form>
          <label htmlFor='url'>URL:</label>
          <input name='url' type='text' />
          <label htmlFor='name'>URL:</label>
          <input name='name' type='text' />
          <button type='submit'>Shrink It</button>
        </form>
      </header>
      <main>
        <h2>Preview your link:</h2>
        <p>http://www.shrinkenator.com/{/* link name here */}</p>
      </main>
>>>>>>> d-8
    </div>
  );
}

export default App;
