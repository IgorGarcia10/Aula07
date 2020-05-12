import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Keyboard } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {

  const endPoint= 
  "https://api.openweathermap.org/data/2.5/onecall?";
  const apiKey = "967397ed6cf5ecf4dfdef15a3e9a9a56";
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [previsoes, setPrevisoes] = useState([]);

  const capturarLat = (lat) => {
    setLat(lat);
  }
  const capturarLon = (lon) => {
    setLon(lon);
  }
  

  const obtemTempo = () => {
    setPrevisoes([]);
    const target = endPoint+"lat="+lat+"&"+"lon="+lon+"&exclude=hourly,daily&appid="+apiKey;
    fetch(target)
    .then((dados) => dados.json())
    .then((dados) => {
      setPrevisoes(dados["list"])
    });
    Keyboard.dismiss();
  }


  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nome}
          placeholder="Digite a latitude"
          onChangeText={capturarLat}
          value={lat}
        />
        <TextInput
          style={styles.nome}
          placeholder="Digite a longitude"
          onChangeText={capturarLon}
          value={lon}
        />
        <Button
          title="Ok"
          onPress={obtemTempo}
        />

        
      </View>
      <View>
        <FlatList
          data={previsoes}
          renderItem={
          

            previsao => (
              <PrevisaoItem previsao={previsao}/>
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  nome:{
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
    
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    flexDirection: 'column'
  }
});
