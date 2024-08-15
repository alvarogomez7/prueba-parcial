

const Card = ({name, sport}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', border: '1px solid #000'}}>
      <h2>Hola, {name} </h2>
      <p>Has elegido {sport} como tu deporte favorito</p>
    </div>
  )
}

export default Card
