import React, {  useState, useEffect } from 'react';
import {  StyleSheet, 
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform, 
  TextInput,
  ScrollView,
  Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import RadioForm, { 
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';

var calcMethod = [
  {label: 'I use a ratio (ICR) to calculate my meal insulin'+'\n', value: 'ICR', valueIndex: 0},
  {label: 'I use sliding scale to determine my meal insulin'+'\n', value: 'Sliding Scale', valueIndex: 1},
  ];
  const icr = ({ navigation, route }) =>{
   
    useEffect(() => {
      MethodForCalc('ICR');
        }, []);
    const [data, setData] = useState({
      caluMethod: '',
    });
    const MethodForCalc = (value) => {
      setData({
        ...data,
        caluMethod: value,
      });
  };
    const [mode, setMode] = useState('date');
//--------------Date----------------------- 
    const [date1From, setDate1From] = useState(new Date());         // time entries x6 for user
    const [show1From, setShow1From] = useState(false);

//-------------------------------------------
    const [date1TO, setDate1TO] = useState(new Date());
    const [show1TO, setShow1TO] = useState(false);
    const [ICR1, setICR1] = useState(0);
//-------------------------------------------
    const [date2From, setDate2From] = useState(new Date());
    const [show2From, setShow2From] = useState(false);
//-------------------------------------------
    const [date2TO, setDate2TO] = useState(new Date());
    const [show2TO, setShow2TO] = useState(false);
    const [ICR2, setICR2] = useState(0);
//-------------------------------------------
    const [date3From, setDate3From] = useState(new Date());
    const [show3From, setShow3From] = useState(false);

//-------------------------------------------
    const [date3TO, setDate3TO] = useState(new Date());
    const [show3TO, setShow3TO] = useState(false);
    const [ICR3, setICR3] = useState(0);
//-------------------------------------------                   
    const [date4From, setDate4From] = useState(new Date());
    const [show4From, setShow4From] = useState(false);
//-------------------------------------------
    const [date4TO, setDate4TO] = useState(new Date());
    const [show4TO, setShow4TO] = useState(false);
    const [ICR4, setICR4] = useState(0);
//-------------------------------------------
    const [date5From, setDate5From] = useState(new Date());
    const [show5From, setShow5From] = useState(false);
//-------------------------------------------
    const [date5TO, setDate5TO] = useState(new Date());
    const [show5TO, setShow5TO] = useState(false);
    const [ICR5, setICR5] = useState(0);
//-------------------------------------------
    const [date6From, setDate6From] = useState(new Date());
    const [show6From, setShow6From] = useState(false);

//-------------------------------------------
    const [date6TO, setDate6TO] = useState(new Date());
    const [show6TO, setShow6TO] = useState(false);
    const [ICR6, setICR6] = useState(0);
//-------------------------------------------------
    const onChange1From = (event, selectedDate) => { // Time methods for every to/from time
        const currentDate = selectedDate || date1From;
        setShow1From(Platform.OS === 'ios');
        setDate1From(currentDate);
      };
//-------------------------------------------------
      const onChange1To = (event, selectedDate) => {
        const currentDate = selectedDate || date1TO;
        setShow1TO(Platform.OS === 'ios');
        setDate1TO(currentDate);
      };
      const onChange11From = (event, selectedDate) => { // Time methods for every to/from time
        const currentDate = selectedDate || date1From;
        setShow11From(Platform.OS === 'ios');
        setDate11From(currentDate);
      };
//-------------------------------------------------
      const onChange11To = (event, selectedDate) => {
        const currentDate = selectedDate || date1TO;
        setShow11TO(Platform.OS === 'ios');
        setDate11TO(currentDate);
      };
//-------------------------------------------------
    const onChange2From = (event, selectedDate) => {
        const currentDate = selectedDate || date2From;
        setShow2From(Platform.OS === 'ios');
        setDate2From(currentDate);
      };
    
//-------------------------------------------------
const onChange2To = (event, selectedDate) => {
    const currentDate = selectedDate || date2TO;
    setShow2TO(Platform.OS === 'ios');
    setDate2TO(currentDate);
  };
//-------------------------------------------------
const onChange22From = (event, selectedDate) => {
  const currentDate = selectedDate || date2From;
  setShow22From(Platform.OS === 'ios');
  setDate22From(currentDate);
};

//-------------------------------------------------
const onChange22To = (event, selectedDate) => {
const currentDate = selectedDate || date2TO;
setShow22TO(Platform.OS === 'ios');
setDate22TO(currentDate);
};

//-------------------------------------------------
const onChange3From = (event, selectedDate) => {
    const currentDate = selectedDate || date3From;
    setShow3From(Platform.OS === 'ios');
    setDate3From(currentDate);
  };
   
//-------------------------------------------------
const onChange3To = (event, selectedDate) => {
    const currentDate = selectedDate || date3TO;
    setShow3TO(Platform.OS === 'ios');
    setDate3TO(currentDate);
  };
//-------------------------------------------------
const onChange33From = (event, selectedDate) => {
  const currentDate = selectedDate || date3From;
  setShow3From(Platform.OS === 'ios');
  setDate3From(currentDate);
};
 
//-------------------------------------------------
const onChange33To = (event, selectedDate) => {
  const currentDate = selectedDate || date3TO;
  setShow33TO(Platform.OS === 'ios');
  setDate33TO(currentDate);
};

//-------------------------------------------------
const onChange4From = (event, selectedDate) => {
    const currentDate = selectedDate || date4From;
    setShow4From(Platform.OS === 'ios');
    setDate4From(currentDate);
  };

  //-------------------------------------------------
const onChange4To = (event, selectedDate) => {
    const currentDate = selectedDate || date4TO;
    setShow4TO(Platform.OS === 'ios');
    setDate4TO(currentDate);
  };

//-------------------------------------------------
const onChange5From = (event, selectedDate) => {
    const currentDate = selectedDate || date5From;
    setShow5From(Platform.OS === 'ios');
    setDate5From(currentDate);
  };
//-------------------------------------------------
const onChange5To = (event, selectedDate) => {
    const currentDate = selectedDate || date5TO;
    setShow5TO(Platform.OS === 'ios');
    setDate5TO(currentDate);
  };

//-------------------------------------------------
const onChange6From = (event, selectedDate) => {
    const currentDate = selectedDate || date6From;
    setShow6From(Platform.OS === 'ios');
    setDate6From(currentDate);
  };
//-------------------------------------------------
const onChange6To = (event, selectedDate) => {
    const currentDate = selectedDate || date6TO;
    setShow6TO(Platform.OS === 'ios');
    setDate6TO(currentDate);
  };

//-------------------------------------------------
      const showMode1From = (currentMode) => {
        setShow1From(true);
        setMode(currentMode);
      };
//-------------------------------------------------
      const showMode1To = (currentMode) => {
        setShow1TO(true);
        setMode(currentMode);
      };
      //-------------------------------------------------
      const showMode11From = (currentMode) => {
        setShow1From(true);
        setMode(currentMode);
      };
//-------------------------------------------------
      const showMode11To = (currentMode) => {
        setShow1TO(true);
        setMode(currentMode);
      };
//-------
//-------------------------------------------------
    const showMode2From = (currentMode) => {
        setShow2From(true);
        setMode(currentMode);
      };
//-------------------------------------------------
    const showMode2To = (currentMode) => {
    setShow2TO(true);
    setMode(currentMode);
  };
//-------------------------------------------------
    const showMode3From = (currentMode) => {
    setShow3From(true);
    setMode(currentMode);
  };
//-------------------------------------------------
  const showMode3TO = (currentMode) => {
    setShow3To(true);
    setMode(currentMode);
  };  

  //-------------------------------------------------
  const showMode4From = (currentMode) => {
    setShow4From(true);
    setMode(currentMode);
  };
//-------------------------------------------------
  const showMode4To = (currentMode) => {
    setShow4TO(true);
    setMode(currentMode);
  };
//-------------------------------------------------
  const showMode5From = (currentMode) => {
    setShow5From(true);
    setMode(currentMode);
  };
//-------------------------------------------------
const showMode5To = (currentMode) => {
setShow5TO(true);
setMode(currentMode);
};
//-------------------------------------------------
const showMode6From = (currentMode) => {
setShow6From(true);
setMode(currentMode);
};
//-------------------------------------------------
const showMode6TO = (currentMode) => {
setShow6To(true);
setMode(currentMode);
}; 
//-------------------------------------------------
      const showTimepicker1F = () => {
        showMode1From('time');
      };
//-------------------------------------------------
      const showTimepicker1T = () => {
        showMode1To('time');
      };
//-------------------------------------------------
      const showTimepicker2F = () => {
        showMode2From('time');
      };
//-------------------------------------------------
const showTimepicker2T = () => {
    showMode2To('time');
  };
//-------------------------------------------------
  const showTimepicker3F = () => {
    showMode3From('time');
  };
  //-------------------------------------------------
  const showTimepicker3T = () => {
    showMode3TO('time');
  };
//-------------------------------------------------
  const showTimepicker4F = () => {
    showMode4From('time');
  };
//-------------------------------------------------
const showTimepicker4T = () => {
showMode4To('time');
};
//-------------------------------------------------
const showTimepicker5F = () => {
showMode5From('time');
};
  //-------------------------------------------------
  const showTimepicker5T = () => {
    showMode5To('time');
  };
//-------------------------------------------------
  const showTimepicker6F = () => {
    showMode6From('time');
  };
//-------------------------------------------------
const showTimepicker6T = () => {
showMode6To('time');
};
//-----------------ISF-----------------------------  // end of time methods and attributes !
    
 
  const [shouldShow1, setShouldShow1] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  const [shouldShow3, setShouldShow3] = useState(false);
  const [shouldShow4, setShouldShow4] = useState(false);
  const [shouldShow5, setShouldShow5] = useState(false);

  var timeFrom1 = moment.utc(date1From).format('h:mm a');
  var timeTo1 = moment.utc(date1TO).format('h:mm a');
  var timeFrom2 = moment.utc(date2From).format('h:mm a');
  var timeTo2 = moment.utc(date2TO).format('h:mm a');
  var timeFrom3 = moment.utc(date3From).format('h:mm a');
  var timeTo3 = moment.utc(date3TO).format('h:mm a');
  var timeFrom4 = moment.utc(date4From).format('h:mm a');
  var timeTo4 = moment.utc(date4TO).format('h:mm a');
  var timeFrom5 = moment.utc(date5From).format('h:mm a');
  var timeTo5 = moment.utc(date5TO).format('h:mm a');
  var timeFrom6 = moment.utc(date6From).format('h:mm a');
  var timeTo6 = moment.utc(date6TO).format('h:mm a');
const setShouldShowAll = () =>{

 if ( shouldShow3==false  ){
    setShouldShow3(true);
    return; 
  } else if ( (shouldShow3 ) && shouldShow4==false){
    setShouldShow4(true);
    return;
  }else if ((shouldShow3 == true && shouldShow4 == true) && shouldShow5==false ){
    setShouldShow5(true);
    return;
  } else{
    alert('You have reached your maximum ICR intervals');
    return;
  } 

  
}
insulinCalcMethod = data.caluMethod;
    const insert = async () => {
      if (AccType=='Patient Account'){
        console.log(uID+' - '+ DOBirth+ ' - '+ weightKG +' - '+latestHB1AC_+' - '+ DOLatestHB1AC+ ' - '+ glucoseMonitor +' - '+glucoseUnit+' - '+ketonesMeasure +' - '+ insulinReg+ ' - '+ InsulinSF +' - '+bgTarget+' - '+ bgStart+ ' - '+ intervalISF +' - '+insulinCalcMethod+' - '+fromBG+ ' - '+ toBG +' - '+heightCM+' - '+ Diabetescenter+ ' - '+ DOD +' - '+centName+' - '+centCity);
        try {
         db.transaction( (tx) => {
             tx.executeSql(
              'INSERT INTO patientprofile (UserID, DOB, weightKG, latest_HP1AC, latest_HP1AC_date, typeOfGlucoseM, glucoseLevel_unit, ketonesMeasure, insulinRegimen, ISF, targetBG_correct, startBG_correct, ISFIntervals, insulinCalcMethod, fromBG, toBG, height, diabetes_center, diagnosis_date, center_name, center_city)' 
              +'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [uID, DOBirth, weightKG, latestHB1AC_, DOLatestHB1AC, glucoseMonitor, glucoseUnit, ketonesMeasure, insulinReg, InsulinSF, bgTarget, bgStart, intervalISF, insulinCalcMethod, fromBG, toBG, heightCM, Diabetescenter, DOD, centName, centCity ]
            );
              
           //  getData();
        })
        
    } catch (error) {
        console.log(error);
    }
  } else {
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'INSERT INTO nonPatientprofile (UserID, DOB, weightKG, latest_HP1AC, latest_HP1AC_date, typeOfGlucoseM, glucoseLevel_unit, ketonesMeasure, insulinRegimen, ISF, targetBG_correct, startBG_correct, ISFIntervals, insulinCalcMethod, fromBG, toBG)' 
           +'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
             [uID, DOBirth, weightKG, latestHB1AC_, DOLatestHB1AC, glucoseMonitor, glucoseUnit, ketonesMeasure, insulinReg, InsulinSF, bgTarget, bgStart, intervalISF, insulinCalcMethod, fromBG, toBG]
         );
        
        //  getData();
     })
     
 } catch (error) {
     console.log(error);
 }
  }

  if (data.caluMethod == 'ICR'){
    onlineICRDB(timeFrom1, timeTo1, ICR1);
    onlineICRDB(timeFrom2, timeTo2, ICR2);
    onlineICRDB(timeFrom3, timeTo3, ICR3);
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'INSERT INTO icrInterval (UserID, fromTime, toTime, ICR)' 
           +'VALUES (?,?,?,?)',
             [uID, timeFrom1, timeTo1, ICR1 ]
         );
        
        //  getData();
     })
     
 } catch (error) {
     console.log(error);
 }
 try {
  db.transaction( (tx) => {
      tx.executeSql(
       'INSERT INTO icrInterval (UserID, fromTime, toTime, ICR)' 
       +'VALUES (?,?,?,?)',
         [uID, timeFrom2, timeTo2, ICR2 ]
     );
    
    //  getData();
 })
 
} catch (error) {
 console.log(error);
}
try {
  db.transaction( (tx) => {
      tx.executeSql(
       'INSERT INTO icrInterval (UserID, fromTime, toTime, ICR)' 
       +'VALUES (?,?,?,?)',
         [uID, timeFrom3, timeTo3, ICR3 ]
     );
    
    //  getData();
 })
 
} catch (error) {
 console.log(error);
}
  }
  if (data.caluMethod == 'ICR' && shouldShow3==true) {
    onlineICRDB(timeFrom4, timeTo4, ICR4);
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'INSERT INTO icrInterval (UserID, fromTime, toTime, ICR)' 
           +'VALUES (?,?,?,?)',
             [uID, timeFrom4, timeTo4, ICR4 ]
         );
        
        //  getData();
     })
     
    } catch (error) {
     console.log(error);
    }
  }  
  if (data.caluMethod == 'ICR' && shouldShow4==true) {
    onlineICRDB(timeFrom5, timeTo5, ICR5);
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'INSERT INTO icrInterval (UserID, fromTime, toTime, ICR)' 
           +'VALUES (?,?,?,?)',
             [uID, timeFrom5, timeTo5, ICR5 ]
         );
        
        //  getData();
     })
     
    } catch (error) {
     console.log(error);
    }
  } 
  if (data.caluMethod == 'ICR' && shouldShow5==true) {
    onlineICRDB(timeFrom6, timeTo6, ICR6);
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'INSERT INTO icrInterval (UserID, fromTime, toTime, ICR)' 
           +'VALUES (?,?,?,?)',
             [uID, timeFrom6, timeTo6, ICR6 ]
         );
        
        //  getData();
     })
     
    } catch (error) {
     console.log(error);
    }
  } 
  onlineCalcDB();
  navigation.navigate('calc') 
 
      } 
//-------------------------------    
const onlineICRDB = (fromT, toT, icr) => {
        var InsertAPIURL = "http://192.168.12.1/isugar/ICRInterval.php";   //API to  signup
      
        var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        };
        
        var Data ={
          UserID: onlinUserID,
          fromTime: fromT,
          toTime: toT,
          ICR: icr
          
        };
      
      // FETCH func ------------------------------------
      fetch(InsertAPIURL,{
          method:'POST',
          headers:headers,
          body: JSON.stringify(Data) //convert data to JSON
      })
      .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then((response)=>{
        alert('intervalss ' + response[0].Message);
      })
      .catch((error)=>{
          alert("Error Occured" + error);
      })
      }
//---------------------------
const onlineCalcDB = () => {
  var InsertAPIURL = "http://192.168.12.1/isugar/insulinCalcMethod.php";   //API to  signup

  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  
  var Data ={
    UserID: onlinUserID,
    insulinCalc: data.caluMethod
    
  };

// FETCH func ------------------------------------
fetch(InsertAPIURL,{
    method:'POST',
    headers:headers,
    body: JSON.stringify(Data) //convert data to JSON
})
.then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
.then((response)=>{
  alert('intervalss ' + response[0].Message);
})
.catch((error)=>{
    alert("Error Occured" + error);
})
}
//---------------------------



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
        {AccType == 'Patient Account' ? <Text style={styles.title}>Step 7 of 7: Insulin to Carbohydrate Ratio (ICR)  {'\n'}</Text>
        : <Text style={styles.title}>Step 6 of 6: Insulin to Carbohydrate Ratio (ICR)  {'\n'}</Text>}
      
      
         
<ScrollView>
<Text style={{fontSize: 20, color: '#05375a',}}>Choose your method for caculating meal insulin:{'\n'}--------------------------------</Text>
<View style={styles.radioB}>
        <RadioForm
        radio_props = {calcMethod}
        initial={0}
        onPress={ (value) => MethodForCalc(value) } 
        buttonSize = {10}
        buttonOuterSize = {14}
        buttonColor= '#AABED8'
        selectedButtonColor = '#8FA5C1'
        labelStyle = {{fontSize: 17, color: '#05375a',}}
        formHorizontal={false}
        

        />
    
        </View>
        

<View style={styles.action}>
{data.caluMethod=='Sliding Scale' ? navigation.navigate('sliding') : null }
{data.caluMethod=='ICR' ? <Text style={{fontSize: 20, color: '#05375a',}}>Time intervals for ICR:{'\n'}</Text> : null }
{data.caluMethod=='ICR' ? (<View style={styles.field} >
             <View style= {styles.actionP}>
             <Text style={styles.text_footer}>From</Text>
                     <TouchableOpacity onPress={showTimepicker1F} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date1From).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show1From && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date1From}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange1From}
                     />
                   )} 
                       </View>    
                       <View style= {styles.actionP}>
                           <Text style={styles.text_footer}>To</Text>
                     <TouchableOpacity onPress={showTimepicker1T} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date1TO).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show1TO && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date1TO}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange1To}
                     />
                   )} 
                   </View> 
                   <View style={styles.actionP}>
                   <Text style={styles.text_footer}>ICR:{'\n'}</Text>
                   <TextInput
                               keyboardType="decimal-pad"
                               placeholder="000"
                               onChangeText={(val)=>setICR1(val)}
                               style={styles.action}></TextInput>
                   
                   </View>
                 
                 </View>) : null }
</View>

{data.caluMethod=='ICR' ? (<View style={styles.field} >
             <View style= {styles.actionP}>
             <Text style={styles.text_footer}>From</Text>
                     <TouchableOpacity onPress={showTimepicker2F} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date2From).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show2From && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date2From}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange2From}
                     />
                   )} 
                       </View>    
                       <View style= {styles.actionP}>
                           <Text style={styles.text_footer}>To</Text>
                     <TouchableOpacity onPress={showTimepicker2T} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date2TO).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show2TO && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date2TO}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange2To}
                     />
                   )} 
                   </View> 
                   <View style={styles.actionP}>
                   <Text style={styles.text_footer}>ICR:{'\n'}</Text>
                   <TextInput
                               keyboardType="decimal-pad"
                               placeholder="000"
                               onChangeText={(val)=>setICR2(val)}
                               style={styles.action}></TextInput>
                   
                   </View>
                 
                 </View>) : null }
                 {data.caluMethod=='ICR' ? (<View style={styles.field} >
             <View style= {styles.actionP}>
             <Text style={styles.text_footer}>From</Text>
                     <TouchableOpacity onPress={showTimepicker3F} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date3From).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show3From && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date3From}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange3From}
                     />
                   )} 
                       </View>    
                       <View style= {styles.actionP}>
                           <Text style={styles.text_footer}>To</Text>
                     <TouchableOpacity onPress={showTimepicker3T} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date3TO).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show3TO && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date3TO}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange3To}
                     />
                   )} 
                   </View> 
                   <View style={styles.actionP}>
                   <Text style={styles.text_footer}>ICR:{'\n'}</Text>
                   <TextInput
                               keyboardType="decimal-pad"
                               placeholder="000"
                               onChangeText={(val)=>setICR3(val)}
                               style={styles.action}></TextInput>
                   
                   </View>
                 
                 </View>) : null }

{shouldShow3?(<View style={styles.field} >
             <View style= {styles.actionP}>
             <Text style={styles.text_footer}>From</Text>
                     <TouchableOpacity onPress={showTimepicker4F} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date4From).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show4From && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date4From}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange4From}
                     />
                   )} 
                       </View>    
                       <View style= {styles.actionP}>
                           <Text style={styles.text_footer}>To</Text>
                     <TouchableOpacity onPress={showTimepicker4T} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date4TO).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show4TO && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date4TO}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange4To}
                     />
                   )} 
                   </View> 
                   <View style={styles.actionP}>
                   <Text style={styles.text_footer}>ICR:{'\n'}</Text>
                   <TextInput
                               keyboardType="decimal-pad"
                               placeholder="000"
                               onChangeText={(val)=>setICR4(val)}
                               style={styles.action}></TextInput>
                   
                   </View>
                 
                 </View>) : null }
                 {shouldShow4?(<View style={styles.field} >
             <View style= {styles.actionP}>
             <Text style={styles.text_footer}>From</Text>
                     <TouchableOpacity onPress={showTimepicker5F} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date5From).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show5From && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date5From}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange5From}
                     />
                   )} 
                       </View>    
                       <View style= {styles.actionP}>
                           <Text style={styles.text_footer}>To</Text>
                     <TouchableOpacity onPress={showTimepicker5T} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date5TO).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show5TO && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date5TO}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange5To}
                     />
                   )} 
                   </View> 
                   <View style={styles.actionP}>
                   <Text style={styles.text_footer}>ICR:{'\n'}</Text>
                   <TextInput
                               keyboardType="decimal-pad"
                               placeholder="000"
                               onChangeText={(val)=>setICR5(val)}
                               style={styles.action}></TextInput>
                   
                   </View>
                 
                 </View>): null }
                    {shouldShow5 ? (<View style={styles.field} >
             <View style= {styles.actionP}>
             <Text style={styles.text_footer}>From</Text>
                     <TouchableOpacity onPress={showTimepicker6F} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date6From).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show6From && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date6From}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange6From}
                     />
                   )} 
                       </View>    
                       <View style= {styles.actionP}>
                           <Text style={styles.text_footer}>To</Text>
                     <TouchableOpacity onPress={showTimepicker6T} 
                 >
             <Text testID="dateTimePicker" style={styles.text_footerD} >
                             {moment.utc(date6TO).format('h:mm a')}
                             </Text> 
                 </TouchableOpacity>
                   
                   {show6TO && (
                     <DateTimePicker
                       testID="dateTimePicker"
                       value={date6TO}
                       mode={mode}
                       is24Hour={false}
                       display="default"
                       onChange={onChange6To}
                     />
                   )} 
                   </View> 
                   <View style={styles.actionP}>
                   <Text style={styles.text_footer}>ICR:{'\n'}</Text>
                   <TextInput
                               keyboardType="decimal-pad"
                               placeholder="000"
                               onChangeText={(val)=>setICR6(val)}
                               style={styles.action}></TextInput>
                   
                   </View>
                 
                 </View>) : null }
                 

<View>
<View style={styles.buttonV}> 
{data.caluMethod == 'ICR'? (<TouchableOpacity onPress={()=>setShouldShowAll()}>
                <LinearGradient
                    colors={['#E7EFFA', '#AABED8']} style={styles.buttonRS}
                >
                    <Text style={styles.titleBS}>+ Add another Time interval</Text>
                  
                </LinearGradient>
            </TouchableOpacity>
            ) : null }
        </View>
   </View>
    

          <View style={styles.buttonV}>
        <TouchableOpacity onPress={()=>insert()}>
                <LinearGradient
                    colors={['#E7EFFA', '#AABED8', '#AABED8']} style={styles.buttonR}
                >
                    <Text style={styles.titleB}>Done</Text>
                  
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

export default icr;

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
fieldMain: {
  marginTop: 15,
  marginBottom: 15,
},
field: {
    width: 250,
    height: 250,
    justifyContent:'space-evenly',
    paddingLeft: 15,
    marginBottom: 35,
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
  fontSize: 15,
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
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:'space-evenly',
  flexWrap: 'wrap',
  marginTop: 10,
  marginBottom: 10,
  paddingBottom: 25,
  
},
actionN: {
    width: 180,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#CACDD1',
  
},
actionP: {
  width: 150,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: 10,
  paddingBottom: 15,
  backgroundColor: '#fff',
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
}, 
radioB :{
  marginTop: 45,
  justifyContent: 'space-between'
  }
});


