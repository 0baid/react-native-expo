import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants"
import FormField from '@/components/FormField'

const Login = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[150px] h-[35px]'
          />
          <Text className='text-2xl text-white font-psemibold mt-10'>Login to Aura</Text>
          <FormField/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login