import { useEffect, useState } from 'react'

import './App.css'

function App () {
  const [djs, setDjs] = useState([])

  useEffect(() => {
    fetch('https://trapezoidal-ripe-crystal.glitch.me/djs')
      .then(resp => resp.json())
      .then(djs => setDjs(djs))
  }, [])

  return (
    <div className='App'>
      <h1>My DJ App!</h1>
      <ul>
        {djs.map(dj => (
          // @ts-ignore
          <li>{dj.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
