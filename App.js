import { useFonts } from 'expo-font';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './style/Style.js';



export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans': require('./assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
  });

  const [validation, setValidation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function val() {
    let campo1;
    let campo2;
    let validacao;

    campo1 = { setEmail };
    campo2 = { setPassword };

    validacao = campo1, campo2;

    setValidation(validacao);

    if (email == "" || password == "") {
      setValidation('Campo vazio')
    }

  }

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 230,
          height: 200,
          resizeMode: 'contain',
        }}
        source={{
          uri: './assets/logo.svg',
        }}
      />

      <TextInput
        style={[styles.input, styles.text]}
        placeholder='Email'
        placeholderTextColor='#581183'
        keyboardType='email-address'
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text>
        {validation}
      </Text>

      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={[styles.input, styles.text]}
        secureTextEntry={true}
        placeholder='Senha'
        placeholderTextColor='#581183'
      />
      <Text>
        {validation}
      </Text>

      <TouchableOpacity
        onPress={val}
        style={styles.button}>
        <Text style={[styles.text, styles.textWhite]}>
          Entrar
        </Text>
      </TouchableOpacity>

      {/*--- ou ---*/}

      <View style={styles.lineRow}>
        <View style={styles.line} />
        <View>
          <Text style={[styles.text, styles.textBold]}>ou</Text>
        </View>
        <View style={styles.line} />

      </View>

      <Text style={[styles.text, styles.textCenter]}>Ao continuar, você concorda com os Termos de Serviço e a Política de Privacidade.</Text>
      <Text style={[styles.text, styles.textCenter]}>Ainda não esta no OldHelp? Crie sua conta.</Text>


    </View>
  );
}


//Já tem uma conta? Entrar.