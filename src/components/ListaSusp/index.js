import './style.css'

function ListaSusp ({times, time, valor, aoAlterado}) {
    return (
        <div className='lista-suspensa'>
            <labeL>{time}</labeL>
            <select onChange={evento => aoAlterado(evento.target.value)} value={valor}>
                <option valor=""></option>
                {times.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>

    )
}

export default ListaSusp