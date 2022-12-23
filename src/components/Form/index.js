import './style.css'
import CampoTexto from '../CampoTexto'
import ListaSusp from '../ListaSusp'
import { useState } from 'react'

function Form({colabCadastro, val}) {
    
    const aoSalvar = (evento) => {
        evento.preventDefault() 
        colabCadastro({
            nome: nome,
            perso: perso,
            cargo: cargo,
            image: image,
            list: list,
        })
        setNome('')
        setCargo('')
        setImage('')
        setList('')

    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [list, setList] = useState('')
    const [perso, setPerso] = useState('')

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para o colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    labelnam="Nome" 
                    placenam="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    labelnam="Personagem" 
                    placenam="Digite seu Personagem"
                    valor={perso}
                    aoAlterado={valor => setPerso(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    labelnam="Função"
                    placenam="Digite sua função"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    labelnam="Imagem" 
                    placenam="Informe o endereço da imagem"
                    valor={image}
                    aoAlterado={valor => setImage(valor)}
                />
                

                <ListaSusp  
                    time="Times" 
                    times={val}
                    valor={list}
                    aoAlterado={valor => setList(valor)}

                />
                <button className="styleBut">Criar Card</button>
                
            </form>
            
        </section>
    )
}

export default Form