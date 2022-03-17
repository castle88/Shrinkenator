function App() {
  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}

export default App;
