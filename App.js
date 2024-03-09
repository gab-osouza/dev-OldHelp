import { useFonts } from 'expo-font';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

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
        selectionColor= '#581183'
        textContentType= 'password' 
      />
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.text, styles.textWhite]}>
          Entrar
        </Text>
      </TouchableOpacity>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  text: {
    fontFamily: 'PlusJakartaSans',
    fontSize: 16,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontWeight: '600',
    borderWidth: 2,
    borderColor: '#581183',
    borderRadius: 15,
    width: "80%"
  },
  button: {
    color: '#581183',
    backgroundColor: '#581183',
    borderRadius: 20,
    width: "70%",
    paddingVertical:8,
    alignItems: 'center',
  },
  textWhite: {
    color:'#fff',
    fontWeight: '600',
    fontSize: 24
  },
});
