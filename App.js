import { useFonts } from 'expo-font';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style/Style.js';

export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans': require('./assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
  });


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
      />
      <TextInput
        style={[styles.input, styles.text]}
        placeholder='Senha'
        placeholderTextColor='#581183'
        textContentType='password'
      />
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.text, styles.textWhite]}>
          Entrar
        </Text>
      </TouchableOpacity>
      <View style={styles.lineRow}>
        <View style={styles.line} />
        <View>
          <Text style={[styles.text, styles.textBold]}>ou</Text>
        </View>
        <View style={styles.line} />
        
      </View>

      <Text style={[styles.text]}>Ao continuar, você concorda com os Termos de Serviço e a Política de Privacidade.</Text>
      <Text style={[styles.text]}>Ainda não esta no OldHelp? Crie sua conta.</Text>


    </View>
  );
}


//Já tem uma conta? Entrar.