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
      if(url === ''){
        return handleMessage('please enter a url')
      }
      if(name === ''){
        return handleMessage('please enter a nickname for your url')
      }

      const res = await fetch('http://localhost:2121/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
          name
        })
      })
      const data = await res.json()
      console.log(data)

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
          <button type='submit'>Shrink It</button>
        </form>
      </header>
      <main>
        {active && <div>{message}</div>}
        <h2>Preview your link:</h2>
        <p>http://www.shrinkenator.com/{name}</p>
      </main>
    </div>
  );
}

export default App;
