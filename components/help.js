import React, {Component} from 'react';
import {StyleSheet, Text, View , TouchableHighlight, Modal, Alert} from 'react-native'



class Help extends Component {

    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

      

    render(){
        return(
        <View>

            <Modal 
            animationType="fade"
            visible={this.state.modalVisible}>

                <View style={{margin:50, alignContent:'center'}}>
                    <View>
                    <Text style={{textAlign: 'center'}}>Cant remember when their birthday is?{"\n"}{"\n"}Type in their name and click the button
                    below.{"\n"}{"\n"}To add more birthdays to your database input their name and birthday.</Text>

                    <TouchableHighlight
                        onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={{textAlign:'center' , padding:50, fontWeight: 'bold'}}>Click to Close</Text>
                    </TouchableHighlight>
                </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{backgroundColor: "dimgrey", color: "white", fontWeight: 'bold',
          fontSize: 20, padding:10, borderRadius:15}}>?</Text>
        </TouchableHighlight>

           </View>
        );
    }
}


export default Help;