import './App.css';
import './icons-css/icon-font.css'
import Nav from './components/nav.component/Nav'
import Hero from './pages/hero/hero'
import { Features } from './pages/features/feature'


const App = () => (
  <div className="App">
    <Nav />
    <Hero />
    <Features />
  </div>
)

export default App;
