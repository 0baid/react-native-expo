import { View, Text,Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import icons from '../../constants/icons'


interface typeIcon {
  icon:any,
  color:string,
  focused:boolean,
  name:string
}

const TabIcon = ({icon,color,focused,name}:typeIcon) => {
  return (
    <View>
      <Image
        source={icon}
      />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen 
          name='home'
          options={{
            title:"Home",
            headerShown:false,
            tabBarIcon: (( {color, focused}) => (
              <TabIcon icon={icons.home } color={color} focused={focused} name='home-icon'/>
            ))
          }} 
        />
      </Tabs>
    </>
  )
}

export default TabsLayout