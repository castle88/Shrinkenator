import { useState } from 'react'

function App() {
  const [response, setReponse] = useState({
    active: false,
    message: ''
  })
  const { active, message} = response

  const [form, setForm] = useState({
    url: '',
    name: '',
  })
  const { url, name } = form

  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleMessage = (message) => {
    setReponse((prev) => {
      return {
        active: true,
        message: message, 
      }
    })

    setTimeout(() => {
      setReponse(() => {
        return {
          active: false,
          message: ''
        }
      })
    }, 3000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      console.log(form)
      handleMessage('hello')
    }catch(err){
      console.log(err)
      handleMessage(err.message)
    }
  }

  return (
    <div className="App">
      <header>
       <h1>Welcome to Shrinkenator</h1>
       <p>Crushing your ugly long links into neat little packages</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='url'>URL:</label>
          <input name='url' type='text' value={url} onChange={handleChange} />
          <label htmlFor='name'>URL:</label>
          <input name='name' type='text' value={name} onChange={handleChange} />
        <form>
          <label htmlFor='url'>URL:</label>
          <input name='url' type='text' />
          <label htmlFor='name'>URL:</label>
          <input name='name' type='text' />
          <button type='submit'>Shrink It</button>
        </form>
      </header>
      <main>
        {active && <div>{message}</div>}
        <h2>Preview your link:</h2>
        <p>http://www.shrinkenator.com/{name}</p>
        <h2>Preview your link:</h2>
        <p>http://www.shrinkenator.com/{/* link name here */}</p>
      </main>
    </div>
  );
}

export default App;
