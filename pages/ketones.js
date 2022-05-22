/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-dupe-keys */
import React, { useCallback, useState } from 'react';
import {  StyleSheet, 
  View,
  Image,
  SafeAreaView, 
  Text,
  TouchableOpacity,
  Button,
  Platform, 
  TextInput,
  ScrollView,
  Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';


  const ketones = ({ navigation, route }) =>{
    var AccType = 'Patient Account'; 
  const [monitor, setMonitor] = useState('0');
  const [levelUnit, setlevelUnit] = useState('0');
  const [ketones, setketones] = useState('0');
  const [BGFrom, setFROM] = useState(0);
  const [BGTO, setTO] = useState(0);

 


const check = () => {
  if (monitor == '0'){
    alert('Please select a Glucose Monitoring');
    return;
  }
  if (levelUnit == '0'){
    alert('Please select a level unit');
    return;
  }
  if (ketones == '0'){
    alert('Please select a Ketones measurement');
    return;
  } 
  if (BGFrom != 0 && BGTO !=0 ){
    if (AccType == 'Patient Account'){
      onlineKetonesM();
      onlineUnitDB();
      onlineMonitorDB();
      onlineTargetBGDB();
    }
      
     
 
    
    }
    navigation.navigate('insulin')

}
const validateBGTo = (val) => {
    if (val > 999 && val <= 0){
      alert('Enter a valid BG Level');
      return;
    } else {
      setTO({
        ...BGTO,
        BGTO: val
      })

    }
}
const validateBGFrom = (val) => {
  if (val > 999 && val <= 0){// needs checking in case of the other level unit?
    alert('Enter a valid BG Level');  
    return;
  } else {
    setFROM({
      ...BGFrom,
      BGFrom: val
    })

  }
}

glucoseMonitor = monitor;
fromBG = BGFrom.BGFrom;
toBG = BGTO.BGTO;
glucoseUnit = levelUnit;
ketonesMeasure = ketones;
//--------------------------------------
const onlineKetonesM = () => {

  var InsertAPIURL = "https://isugarserver.com/ketonesMeasurement.php";   //API to  signup

  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  
  var Data ={
    UserID: onlinUserID,
    ketonesMeasure: ketones
  };

// FETCH func 
fetch(InsertAPIURL,{
    method:'POST',
    headers:headers,
    body: JSON.stringify(Data) //convert data to JSON
})
.then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
.then((response)=>{
})
.catch((error)=>{
   // alert('Error Occured' + error);
})
}
//-------------------------------
const onlineUnitDB = () => {
  var InsertAPIURL = "https://isugarserver.com/GlucoseLevelUnit.php";   //API to  signup

  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  
  var Data ={
    UserID: onlinUserID,
    glucoseLevel_unit: levelUnit
  };

// FETCH func 
fetch(InsertAPIURL,{
    method:'POST',
    headers:headers,
    body: JSON.stringify(Data) //convert data to JSON
})
.then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
.then((response)=>{
})
.catch((error)=>{
   // alert('Error Occured' + error);
})
}
//-------------------------------
const onlineTargetBGDB = () => {
  var InsertAPIURL = "https://isugarserver.com/TargetBGPerDay%20.php";   //API to  signup

  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  
  var Data ={
    UserID: onlinUserID,
    fromBG: fromBG,
    toBG: toBG
  };

// FETCH func 
fetch(InsertAPIURL,{
    method:'POST',
    headers:headers,
    body: JSON.stringify(Data) //convert data to JSON
})
.then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
.then((response)=>{
})
.catch((error)=>{
   // alert('Error Occured' + error);
})
}
//-------------------------------
const onlineMonitorDB = () => {
  var InsertAPIURL = "https://isugarserver.com/typeOfGlucoseMonitoring.php";   //API to  signup

  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  
  var Data ={
    UserID: onlinUserID,
    typeOfGlucoseM: monitor
  };

// FETCH func 
fetch(InsertAPIURL,{
    method:'POST',
    headers:headers,
    body: JSON.stringify(Data) //convert data to JSON
})
.then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
.then((response)=>{
})
.catch((error)=>{
   // alert('Error Occured' + error);
})
}
//-------------------------------
    return (
      <View style={styles.container}>
      <LinearGradient colors={['#E7EFFA', '#E7EFFA','#AABED8']} style={styles.container}>

         <View style={styles.header}>
         <Image source={require('../images/logo.png')}
         style={styles.logo}
         resizeMode='stretch'/>
         </View>
      </LinearGradient>

      <View style={styles.footer}>
        {AccType == 'Patient Account' ? <Text style={styles.title}>Step 4 of 7: Glucose and Ketones Monitoring Information{'\n'}</Text> :
        <Text style={styles.title}>Step 3 of 6: Glucose and Ketones Monitoring Information{'\n'}</Text>}
      
      <ScrollView>
          <View style={styles.action}>
              <Text style={styles.text_footer}>Type of Glucose Monitoring</Text>
              <Picker
               itemStyle={{color: 'black', height : 50, width: 340, fontSize: 15, marginBottom: 30, paddingBottom:15}}
              selectedValue={monitor}
              onValueChange={(value) => setMonitor(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Select Monitor' value='0'   ></Picker.Item>
            <Picker.Item label= 'Fingerstick blood glucose' value='Fingerstick blood glucose'   ></Picker.Item>
            <Picker.Item label= 'Continuous Glucose Monitor (CGM)' value='CGM'></Picker.Item>
            <Picker.Item label= 'Intermittently scanned Continuous Glucose Monitor (isCGM)' value='isCGM'   ></Picker.Item>

        </Picker>
      
</View>
<View style={styles.action}>
              <Text style={styles.text_footer}>Blood glucose level unit in the glucometer:</Text>
              <Picker
              itemStyle={{color: 'black', height : 50, width: 200, fontSize: 15, marginBottom: 30, paddingBottom:15}}
              selectedValue={levelUnit}
              onValueChange={(value) => setlevelUnit(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Select level unit' value='0'   ></Picker.Item>
            <Picker.Item label= 'mg/dl' value='mg/dl'   ></Picker.Item>
            <Picker.Item label= 'mmol/L' value='mmol/L'   ></Picker.Item>

        </Picker>
      
</View>

<View style={styles.action}>
              <Text style={styles.text_footer}>Type of Ketones measurement:</Text>
              <Picker
               itemStyle={{color: 'black', height : 50, width: 250, fontSize: 15, marginBottom: 30, paddingBottom:15}}
              selectedValue={ketones}
              onValueChange={(value) => setketones(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Select Ketones measurement' value='0'   ></Picker.Item>
            <Picker.Item label= 'Blood' value='Blood'   ></Picker.Item>
            <Picker.Item label= 'Urine' value='Urine'   ></Picker.Item>

        </Picker>
      
</View>

<View style={styles.action}>
              <Text style={styles.text_footer}>Target blood glucose level per day:{'\n'}</Text>
             
              <View style={styles.field} >
             
<View style={styles.actionB}>
              <Text style={styles.text_footer}>From:</Text>
             
            <TextInput 
            keyboardType="decimal-pad"
            placeholder="000 mg/dl"
            onChangeText = {(val)=>validateBGFrom(val)}
            style={styles.actionN}></TextInput>

</View>
<View style={styles.actionB}>
              <Text style={styles.text_footer}>To:</Text>
             
            <TextInput 
            keyboardType="decimal-pad"
            placeholder="000 mg/dl"
            onChangeText = {(val)=>validateBGTo(val)}
            style={styles.actionN}></TextInput> 
      

</View>
              </View>
     
      
</View>

          <View style={styles.buttonV}>
        <TouchableOpacity onPress={()=>check()}>
                <LinearGradient
                    colors={['#E7EFFA', '#AABED8', '#AABED8']} style={styles.buttonR}
                >
                    <Text style={styles.titleB}>Continue</Text>
                  
                </LinearGradient>
            </TouchableOpacity>
            </View>
            </ScrollView>
         
        </View>
     </View>
  
         
  
    );
  
  };


const {height} = Dimensions.get("screen");
const height_logo = height * 0.15;

export default ketones;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AABED8',
  },
  SignUptext: {
    backgroundColor: '#fff',
    color: '#4c4c4c',
    fontSize: 18,
    
  },
  fPassText: {
    alignItems: 'flex-start',
    marginTop: 5,
    backgroundColor: '#fff',
    color: '#4c4c4c',
    fontSize: 15
    
  },
  
  logo: {
    width: height_logo,
    height: height_logo+40,

  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 10,
},
footerT: {
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 10,
},
field: {
    width: 350,
    height: 150,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ECECEC',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CCCCC0',
},
text_footer: {
  color: '#05375a',
  fontSize: 17,
},
text_footerD: {
  color: '#05375a',
  fontSize: 18,
  paddingLeft: 15
},
dateB:{
    width: 200,
    height: 40,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CACDD1',

},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},
title: {
    color: '#05375a',
    fontSize: 20,
    fontWeight: 'bold'
},
titleB: {
  color: '#05375a',
  fontSize: 30,
  fontWeight: 'bold',
  backgroundColor: '#E7EFFA'
},
picker: {
    width: 150,
    height: 30,
    marginBottom: 20,
    marginLeft: 0,
    color: 'grey'
},
pickerP: {
  width: 90,
  height: 30,
    
},
titleB: {
  color: '#05375a',
  fontSize: 20,
  fontWeight: 'bold',
 
},
buttonV: {
  marginTop: 60,
  alignItems: 'center',
  
},
buttonS: {
  alignItems: 'center',
  marginTop: 40,
},
buttonF: {
  alignItems: 'flex-start',
  marginTop: 10,
},
action: {
  
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: 10,
  paddingBottom: 25,
  
},
actionN: {
    width: 100,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CACDD1',
    color: '#000'
  
},
actionP: {
  flex: 0,
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: 10,
  paddingBottom: 15,
  backgroundColor: '#F5F7FF',
},
actionB: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,

},
buttonR: {
  alignItems: 'center',
  width: 200,
  height: 55,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 15,
  flexDirection: 'row',
  
},
textD:{
justifyContent: 'space-between',
marginTop: 25
}
});
