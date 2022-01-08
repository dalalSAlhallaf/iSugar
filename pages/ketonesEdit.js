import React, { useEffect, useState } from 'react';
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


  const ketonesEdit = ({ navigation, route }) =>{
    useEffect(() => {
        getLocalInfo();
        }, []);

    const [dbData, setDbData] = useState({
        glucoseMType:'',
        gUnit: '',
        kMeasure: '',
        fBG: 0,
        tBG: 0
    });
    const getLocalInfo = ()=>{
        try {
            console.log('in try');
            db.transaction( (tx) => {
                tx.executeSql(
                  'SELECT UserID, typeOfGlucoseM, glucoseLevel_unit, ketonesMeasure, fromBG, toBG FROM patientprofile',
                  [],
                  (tx, results) => {
                    var rows = results.rows;
                    for (let i = 0; i < rows.length; i++) {          
                        var userID = rows.item(i).UserID;
                        if (238 == userID){
                            setDbData({
                                ...dbData,
                                glucoseMType: rows.item(i).typeOfGlucoseM,
                                gUnit: rows.item(i).glucoseLevel_unit,
                                kMeasure: rows.item(i).ketonesMeasure,
                                fBG: rows.item(i).fromBG,
                                tBG: rows.item(i).toBG
                            });
                          return;
                        }
                      }
                  }   
        ) 
            
        
        }  ) 
        } catch (error) {
           console.log(error);
        }
      
    }
   
  const [monitor, setMonitor] = useState('0');
  const [levelUnit, setlevelUnit] = useState('0');
  const [ketones, setketones] = useState('0');
  const [BGFrom, setFROM] = useState(0);
  const [BGTO, setTO] = useState(0);

 


const check = () => {
  if (monitor != '0'){
    updateGMonitorLocal();
    if (AccType == 'Patient Account'){
      onlineMonitorDB();
    }
    
  }
  if (levelUnit != '0'){
    if (AccType == 'Patient Account'){
      onlineUnitDB();
    }
    
    updateGUnitLocal();
    
  }
  if (ketones != '0'){
    if (AccType == 'Patient Account'){
      onlineKetonesM();
    }
    updateKetonesLocal();
    
    
  } 
  if (BGFrom != 0 ){
     updateFromBGLocal();
    }
    if (BGTO != 0 ){
        updateToBGLocal();
       }
       if (AccType == 'Patient Account'){
        if (BGFrom != 0 && BGTO != 0 ){
          onlineTargetBGDB1();
        } else if (BGFrom != 0 && BGTO == 0 ){
          onlineTargetBGDB2();
        } else if (BGFrom == 0 && BGTO != 0 ){
          onlineTargetBGDB3();
        }
       }
       alert('Updated');
       navigation.navigate('edit');
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
     const updateGMonitorLocal = () => {
      if (AccType == 'Patient Account'){
        try {
          console.log('in monitor');
          db.transaction( (tx) => {
              tx.executeSql(
                'UPDATE patientprofile SET typeOfGlucoseM=? WHERE UserID=? ',
                [monitor, 238],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
               if (results.rowsAffected > 0) {
               console.log('monitor updated seuccefully');
                    }
                }   
        ) 
          
        
        }  ) 
        } catch (error) {
         console.log(error);
        }
      } else {
        try {
          console.log('in monitor');
          db.transaction( (tx) => {
              tx.executeSql(
                'UPDATE nonPatientprofile SET typeOfGlucoseM=? WHERE UserID=? ',
                [monitor, 238],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
               if (results.rowsAffected > 0) {
               console.log('monitor updated seuccefully');
                    }
                }   
        ) 
          
        
        }  ) 
        } catch (error) {
         console.log(error);
        }
      }
      
        }
        const updateGUnitLocal = () => {
          if (AccType == 'Patient Account'){
            try {
              console.log('in unit');
              db.transaction( (tx) => {
                  tx.executeSql(
                    'UPDATE patientprofile SET glucoseLevel_unit=? WHERE UserID=? ',
                    [levelUnit, 238],
                    (tx, results) => {
                      console.log('Results', results.rowsAffected);
                   if (results.rowsAffected > 0) {
                   console.log('unit updated seuccefully');
                        }
                    }   
            ) 
              
            
            }  ) 
            } catch (error) {
             console.log(error);
            }
          } else {
            try {
              console.log('in unit');
              db.transaction( (tx) => {
                  tx.executeSql(
                    'UPDATE nonPatientprofile SET glucoseLevel_unit=? WHERE UserID=? ',
                    [levelUnit, 238],
                    (tx, results) => {
                      console.log('Results', results.rowsAffected);
                   if (results.rowsAffected > 0) {
                   console.log('unit updated seuccefully');
                        }
                    }   
            ) 
              
            
            }  ) 
            } catch (error) {
             console.log(error);
            }
          }
            
            }
            const updateKetonesLocal = () => {
              if (AccType == 'Patient Account'){
                try {
                  console.log('in ketones');
                  db.transaction( (tx) => {
                      tx.executeSql(
                        'UPDATE patientprofile SET ketonesMeasure=? WHERE UserID=? ',
                        [ketones, 238],
                        (tx, results) => {
                          console.log('Results', results.rowsAffected);
                       if (results.rowsAffected > 0) {
                       console.log('unit updated seuccefully');
                            }
                        }   
                ) 
                  
                
                }  ) 
                } catch (error) {
                 console.log(error);
                }
              } else {
                try {
                  console.log('in ketones');
                  db.transaction( (tx) => {
                      tx.executeSql(
                        'UPDATE nonPatientprofile SET ketonesMeasure=? WHERE UserID=? ',
                        [ketones, 238],
                        (tx, results) => {
                          console.log('Results', results.rowsAffected);
                       if (results.rowsAffected > 0) {
                       console.log('unit updated seuccefully');
                            }
                        }   
                ) 
                  
                
                }  ) 
                } catch (error) {
                 console.log(error);
                }
              }
                
                }
                const updateFromBGLocal = () => {
                  if (AccType == 'Patient Account'){
                    try {
                      console.log('in from');
                      db.transaction( (tx) => {
                          tx.executeSql(
                            'UPDATE patientprofile SET fromBG=? WHERE UserID=? ',
                            [BGFrom.BGFrom, 238],
                            (tx, results) => {
                              console.log('Results', results.rowsAffected);
                           if (results.rowsAffected > 0) {
                           console.log('from updated seuccefully');
                                }
                            }   
                    ) 
                      
                    
                    }  ) 
                    } catch (error) {
                     console.log(error);
                    }
                  } else {
                    try {
                      console.log('in from');
                      db.transaction( (tx) => {
                          tx.executeSql(
                            'UPDATE nonPatientprofile SET fromBG=? WHERE UserID=? ',
                            [BGFrom.BGFrom, 238],
                            (tx, results) => {
                              console.log('Results', results.rowsAffected);
                           if (results.rowsAffected > 0) {
                           console.log('from updated seuccefully');
                                }
                            }   
                    ) 
                      
                    
                    }  ) 
                    } catch (error) {
                     console.log(error);
                    }
                  }
                   
                    }
                    const updateToBGLocal = () => {
                      if (AccType == 'Patient Account'){
                        try {
                          console.log('in to');
                          db.transaction( (tx) => {
                              tx.executeSql(
                                'UPDATE patientprofile SET toBG=? WHERE UserID=? ',
                                [BGTO.BGTO, 238],
                                (tx, results) => {
                                  console.log('Results', results.rowsAffected);
                               if (results.rowsAffected > 0) {
                               console.log('to updated seuccefully');
                                    }
                                }   
                        ) 
                          
                        
                        }  ) 
                        } catch (error) {
                         console.log(error);
                        }
                      } else {
                        try {
                          console.log('in to');
                          db.transaction( (tx) => {
                              tx.executeSql(
                                'UPDATE nonPatientprofile SET toBG=? WHERE UserID=? ',
                                [BGTO.BGTO, 238],
                                (tx, results) => {
                                  console.log('Results', results.rowsAffected);
                               if (results.rowsAffected > 0) {
                               console.log('to updated seuccefully');
                                    }
                                }   
                        ) 
                          
                        
                        }  ) 
                        } catch (error) {
                         console.log(error);
                        }
                      }
                        
                        }

                        const onlineKetonesM = () => {
                          var InsertAPIURL = "https://isugarserver.com/ketonesMeasurement.php";   //API to  signup
                        
                          var headers = {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          };
                          
                          var Data ={
                            UserID: 119,
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
                            alert("Error Occured" + error);
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
                            UserID: 119,
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
                            alert("Error Occured" + error);
                        })
                        }
                        //-------------------------------
                        const onlineTargetBGDB1 = () => {
                          var InsertAPIURL = "https://isugarserver.com/TargetBGPerDay%20.php";   //API to  signup
                        
                          var headers = {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          };
                          
                          var Data ={
                            UserID: 119,
                            fromBG: BGFrom.BGFrom,
                            toBG: BGTO.BGTO
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
                            alert("Error Occured" + error);
                        })
                        }
                        //-------------------------------
                        const onlineTargetBGDB2 = () => {
                          var InsertAPIURL = "https://isugarserver.com/TargetBGPerDay%20.php";   //API to  signup
                        
                          var headers = {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          };
                          
                          var Data ={
                            UserID: 119,
                            fromBG: BGFrom.BGFrom,
                            toBG: dbData.tBG
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
                            alert("Error Occured" + error);
                        })
                        }
                        //-------------------------------
                        const onlineTargetBGDB3 = () => {
                          var InsertAPIURL = "https://isugarserver.com/TargetBGPerDay%20.php";   //API to  signup
                        
                          var headers = {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          };
                          
                          var Data ={
                            UserID: 119,
                            fromBG: dbData.fBG,
                            toBG: BGTO.BGTO
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
                            alert("Error Occured" + error);
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
                            UserID: 119,
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
                            alert("Error Occured" + error);
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
         <Text style={styles.title}>Edit Glucose and Ketones Monitoring Information{'\n'}</Text> 
      <ScrollView>
          {dbData.glucoseMType == 'Fingerstick blood glucose' ? (<View style={styles.action}>
              <Text style={styles.text_footer}>Type of Glucose Monitoring</Text>
              <Picker
               itemStyle={{color: '#000'}}
              selectedValue={monitor}
              onValueChange={(value) => setMonitor(value)}
              mode="dropdown"
              style={styles.picker}
              >
                  
            <Picker.Item label= 'Fingerstick blood glucose' value='Fingerstick blood glucose'   ></Picker.Item>
            <Picker.Item label= 'Continuous Glucose Monitor (CGM)' value='CGM'   ></Picker.Item>
            <Picker.Item label= 'Intermittently scanned Continuous Glucose Monitor (isCGM)' value='isCGM'   ></Picker.Item>

        </Picker>
      
</View>) 
          : null }
           {dbData.glucoseMType == 'CGM' ? (<View style={styles.action}>
              <Text style={styles.text_footer}>Type of Glucose Monitoring</Text>
              <Picker
               itemStyle={{color: '#000'}}
              selectedValue={monitor}
              onValueChange={(value) => setMonitor(value)}
              mode="dropdown"
              style={styles.picker}
              >
            
            <Picker.Item label= 'Continuous Glucose Monitor (CGM)' value='CGM'   ></Picker.Item>    
            <Picker.Item label= 'Fingerstick blood glucose' value='Fingerstick blood glucose'  ></Picker.Item>
            <Picker.Item label= 'Intermittently scanned Continuous Glucose Monitor (isCGM)' value='isCGM'   ></Picker.Item>

        </Picker>
      
</View>) 
          : null }
          {dbData.glucoseMType == 'isCGM' ? (<View style={styles.action}>
              <Text style={styles.text_footer}>Type of Glucose Monitoring</Text>
              <Picker
               itemStyle={{color: '#000'}}
              selectedValue={monitor}
              onValueChange={(value) => setMonitor(value)}
              mode="dropdown"
              style={styles.picker}
              >
            
            <Picker.Item label= 'Intermittently scanned Continuous Glucose Monitor (isCGM)' value='isCGM'   ></Picker.Item>
            <Picker.Item label= 'Continuous Glucose Monitor (CGM)' value='CGM'   ></Picker.Item>    
            <Picker.Item label= 'Fingerstick blood glucose' value='Fingerstick blood glucose'   ></Picker.Item>

        </Picker>
      
</View>) 
          : null }
                    {dbData.gUnit == 'mg/dl' ? (<View style={styles.action}>
              <Text style={styles.text_footer}>Blood glucose level unit in the glucometer:</Text>
              <Picker
               itemStyle={{color: '#000'}}
              selectedValue={levelUnit}
              onValueChange={(value) => setlevelUnit(value)}
              mode="dropdown"
              style={styles.picker}
              >
                  
            <Picker.Item label= 'mg/dl' value='mg/dl'   ></Picker.Item>
            <Picker.Item label= 'mmol/L' value='mmol/L'   ></Picker.Item>

        </Picker>
      
</View>) 
          : null }
{dbData.gUnit == 'mmol/L' ? (<View style={styles.action}>
              <Text style={styles.text_footer}>Blood glucose level unit in the glucometer:</Text>
              <Picker
               itemStyle={{color: '#000'}}
              selectedValue={levelUnit}
              onValueChange={(value) => setlevelUnit(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'mmol/L' value='mmol/L'   ></Picker.Item>   
            <Picker.Item label= 'mg/dl' value='mg/dl'   ></Picker.Item>
            

        </Picker>
      
</View>) 
          : null }
{dbData.kMeasure == 'Blood' ? (<View style={styles.action}>
              <Text style={styles.text_footer}>Type of Ketones measurement:</Text>
              <Picker
               itemStyle={{color: '#000'}}
              selectedValue={ketones}
              onValueChange={(value) => setketones(value)}
              mode="dropdown"
              style={styles.picker}
              >
                  
            <Picker.Item label= 'Blood' value='Blood'   ></Picker.Item>
            <Picker.Item label= 'Urine' value='Urine'   ></Picker.Item>

        </Picker>
      
</View>) 
: null }
{dbData.kMeasure == 'Urine' ? (<View style={styles.action}>
              <Text style={styles.text_footer}>Type of Ketones measurement:</Text>
              <Picker
               itemStyle={{color: '#000'}}
              selectedValue={ketones}
              onValueChange={(value) => setketones(value)}
              mode="dropdown"
              style={styles.picker}
              >
            <Picker.Item label= 'Urine' value='Urine'  ></Picker.Item>    
            <Picker.Item label= 'Blood' value='Blood'   ></Picker.Item>
            

        </Picker>
      
</View>) 
: null }

<View style={styles.action}>
              <Text style={styles.text_footer}>Target blood glucose level per day:{'\n'}</Text>
             
              <View style={styles.field} >
              <View style={styles.actionB}>
              <Text style={styles.text_footer}>To:</Text>
              {(levelUnit=='mg/dl' || levelUnit=='0') && dbData.gUnit=='mg/dl'? 
            <TextInput
            keyboardType="decimal-pad"
            defaultValue={dbData.tBG+''}
            onChangeText = {(val)=>validateBGTo(val)}
            style={styles.actionN}></TextInput> : 
            <TextInput
            keyboardType="decimal-pad"
            defaultValue={(dbData.tBG/18).toFixed(2)+''}
            onChangeText = {(val)=>validateBGTo(val)}
            placeholder="00 mmol/L"
            style={styles.actionN}></TextInput>
            }

</View>
<View style={styles.actionB}>
              <Text style={styles.text_footer}>From:</Text>
              {(levelUnit=='mg/dl' || levelUnit=='0') && dbData.gUnit=='mg/dl' ? 
            <TextInput
            keyboardType="decimal-pad"
            defaultValue={dbData.fBG+''}
            onChangeText = {(val)=>validateBGFrom(val)}
            style={styles.actionN}></TextInput> : 
            <TextInput 
            keyboardType="decimal-pad"
            onChangeText = {(val)=>validateBGFrom(val)}
            defaultValue={(dbData.fBG/18).toFixed(2)+''}
            placeholder="00 mmol/L" 
            style={styles.actionN}></TextInput>
            
            }

</View>
              </View>
     
      
</View>

          <View style={styles.buttonV}>
        <TouchableOpacity onPress={()=>check()}>
                <LinearGradient
                    colors={['#E7EFFA', '#AABED8', '#AABED8']} style={styles.buttonR}
                >
                    <Text style={styles.titleB}>Update</Text>
                  
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

export default ketonesEdit;

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
  borderWidth: 2,
  borderColor: '#4c4c4c',
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


