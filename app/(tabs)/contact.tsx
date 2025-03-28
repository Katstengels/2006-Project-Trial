import { Text, View,  StyleSheet } from 'react-native';

export default function about() {
    return(
    <View style={styles.container}>
        <Text style={styles.big_text}> Contact us</Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text style={styles.text}>Have some queries or suggestions? Reach us at: </Text>
        <Text>  </Text>
        <Text style={styles.text}>Phone no: (+65) 9876 5432 (probably won't pick up)</Text>
        <Text>  </Text>
        <Text style={styles.text}>Email: pls.dont@contact.me</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'baseline',
        justifyContent:'flex-start',
      },
    text: {
        color: '#000000',
        textAlign: 'left',
        fontSize: 25,
      },
      big_text: {
        color: '#000000',
        textAlign: 'left',
        fontSize: 60,
      },
})