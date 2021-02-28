import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebase from "firebase";
import { Container, Header, Content, Form, Item, Input, Row } from 'native-base';
// let screenWidth = window.screen.width;
// let screenHeight = screen.height;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Login(props) {
    let [userType, setUserType] = useState("");
    let [Company, setCompany] = useState("");
    let [Admin, setAdmin] = useState("");
    let [SignUp, setSignUp] = useState("");
    let [SignIn, setSignIn] = useState(true);


    let [signedEmail, setSignedEmail] = useState("");
    let [SignedPassword, setSignedPassword] = useState("");
    let [userId, setUserID] = useState("");
    // console.log(student);
    // console.log(Company);
    // console.log(Admin);
    function StudentLogin() {
        setUserType("Student");
    }
    function AdminLogin() {
        setUserType("Admin");
    }
    function CompanyLogin() {
        setUserType("Company");
    }
    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(function (user) {
    //         if (user) {
    //             props.history.push("/main");
    //             // setUser()
    //         }
    //     });
    // }, []);
    // function LoginAs() {
    //   console.log("function");
    //   // if (student || Company || Admin){
    //   //   document.getElementById('LoginAs').style.display="none"
    //   // }
    // }
    function singUpFn() {
        if (
            props.FirstName === "" ||
            props.LastName === "" ||
            props.Email === "" ||
            props.Password === "" ||
            props.PhoneNumber === ""
        ) {
            console.log("All Fields Are Required To Sign Up");
            return;
        }
        console.log('button pressed')
        let email = props.Email;
        let password = props.Password;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (result) {
                firebase
                    .database()
                    .ref()
                    .child(userType)
                    .child(result.user.uid)
                    .set({
                        uid: result.user.uid,
                        displayName: `${props.FirstName} ${props.LastName}`,
                        phoneNumber: props.PhoneNumber,
                        userType: userType,
                    }).then(() => {
                        // props.history.push("/main/UpdateProfile")
                        console.log("account created");

                    });
                return result.user
                    .updateProfile({
                        displayName: `${props.FirstName} ${props.LastName}`,
                        phoneNumber: props.PhoneNumber,
                        userType: userType,
                    })
                    .then((re) => {
                        console.log("account created");
                    });
            })
            // .then((re) => {
            //   props.history.push("/main");
            // })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // console.log(errorMessage);
                // ...
            });
        props.setSignUp(true);
    }
    function SignInFn() {
        if (signedEmail === "" || SignedPassword === "") {
            alert("Enter a valid Email Or Password");
            return;
        }
        let email = signedEmail;
        let password = SignedPassword;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((re) => {
               console.log('login sucess')
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                // console.log(errorMessage);
                // ...
            });
        props.setSignIn(true);
    }
    // useEffect(()=>{
    // console.log(userType);
    // },[userType])

    return (
        <View style={styles.loginPage}>
            <ScrollView>
                <Text style={styles.heading}>Campus Recruitment System App</Text>
                <Container>
                    {/* <Header /> */}
                    <Content style={styles.content}>
                        {SignIn ?
                            <>
                                <Form>
                                    <Item>
                                        <Input placeholder="Username" onChangeText={(text) => setSignedEmail(text)} />
                                    </Item>
                                    <Item last>
                                        <Input placeholder="Password" onChangeText={(text) => setSignedPassword(text)} />
                                    </Item>
                                </Form>
                                <View style={styles.buttonView}>
                                    <TouchableOpacity style={styles.signInButton}><Text style={styles.signInButtonText} onPress={() => SignInFn()}>Sign In</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.signUpButton} onPress={() => { setSignUp(true); setSignIn(false) }}><Text style={styles.signUpButtonText}>Sign Up</Text></TouchableOpacity>
                                </View>
                            </>
                            : SignUp ?
                                <>
                                    <Form>
                                        <Item>
                                            <Input placeholder="First Name" onChangeText={(text) => props.setFirstName(text)} />
                                        </Item>
                                        <Item >
                                            <Input placeholder="Last Name" onChangeText={(text) => props.setLastName(text)} />
                                        </Item>
                                        <Item >
                                            <Input textContentType="emailAddress" placeholder="Email" inputT onChangeText={(text) => props.setEmail(text)} />
                                        </Item>
                                        <Item >
                                            <Input placeholder="Password" onChangeText={(text) => props.setPassword(text)} />
                                        </Item>
                                        <Item >
                                            <Input textContentType="telephoneNumber" placeholder="Phone Number" onChangeText={(text) => props.setPhoneNumber(text)} />
                                        </Item>
                                        <Item style={styles.typeBtn}>
                                            <TouchableOpacity style={[styles.userType, userType === "Admin" ? { backgroundColor: "gray" } : { backgroundColor: "white" }]} onPress={() => AdminLogin()}><Text style={[styles.userTypeText, userType === 'Admin' ? { color: 'white' } : { color: 'black' }]}>Admin</Text></TouchableOpacity>
                                            <TouchableOpacity style={[styles.userType, userType === "Student" ? { backgroundColor: "gray" } : { backgroundColor: "white" }]} onPress={() => StudentLogin()}><Text style={[styles.userTypeText, userType === 'Student' ? { color: 'white' } : { color: 'black' }]}>Student</Text></TouchableOpacity>
                                            <TouchableOpacity style={[styles.userType, userType === "Company" ? { backgroundColor: "gray" } : { backgroundColor: "white" }]} onPress={() => CompanyLogin()}><Text style={[styles.userTypeText, userType === 'Company' ? { color: 'white' } : { color: 'black' }]}>Company</Text></TouchableOpacity>
                                        </Item>
                                    </Form>
                                    <View style={styles.buttonView}>
                                        <TouchableOpacity style={styles.signInButton}><Text style={styles.signInButtonText} onPress={() => singUpFn()}>Sign Up</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.signUpButton}><Text style={styles.signUpButtonText} onPress={() => { setSignUp(false); setSignIn(true) }}>Sign In</Text></TouchableOpacity>
                                    </View>
                                </>
                                : null}
                    </Content>
                </Container>
            </ScrollView>
        </View >
    );
}

export default Login;

const styles = StyleSheet.create({
    loginPage: {
        marginTop: 50,

    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
    },
    signInButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 10,
        width: '95%',
        alignItems: 'center',
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInButtonText: {
        color: 'white',
    },
    signUpButton: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        width: '95%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue',
        borderStyle: 'solid',
    },
    signUpButtonText: {
        color: 'blue',
    },
    userType: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        width: "30%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    typeBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
});
