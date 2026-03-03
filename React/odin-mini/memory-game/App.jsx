import { useEffect, useState } from "react";
import Game from "./Game";
import './app.css'

let usedPokemon = [];
function getRandomTwelve(){
    let list =[];
    for(let i =0; i < 12; i++ ){
        const randID = Math.floor(Math.random()*1000);
        if(usedPokemon.includes(randID)){
            i--;
        }else{
            usedPokemon.push(randID);
            list.push(randID);
        }
    }
    return list;
}
export default function App(){
    const [pokemonList,updateList] = useState([]);
    const [isLoading,updateLoad] =useState(true);
    const [bestScore,updateBestScore] = useState(0);
    const [currentScore,updateCurrentScore] = useState(0);
    const [getNewData,updateNewDataFlag] = useState(0);
    useEffect(()=>{
        // async function getPokemons() {
        //                  GET FIRST 20 pokemons
        //     const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
        //     const json = await resp.json();
        //     updateList(json["results"]);
        //     updateLoad(false);
        // }
        // getPokemons();
        console.log("did mount");
        updateList(getRandomTwelve());
        updateLoad(false);
    },[getNewData]);
    function onSuccess(value){
        updateCurrentScore(value);
        if( value > bestScore){
            updateBestScore(value);
        }
    }
    function fetchNewData(gameEnded){
        if(gameEnded){
            updateCurrentScore(0);
        }
        updateNewDataFlag(getNewData +1);
    }
    return(
        <>
            <header><div className="game-name">Pokemon Memory Game</div><div><div>Best Score: {bestScore}</div><div>Current Score: {currentScore}</div></div></header>
            <p>Get points by clicking on an image but don't click on any more than once!</p>
            {isLoading == true ? <div>Loading....</div>:<Game pokemonIDList={pokemonList} onSuccess={onSuccess} fetchNewData={fetchNewData} score={currentScore}></Game>}
        </>
    )
}