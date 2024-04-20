import { View, Text } from 'react-native';
import styles from './style';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function Home({ navigation, route }) {

  const {email,password,name} = route.params;

  const [fontsLoaded] = useFonts({
    'PlusJakartaSans': require('./../../fonts/PlusJakartaSans-VariableFont_wght.ttf'),
  });

  return (

      <View style={styles.container}>

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
