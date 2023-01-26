import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer />
    </div>
  );
}

function Navbar() {
  const testAlert = (a) => {
    alert(a)
  }
  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark justify-content-center sticky-top'>
        <ul className='navbar-nav align-items-center container-fluid row'>
          <li className='nav-item col'>
            <a className='nav-link cursor-pointer' onClick={() => testAlert("WIP!")}> Login/Register </a>
          </li>
          <li className='nav-item col'>
            <a className='nav-link' href='#'> Upload </a>
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
      <footer className='py-5 container'>
        <div className='row'>
          <div className='col-6 col-md-2 mb-3'>
            <h5>Account</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
            </ul>
          </div>
          <div className='col-6 col-md-2 mb-3'>
          <h5>Youniverse</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
            </ul>
          </div>
          <div className='col-6 col-md-2 mb-3'>
          <h5>About Us</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Placeholder</a></li>
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
      </footer>
    </div>
  )
}

export default App;
