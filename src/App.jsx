import { useEffect, useState } from 'react'
import axios from 'axios';
import dado from './assets/icon-dice.svg';
import line from './assets/pattern-divider-desktop.svg';

import './App.css'

function App() {
  const [frase, setFrase] = useState([]);

  useEffect(()=>{
    fetchFrase()
  }, [])


  const fetchFrase = async()=>{
    try {
        const response = await axios.get(`https://api.adviceslip.com/advice`)
        setFrase([response.data.slip]);
        console.log(response.data.slip)
    }
    catch(err){
        console.log(err)
    }
   }


   function handleReset(){
    fetchFrase()
   }


  return (
    <div className='box'>
    <div className='generalCard'>
            {
            frase.map((item, index)=>(
                <div className='card' key={item.id}>
                  <p className='Advice'>Advice #{item.id}</p>
                    <h2>" {item.advice} "</h2>
                    <div><img className='line' src={line}/></div>
                </div>
            ))
          }
    </div>
          <button className='reset' onClick={handleReset}><img className='res' src={dado}/></button>
    </div>
  )
}

export default App
