import { View, Text, ScrollView, Image,Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants"
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { signIn } from '@/lib/appwrite'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    if(!form.email || !form.password){
      Alert.alert('Error','Please fill all the fields')
    }
    
    setLoading(true)
    try {
      const result = await signIn(form.email,form.password)
      console.log( result )
      // save result to global state 
      
      router.replace('/home')
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[150px] h-[35px]'
          />
          <Text className='text-2xl text-white font-psemibold mt-10'>Login to Aura</Text>
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyBoardType='email-address'
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-7'
          />
          <CustomButton
            title='Sign In'
            handlePress={submit}
            containerStyle='mt-12'
            isLoading={loading}
          />
          <View className='pt-5 flex-row gap-2 justify-center'>
            <Text className='text-lg text-green-100 font-pregular'>
              Don't have an account?
            </Text>
            <Link href={'/sign-up'} className='text-lg font-psemibold text-secondary-100'>
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login