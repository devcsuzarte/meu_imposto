import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const [text, onChangeText] = useState(text);
  const [reposta, setResposta] = useState('Informe o que deseja exibir');
  const [area, setArea] = useState("")
  const [estado, setEstado] = useState("");
  const [ano, setAno] = useState("");
  let firstSend = true;
  let areaGet = false;
  const anoGet = false;
  const saude = "36000"
  const educacao = "26000"
  const seguranca = "52000"
  const infra = "56000"
  const estados = [""]
  //    fetch('https://api.portaldatransparencia.gov.br/api-de-dados/despesas/por-orgao?ano=2022&orgaoSuperior=26000&orgao=26427&pagina=1', {
// 2022,26000,26427
//    fetch(`https://api.portaldatransparencia.gov.br/api-de-dados/despesas/por-orgao?ano=${ano}&orgaoSuperior=${codOrgaoSup}&orgao=${orgao}&pagina=1`, {

  const getValuesFromApi = (ano, codOrgaoSup) => {
    fetch(`https://api.portaldatransparencia.gov.br/api-de-dados/despesas/por-orgao?ano=${ano}&orgaoSuperior=${codOrgaoSup}&pagina=1`, {
      method: 'GET',
      headers: {
        "accept": "*/*", 
        "chave-api-dados": "57f815b17309a11505e6cf2601da0b0b"
      },
    }).then( (resposta) => resposta.json())
    .then( ( json ) => console.log(json) )
    .catch( ( error ) => console.error(error));

  };

  function setURL(area, ano){

    ano = parseInt(ano)

    switch(area){
      case"EDU":
      getValuesFromApi(ano, "26000")
        break;
      case"SAU":
      getValuesFromApi(ano, "36000")
          break;
      case"SEG":
      getValuesFromApi(ano, "36000")
          break;
          case"INF":
          getValuesFromApi(ano, "36000")
              break;
      default:
        break;

    }

  }

  function sentWasPressed(){
    if (firstSend) {
      setResposta("Olá seja bem vindo ao Meu Imposto. Digite o número correspondente a área de interesse. 1 - Educação, 2 - Saúde, 3 - Segurança, 4 - Infraestrutura")
      firstSend = false;
      
    } 
    
    if (!areaGet && !firstSend){

      switch (text) {
        case "1":
        setArea("EDU")
        areaGet = true
        break;
        case "2":
        setArea("SAU")
        areaGet = true
        break;
        case "3":
          setArea("SEG")
          areaGet = true
          break;
        case "4":
          setArea("INF")
          areaGet = true
            break;
        default:
          setResposta("Insira uma das opções informadas")
          break;
      }
    }

    if (areaGet && !firstSend){
      setResposta("Qual o ano?")
      setURL(area, text)
      switch (text) {
        case "Bahia":
        setEstado("BA")
        break;
        case "Rio de Janeiro":
          setEstado("RJ")
        break;
        case "Pará":
          setEstado("PA")
          break;
        case "Minas Gerais":
          setEstado("MG")
            break;
        default:
          setResposta("Insira uma das opções informadas")
          break;
      }

    }

    firstSend = true
  }

  return (
    <SafeAreaView style={styles.root}>
      <View>
      <Text>
        Meu Imposto
      </Text>
      </View>

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
        <Text>
          {reposta}
        </Text>
      </View>
      <View style={styles.inputChat}>
         <TextInput
        style={styles.input}
        value={text}
        placeholder='Digite aqui:'
      />
      <View>
      <TouchableOpacity style={styles.button} onPress={getValuesFromApi(2021,26000,26427)}>
        <Text>
        <AntDesign name="arrowright" size={24} color="black" />
        </Text>
      </TouchableOpacity>
      </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputChat: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%"
  }
});
