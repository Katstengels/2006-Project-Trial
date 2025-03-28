import { Text, View,  StyleSheet } from 'react-native';
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.big_text}>Find a restroom you need</Text>
      <Text style={styles.text}>Locate clean & accessible toilets near you</Text>
      <Text>  </Text>
      <Text>  </Text>
      <View style={styles.box}>
        <Link href="/find" style= {styles.button}>Find a toilet</Link>
      </View>
      <Text>  </Text>
      <View style={styles.box}>
        <Link href="/add" style= {styles.button}>Add a toilet</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 25,
  },
  big_text: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 90,
  },
  button: {
    fontSize: 25,
    color: '#000000',
  },
  box: {
    borderWidth: 0,          // Border thickness
    borderColor: '#000',     // Border color
    padding: 20,             // Padding inside the box
    borderRadius: 50,         // Rounded corners (optional)
    backgroundColor: '#89CFF0'
  }
});
