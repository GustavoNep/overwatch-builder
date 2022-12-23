import './style.css'

function Cardizin({ nome, imagem, cargo, cordeFundo, perso}) {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: cordeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5> 
                <h6>{perso}</h6>          
            </div>
        </div>


    )
}

export default Cardizin