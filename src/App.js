import './App.css';
import Formtasks from './components/Todo/Formtasks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      

      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      </div >

      <div class="context">
        <Formtasks/>
      </div>
    </div>
  );
}

export default App;
