import {KgButton} from './KgButton';
import Hello from './Hello';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Random} from './Random';
function App() {
  return <div>
  <Navbar />

    <h1>
    React course
    </h1>

  <Hello/>
  <KgButton/>
  <Random/>

  <Footer/>
  </div>
}
export default App;
