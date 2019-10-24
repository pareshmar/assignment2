import React, {Component} from 'react';
import { StyleSheet, Text, View , TextInput, Button , Alert , Image , Animated, ScrollView} from 'react-native';

//COMPONENTS 
import firebase from './components/firebase'; 
import AddBirthday from './components/add';
import Help from './components/help';

export default class App extends Component {

  constructor(props){
    super(props)
    //the current state is empty
    this.state = {
      TextInputValue: ' '
    }
  }

    //ANIMATION Initial Value
    animation = new Animated.Value(0);

    componentDidMount(){
      Animated.timing(this.animation,{
        duration:5000,
        toValue:1
      }).start()
    }

  //CLICK BTN FUNCTION (GET DATA)
  BtnListener = () => {
    const {TextInputValue} = this.state;
     
    //GETS DATA FROM DATABASE BASED ON USERINPUT AND ALERTS VALUE
    firebase.database().ref('birthday/'+ TextInputValue +'/TextInputValue/').on('value', function(snapshot){
      Alert.alert( TextInputValue + "'s" +  " birthday is on:  " + snapshot.val())
    })
  }


  render() {
  return (

    <ScrollView> 

      <View style={styles.container}>

      <Help></Help>
  
      <Animated.Image
      style ={{...styles.img, opacity:this.animation}} 
      source = {require('./images/balloons.png')}>
      </Animated.Image>    

      <Text style = {styles.title}> Happy Birthday to ... Who? </Text>
 
      <TextInput style = {styles.inputF} 
        //Updates the State for TextInputValue
        placeholder = "NAME"
        autoCapitalize = 'words'
        onChangeText={TextInputValue => this.setState({TextInputValue})}>
      </TextInput>
       
       <Text> {"\n"} </Text>

       <Button
          title = "    Get Birthday    "
          color = "#9A5AD6"
          onPress={this.BtnListener}>
       </Button> 
      

      <AddBirthday></AddBirthday>

      </View>
     
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
    justifyContent: "center"

  },

  inputF: {
    height:50, 
    width: 300, 
    borderColor:'pink', 
    borderWidth: 2
  },

  title: {
    color: '#2DCAEB',
    fontSize: 30,
    fontWeight: 'bold' ,
    padding:20,
  },
  img : {
    height: 150, 
    width:150
  }

});
