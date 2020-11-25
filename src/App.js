import './App.css';
import './icons-css/icon-font.css'
import Nav from './components/nav.component/Nav'
import Hero from './pages/hero/hero'
import { Features } from './pages/features/feature'
import Footer from './components/footer.component/Footer.component'
import { SignIn } from './components/sign-in/Sign-in.component'


const App = () => (
  <div className="App">
    <Nav />
    <Hero />
    <Features />
    <Footer />
    <SignIn />
  </div>
)

export default App;
