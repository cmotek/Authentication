import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} =  useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('HomeScreen');
    };


    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    };

    const onSignInFacebook = () => {
        console.warn('onSignInFacebook');
    };
    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    };
    const onSignInApple = () => {
        console.warn('onSignInApple');
    };

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
             source={Logo} 
             style={[styles.logo, {height: height * 0.3}]} 
             resizeMode="contain"/>

            <CustomInput 
             placeholder="Username"
             value={username}
             setValue={setUsername} />

            <CustomInput
             placeholder="Password"
             value={password}
             setValue={setPassword}
             secureTextEntry={true}/>

            <CustomButton 
             text="Sign In"
             onPress={onSignInPressed}
            />

            <CustomButton 
             text="Forgot Password"
             onPress={onForgotPasswordPressed}
             type="TERTIARY"
            />        

            <CustomButton 
             text="Sign In with Facebook"
             onPress={onSignInFacebook}
             bgColor="#E7EAF4"
             fgColor="#4765A9"
            />

            <CustomButton 
             text="Sign In with Google"
             onPress={onSignInGoogle}
             bgColor="#FAE9EA"
             fgColor="#DD4D44"
            />

            <CustomButton 
             text="Sign In with Apple"
             onPress={onSignInApple}
             bgColor="#e3e3e3"
             fgColor="#363636" 
            />

            <CustomButton 
             text="Don't have an account? Create one!"
             onPress={onSignUpPressed}
             type="TERTIARY"
            />        



        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20, 
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200, 
    },
});

export default SignInScreen