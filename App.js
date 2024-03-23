import { useFonts } from 'expo-font';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './style/Style.js';



export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans': require('./assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isEmptyPassword, setIsEmptyPassword] = useState(false);


  function fnValidar() {
    let sEmail;
    let sPassword;
    sEmail = email;
    sPassword = password;

    if (sEmail == '') {
      setIsEmptyEmail(true);
    } else {
      setIsEmptyEmail(false);
    }

    if (sPassword == '') {
      setIsEmptyPassword(true);
    } else {
      setIsEmptyPassword(false);
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
        {isEmptyEmail == true ? "Campo vazio!" : ""}
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
        {isEmptyPassword == true ? "Campo vazio!" : ""}
      </Text>

      <TouchableOpacity
        onPress={fnValidar}
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