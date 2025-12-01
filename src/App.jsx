import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './Inicio'
import Segundo from './segundo'
import Tercero from './tercero'
import Cuarto from './Cuarto'
// import "./estilo.css"

function App() {
  return (
    
    <>
    <div className="col">
      <div className="row">

      {/* <div className="container"> */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/segundo">Segundo</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/tercero">Tercero</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/cuarto">Cuarto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      {/* </div> */}
      </div>
      <div className="row">
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/segundo' element={<Segundo></Segundo>}></Route>
        <Route path='/tercero' element={<Tercero></Tercero>}></Route>
        <Route path='/cuarto' element={<Cuarto></Cuarto>}></Route>
      </Routes>

      </div>
      <div className="row">
      {/* <div className="container mt-3"> */}
        <footer class="bg-light text-center text-lg-start border rounded mt-3">
          <div class="text-center p-3" >
            Diego Daniel Huayhua Huayhua
            <br />
            <a href="https://youttube">youTube</a>
            <a href="https://facebook">facebook</a>
          </div>
        </footer>
      {/* </div> */}

      </div>
    </div>











    </>
    
    
  )
}

export default App
