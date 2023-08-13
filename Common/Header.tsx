import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profileName}>Hi Neck</Text>
      <Image style={styles.profileImage} source={require('../Assets/Images/profile.png')} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: 'black'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 100
    }
})