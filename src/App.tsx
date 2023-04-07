import { useState } from 'react';
import './App.css';

import { Footer}  from "./components/form";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Footer></Footer>
    </div>
  )
}

export default App
