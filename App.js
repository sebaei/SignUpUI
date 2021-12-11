import React, {useState} from 'react';
import Personal from './src/components/Personal';
import Family from './src/components/Family';
import {Linking} from 'react-native';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import * as yup from 'yup';
//Icons used
import WhatsIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import FamIcon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  // States that will be changed
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [personalPage, setPersonalPage] = useState(true);
  const [familyPage, setFamilyPage] = useState(false);

  //To enable Family Account component
  const enfamilyPage = () => {
    setPersonalPage(false);
    setFamilyPage(true);
  };

  //To enable Personal Acccount component
  const enpersonalPage = () => {
    setFamilyPage(false);
    setPersonalPage(true);
  };

  //Toggle checkbox beside "Sign up for notifications"
  const togglefcheck = () => {
    setToggleCheckBox2(!toggleCheckBox2);
  };

  //Toggle checkbox beside receive order updates
  const togglescheck = () => {
    setToggleCheckBox3(!toggleCheckBox3);
  };
  const onSubmit = () => {
    console.log('Account Created');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wpcon}>
        <WhatsIcon //Whatsapp Icon
          style={styles.what}
          name="whatsapp"
          size={35}
          color="green"
          onPress={() => Linking.openURL('http://whatsapp.com')}
        />
        <WhatsIcon //Phone Icon
          style={styles.phone}
          name="phone"
          size={35}
          color="black"
          onPress={() => Linking.openURL(`tel:${+201114121838}`)}
        />
      </View>
      {/* Rescounts Logo */}
      <Image source={require('./assets/rescounts.png')} style={styles.logo} />
      <Text style={styles.sup}> Sign Up</Text>
      <Text style={styles.det}>Add your details to sign up </Text>
      <View style={styles.btncontainer}>
        {/* Personal Page Button */}
        <TouchableOpacity
          style={[styles.btn, personalPage ? styles.btnactive : styles.btn]}
          title="Personal Account"
          onPress={() => enpersonalPage()}>
          <Icon
            style={[personalPage ? styles.btnactive : styles.btninactive]}
            name="person-sharp"
            size={19}
            color="grey"
          />
          <Text
            style={[
              styles.btntext,
              personalPage ? styles.btnactive : styles.btntext,
            ]}>
            Personal Account
          </Text>
        </TouchableOpacity>

        {/* Family Page Button */}
        <TouchableOpacity
          style={styles.btn}
          title="Family Account"
          onPress={() => enfamilyPage()}>
          <FamIcon
            style={[familyPage ? styles.btnactive : styles.btninactive]}
            name="family-restroom"
            size={19}
            color="grey"
          />
          <Text
            style={[
              styles.btntext,
              familyPage ? styles.btnactive : styles.btntext,
            ]}>
            Family Account
          </Text>
        </TouchableOpacity>
      </View>
      {/* Display Personal or Family component depending on which is pressed at the moment */}
      {personalPage && <Personal shebop={toggleCheckBox2} />}
      {familyPage && <Family />}
      <Formik onSubmit={values => console.log(values)}>
        {({handleSubmit}) => (
          <>
            <TouchableOpacity
              style={styles.create}
              onPress={() => handleSubmit()}>
              <Text style={styles.createtext}>Create Account</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View style={{flexDirection: 'row'}}>
        <Text style={{textAlign: 'left'}}>Already have an account ?</Text>

        {/* Making Login button */}
        <TouchableOpacity style={styles.loginbtn}>
          <Text style={{fontWeight: 'bold'}}> Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signreceive}>
        <CheckBox
          tintColors={{true: 'rgb(255, 196, 0)', false: 'grey'}}
          value={toggleCheckBox2}
          onValueChange={() => togglefcheck()}
        />
        <Text style={styles.checktext}>
          Sign me up to receive exclusive offers and news on hot new restaurants
          on Rescounts
        </Text>
      </View>
      <View style={styles.signreceive}>
        <CheckBox
          tintColors={{true: 'rgb(255, 196, 0)', false: 'grey'}}
          value={toggleCheckBox3}
          onValueChange={() => togglescheck()}
        />
        <Text style={styles.checktext}>Receive order updates by SMS</Text>
      </View>
      <Text style={({marginTop: 5}, {textAlign: 'center'})}>
        By proceeding, you agree to our
        <Text style={{textDecorationLine: 'underline'}}>Terms of Use</Text> and
        confirm you have read our
        <Text style={{textDecorationLine: 'underline'}}>
          Privacy and Cookie Statement
        </Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  wpcon: {
    marginTop: 20,
    flexDirection: 'row-reverse',
  },
  what: {
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: 12,
    marginRight: 15,
    padding: 5,

    paddingHorizontal: 8,
  },
  phone: {
    backgroundColor: 'rgb(255, 196, 0)',
    borderRadius: 12,
    marginRight: 30,
    padding: 5,
    paddingHorizontal: 8,
  },
  logo: {
    backgroundColor: 'white',
    width: 175,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  sup: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 12,
    color: 'black',
  },
  det: {
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 12,
    fontWeight: 'bold',
  },
  btncontainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
    margin: 10,
  },

  btn: {
    flexDirection: 'row',
    width: '50%',
    padding: 5,
    backgroundColor: '#FFFFFF',
    padding: 12,
  },
  btntext: {fontSize: 16, textAlign: 'center', color: 'grey'},
  btnactive: {color: 'rgb(255, 196, 0)'},
  btninactive: {color: 'grey'},
  create: {
    padding: 12,
    margin: 10,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: 'rgb(255, 196, 0)',
  },
  createtext: {textAlign: 'center', fontSize: 20, fontWeight: 'bold'},
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    margin: 10,
  },
  signreceive: {
    flexDirection: 'row',
    marginBottom: 9,
  },
  checktext: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default App;
