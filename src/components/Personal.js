import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Eye from 'react-native-vector-icons/FontAwesome';

const Personal = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [textinput1, setTextinput1] = useState('');
  const [textinput2, setTextinput2] = useState('');
  const [textinput3, setTextinput3] = useState('');
  const [textinput4, setTextinput4] = useState('');
  const [textinput5, setTextinput5] = useState('');
  const [textinput6, setTextinput6] = useState('');

  return (
    <View>
      <TextInput
        onChangeText={text => setTextinput1(text)}
        placeholder="First Name"
        style={styles.input}></TextInput>

      <TextInput
        onChangeText={text => setTextinput2(text)}
        placeholder="Last Name"
        style={styles.input}></TextInput>
      <TextInput
        onChangeText={text => setTextinput3(text)}
        placeholder="E-mail"
        style={styles.input}></TextInput>
      <TextInput
        keyboardType="numeric"
        onChange={number => setTextinput4(number)}
        placeholder="Phone Number"
        style={styles.input}></TextInput>
      <TextInput
        secureTextEntry={true}
        onChangeText={text => setTextinput5(text)}
        placeholder="Password"
        style={styles.input}>
        <Eye name="eye" />
      </TextInput>
      <TextInput
        secureTextEntry={true}
        onChangeText={text => setTextinput6(text)}
        placeholder="Re-enter Password"
        style={styles.input}>
        <Eye name="eye" />
      </TextInput>
      <View style={{flexDirection: 'row', padding: 4, marginBottom: 5}}>
        <CheckBox
          tintColors={{true: 'rgb(255, 196, 0)', false: 'grey'}}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={{marginTop: 5}}>Save Password</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    margin: 10,
  },
});

export default Personal;
