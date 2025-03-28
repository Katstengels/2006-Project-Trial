import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router'

export default function forgot() {
  const [text, setText] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.big_text}>Forgot your password?</Text>
            <Text>  </Text>
            <Text>  </Text>
            <Text style={styles.text}>Don't worry, we got you covered.</Text>
            <Text>  </Text>
            <Text>  </Text>
            <View style={styles.box}>
                <Text style={styles.text}>Reset Password</Text>
                <Text>  </Text>
                <Text style={styles.text_left}>Email or phone no: </Text>
                <TextInput
                style={styles.text_input}
                placeholder=" Enter email or phone no"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                />
                <Text>  </Text>
                <Text>  </Text>
                <view style={styles.button}>
                  <Link href='/reset' style={styles.text}>Request OTP</Link>
                </view>
                <Text>  </Text>
                <Text>  </Text>
                <Link href='/login' style={styles.text}>Log in</Link>
                <Text>  </Text>
                <Link href="/signup" style={styles.text}>Sign up</Link>
                
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
    text_left: {
      color: '#000000',
      textAlign: 'left',
      fontSize: 25,
    },
    text_input: {
      color: '#000000',
      textAlign: 'left',
      fontSize: 25,
      backgroundColor: '#ffffff'
    },
    button: {
        borderWidth: 1,          // Border thickness
        borderColor: '#000',     // Border color
        padding: 15,             // Padding inside the box
        borderRadius: 25,         // Rounded corners (optional)
        backgroundColor: '#89CFF0'
    },
    big_text: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 90,
    },
    box: {
        borderWidth: 1,          // Border thickness
        borderColor: '#000',     // Border color
        padding: 20,             // Padding inside the box
        borderRadius: 25,         // Rounded corners (optional)
        backgroundColor: '#EFEFEF'
    }
});