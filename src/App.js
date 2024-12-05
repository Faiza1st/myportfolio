// import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navbar.js';
import {Banner} from './components/banner.js';
import { Skills } from './components/skills.js';
import { Projects } from './components/projects.js';
import { Footer } from './components/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skills />
     <Projects/>
     <Footer />

    </div>
  );
}

export default App;
