import './App.css';
import Fullname from './components/Fullname';
import Adress   from './components/Adress';
import Photo from './components/Photo';

function App() {
  return (
    <div className="App">
     <Photo></Photo>
     <Fullname></Fullname>
     <Adress></Adress>
    </div>
  );
}

export default App;
