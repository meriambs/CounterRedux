
import { useDispatch } from 'react-redux';
import './App.css';

import  {useSelector} from 'react-redux';
function App() {
  const counter=useSelector((state =>state.counter))
  // const isVisible=useSelector((state=>state.isVisibel))
  const dispatch= useDispatch();
  return (
    <div className="App">
      <h1>This is a simple counter</h1>

{/* <button onClick={()=>dispatch({type:'TOGGEL'})}>
  {isVisible ? "hide":null}
</button> */}


  <div>
          <h2> counter : {counter}</h2>
<button  onClick={()=>dispatch({type:'INCREMENT'})}>INCREMENT</button>

<button onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
<br/>
<button onClick={()=>dispatch({type:'RESET'})}>res</button>
         
 </div>
    </div>
  );
}

export default App;
