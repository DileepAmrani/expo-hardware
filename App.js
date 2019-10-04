import React from 'react';
import {  Text, View, Button } from 'react-native';
// import CameraExample from './src/Component/Camera/Camera'
import ImagePicker from './src/Component/ImagePicker/ImagePicker'

export default class App extends React.Component  {
  constructor(){
    super()
    this.state={
      camerOpen: false
    }
  }
  render(){
    return (
        
          this.state.camerOpen ? 
          // <CameraExample />
          <ImagePicker />
          : 
          <View>
          <Text>Camera</Text>
                <Button title='Camera' onPress={()=> this.setState({camerOpen: true})}/>
          </View>
        

  );
}
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
