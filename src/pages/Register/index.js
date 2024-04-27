import MaskInput, { Masks } from 'react-native-mask-input';
import { View, Text, TextInput, Pressable, } from 'react-native';
import { useState } from 'react';
import styles from './style';
import Logo from './../../components/logo/';
import Eye from './../../components/eye';

export default function Register({ navigation }) {

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
  const [textBirthdateEmpty, setTextBirthdate] = useState(styles.displayNone);
  //eye style
  const [secure, setSecure] = useState(true);
  const [eyeClick, setEyeClick] = useState(true);

  const [styleEmail, setStyleEmail] = useState(styles.input);
  const [stylePassword, setStylePassword] = useState(styles.input);
  const [styleBirthdate, setStyleBirthdate] = useState(styles.input);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const blurEmptyField = (id) => {
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
    if (id === 'birthdateInput') {
      if (email === '') {
        setStyleBirthdate(styles.redInput);
        setTextBirthdate(styles.redText);
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

  const changeTextBirthdate = (text) => {
    setBirthdate(text);
    setStyleBirthdate(styles.input);
    setTextBirthdate(styles.displayNone);
  };

  function fnValidar() {

    email !== '' ? '' : blurEmptyField('emailInput')
    password !== '' ? '' : blurEmptyField('passwordInput')
    birthdate !== '' ? '' : blurEmptyField('birthdateInput')

    const validEmail = (email) => {
      //return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
      return true
    }

    const validPassword = (password) => {
      return /^.{1,}$/.test(password)
    }

    if (validEmail(email) === true &&
      validPassword(password) === true) {
      accessName();
    }
  }

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

      <View style={{ width: '80%', }}>

        <Text style={[styles.text, styles.purpleText, styles.boldText, styles.label]}>
          Data de nascimento
        </Text>

        <MaskInput
          value={birthdate}
          onChangeText={changeTextBirthdate}
          onBlur={() => blurEmptyField('birthdateInput')}
          mask={Masks.DATE_DDMMYYYY}
          style={styleBirthdate}
          inputMode='numeric'
          placeholder='__/__/____'
          placeholderTextColor='#581183'
        />
        <Text style={textBirthdateEmpty}>Este campo é obrigatório</Text>

      </View>
      <Pressable
        onPress={fnValidar}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 },
          styles.button]}>
        <Text style={[styles.text, styles.whiteText]}>
          Cadastre-se
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
      <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={[styles.text, styles.centerText, styles.greyText]}>Já tem uma conta? </Text>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 }]}>
          <Text style={[styles.text, styles.purpleText, styles.boldText,]}>Entrar.</Text>
        </Pressable>
      </View>

    </View>
  );
}
