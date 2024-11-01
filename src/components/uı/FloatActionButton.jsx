import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Add } from 'iconsax-react-native'

const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container} >
     <Add size="32" color="#FFf" style={{}} />
    </TouchableOpacity>
  )
}

export default FloatActionButton

const styles = StyleSheet.create({
container:{
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#4083E1',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  }
}
)