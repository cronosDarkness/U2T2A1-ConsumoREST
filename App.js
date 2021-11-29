import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // const [pokemon, setPokemon] = useState("pikachu");
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);  
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      // const url = `https://pokeapi.co/api/v2/pokemon?limit=10`;
      const res = await axios.get(url);
      toArray.push(res.data);
      
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);

      // console.log(res);

    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input 
          
          type="text"
          onChange={handleChange}
          placeholder="Nombre del Pokemon"
          
          />
        </label>
      </form>

      

      {pokemonData.map((data) => {
        return (

          


          <div className="container">
            <img src={data.sprites["front_default"]} />
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Nombre:</div>
                  <div className="divTableCell">{data.name}</div>
                </div>
                
                <div className="divTableRow">
                  <div className="divTableCell">Tipo:</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                
                <div className="divTableRow">
                  <div className="divTableCell">Altura:</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                </div>
                
                <div className="divTableRow">
                  <div className="divTableCell">Peso:</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>
                
                <div className="divTableRow">
                  <div className="divTableCell">Número de batallas: </div>
                  <div className="divTableCell">{data.game_indices.length}</div>
                </div>

              </div>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default App;



// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// //token: 243a2f94048fec74ec240cd2e952189bb40c017a

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
