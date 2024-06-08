import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function App() {
  const [text, onChangeText] = React.useState('Useless Text');

  //    fetch('https://api.portaldatransparencia.gov.br/api-de-dados/despesas/por-orgao?ano=2022&orgaoSuperior=26000&orgao=26427&pagina=1', {
// 2022,26000,26427
  const getValuesFromApi = (ano, codOrgaoSup, orgao) => {
    fetch(`https://api.portaldatransparencia.gov.br/api-de-dados/despesas/por-orgao?ano=${ano}&orgaoSuperior=${codOrgaoSup}&orgao=${orgao}&pagina=1`, {
      method: 'GET',
      headers: {
        "accept": "*/*", 
        "chave-api-dados": "57f815b17309a11505e6cf2601da0b0b"
      },
    }).then( (resposta) => resposta.json())
    .then( ( json ) => console.log(json) )
    .catch( ( error ) => console.error(error));

  };

  return (
    <View style={styles.container}>
      <View>
        <View>
        <TouchableOpacity>
          <Text>
            Educação
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            Saúde
          </Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
          <Text>
            Segurança
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            Infraestrutura
          </Text>
        </TouchableOpacity>
        </View>
      </View>
      <View>
         <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      </View>
      <View>
      <TouchableOpacity style={styles.button} onPress={getValuesFromApi(2021,26000,26427)}>
        <Text>
          Clique
        </Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputChat: {
    
  }
});
