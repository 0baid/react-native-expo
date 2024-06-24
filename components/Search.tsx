import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { icons } from '@/constants'

interface FormFieldInterface {
    title: string,
    value: string,
    handleChangeText: (e: any) => void,
    otherStyles?: string,
    keyBoardType?: string,
    placeHolder?: string
}

const Search = ({ title, value, handleChangeText, otherStyles, placeHolder }: FormFieldInterface) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className='w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary items-center flex-row space-x-4'>
            <TextInput
                className='text-base mt-0.5 text-white flex-1 font-pregular'
                value={value}
                placeholder={placeHolder}
                placeholderTextColor={'#7b7b8b'}
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
            />
            <TouchableOpacity>
                <Image
                    source={icons.search}
                    className='w-5 h-5'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}

export default Search