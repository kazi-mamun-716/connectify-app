import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containerFull } from '../../CommonCss/pagecss'
import { formHead } from '../../CommonCss/formCss'
import BottomNavBar from '../../Components/BottomNavBar'
import TopNavBar from '../../Components/TopNavBar'

const MainPage = () => {
  return (
    <View style={containerFull}>
      <StatusBar />
      <TopNavBar />
      <Text style={formHead}>MainPage</Text>
      <BottomNavBar />
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({})