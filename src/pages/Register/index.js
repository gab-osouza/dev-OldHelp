import { View, Text, TextInput, TouchableOpacity, Alert, } from 'react-native';
import { useState } from 'react';
import styles from './style';
import Logo from './../../components/logo/index.js';

export default function Register({ navigation }) {

  function accessLogin() {
    navigation.navigate('Login')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function fnValidar() {
    const emailAddress = email;
    const userPassword = password;

    const isEmptyEmail = emailAddress === '';
    const isEmptyPassword = userPassword === '';

    if (isEmptyEmail || isEmptyPassword) {
      const errorMessage = isEmptyEmail && isEmptyPassword
        ? 'Insira seu email e senha para Entrar.'
        : isEmptyEmail
          ? 'Insira seu email para Entrar.'
          : 'Insira sua senha para entrar.';

      Alert.alert(errorMessage, '', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ], { cancelable: true });
    }
  }


  return (


    <View style={styles.container}>

      <Logo style={{ width: 220, height: 150 }} />
      <TextInput
        style={[styles.input, styles.text]}
        placeholder='Email'
        placeholderTextColor='#581183'
        keyboardType='email-address'
        value={email}
        onChangeText={text => setEmail(text)}
      />


      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={[styles.input, styles.text]}
        secureTextEntry={true}
        placeholder='Senha'
        placeholderTextColor='#581183'
      />

      <TouchableOpacity
        onPress={fnValidar}
        style={styles.button}>
        <Text style={[styles.text, styles.whiteText]}>
          Cadastre-se
        </Text>
      </TouchableOpacity>

 

      {/*--- ou ---*/}

      <View style={styles.lineRow}>
        <View style={styles.line} />
        <View>
          <Text style={[styles.text, styles.boldText, styles.lineText, styles.purpleText]}>ou</Text>
        </View>
        <View style={styles.line} />

      </View>

      <Text style={[styles.text, styles.centerText, styles.greyText]}>Ao continuar, você concorda com os Termos de Serviço e a Política de Privacidade.</Text>
      <Text style={[styles.text, styles.centerText, styles.greyText]}>Ainda não esta no OldHelp?{'\n'}
        <TouchableOpacity
          onPress={accessLogin}>
          <Text style={[styles.text, styles.purpleText, styles.boldText]}>
            Crie sua conta.
          </Text>
        </TouchableOpacity>
      </Text>





    </View>
  );
}
