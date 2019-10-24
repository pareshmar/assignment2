import React, {Component} from 'react';
import { StyleSheet, Text, View , TextInput, Button , Alert} from 'react-native';

import firebase from './firebase';

class AddBirthday extends Component {

  constructor(props){
    super(props)
    //the current state is empty
    this.state = {
      name: '' ,
      TextInputValue: ''
    }
  }

 
  //ADDING DATA ONCLICK
  Add = () => {
    
    const {TextInputValue} = this.state;
    const {name} = this.state;

    // THIS SETS DATA BASED ON USERINPUT FOR NAME AND TEXTINPUTVALUE
    firebase.database().ref('birthday/'+ name).set({
  
        TextInputValue
       
    });

    Alert.alert(name + "'s" + ' birthday has been added');

  }


  render() {
  return (

    <View style = {styles.container2}> 

    <Text style={styles.AddTitle}>Add Another Birthday 
    {"\n"}</Text>
    
      

      <TextInput style = {styles.input1} 
        //Updates the State for person
        placeholder="NAME"
        autoCapitalize = 'words'
        onChangeText={name => this.setState({name})}>
      </TextInput>
       
      <Text> </Text>


      <TextInput style = {styles.input2} 
        //Updates the State for person
        placeholder="DATE"
        autoCapitalize = 'words'
        onChangeText={TextInputValue => this.setState({TextInputValue})}>
      </TextInput>
       
       <Text> {"\n"} </Text>

       <Button
          title = "    Add Birthday   "
          color = "#9A5AD6"
          onPress={this.Add}>
       </Button>
      
    </View>
  );
}
}

const styles = StyleSheet.create({

  container2: {
    paddingTop:50, 
    paddingBottom:80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input1: {
    width: 300, 
    height:50,  
    borderColor:'steelblue', 
    borderWidth: 2
    
  },
  input2: {
    
    height:50, 
    width: 300, 
    borderColor:'pink', 
    borderWidth: 2
  },
  AddTitle:{
    color: '#2DCAEB',
    fontSize:18,
    fontWeight: 'bold'
  }
  

});

export default AddBirthday;