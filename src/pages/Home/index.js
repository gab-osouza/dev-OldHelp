import { View, } from 'react-native';
import styles from './style';

export default function Home({navigation, route }) {


  return (


    <View style={styles.container}>
      <View style={styles.header}>
        <Text>
          Bem Vindo
        </Text>
        <Text>
          {name}
        </Text>
      </View>
    </View>
  );
}
