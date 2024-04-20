
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import { useState } from 'react';
import styles from './style';
import Logo from './../../components/logo/index.js';

export default function Name({ navigation }) {
  const [name, setName] = useState('');

  function accessHome() {
    navigation.navigate('Home')
  }


  return (
    <View style={styles.container}>
      <Logo />
      <Text style={[styles.text, styles.purpleText]}>
        Adicionando novo perfil
      </Text>
      <View style={{ width: '80%', }}>

        <Text style={[styles.text, styles.purpleText, styles.boldText]}>
          Nome
        </Text>
        <TextInput
          style={[styles.input, styles.text]}
          placeholder='Adicionar nome'
          placeholderTextColor='#581183'
          value={name}
          onChangeText={text => setName(text)}
        />

      </View>

      <TouchableOpacity
        onPress={accessHome}
        style={styles.button}>
        <Text style={[styles.text, styles.whiteText]}>
          Adicionar perfil
        </Text>
      </TouchableOpacity>

    </View>
  );
}

//  const {email,password} = route.params; para importa de outra tela