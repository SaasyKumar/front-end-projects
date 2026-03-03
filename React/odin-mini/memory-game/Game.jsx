import { useEffect, useState } from "react";
import './game.css'

function shuffleArray(arr) {
  const newArr = [...arr]; // avoid mutating original
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function Game({pokemonIDList,onSuccess,score,fetchNewData}){
    const [pokemonDetailsSet,updateDetailsSet] = useState({});
    // const [detailsLoaded,updateLoadState] = useState(false);
    const [isGameEnded,updateGameState] = useState(false);
    const [memory,updateMemory] = useState([]);

    useEffect(()=>{
        async function getPokemonDetails(id) {
            const url = "https://pokeapi.co/api/v2/pokemon/" + id;
            const resp = await fetch(url);
            const data = await resp.json();
            updateDetailsSet((prev)=>{
                return{
                    ...prev,
                    // TODO: imp [] and spread operator works for 
                    [data["id"]]: data,
                }
            });
        }
        pokemonIDList.map((item)=>{
            getPokemonDetails(item);
        });
        return ()=>{
            updateDetailsSet({});
        }
    },[pokemonIDList]);
    function memorize(id,ev){
        if(memory.includes(id)){
            console.log("You never saw me??");
            updateGameState(true);
            fetchNewData(true);
            return;
        }
        updateMemory(prev=>[... prev, id]);
        score++;
        onSuccess(score);
        if( score == 12){
            fetchNewData();
        }
    };

    let cards = Object.keys(pokemonDetailsSet).map((key)=>{
        return <div className="cards" key={key} onClick={memorize.bind(null,key)}><img src={pokemonDetailsSet[key]["sprites"]["front_default"]} alt={pokemonDetailsSet[key]["name"]}></img><div className="name">{pokemonDetailsSet[key]["name"].toString()}</div></div>
    });
    cards = shuffleArray(cards);
    return(
        <>
        {/* {
            isGameEnded == true ?
            <div></div>: */}
            <>
                <div className="row">{cards.slice(0,4)}</div>
                <div className="row">{cards.slice(4,8)}</div>
                <div className="row">{cards.slice(8,12)}</div>    
            </>
        {/* } */}
            {/* <div className="row">{cards.slice(12,16)}</div> */}
        </>
    )
}