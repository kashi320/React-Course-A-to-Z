import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(1);

  const addvalue = ()=>{
    // console.log("Clicked",counter)
    

    if (counter >= 10){
        counter=9;
        console.log("restricted")
    }
    else{
        counter=counter+1;
      setCounter(counter);
    }
  }
    const removevalue = ()=>{
    // console.log("Clicked",counter)
    if(counter<=0){
      counter=0;
      console.log("retricted")
    }
    else{
      counter=counter-1;
    setCounter(counter);
    }
  }
  return (

    <>  
    
      <h1>Night and Code</h1>

      <h2>Counter Value:{counter}</h2>
      
      <button onClick={addvalue}>Add value </button>
      
      <button onClick={removevalue}>Remove value </button>

    </>
  )
}

export default App
