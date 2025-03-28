import { Text, View,  StyleSheet } from 'react-native';

export default function about() {
    return(
    <View style={styles.container}>
        <Text style={styles.big_text}> About us</Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text style={styles.text}>Have you ever had a stomachache so bad you wanted to die? Have you ever felt the relief of finally reaching the toilet just for it to be more filthy than a garbage truck? </Text>
        <Text>  </Text>
        <Text style={styles.text}>Well fear no longer. We are a group of unpaid, overworked uni student who has came up with a solution! With restroom-er, you are guaranteed to find the nearest toilet in your area and be able to review its conditions before even stepping foot inside.</Text>
        <Text>  </Text>
        <Text style={styles.text}>We pledge to make your toilet experience non-shitty since 2025.</Text>
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