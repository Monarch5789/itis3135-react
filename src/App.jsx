import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './header'
import Header from './header'
import './Footer'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> {/* This is iuhaerioguhioeruhgiwoeurhg */}
    <Header/>
    <main>
      <p>Hello World!</p>
    </main>
     <div class="content">
                
                <h2>Home</h2>
                
                <p>Welcome to the home page for my ITIS3135 course work.</p>
                </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count Chocula is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Footer/>
    </>
  )
}

export default App
