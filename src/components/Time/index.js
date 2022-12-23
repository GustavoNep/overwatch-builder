import Cardizin from '../Cardizn'
import './style.css'


function Time(props) {
    const css = { backgroundColor: props.corDois}

    return(
        
        (props.colaboradores.length > 0) ? <section className="time" style={css}>
            <h3 style={{borderColor: props.corUm}} >{props.time}</h3>
            <div className='ColaboradoresX'>
                {props.colaboradores.map( cardizin => <Cardizin cordeFundo={props.corUm} key={cardizin.nome} nome={cardizin.nome} cargo={cardizin.cargo} imagem={cardizin.image} perso={cardizin.perso}/>)}
            </div>
        </section>
        : ''

    )
}

export default Time