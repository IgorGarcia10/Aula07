import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cartao from './Cartao'

const PrevisaoItem = (props) => {
  return (
      
    <Cartao estilos={estilos.cartao}>
        <View style={estilos.tela}>
            <Image
                style={estilos.imagem}
                source={{uri:"https://openweathermap.org/img/wn/" +
                    props.previsao.item.weather[0].icon+ ".png"}}
            />
            <View>
                <View style={estilos.primeiraLinha}>
                    <Text style={estilos.valor}>
                        Termica: {props.previsao.item.hourly.feels_like}
                    </Text>
                </View>
                
                <View style={estilos.segundaLinha}>
                    <Text style={estilos.valor}>
                        Nascer: {props.previsao.item.current.sunrise}
                    </Text>
                    
                    <Text style={estilos.valor}>
                        Pôr: {props.previsao.item.current.sunset}
                    </Text>
                </View>
            </View>
        </View>
    </Cartao>
  );
}

const estilos=StyleSheet.create({
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
});

export default PrevisaoItem;
