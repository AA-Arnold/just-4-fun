import './App.css';
import './icons-css/icon-font.css'
import Nav from './components/nav.component/Nav'
import Home from './pages/home/home'
import Footer from './components/footer.component/Footer.component'
import { SignIn } from './components/sign-in/Sign-in'
import { Route, Switch } from 'react-router-dom';


const App = () => (
  <div className="App">
    <Nav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={SignIn} />
    </Switch>
    <Footer />

  </div>
)

export default App;
