import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'London Spitfire',
      corPrimaria: '#EE82EE',
      corSecundaria: '#FFB6C1',
      
    },
    {
      nome: 'Philadelphia Fusion',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Seoul Dynasty',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Los Angeles Valiant',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Shanghai Dragons',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE95F5',
    },
    {
      nome: 'San Francisco Shock',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Vancouver Titans',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }    
  ]

  const [colaboradores, setColabs] = useState([])

  const novoColab = (colaborador) => {
    setColabs([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Form val={times.map(time => time.nome)} colabCadastro={colaborador => novoColab(colaborador)}/>

      {times.map(timex => <Time 
        key={timex.nome} 
        time={timex.nome} 
        corUm={timex.corPrimaria} 
        corDois={timex.corSecundaria}
        colaboradores={colaboradores.filter( colaborador => colaborador.list === timex.nome )}
      />)}

    </div>
  )
}

export default App;
