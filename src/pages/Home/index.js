import { View, Text,StatusBar } from 'react-native';
import styles from './style';
import { useState } from 'react';

export default function Home({ navigation, route }) {

  const {email,password,name} = route.params;

  return (

      <View style={styles.container}>

<StatusBar backgroundColor="#581183" barStyle="light-content" />
      <View style={styles.header}>
          <Text style={[styles.text, styles.whiteText]}>
            {"Bem-vindo"}({"a"})
          </Text>
          <Text style={[styles.text, styles.whiteText, styles.border]}>
            {name}
          </Text>
      </View>

        <Text style={[styles.text, styles.centerText]}>
          Email: {email}{'\n'}{'\n'}
          Senha: {password}{'\n'}{'\n'}
          Nome: {name}{'\n'}
        </Text>
      </View>
  );
}
