import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
    return (
        <View className='flex-1 justify-center items-center'>
            <Text>Hello Friend</Text>
            <Link href={"/profile"}>Profile</Link>
        </View>
    )
}

export default App
