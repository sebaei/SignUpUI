import React, {useState} from 'react';
import Personal from './Personal';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//Down and Right arrows icons to be used when toggling additional components on/off
import Arr from 'react-native-vector-icons/MaterialIcons';

//Eye Icon to be used in Show/Hide Password
import Eye from 'react-native-vector-icons/FontAwesome';
const Family = () => {
  //First CheckBox for save password and other 3 are for an arrow icon in every component to minimize or maximize
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [farr, setFarr] = useState(true);
  const [sarr, setSarr] = useState(false);
  const [tarr, setTarr] = useState(false);

  //Switch state for each toggle of arrows
  const togglefarr = () => {
    setFarr(!farr);
  };
  const togglesarr = () => {
    setSarr(!sarr);
  };
  const toggletarr = () => {
    setTarr(!tarr);
  };
  return (
    <ScrollView style={styles.bg}>
      <View style={[styles.card, styles.elevation]}>
        <Text style={styles.header}>Your info</Text>
        {farr ? (
          <View>
            <Personal />
            <Arr
              style={styles.arr}
              name="keyboard-arrow-down"
              size={50}
              color="black"
              onPress={() => togglefarr()}
            />
          </View>
        ) : (
          <View>
            <Arr
              style={styles.arr}
              name="keyboard-arrow-right"
              size={50}
              color="black"
              onPress={() => togglefarr()}
            />
          </View>
        )}
      </View>
      <View style={[styles.card, styles.elevation]}>
        <Text style={styles.header}>
          Would you like to add your spouse to your account?
        </Text>
        {sarr ? (
          <View>
            <TextInput
              placeholder="Spouse First Name"
              style={styles.input}></TextInput>
            <TextInput
              placeholder="Spouse Last Name"
              style={styles.input}></TextInput>
            <TextInput
              placeholder="Spouse Email Address"
              style={styles.input}></TextInput>
            <TextInput
              placeholder="Spouse Phone Number"
              style={styles.input}></TextInput>
            <View>
              <Arr
                style={styles.arr}
                name="keyboard-arrow-down"
                size={50}
                color="black"
                onPress={() => togglesarr()}
              />
            </View>
          </View>
        ) : (
          <Arr
            style={styles.arr}
            name="keyboard-arrow-right"
            size={50}
            color="black"
            onPress={() => togglesarr()}
          />
        )}
      </View>
      <View style={[styles.card, styles.elevation]}>
        <Text style={styles.header}>
          Would you like to add your spouse to your account?
        </Text>
        {tarr ? (
          <View>
            <Text style={[{margin: 12}]}>Add First student</Text>
            <TextInput
              placeholder="First Name"
              style={styles.input}></TextInput>
            <TextInput placeholder="Last Name" style={styles.input}></TextInput>
            <TextInput
              placeholder="School Name"
              style={styles.input}></TextInput>
            <TextInput
              placeholder="Class Name"
              style={styles.input}></TextInput>
            <View>
              <TouchableOpacity>
                <Text style={styles.addanother}>Add another student</Text>
              </TouchableOpacity>
              <Arr
                style={styles.arr}
                name="keyboard-arrow-down"
                size={50}
                color="black"
                onPress={() => toggletarr()}
              />
            </View>
          </View>
        ) : (
          <Arr
            style={styles.arr}
            name="keyboard-arrow-right"
            size={50}
            color="black"
            onPress={() => toggletarr()}
          />
        )}
      </View>
    </ScrollView>
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
  card: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 14,
    paddingLeft: 2,
    paddingRight: 2,
    margin: 10,
  },
  elevation: {
    elevation: 15,
    shadowColor: 'grey',
  },
  header: {
    marginTop: 10,
    marginLeft: 12,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  bg: {
    backgroundColor: '#f0f0ff',
  },
  arr: {
    maxWidth: '100%',
    alignSelf: 'center',
  },
  addanother: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default Family;

{
  /* <View>
  <TextInput placeholder="First Name" style={styles.input}></TextInput>
  <TextInput placeholder="Last Name" style={styles.input}></TextInput>
  <TextInput placeholder="E-mail" style={styles.input}></TextInput>
  <TextInput placeholder="Phone Number" style={styles.input}></TextInput>
  <TextInput placeholder="Password" style={styles.input}></TextInput>
  <TextInput placeholder="Re-enter Password" style={styles.input}></TextInput>
  <View style={{flexDirection: 'row', padding: 4, marginBottom: 5}}>
    <CheckBox
      tintColors={{true: 'rgb(255, 196, 0)', false: 'grey'}}
      value={toggleCheckBox}
      onValueChange={newValue => setToggleCheckBox(newValue)}
    />
    <Text style={{marginTop: 5}}>Save Password</Text>
  </View>
  <View>
    <Arr
      style={styles.arr}
      name="keyboard-arrow-down"
      size={50}
      color="black"
      onPress={() => togglefarr()}
    />
  </View>
</View>; */
}
