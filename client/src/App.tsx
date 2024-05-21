import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Merhaba Dünya!
      {count}
    </>
  )
}

export default App
