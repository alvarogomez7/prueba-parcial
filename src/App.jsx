import Card from './components/Card'
import './App.css'
import { useState } from 'react'
import Mensaje from './components/Mensaje';


function App() {
 
 const [user, setUser] = useState({
  name: '',
  sport: '',
 });

 const [flag, setFlag] = useState(false)

 const handleSubmit = (e)=>{
  e.preventDefault();
  showCard()
 }

 const handleNameUser = (e)=>{(
  setUser({... user, name: e.target.value})
 )

 }

 const handleSportUser = (e)=>{(
  setUser({... user, sport: e.target.value})
 )
 }
 
 const validateName = ()=>{
  if(user.name.length >= 3 && user.name.trim()){
    return true;
  }else{
    return false;
  }
 }

 const showCard = ()=>{
  if(validateName() && validateSport()){
    setFlag(true)
  }
 }

 const validateSport = ()=>{
  return user.sport.length >= 6 ? true : false;
 }

 


  return (
    <>

      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>Nombre</label>
        <input type="text" value={user.name} onChange={handleNameUser}/>
        <label>Deporte favorito</label>
        <input type="text" value={user.sport} onChange={handleSportUser}/>
        <button type='submit'>Enviar</button>
      </form>
      {flag ? <Card name={user.name} sport={user.sport}/> : <Mensaje/>}
      
    </>

  )
}

export default App
