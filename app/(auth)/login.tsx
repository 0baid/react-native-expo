import { View, Text, ScrollView, Image } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants"
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

const Login = () => {
  const [form,setForm] = useState({
    email:'',
    password:''
  })
  const [loading,setLoading] = useState(false)

  const submit = () => {
    
  }
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[150px] h-[35px]'
          />
          <Text className='text-2xl text-white font-psemibold mt-10'>Login to Aura</Text>
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({...form,email:e})}
            otherStyles='mt-7'
            keyBoardType='email-address'
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({...form,password:e})}
            otherStyles='mt-7'
          />
          <CustomButton
            title='Sign In'
            handlePress={submit}
            containerStyle='mt-12'
            isLoading={loading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login