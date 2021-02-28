import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";
import { firebaseConfig } from "./config";
import Login from './Components/Login.js/login';
// import Login from "./Components/Login/Login";
// import Main from "./Components/Main";
// import Jobpost from "./Components/job/Job";
if (!firebase.apps.length) {
  firebase.initializeApp({});
}

export default function App() {
    // console.log(firebase)
    // let [student, setStudent] = useState("");
    // let [Company, setCompany] = useState("");
    // let [Admin, setAdmin] = useState("");
    let [signUp, setSignUp] = useState("");
    let [signIn, setSignIn] = useState("");
    // login js se li hein states
    let [FirstName, setFirstName] = useState("");
    let [LastName, setLastName] = useState("");
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");
    let [userType, setUserType] = useState("");
    let [PhoneNumber, setPhoneNumber] = useState("");

    return (
      <View>
               <Login
              // setStudent={setStudent}
              // student={student}
              // setCompany={setCompany}
              // Company={Company}
              // setAdmin={setAdmin}
              // Admin={Admin}
              setSignIn={setSignIn}
              setSignUp={setSignUp}
              signUp={signUp}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setPassword={setPassword}
              FirstName={FirstName}
              LastName={LastName}
              Email={Email}
              Password={Password}
              setPhoneNumber={setPhoneNumber}
              PhoneNumber={PhoneNumber}
            />
      </View>
    );
  }

  const styles = StyleSheet.create({
// 
  });
