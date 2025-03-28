import { Text, View,  StyleSheet } from 'react-native';
import { Link } from 'expo-router'

export default function find() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>You found me!</Text>
            <Text>  </Text>
            <Text>  </Text>
            <View style={styles.box}>
                <Link href="/" style= {styles.button}>Feeling homesick?</Link>
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