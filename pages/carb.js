import React, {useEffect, useState} from 'react';
import { StyleSheet, 
    View,
    Image, 
    Text,
    ScrollView,
    TouchableOpacity, 
    Dimensions } from 'react-native'; 
    import timeCompare from './timeCompare';
    import LinearGradient from 'react-native-linear-gradient';
    import carbRetrieve from './carbRetrieve';
    import {Picker} from '@react-native-picker/picker';




const carb = ({ navigation }) => {


var cho = carbRetrieve();
const [wholeQuan, setWholeQuan] = useState(0); // from 0-10
const [fractionQuan, setFractionQuan] = useState(0);
const [foodName, setFoodName] = useState(''); // based on user choice 
const [unit, setUnit] = useState(''); // based on database?
const [gram, setGram] = useState(0);  // based on database?
const [mealName,  setMealName]= useState('0');
const [quantity,  setQuantity]= useState('0');
const [quart, setQuart]= useState('0');


// cho = carbRetrieve();
const quantity = (whole, fraction) => { 
return whole+fraction;
}
//
const CHOcontent = (quan, grams) => {

    return grams * quan; //chpTotal = total+q

}
const search = (id) => {
    for(let i =0; i< cho.length(); i++){
        if (cho[i].id == id ){
            setFoodName(cho[i].foodEnglishName);
            setUnit(cho[i].unit);
            setGram(cho[i].gramsOfCHO);
            CHOcontent(quantity(wholeQuan, fractionQuan), gram )
        }
    }
}
const print = ()=>{
  for (let i =0; i<cho.length;i++){
    console.log(cho[i].foodEnglishName);
  }
}



  return (
	  
	  
<LinearGradient colors={['#AABED8', '#fff']} style={styles.container}>
    <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.textHeader}>Hello Sara
             <Image source={require('../images/ballons.png')}
             style={{height: 30, width: 30}}/> 
         </Text>
         </View>
         <ScrollView>
      <ScrollView style={styles.contView}>
        <Text
          style={{
            color: '#000',
            fontSize: 25,
            textAlign: 'left',
            paddingTop: 20,
            paddingLeft: 15,
          }}>
          Carbohydrate Calculator
        </Text>
<View style={{backgroundColor: '#d3dde0',
height: 250,
marginTop: 10,
marginButtom: 10}}>
        <Text style={styles.inpTxt}>Food Item:</Text>
        <Picker
                selectedValue={mealName}
                onValueChange={value => setMealName(value)}
                mode="dropdown"
                style={styles.ddown}>
                <Picker.Item label="Select" value="0"></Picker.Item>
              </Picker>

        <Text style={styles.inpTxt}>Quantity:</Text>
<View style={styles.neighbor}>
                <Picker
                selectedValue={quantity}
                onValueChange={value => setQuantity(value)}
                mode="dropdown"
                style={styles.ddown2}
                >
                <Picker.Item label="0" value='0'></Picker.Item>
                <Picker.Item label="1" value='1'></Picker.Item>
                <Picker.Item label="2" value='2'></Picker.Item>
                <Picker.Item label="3" value='3'></Picker.Item>
                <Picker.Item label="4" value='4'></Picker.Item>
                <Picker.Item label="5" value='5'></Picker.Item>
                <Picker.Item label="6" value='6'></Picker.Item>
                <Picker.Item label="7" value='7'></Picker.Item>
                <Picker.Item label="8" value='8'></Picker.Item>
                <Picker.Item label="9" value='9'></Picker.Item>
                <Picker.Item label="10" value='10'></Picker.Item>
              </Picker>

              <Text style={{
                marginTop:40,
                marginLeft:10,
                fontSize: 20,

              }}>And</Text>

                              <Picker
                selectedValue={quart}
                onValueChange={value => setQuart(value)}
                mode="dropdown"
                style={styles.ddown3}
                >
                <Picker.Item label="No fraction" value='0'></Picker.Item>
                <Picker.Item label="quarter" value='1'></Picker.Item>
                <Picker.Item label="third" value='2'></Picker.Item>
                <Picker.Item label="half" value='3'></Picker.Item>
                <Picker.Item label="two thirds" value='4'></Picker.Item>
                <Picker.Item label="three quarters" value='5'></Picker.Item>

              </Picker>

              <Text style={{
                marginTop:40,
                marginLeft:10,
                fontSize: 20,

              }}>cups</Text>




</View>
  </View>
        

       

        <TouchableOpacity
          style={{
            marginTop: 30,
            paddingTop: 10,
            paddingBottom: 10,
            width: 100,
            height: 50,
            alignSelf: 'center',
            backgroundColor: '#6496d7',
          }}
          // onPress={insuCalc}
          >
          <Text style={{fontSize: 18, textAlign: 'center'}}>+ Add</Text>
        </TouchableOpacity>

        <Text></Text>
      </ScrollView>
        </ScrollView>
    </View>      
    </LinearGradient>
    
  );
};


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

export default carb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF0F2',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
},
body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,

},
outer: {
    width: 275,
    height: 110,
    marginTop: 15,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inner: {
    width: 250,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
    
  },
textHeader:{
   fontSize: 15,
   color: '#05375a', 
},
textBody:{
    fontSize: 20,
    color: '#05375a', 
    textAlign: 'center',
    fontWeight: 'bold',
 },
	  ddown: {
    //drop down list style


    marginTop: 20,
    shadowColor: '#000',
    alignSelf: 'center',
    width: 300,


    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.33,
    shadowRadius: 0.62,

    elevation: 7,
    backgroundColor: '#f5f5f5',
  },
  ddown2: {
    //drop down list style


    marginTop: 20,
    marginLeft: 10,
    shadowColor: '#000',

    width: 100,
    fontSize: 5,

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.33,
    shadowRadius: 0.62,

    elevation: 7,
    backgroundColor: '#f5f5f5',
  },
    ddown3: {
    //drop down list style


    marginTop: 20,
    marginLeft: 10,
    shadowColor: '#000',

    width: 130,
    fontSize: 5,

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.33,
    shadowRadius: 0.62,

    elevation: 7,
    backgroundColor: '#f5f5f5',
  },
	inpTxt: {
    //lables
    paddingLeft: 20,
    paddingTop: 15,
    fontSize: 18,
  },

});


