import './App.css';
import logo from './assets/j4f.png'

const App = () => (
  <div className="App">
    <nav className='nav'>
      <img alt='' src={logo} className='logo' />
      <span className='nav__signin'>Sign In</span>
    </nav>
    <header>
      <h1>Let's play a game <br /> just for fun</h1>
      <p>
        J4F is an interactive, fun, secure and
        safe app. Create an account, set your
        questions, share your profile link and
        see what your friends think about you!
      </p>
    </header>
  </div>
)

export default App;
