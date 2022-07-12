import {useState, useEffect} from 'react'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App(){
    const [character, setCharacter] = useState([])
    const [copyPersons, setCopyCharacter] = useState([])

    useEffect(() => {
        async function getData(){
          const getApi = await fetch("https://rickandmortyapi.com/api/character")
          const response = await getApi.json()
          const data = response.results
          
          setCharacter(data)
          setCopyCharacter(data)
        }
        getData()
      }, [])

 
    function filterArray(researchedCharacter){
        const inputRequested = researchedCharacter.toLowerCase()
        const arrayResearchedCharacter = character.filter(el => el.name.toLowerCase().includes(inputRequested))
        setCopyCharacter(arrayResearchedCharacter)
    }

    function filterSpecie(specie){
        const requestedSpecie = specie
        const arraySpecies = character.filter(el => el.species === requestedSpecie)
        setCopyCharacter(arraySpecies)
    }

    function filterDead(statusDead){
        const arrayCharacterDead = character.filter(el => el.status === statusDead)
        setCopyCharacter(arrayCharacterDead)
    }

    function filterAlive(statusAlive){
        const arrayCharacterAlive = character.filter(el => el.status === statusAlive)
        setCopyCharacter(arrayCharacterAlive)
    }

    return(
        <>
            <Header filterAlive={filterAlive} filterSpecie={filterSpecie} filterArray={filterArray} filterDead={filterDead}/>
            
            {
                copyPersons.map(el => {
                    return <Card key={el.id} url_img={el.image} name={el.name} status={el.status} origin={el.origin.name} gender={el.gender} />
                })
            }
        </>
    )   
}

export default App;