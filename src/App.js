import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/homepage';
import Login from './Pages/login';
import NoPage from './Pages/nopage';
import Test from './Pages/test';

function App() {
  return (
    <body>
      <div>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/test' element={<Test />} />
              <Route path='*' element={<NoPage />} />
            </Routes>
          <Footer />
        </Router>
      </div>
    </body> 
  );
}

function Navbar() {
  const testAlert = (a) => {
    alert(a)
  }
  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark justify-content-center sticky-top text-center'>
        <ul className='navbar-nav align-items-center container-fluid row'>
          <li className='nav-item col'>
            <a className='nav-link cursor-pointer' href='/login'> Login </a>
          </li>
          <li className='nav-item col'>
            <a className='nav-link' href='/register'> Register </a>
          </li>
          <li className='nav-item col'>
            <a href='/'>
              <img src='Youniverse.png' width={100} height={100} />
            </a>
          </li>
          <li className='nav-item col'>
            <a className='nav-link cursor-pointer' onClick={() => testAlert("WIP!")}> About </a>
          </li>
          <li className='nav-item col'>
            <a className='nav-link cursor-pointer' onClick={() => testAlert("WIP!")}> FAQ </a>
          </li>
        </ul>
    </nav>
  )
}

function Footer() {
  return ( 
    <div className='container-fluid bg-dark text-light'>
      <footer className='pt-4 pb-1 container'>
        <div className='row'>
          <div className='col-6 col-md-2 mb-3'>
            <h5>Account</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'><a href='/login' className='nav-link p-0 text-muted'>Login</a></li>
              <li className='nav-item mb-2'><a href='/register' className='nav-link p-0 text-muted'>Register</a></li>
              <li className='nav-item mb-2'><a href='/account' className='nav-link p-0 text-muted'>My Account</a></li>
            </ul>
          </div>
          <div className='col-6 col-md-2 mb-3'>
          <h5>Entries</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Add Video Entry</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Add Voice Entry</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Add Text Entry</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>View Timeline</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>View Shared Timeline</a></li>
            </ul>
          </div>
          <div className='col-6 col-md-2 mb-3'>
          <h5>About Us</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'><a href='/about' className='nav-link p-0 text-muted'>What is Youniverse?</a></li>
              <li className='nav-item mb-2'><a href='https://github.com/Jadevious' className='nav-link p-0 text-muted'>Who is the Creator?</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Is Youniverse Social Media?</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Safety and Data Protection</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Monetisation</a></li>
            </ul>
          </div>
          <div className='col-md-5 offset-md-1 mb-3'>
            <form data-form-typeof='newsletter'>
              <h5>Sign up to our development blog!</h5>
              <p>Stay in the loop by entering your address below:</p>
              <div className='d-flex flex-column flex-sm-row w-100 gap-2'>
                <label for='newsletter1' className='visually-hidden'>Email Address</label>
                <input id='newsletter1' type={'text'} className='form-control' placeholder='Email address' data-form-type='email' />
                <button className='btn btn-primary' type='button' data-form-type='action,subscribe'>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <p>Created by <strong><a target='_blank' href='https://github.com/Jadevious'>Jade Naughton</a></strong></p>
      </footer>
    </div>
  )
}

export default App;
