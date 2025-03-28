import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router'

export default function login() {
  const [text, setText] = useState('');

    return(
        <View style={styles.container}>
          <Text style={styles.big_text}> Willing to contribute to our movement?</Text>
          <Text>  </Text>
          <Text style={styles.text}>A publicly-accessible restroom means that the public are allowed to access without needing to pay for it. Your contribution will make sure that those after you are able to access clean-er toilets than you have. To add or edit a public toilet, you will first need to log in or sign up:</Text>
            <Text>  </Text>
            <Text>  </Text>
            <View style={styles.box}>
                <Text style={styles.text}>Log in</Text>
                <Text>  </Text>
                <Text style={styles.text_left}>Email or phone no: </Text>
                <TextInput
                style={styles.text_input}
                placeholder=" Enter email or phone no"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                
                />
                <Text>  </Text>
                <Text style={styles.text_left}>Password: </Text>
                <TextInput
                style={styles.text_input}
                placeholder=" Enter password"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                />
                <Text>  </Text>
                <Text>  </Text>
                <view style={styles.button}>
                  <Text style={styles.text}>Log in</Text>
                </view>
                <Text>  </Text>
                <Text>  </Text>
                <Link href='/forgot' style={styles.text}>Forgot password?</Link>
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
    big_text: {
      color: '#000000',
      textAlign: 'center',
      fontSize: 90,
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
        backgroundColor: '#89CFF0',
    },
    box: {
        borderWidth: 1,          // Border thickness
        borderColor: '#000',     // Border color
        padding: 20,             // Padding inside the box
        borderRadius: 25,         // Rounded corners (optional)
        backgroundColor: '#EFEFEF'
    }
});