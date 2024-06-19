import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants"
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'
import { UserInterface } from '@/constants/types'
const SignUp = () => {
  const [form, setForm] = useState<UserInterface>({
    userName:'',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  const submit = async() => {
    if(!form.email || !form.password || !form.userName){
      Alert.alert('Error','Please fill all the fields')
    }
    
    setLoading(true)
    try {
      const result = await createUser(form)
      console.log(result)
      //set result to global state

      router.replace("/home")
    } catch (error) {
      Alert.alert("Error","Error while signing up")
    } finally {
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
          <Text className='text-2xl text-white font-psemibold mt-10'>Sign up to Aura</Text>
          <FormField
            title='Username'
            value={form.userName}
            handleChangeText={(e) => setForm({ ...form, userName: e })}
            otherStyles='mt-10'
          />
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
            title='Sign Up'
            handlePress={submit}
            containerStyle='mt-12'
            isLoading={loading}
          />
          <View className='pt-5 flex-row gap-2 justify-center'>
            <Text className='text-lg text-green-100 font-pregular'>
              Already have an account?
            </Text>
            <Link href={'/login'} className='text-lg font-psemibold text-secondary-100'>
              Log in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp