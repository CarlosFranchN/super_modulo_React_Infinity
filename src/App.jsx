import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { lojaOnline } from './utils/lista'
import { Card } from './Card'

function App() {
  const [item, setItem] = useState([])

  return (
    <>
    <h1>Lojinha da Horaaaaaaa</h1>
      {/* {console.log(Object.keys(lojaOnline))} */}
    <div className="menu_nav">

      
      {
       Object.keys(lojaOnline).map((nome)=>{
          // console.log(nome);
          return (
            // [informatica, livros,eletrodomesticos]
            <button className='btn_menu' onClick={() => setItem(lojaOnline[nome])} key={nome} >
                {nome}
            </button>
        )
          
       }) 
      }
    </div> 
      <div className="menu_card">
        {console.log(item)}

          {item && item.map((produto) =>{
            return(
              <Card item={produto}/>

            )
          
          })
          }
      </div>
    </>
  )
}

export default App
