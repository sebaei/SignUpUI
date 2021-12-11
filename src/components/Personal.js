import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Eye from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';

export default Personal = () => {
  const userInfo = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    repassword: '',
  };
  const [error, setError] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [secure, setSecure] = useState(false);

  const signupValidationSchema = yup.object().shape({
    fname: yup.string().required('First name is required'),
    lname: yup.string().required('Last name is required'),
    phone: yup
      .string()
      .matches(/(01)(\d){9}\b/, 'Enter a valid phone number')
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    repassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <View>
      <Formik
        initialValues={userInfo}
        validationSchema={signupValidationSchema}>
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors,
        }) => {
          const {fname, lname, email, phone, password, repassword} = values;
          return (
            <>
              <View>
                <TextInput
                  value={fname}
                  error={touched.fname && errors.fname}
                  placeholder="First Name"
                  onChangeText={handleChange('fname')}
                  onBlur={handleBlur('fname')}
                  style={styles.input}
                />
                <TextInput
                  value={lname}
                  error={touched.lname && errors.lname}
                  placeholder="Last Name"
                  onChangeText={handleChange('lname')}
                  onBlur={handleBlur('lname')}
                  style={styles.input}
                />
                <TextInput
                  value={email}
                  error={touched.email && errors.email}
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  style={styles.input}
                />
                <TextInput
                  value={phone}
                  error={touched.phone && errors.phone}
                  placeholder="Phone Number"
                  onChangeText={handleChange('phone')}
                  keyboardType="numeric"
                  style={styles.input}
                />

                <TextInput
                  value={password}
                  error={touched.password && errors.password}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  secureTextEntry
                  style={styles.input}>
                  {/* <Eye
                    name={secure ? 'eye' : 'eye-slash'}
                    size={20}
                    color="gray"
                    onPress={() => setSecure(!secure)}
                  /> */}
                </TextInput>

                <View>
                  <TextInput
                    value={repassword}
                    error={touched.repassword && errors.repassword}
                    placeholder="Confirm Password"
                    onChangeText={handleChange('password')}
                    secureTextEntry
                    style={styles.input}>
                    {/* <Eye
                      name={secure ? 'eye' : 'eye-slash'}
                      size={20}
                      color="gray"
                      onPress={() => setSecure(!secure)}
                    /> */}
                  </TextInput>
                </View>
              </View>
            </>
          );
        }}
      </Formik>
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
