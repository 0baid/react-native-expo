import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import {images} from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { StatusBar } from 'expo-status-bar'

const App = () => {

    const handleLoginWithEmail = () => {
        router.push('/login')
    }
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerStyle={{height:'100%'}}>
                <View className='w-ful justify-center items-center min-h-[85vh] px-4'>
                    <Image 
                        source={images.logo}
                        className='w-[130px] h-[84px]'
                        resizeMode='contain'
                    />
                    <Image 
                        source={images.cards}
                        className='max-w-[380px] w-full h-[300px]'
                        resizeMode='contain'
                    />
                    <View className='relative mt-5'>
                        <Text className='text-3xl text-white font-bold text-center'>Discover Endless Possibilities with <Text className='text-secondary'>Aora</Text></Text>
                        <Image
                            source={images.path}
                            className='h-[15px] w-[136px] -bottom-2 -right-8 absolute'
                            resizeMode='contain'
                        />
                    </View>
                    <Text className='text-sm font-pregular text-grey-100 mt-7 text-center'>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
                    <CustomButton
                        title={'Continue with Email'}
                        handlePress={handleLoginWithEmail}
                        containerStyle='w-full mt-7'
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light'/>
        </SafeAreaView>
    )
}

export default App
