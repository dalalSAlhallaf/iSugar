import React, { useCallback, useState, useEffect } from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


  const insulin = ({ navigation, route }) =>{
    console.log(route.params);
    //-------------------------------
    if(AccType == 'Patient Account'){
      var {bgMonitor, unit, kMeasure, bgF, bgt, cen, uMRN, DOD, DOB, DOLH, weight, height, latestH, cenName, cenCity} = route.params;
      
     } else {
      var { DOD, DOB, DOLH, weight, height, latestH, bgMonitor, unit, kMeasure, bgF, bgt} = route.params;
     }
    //-----------------------------------------------
    
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  const [InsulinR, setInsulinR] = useState('0');
  const [iType, setiType] = useState('0');
  const [halfFull, sethalfFull] = useState(false);
  const [halfFull1, sethalfFull1] = useState(false);
  const [halfFull2, sethalfFull2] = useState(false);
  const [iDose, setDose] = useState(0);
  const [iDose1, setDose1] = useState(0);
  const [iDose2, setDose2] = useState(0);
  const [isDoseVallid, setValid] = useState(false);
  const [isDose1Vallid, setValid1] = useState(false);
  const [isDose2Vallid, setValid2] = useState(false);
  const [iDose1Called, setCalled1] = useState(false);
  const [iDose2Called, setCalled2] = useState(false);
  const [penProvide, setPen] = useState('');
  const [penProvide1, setPen1] = useState('');
  const [penProvide2, setPen2] = useState('');
  
 
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  //--------------Date-----------------------
  const [iType1, setiType1] = useState('0');
  const [date1, setDate1] = useState(new Date());
  const [show1, setShow1] = useState(false);

//-------------------------------------------
const [iType2, setiType2] = useState('0');
const [date2, setDate2] = useState(new Date());
const [show2, setShow2] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
//-------------------------------------------------
  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow1(Platform.OS === 'ios');
    setDate1(currentDate);
  };
//-------------------------------------------------
const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
  };

//-------------------------------------------------
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
//-------------------------------------------------
  const showMode1 = (currentMode) => {
    setShow1(true);
    setMode(currentMode);
  };
//-------------------------------------------------
  const showMode2 = (currentMode) => {
    setShow2(true);
    setMode(currentMode);
  };

//-------------------------------------------------
  const showTimepicker = () => {
    showMode('time');
  };
//-------------------------------------------------
  const showTimepicker1 = () => {
    showMode1('time');
  };
//-------------------------------------------------
  const showTimepicker2 = () => {
    showMode2('time');
  };
//-----------------Date---------------------------

const halfOrFull = ()=>{
   if (InsulinR == 'Pen'){
     if (iType == 'Aspart' || iType == 'Lispro'  || iType == 'Glulisine' ){
        return true;
     }
     
   }else if (halfFull == false){
     return false;
   }
}
const halfOrFull1 = ()=>{
  
  if ((iType1 == 'Aspart' || iType1 == 'Lispro'  || iType1 == 'Glulisine') && InsulinR == 'Pen'){
       return true;
    }else if (halfFull == false){
    return false;
  }
}
const halfOrFull2 = ()=>{
  
    if ((iType2 == 'Aspart' || iType2 == 'Lispro'  || iType2 == 'Glulisine') && InsulinR == 'Pen'){
       return true;
    }
    
  else if (halfFull2 == false){
    return false;
  }
}

 var counter = 0
const setShouldShowAll = () => {
     if (counter == 0 && (shouldShow==false)){
       setShouldShow(true);
       counter = counter + 1;
       return;
     }
      else if (shouldShow){
      setShouldShow2(true);
      counter = counter + 1;
      return;
    } else if (shouldShow==true && shouldShow2==true) {
        alert('You can only add x3 insulin !');
    }
   
}

const checkIDose =  (val) => {
  if (val < 99 && val >= 0){
    setDose({
      ...iDose,
      iDose: val,
      
    })
    setValid ({
      ...isDoseVallid,
      isDoseVallid: true
    })
    return;
  } else {
    isDoseVallid= false;
  }
}
console.log(isDoseVallid);
console.log(iDose);
const checkIDose1 =  (val) => {
 
  if (val < 99 && val >= 0){
    setDose1({
      ...iDose1,
      iDose1: val,
      
    })
    isDose1Vallid= true;
    iDose1Called = true;
    return;
  } else {
    isDose1Vallid= false;
    
  }
}
console.log(iDose1);
const checkIDose2 =  (val) => {
  
  if (val < 99 && val >= 0){
    setDose2({
      ...iDose2,
      iDose2: val,
      
    })
    isDose2Vallid= true;
    iDose2Called = true;
    return;
  } else {
    isDose2Vallid= false;
  }
}
const check = () => {
  if (InsulinR == '0'){
    alert('Please select an Insulin Regimen!');
    return;
  }else if (iType == '0'){
    alert('Please select an Insulin type!');
    return;
  }else if (isDoseVallid == false){
    alert('Please enter a valid insulin dose!');
    return;
  }else if (iDose1Called==true && isDose1Vallid == false){
    alert('Please enter a valid insulin dose!');
    return;
  }else if (iDose2Called==true && isDose2Vallid == false ){
    alert('Please enter a valid insulin dose!');
    return;
   } 
   // else if (iDose1Called==true && iDose2Called == false){
  //  // navigation.navigate('isf', {insulinReg: InsulinR, monitor: bgMonitor, ievelUnit: unit, ketones: kMeasure, bgFrom: bgF, bgTo: bgt, center: cen, MRN: uMRN, DateD: DOD, DateB: DOB, DateLH: DOLH, wKG: weight, hCM: height, LH: latestH, name: cenName, city: cenCity })
  
  // }else if (iDose1Called==true && iDose2Called == true){
  //  // navigation.navigate('isf', {insulinReg: InsulinR, monitor: bgMonitor, ievelUnit: unit, ketones: kMeasure, bgFrom: bgF, bgTo: bgt, center: cen, MRN: uMRN, DateD: DOD, DateB: DOB, DateLH: DOLH, wKG: weight, hCM: height, LH: latestH, name: cenName, city: cenCity })
  // }
  else {
    navigation.navigate('isf', {insulinReg: InsulinR, monitor: bgMonitor, ievelUnit: unit, ketones: kMeasure, bgFrom: bgF, bgTo: bgt, center: cen, MRN: uMRN, DateD: DOD, DateB: DOB, DateLH: DOLH, wKG: weight, hCM: height, LH: latestH, name: cenName, city: cenCity })
  }
}
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
      <Text style={styles.title}>Step 5 of 7: Insulin Information{'\n'}</Text>
      <ScrollView>
          <View style={styles.action}>
              <Text style={styles.text_footer}>Insulin regimen</Text>
              <Picker
              selectedValue={InsulinR}
              onValueChange={(value) => setInsulinR(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Select Insulin regimen' value='0'></Picker.Item>
            <Picker.Item label= 'Pump' value='Pump'></Picker.Item>
            <Picker.Item label= 'Pen' value='Pen'></Picker.Item>
            <Picker.Item label= 'Vials/Syringe' value='Vials/Syringe'></Picker.Item>

        </Picker>
      
</View>


<View style={styles.action}>
              <Text style={styles.text_footer}>Insulin Type, dose, Time:{'\n'}</Text>
             
              {halfOrFull() ?  (<View style={styles.field} > 
              <Text style={styles.text_footer}>Insulin Type</Text>
              <Picker
              selectedValue={penProvide}
              onValueChange={(value) => setPen(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Half units' value='0'></Picker.Item>
            <Picker.Item label= 'Full units' value='1'></Picker.Item>
           

        </Picker>

    
    </View> ) :  (<View style={styles.field} >
              <Text style={styles.text_footer}>Insulin Type</Text>
              <Picker
              selectedValue={iType}
              onValueChange={(value) => setiType(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Select Insulin type' value='0'></Picker.Item>
            <Picker.Item label= 'Aspart' value='Aspart'></Picker.Item>
            <Picker.Item label= 'Lispro ' value='Lispro'></Picker.Item>
            <Picker.Item label= 'Glulisine ' value='Glulisine'></Picker.Item>
            <Picker.Item label= 'NPH' value='ANPH'></Picker.Item>
            <Picker.Item label= 'Mixed Rapid and intermediate insulin' value='Mixed Rapid and intermediate insulin'></Picker.Item>
            <Picker.Item label= 'Detemir' value='Detemir'></Picker.Item>
            <Picker.Item label= 'Glargine' value='Glargine'></Picker.Item>
            <Picker.Item label= 'Degludec' value='Degludec'></Picker.Item>
            <Picker.Item label= 'Degludec + Aspart mix (Ryzodeg)' value='Degludec + Aspart mix (Ryzodeg)'></Picker.Item>


        </Picker>
       
          
        <Text style={styles.text_footer}>Insulin Dose</Text>
        <TextInput
            keyboardType="decimal-pad"
            placeholder="00"
            onChangeText= {(val)=>checkIDose(val)}
            style={styles.actionN}></TextInput>  
              
              
              <Text style={styles.text_footer}>Insulin Time</Text>
        <TouchableOpacity onPress={showTimepicker} 
    >
<Text testID="dateTimePicker" style={styles.text_footerD} >
                {moment.utc(date).format('h:mm a')}
                </Text> 
    </TouchableOpacity>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )} 
    
    </View> )}       
</View>
<View  style={styles.action}>
          {shouldShow && halfOrFull1() ? (<View style={styles.field } >
            <Text style={styles.text_footer}>Insulin Type</Text>
              <Picker
              selectedValue={penProvide1}
              onValueChange={(value) => setPen1(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Half units' value='0'></Picker.Item>
            <Picker.Item label= 'Full units' value='1'></Picker.Item>
           

        </Picker>

    
    </View> ) :  null }
    </View>
    <View  style={styles.action}>
          {shouldShow && (halfOrFull1() == false)? (<View style={styles.field } >
              <Text style={styles.text_footer}>Insulin Type</Text>
              <Picker
              selectedValue={iType1}
              onValueChange={(value) => setiType1(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Select Insulin type' value='0'></Picker.Item>
            <Picker.Item label= 'Aspart' value='Aspart'></Picker.Item>
            <Picker.Item label= 'Lispro ' value='Lispro'></Picker.Item>
            <Picker.Item label= 'Glulisine ' value='Glulisine'></Picker.Item>
            <Picker.Item label= 'NPH' value='ANPH'></Picker.Item>
            <Picker.Item label= 'Mixed Rapid and intermediate insulin' value='Mixed Rapid and intermediate insulin'></Picker.Item>
            <Picker.Item label= 'Detemir' value='Detemir'></Picker.Item>
            <Picker.Item label= 'Glargine' value='Glargine'></Picker.Item>
            <Picker.Item label= 'Degludec' value='Degludec'></Picker.Item>
            <Picker.Item label= 'Degludec + Aspart mix (Ryzodeg)' value='Degludec + Aspart mix (Ryzodeg)'></Picker.Item>


        </Picker>
        <Text style={styles.text_footer}>Insulin Dose</Text>
        <TextInput
            keyboardType="decimal-pad"
            placeholder="00"
            onChangeText= {(val)=>checkIDose1(val)}
            style={styles.actionN}></TextInput>  
              
              
              <Text style={styles.text_footer}>Insulin Time</Text>
        <TouchableOpacity onPress={showTimepicker2} 
    >
<Text testID="dateTimePicker" style={styles.text_footerD} >
                {moment.utc(date1).format('h:mm a')}
                </Text> 
    </TouchableOpacity>
      
      {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange1}
        />
      )}
     </View> ) : null }
     </View>
     <View  style={styles.action}>
          {shouldShow2 && halfOrFull2() ? (<View style={styles.field } >
            <Text style={styles.text_footer}>Insulin Type</Text>
              <Picker
              selectedValue={penProvide2}
              onValueChange={(value) => setPen2(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Half units' value='0'></Picker.Item>
            <Picker.Item label= 'Full units' value='1'></Picker.Item>
           

        </Picker>

    
    </View> ) :  null }
    </View>
    <View  style={styles.action}>
          {shouldShow2 && (halfOrFull2() == false)? (<View style={styles.field } >
              <Text style={styles.text_footer}>Insulin Type</Text>
              <Picker
              selectedValue={iType2}
              onValueChange={(value) => setiType2(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Select Insulin type' value='0'></Picker.Item>
            <Picker.Item label= 'Aspart' value='Aspart'></Picker.Item>
            <Picker.Item label= 'Lispro ' value='Lispro'></Picker.Item>
            <Picker.Item label= 'Glulisine ' value='Glulisine'></Picker.Item>
            <Picker.Item label= 'NPH' value='ANPH'></Picker.Item>
            <Picker.Item label= 'Mixed Rapid and intermediate insulin' value='Mixed Rapid and intermediate insulin'></Picker.Item>
            <Picker.Item label= 'Detemir' value='Detemir'></Picker.Item>
            <Picker.Item label= 'Glargine' value='Glargine'></Picker.Item>
            <Picker.Item label= 'Degludec' value='Degludec'></Picker.Item>
            <Picker.Item label= 'Degludec + Aspart mix (Ryzodeg)' value='Degludec + Aspart mix (Ryzodeg)'></Picker.Item>


        </Picker>
        <Text style={styles.text_footer}>Insulin Dose</Text>
        <TextInput
            keyboardType="decimal-pad"
            placeholder="00"
            onChangeText= {(val)=>checkIDose2(val)}
            style={styles.actionN}></TextInput>  
              
              
              <Text style={styles.text_footer}>Insulin Time</Text>
        <TouchableOpacity onPress={showTimepicker2} 
    >
<Text testID="dateTimePicker" style={styles.text_footerD} >
                {moment.utc(date2).format('h:mm a')}
                </Text> 
    </TouchableOpacity>
      
      {show2 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date2}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange2}
        />
      )}
     </View> ) : null }
     </View>
   <View>
    <View style={styles.buttonV}> 
        <TouchableOpacity onPress={()=>setShouldShowAll()}>
                <LinearGradient
                    colors={['#E7EFFA', '#AABED8']} style={styles.buttonRS}
                >
                    <Text style={styles.titleBS}>+ Add another insulin</Text>
                  
                </LinearGradient>
            </TouchableOpacity>
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

export default insulin;

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
    height: 200,
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
titleBS: {
  color: '#05375a',
  fontSize: 20,
  textAlign: 'center',
},
picker: {
  width: 150,
  height: 30,
  borderWidth: 2,
  borderColor: '#4c4c4c',
    
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
buttonRS: {
  alignItems: 'center',
  width: 150,
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


