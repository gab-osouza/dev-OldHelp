import { View, Text, TextInput, Pressable, } from 'react-native';
import { useState } from 'react';
import styles from './style';
import Logo from './../../components/logo/';
import Eye from './../../components/eye/';

export default function Login({ navigation }) {


  function accessRegister() {
    navigation.navigate('Register')
  }

  function fnEye() {
    if (eyeClick === true) {
      setEyeClick(false);
      setSecure(false);
    } else {
      setEyeClick(true);
      setSecure(true);
    }
  }

  function accessName() {
    navigation.navigate('Name', {
      email: email,
      password: password
    })
  }

  const [textEmailEmpty, setTextEmail] = useState(styles.displayNone);
  const [textPasswordEmpty, setTextPassword] = useState(styles.displayNone);
  //eye style
  const [secure, setSecure] = useState(true);
  const [eyeClick, setEyeClick] = useState(true);

  const [styleEmail, setStyleEmail] = useState(styles.input);
  const [stylePassword, setStylePassword] = useState(styles.input);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function blurEmptyField(id) {
    if (id === 'passwordInput') {
      if (password === '') {
        setStylePassword(styles.redInput);
        setTextPassword(styles.redText);
      }
    }
    if (id === 'emailInput') {
      if (email === '') {
        setStyleEmail(styles.redInput);
        setTextEmail(styles.redText);
      }
    }
  };

  const changeTextPassword = (text) => {
    setPassword(text);
    setStylePassword(styles.input);
    setTextPassword(styles.displayNone);
  };

  const changeTextEmail = (text) => {
    setEmail(text);
    setStyleEmail(styles.input);
    setTextEmail(styles.displayNone);
  };

  function fnValidar() {

    email !== '' ? '' : blurEmptyField('emailInput')
    password !== '' ? '' : blurEmptyField('passwordInput')

    const validEmail = (email) => {
      //return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
      return true
    }

    const validPassword = (password) => {
      return /^.{1,}$/.test(password) // valida a quantidade de caractere
    }

    if (validEmail(email) === true &&
      validPassword(password) === true) {
      accessName();
    }

  };

  return (


    <View style={styles.container}>

      <Logo />


      <View style={{ width: '80%', }}>
        <Text style={[styles.text, styles.purpleText, styles.boldText, styles.label]}>
          Email
        </Text>
        <TextInput
          inputMode='email'
          style={styleEmail}
          value={email}
          onChangeText={changeTextEmail}
          onBlur={() => blurEmptyField('emailInput')}
        />
        <Text style={textEmailEmpty}>Este campo é obrigatório</Text>
      </View>


      <View style={{ width: '80%', }}>
        <Text style={[styles.text, styles.purpleText, styles.boldText, styles.label]}>
          Senha
        </Text>
        <View style={{ justifyContent: 'center' }}>

          <TextInput
            style={stylePassword}
            value={password}
            onChangeText={changeTextPassword}
            secureTextEntry={secure}
            onBlur={() => blurEmptyField('passwordInput')}
          />
          <Eye onClick={fnEye} />
        </View>
        <Text style={textPasswordEmpty}>Este campo é obrigatório</Text>

      </View>

      <Pressable
        onPress={fnValidar}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 }, styles.button]}>
        <Text style={[styles.text, styles.whiteText]}>
          Entrar
        </Text>
      </Pressable>



      {/*--- ou ---*/}

      <View style={styles.lineRow}>
        <View style={styles.line} />
        <View>
          <Text style={[styles.text, styles.boldText, styles.lineText, styles.purpleText]}>ou</Text>
        </View>
        <View style={styles.line} />

      </View>

      <Text style={[styles.text, styles.centerText, styles.greyText, styles.marginH]}>Ao continuar, você concorda com os Termos de Serviço e a Política de Privacidade.</Text>
      <Text style={[styles.text, styles.centerText, styles.greyText]}>Ainda não esta no OldHelp?{'\n'}
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 }]}
          onPress={accessRegister}>
          <Text style={[styles.text, styles.purpleText, styles.boldText]}>
            Crie sua conta.
          </Text>
        </Pressable>
      </Text>

    </View>
  );
}
