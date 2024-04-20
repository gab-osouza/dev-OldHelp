import { View, Text, TextInput, TouchableOpacity, Alert, } from 'react-native';
import { useState } from 'react';
import styles from './../Login/style';
import Logo from './../../components/logo/index.js';
import MaskInput, { Masks } from 'react-native-mask-input';


export default function Register({ navigation }) {

  function accessLogin() {
    navigation.navigate('Login')
  }

  function accessName() {
    navigation.navigate('Name',
    {email: email, password: password})

  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');

  function fnValidar() {
    const emailAddress = email;
    const userPassword = password;
    const userBirthdate = birthdate;

    const isEmptyEmail = emailAddress === '';
    const isEmptyPassword = userPassword === '';
    const isEmptyBirthdate = userBirthdate === '';

    if (isEmptyEmail || isEmptyPassword || isEmptyBirthdate) {
      const errorMessage = isEmptyEmail && isEmptyPassword
        ? 'Preencha todos os campos.'
        : ''
      Alert.alert(errorMessage, '', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ], { cancelable: true });
    }else{
      accessName();
    }
    
  }


  return (


    <View style={styles.container}>

      <Logo />
      <View style={{ width: '80%', }}>

        <Text style={[styles.text, styles.purpleText, styles.boldText]}>
          Email
        </Text>
        <TextInput
          style={[styles.input, styles.text]}
          placeholder='Email'
          placeholderTextColor='#581183'
          keyboardType='email-address'
          value={email}
          onChangeText={text => setEmail(text)}
        />

      </View>
      <View style={{ width: '80%', }}>

        <Text style={[styles.text, styles.purpleText, styles.boldText, styles.label]}>
          Senha
        </Text>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={[styles.input, styles.text]}
          secureTextEntry={true}
          placeholder='Senha'
          placeholderTextColor='#581183'
        />


      </View>
      <View style={{ width: '80%', }}>

        <Text style={[styles.text, styles.purpleText, styles.boldText, styles.label]}>
          Data de nascimento
        </Text>

        <MaskInput
          value={birthdate}
          onChangeText={setBirthdate}
          mask={Masks.DATE_DDMMYYYY}
          style={[styles.input, styles.text]}
          keyboardType='numeric'
          placeholder='__/__/____'
          placeholderTextColor='#581183'
        />

      </View>

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
      <Text style={[styles.text, styles.centerText, styles.greyText, styles.marginH]}>Ao continuar, você concorda com os Termos de Serviço e a Política de Privacidade.</Text>


      <TouchableOpacity
        onPress={accessLogin}
        style={{ flexDirection: 'row', }}>

        <Text style={[styles.text, styles.centerText, styles.greyText]}>Já tem uma conta?</Text>
        <Text style={[styles.text, styles.purpleText, styles.boldText,]}>Entrar.</Text>
      </TouchableOpacity>





    </View>
  );
}
