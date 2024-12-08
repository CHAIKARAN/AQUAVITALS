import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from 'expo-router';

const {width, height} = Dimensions.get('window')

export default function OnboardingScreen() {
    
    const navigation  = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Home');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <view> Done </view>
            </TouchableOpacity> 
        )
        
    }
    return (
        <View style ={styles.container}>
        <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            bottomBarHighlight={false}
            DoneButtonComponent={doneButton}
            containerStyles={{paddingHorizontal: 15}}
            pages={[
            {
                backgroundColor: '#02D8E9',
                image: (
                    <view style={styles.lottie}>
                         <LottieView source={require('../assets/animation/screen1.json')} autoPlay loop />
                    </view>
                ),
                title: 'Welcome to the Aqua safe world',
                subtitle: 'Swipe across to contnue',
                },
                {
                    backgroundColor: '#02D8E9',
                    image: (
                        <view style={styles.lottie}>
                              <LottieView source={require('../assets/animation/screen2.json')} autoPlay loop />
                        </view>
                    ),
                    title: 'You can check the DO,temperature and pH readings remotely.',
                    subtitle: 'Swipe across to contnue',
                    },
                    {
                        backgroundColor: '#FFFF8A',
                        image: (
                            <view style={styles.lottie}>
                                  <LottieView source={require('../assets/animation/screen3.json')} autoPlay loop />
                            </view>
                        ),
                        title: 'To dive in just register or login.',
                        subtitle: 'Click done',
                        },
            ]}
       />
    </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        width: width*0.9,
        height: width
    },
    doneButton:{
        padding: 20,
        borderTopLeftRadius: '100%',
        borderBottomLeftRadius: '100%'
    }
  })