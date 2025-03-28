import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router'

export default function reset() {
  const [text, setText] = useState('');

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Reset Password</Text>
                <Text>  </Text>
                <Text style={styles.text_left}>Enter OTP sent to email or phone no: </Text>
                <TextInput
                style={styles.text_input}
                placeholder=" Enter OTP"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                />
                <Text>  </Text>
                <Text style={styles.text_left}>New password: </Text>
                <TextInput
                style={styles.text_input}
                placeholder=" Enter password"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                />
                <Text>  </Text>
                <Text style={styles.text_left}>Confirm password: </Text>
                <TextInput
                style={styles.text_input}
                placeholder=" Enter password"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                />
                <Text>  </Text>
                <Text>  </Text>
                <view style={styles.button}>
                  <Link href='/changed' style={styles.text}>Reset password</Link>
                </view>
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
    box: {
        borderWidth: 1,          // Border thickness
        borderColor: '#000',     // Border color
        padding: 20,             // Padding inside the box
        borderRadius: 25,         // Rounded corners (optional)
        backgroundColor: '#EFEFEF'
    }
});