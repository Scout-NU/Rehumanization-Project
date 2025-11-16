import { useState } from 'react'
import './App.css'
import Route from './Routes'
import GetSupport from '/pages/GetSupport.js'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Route path="/support" element={<GetSupport />} />
      </div>
  )
}

export default App
