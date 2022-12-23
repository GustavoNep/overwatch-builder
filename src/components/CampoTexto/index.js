import './style.css'


function CampoTexto ({labelnam, placenam, obrigatorio, valor, aoAlterado}) {
  
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)    
    }

    return (
        <div className="campo-texto">
            <label>{labelnam}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placenam}></input>
        </div>
    )
}

export default CampoTexto

