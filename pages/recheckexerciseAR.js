/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable eqeqeq */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */


import React, {useState, useEffect} from 'react';
import react from 'react';
import {
  StyleSheet,
  Switch,
  ScrollView,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
  Dimensions,
  alert,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';

const recheckExercise = ( {navigation} ) => {
    
  var onlinUserID = 15;
  var uID = 15;

const [currentBG, setCurrentBG] = useState('0');//for current BG level
const [TypeOfExercise, setTypeOfExercise] = useState('0'); //reason of post exercize
//Pre Switch
const [changeType, setChangeType] = useState(false);
const togglePreSwitch = () =>
  setChangeType(previousState => !previousState);
//Pre Switch
const [finishExercise, setFinishExercise] = useState(false);
const toggleFinishSwitch = () =>
  setFinishExercise(previousState => !previousState);

  const [instruction, setInstruction] = useState('');//to set an appropriate instructions for current BG and exercise type
  const [instruction2, setInstruction2] = useState('');//to set an appropriate instructions for current BG and exercise type
  //const [goTo, setGoTo] = useState('');//to set an appropriate instructions for current BG and exercise type
  const [ketones, setKetones] = useState('');//for ketones if your BG level is > 250
  const [blood, setBlood] = useState('-1');//for ketones type if your BG level is > 250
  const [urine, setUrine] = useState('-1');//for ketones type if your BG level is > 250


  var TakenInsulin = 0;
  var currentTaken = -1;
  var isPlanned = -1;
  var weight = 0;

  var gram1 = 0;
  var gram2 = 0;

  var curDate = moment().format('YYYY-MM-DD');
  var curTime = moment().format('HH:mm:ss');
  var correction = '';
  var sum = '';
  var level = '';

  const checkExercise = () => {
      checkIsPlanned();
    
    if (TypeOfExercise == '0'){
      Alert.alert('الرجاء قم باختيار نوع التمارين ');
      
    } else if (TypeOfExercise == 'الجري' || TypeOfExercise == 'السباحة' || TypeOfExercise == 'المشي' || TypeOfExercise == 'ركوب الدراجة الثابتة (الدوران السريع)' || TypeOfExercise == 'تسلق الجبال' || TypeOfExercise == 'الكيك بوكسينغ' || TypeOfExercise == 'التزلج على الثلج' || TypeOfExercise == 'تمارين القفز' || TypeOfExercise == 'الفنون القتالية' || TypeOfExercise == 'كرة السلة'
    || TypeOfExercise == 'القفز على النطيطة' || TypeOfExercise == 'تمارين التقوية الهوائية المتتابعة' || TypeOfExercise == 'ركوب الدراجة' || TypeOfExercise == 'الهرولة' || TypeOfExercise == 'تمارين الكارديو/ أجهزة تمارين الكارديو' || TypeOfExercise == 'دروس التمارين الهوائية – تمارين الأيروبك' || TypeOfExercise == 'القفز بحبل القفز' || TypeOfExercise == 'صعود الدرج (جهاز الدرج)' || TypeOfExercise == 'ركوب الدراجة الثابتة' || TypeOfExercise == 'جهاز الاليبتكال'
    || TypeOfExercise == 'بليومتريك' || TypeOfExercise == 'التزلج' || TypeOfExercise == 'كرة المضرب' || TypeOfExercise == 'كرة القدم' || TypeOfExercise == 'الملاكمة' || TypeOfExercise == 'اللعب بحلقة الهولا هوب' || TypeOfExercise == 'رياضة/تمارين هوائية أخرى' || TypeOfExercise == 'الرقص' || TypeOfExercise == 'التجديف' || TypeOfExercise == 'رقص الزومبا' ){
    
      if (currentBG < 70){
      console.log('less than 70');
      setInstruction('لا تقم بعمل التمارين، عالج نقص سكر الدم (انخفاض مستوى الجلوكوز في الدم) ');
    
    } else if (currentBG >= 70 && currentBG < 90){
      console.log('between 70 and  90');
if (TakenInsulin > 0 && currentTaken == 1 && isPlanned == 1){
    gram1 = 15;
    console.log(gram1 + '-' + gram2);
    sum = gram1 + '-' + gram2;
    console.log(sum);
    setInstruction('خذ ' + gram1 + ' جرام من الكربوهيدرات الآن و قم بإعادة فحص مستوى الجلوكوز في الدم بعد 15 دقيقة، ولا تقم بعمل التمارين في حال كان مستوى الجلوكوز في الدم أقل من 90 مج/دل؛ وذلك لخطورة حدوث نفص سكر الدم');
  handleScheduleNotification('السُّكر','حان الوقت لإعادة فحص مستوى الجلوكوز في الدم', 15);

} else {
  if (weight > 0 && weight < 60){
    gram1 = weight * 1;
    gram2 = weight * 1.5;
    console.log(gram1 + '-' + gram2);
    sum = gram1 + '-' + gram2;
    console.log(sum);
    setInstruction('خذ ' + gram1 + ' - ' + gram2 + '  جرام من الكربوهيدرات الآن و قم بإعادة فحص مستوى الجلوكوز في الدم بعد 15 دقيقة، ولا تقم بعمل التمارين في حال كان مستوى الجلوكوز في الدم أقل من 90 مج/دل؛ وذلك لخطورة حدوث نفص سكر الدم');
      handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 15);
      
}
  else if (weight >= 60){
    gram1 = 60;
    gram2 = 90;
    console.log(gram1 + '-' + gram2);
    sum = gram1 + '-' + gram2;
    console.log(sum);
    setInstruction('خذ ' + gram1 + ' - ' + gram2 + '  جرام من الكربوهيدرات الآن و قم بإعادة فحص مستوى الجلوكوز في الدم بعد 15 دقيقة، ولا تقم بعمل التمارين في حال كان مستوى الجلوكوز في الدم أقل من 90 مج/دل؛ وذلك لخطورة حدوث نفص سكر الدم');
   
    handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 15);
    
}
}
    } else if (currentBG >= 90 && currentBG < 126){
      console.log('between 90 and 126');
      if (TakenInsulin > 0 && currentTaken == 1 && isPlanned == 1){
        gram1 = 15;
        console.log(gram1 + '-' + gram2);
        sum = gram1 + '-' + gram2;
        console.log(sum);
        setInstruction('خذ ' + gram1 + '  جرام من الكربوهيدرات الآن و قم بإعادة فحص مستوى الجلوكوز في الدم بعد 30 دقيقة، ولا تقم بعمل التمارين في حال كان مستوى الجلوكوز في الدم أقل من 90 مج/دل؛ وذلك لخطورة حدوث نفص سكر الدم');
     
        handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 30);
         } else {
        if (weight > 0 && weight < 60){
          gram1 = weight * 1;
          gram2 = weight * 1.5;
          console.log(gram1 + '-' + gram2);
          sum = gram1 + '-' + gram2;
          console.log(sum);
          setInstruction('خذ ' + gram1 + ' - ' + gram2 + '  جرام من الكربوهيدرات الآن و قم بإعادة فحص مستوى الجلوكوز في الدم بعد 30 دقيقة، ولا تقم بعمل التمارين في حال كان مستوى الجلوكوز في الدم أقل من 90 مج/دل؛ وذلك لخطورة حدوث نفص سكر الدم');
          
            handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 30);
            
        }
        else if (weight >= 60){
            gram1 = 60;
      gram2 = 90;
      console.log(gram1 + '-' + gram2);
      sum = gram1 + '-' + gram2;
      console.log(sum);
      setInstruction('خذ ' + gram1 + ' - ' + gram2 + '  جرام من الكربوهيدرات الآن و قم بإعادة فحص مستوى الجلوكوز في الدم بعد 30 دقيقة، ولا تقم بعمل التمارين في حال كان مستوى الجلوكوز في الدم أقل من 90 مج/دل؛ وذلك لخطورة حدوث نفص سكر الدم');
        handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 30);
        
    }
      }
    }  else if (currentBG >= 126 && currentBG < 250){
      console.log('between 126 and 250');
      setInstruction('بإمكانك البدء في القيام بعمل التمارين و قم بإعادة حساب  مستوى الجلوكوز في الدم كل 30 دقيقة خلال فترة قيامك بالتمارين أو عاجلا إذا كان لديك أعراض انخفاض أو ارتفاع مستوى الجلوكوز في الدم ');
     
        handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 30);
        

    } else if (currentBG >= 250) {
      console.log('greater than 250');

  if ( blood > 0.6 || urine == 'Small' || urine == 'Moderate' || urine == 'Large'){
    console.log('option 1');
    setInstruction2('لا تقم بعمل التمارين و تناول المزيد من الأنسولين من أجل حالة الكيتونات');
          } else if (blood < 0.6 || urine == 'Negative' || urine == 'Trace'){
      console.log('option 2');
     setInstruction2('بإمكانك البدء في القيام بعمل التمارين و قم بإعادة حساب  مستوى الجلوكوز في الدم كل 30 دقيقة خلال فترة قيامك بالتمارين أو عاجلا إذا كان لديك أعراض انخفاض أو ارتفاع مستوى الجلوكوز في الدم ');
     
      handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 30);
      
    }
    }//end all cureent BG cases
    }//end aerobic
    
    else {
      if (currentBG < 70){
        console.log('less than 70');
        setInstruction('لا تقم بعمل التمارين، عالج نقص سكر الدم (انخفاض مستوى الجلوكوز في الدم) ');
    
      } else if (currentBG >= 70 && currentBG < 90){
        console.log('between 70 and  90'); console.log('between 70 and  90');
        if (TakenInsulin > 0 && currentTaken == 1 && isPlanned == 1){
            gram1 = 15;
            console.log(gram1 + '-' + gram2);
            sum = gram1 + '-' + gram2;
            console.log(sum);
            setInstruction('خذ ' + gram1 + '  جرام من الكربوهيدرات الآن و قم بإعادة فحص مستوى الجلوكوز في الدم بعد 15 دقيقة، ولا تقم بعمل التمارين في حال كان مستوى الجلوكوز في الدم أقل من 90 مج/دل؛ وذلك لخطورة حدوث نفص سكر الدم');
           
              handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 15);
              
          } else {
          if (weight > 0 && weight < 60){
            gram1 = weight * 1;
            gram2 = weight * 1.5;
            console.log(gram1 + '-' + gram2);
            sum = gram1 + '-' + gram2;
            console.log(sum);
            setInstruction('خذ ' + gram1 + ' - ' + gram2 + '  جرام من الكربوهيدرات الآن و قم بإعادة فحص مستوى الجلوكوز في الدم بعد 15 دقيقة، ولا تقم بعمل التمارين في حال كان مستوى الجلوكوز في الدم أقل من 90 مج/دل؛ وذلك لخطورة حدوث نفص سكر الدم');
            
              handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 15);
              
          }
          else if (weight >= 60){
            gram1 = 60;
            gram2 = 90;
            console.log(gram1 + '-' + gram2);
            sum = gram1 + '-' + gram2;
            console.log(sum);
            setInstruction('خذ ' + gram1 + ' - ' + gram2 + '  جرام من الكربوهيدرات الآن و قم بإعادة فحص مستوى الجلوكوز في الدم بعد 15 دقيقة، ولا تقم بعمل التمارين في حال كان مستوى الجلوكوز في الدم أقل من 90 مج/دل؛ وذلك لخطورة حدوث نفص سكر الدم');
           
              handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 15);
              
          }
        }
      } else if (currentBG >= 90 && currentBG < 250){
        console.log('between 90 and 250');
        setInstruction('بإمكانك البدء في القيام بعمل التمارين و قم بإعادة حساب  مستوى الجلوكوز في الدم كل 30 دقيقة خلال فترة قيامك بالتمارين أو عاجلا إذا كان لديك أعراض انخفاض أو ارتفاع مستوى الجلوكوز في الدم ');
        
          handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 30);
          
      } else if (currentBG >= 250) {
        console.log('greater than 250');
        if ( blood > 0.6 || urine == 'Small' || urine == 'Moderate' || urine == 'Large'){
          console.log('option 1');
          setInstruction2('لا تقم بعمل التمارين و تناول المزيد من الأنسولين من أجل حالة الكيتونات');
                } else if (blood < 0.6 || urine == 'Negative' || urine == 'Trace'){
            console.log('option 2');
            setInstruction2('بإمكانك البدء في القيام بعمل التمارين و قم بإعادة حساب  مستوى الجلوكوز في الدم كل 30 دقيقة خلال فترة قيامك بالتمارين أو عاجلا إذا كان لديك أعراض انخفاض أو ارتفاع مستوى الجلوكوز في الدم ');
            
              handleScheduleNotification('السُّكر','حان وقت إعادة فحص مستوى سكر الدم', 30);
              
          }
      }//end all cureent BG cases
    }//end Anaerobic
if (blood != '-1'){
  level = blood;
  console.log('level:' + level);
  }
  else if (urine != '-1'){
    level = urine;
    console.log('level:' + level);
    }
    saveInstruction();
    saveBGLevel();
    insertAll();
      };   

  const saveLast = () => {//if the user finish exercise
    saveBGLevel();
    insertBG();
    navigation.navigate('Home');//go to home
  };

//==============for notification=============================
const handleScheduleNotification = (title, message, time) => {
  PushNotification.localNotificationSchedule({
      channelId: 'channel-id',
      title: title,
      message: message,
      date: new Date(Date.now() + (time * 60 * 1000)),
      allowWhileIdle: true,
  });
  };

//-----------------------------DATABASE----------------------------------------------------
const checkIsPlanned = () => {
    console.log('in DB of Taken insulin and planned exercise');
    // eslint-disable-next-line quotes
    var InsertAPIURL = "http://192.168.56.1/iSugar/checkPlannedExercise.php";   //API to  signup
  
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    var Data = {
      UserID: onlinUserID,
    };
  
  // FETCH func ------------------------------------
  fetch(InsertAPIURL,{
      method:'POST',
      headers:headers,
      body: JSON.stringify(Data),//convert data to JSON
  })
  .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
  .then((response)=>{
    onlinUserID = response[0].userID;
       console.log(response[0].flag);
  
   if (response[0].flag == 'true'){
    // if (onlinUserID != '0'){
        console.log(response[0].userID);
       TakenInsulin = response[0].TakenInslin;
        console.log(response[0].TakenInslin);
       currentTaken = response[0].currentTaken;
         console.log(response[0].currentTaken);
       isPlanned = response[0].currentPlanned;
         console.log(response[0].currentPlanned);
          console.log('inside recheck: ');
   //}
   console.log(onlinUserID + '-' + TakenInsulin + '-' + currentTaken + '-' + isPlanned);
   checkWeight();
   }
   console.log('inside onlineDB: ');
  })
  .catch((error)=>{
      alert('Error Occured' + error);
  })
  }
  
  const checkWeight = () => {
    console.log('in DB of weight');
    // eslint-disable-next-line quotes
    var InsertAPIURL = "http://192.168.56.1/iSugar/checkWeight.php";   //API to  signup
  
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    var Data = {
      UserID: onlinUserID,
    };
  
  // FETCH func ------------------------------------
  fetch(InsertAPIURL,{
      method:'POST',
      headers:headers,
      body: JSON.stringify(Data),//convert data to JSON
  })
  .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
  .then((response)=>{
    onlinUserID = response[0].userID;
       console.log(response[0].flag);
  
   if (response[0].flag == 'true'){
    // if (onlinUserID != '0'){
        console.log(response[0].userID);
        weight = response[0].weight_KG;
        console.log(response[0].weight_KG);
          console.log('inside recheck2: ');
   //}
   console.log(onlinUserID + '-' + weight);
   }
   console.log('inside onlineDB2: ');
  })
  .catch((error)=>{
      alert('Error Occured' + error);
  })
  }

const saveInstruction = () => {
  console.log('in DB of Saving information');
  // eslint-disable-next-line quotes
  var InsertAPIURL = "http://192.168.56.1/iSugar/recheckrecord.php";   //API to  signup

  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  var Data = {
    UserID: onlinUserID,
    recordDate: curDate,
    recordTime:curTime,
    exerciseType: TypeOfExercise,
    suggestedCorrectionDose: correction,
    ketonesSource: ketones,
    ketonesLevel: level,
    suggestCarbs: sum,
  };

// FETCH func ------------------------------------
fetch(InsertAPIURL,{
    method:'POST',
    headers:headers,
    body: JSON.stringify(Data),//convert data to JSON
})
.then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
.then((response)=>{
  onlinUserID = response[0].userID;
     console.log(response[0].flag);
})
.catch((error)=>{
    alert('Error Occured' + error);
})
}

const saveBGLevel = () => {
  console.log('in DB of Saving information');
  // eslint-disable-next-line quotes
  var InsertAPIURL = "http://192.168.56.1/iSugar/BGLevel.php";   //API to  signup

  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  var Data = {
    UserID: onlinUserID,
    BGLevel: currentBG,
    BGLevelDate: curDate,
    BGLevelTime:curTime,
  };

// FETCH func ------------------------------------
fetch(InsertAPIURL,{
    method:'POST',
    headers:headers,
    body: JSON.stringify(Data),//convert data to JSON
})
.then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
.then((response)=>{
})
.catch((error)=>{
    alert('Error Occured' + error);
})
}

//====================================WITHIN-APP DATABASE==============================================

const insertBG = async () => {

  //------------ BG LEVEL -------------------
 
     console.log(uID + ' - ' + currentBG + ' - ' + curDate + ' - ' + curTime);
     try {
      db.transaction( (tx) => {
          tx.executeSql(
           'INSERT INTO BGLevel (UserID, BGLevel, bglevelDate, bglevelTime) VALUES (?,?,?,?)',
             [uID, currentBG, curDate, curTime]
         );
     })
     console.log('Hi ' + uID + ' - ' + currentBG + ' - ' + curDate + ' - ' + curTime);
 } catch (error) {
     console.log(error);
 }
 }

 
const insertAll = async () => {

  //------------ BG LEVEL -------------------
 
     console.log(uID + ' - ' + currentBG + ' - ' + curDate + ' - ' + curTime);
     try {
      db.transaction( (tx) => {
          tx.executeSql(
           'INSERT INTO BGLevel (UserID, BGLevel, bglevelDate, bglevelTime) VALUES (?,?,?,?)',
             [uID, currentBG, curDate, curTime]
         );
     })
     console.log('Hi ' + uID + ' - ' + currentBG + ' - ' + curDate + ' - ' + curTime);
 } catch (error) {
     console.log(error);
 }
 
 //----------------RECHECK RECORD------------------
   console.log(uID + ' - ' + curDate + ' - ' + curTime + ' - ' + TypeOfExercise + ' - ' + correction + ' - ' + level + ' - ' + ketones + ' - ' + sum);
     try {
      db.transaction( (tx) => {
          tx.executeSql(
           'INSERT INTO exRecheckRecords (UserID, recordDate, recordTime, exerciseType, suggestedCorrectionDose, ketonesLevel, ketonesSource, suggestCarbs) VALUES (?,?,?,?,?,?,?,?)',
             [uID, curDate, curTime, TypeOfExercise, correction, level, ketones, sum]
         );
     })
     console.log('Hello ' + uID + ' - ' + curDate + ' - ' + curTime + ' - ' + TypeOfExercise + ' - ' + correction + ' - ' + level + ' - ' + ketones + ' - ' + sum);
 } catch (error) {
     console.log(error);
 }

 //--------------REcheck reminder---------------------
 console.log(uID + ' - ' + curDate + ' - ' + curTime);
 try {
  db.transaction( (tx) => {
      tx.executeSql(
       'INSERT INTO exRecheckNotification (UserID, recheckDate, recheckTime) VALUES (?,?,?)',
         [uID, curDate, curTime]
     );
 })
 console.log('hola ' + uID + ' - ' + curDate + ' - ' + curTime);
} catch (error) {
 console.log(error);
}
 }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#E7EFFA', '#E7EFFA','#AABED8']} style={styles.container}>
            <View style={{top: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 30}}>
            <Image source={require('../images/logo.png')} style={styles.pic} />
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
             <Entypo name="menu" color="#05375a" size={35} />
             </TouchableOpacity>
          </View>
          <View style={styles.footer}>
              <View>
<ScrollView>
          <View style={styles.vNext}>
              <Text style={styles.inpTxt}>Current blood glucose level</Text>
              <TextInput
                keyboardType="decimal-pad"
                placeholder="000.0"
                onChangeText={(val)=>setCurrentBG(val)}
                style={styles.inputT} />
              <Text style={{fontSize: 13, paddingTop: 20}}> mg/dl </Text>
            </View>
            <View style={{marginTop: 25, flexDirection: 'row'}}>
            <Text style={styles.inpTxt1}>
            Are you changing your exercise type?{' '}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={changeType ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={togglePreSwitch}
          value={changeType}
          disabled={TypeOfExercise}
        />
        </View>
         {changeType ? (
            <View>
                  <View style={{marginTop: 25, flexDirection: 'row'}}>
              <Text style={styles.inpTxt}>Type of exercise: </Text>
              <Picker
            itemStyle={{color: 'black'}}
              selectedValue={TypeOfExercise}
              onValueChange={(value, index) => setTypeOfExercise(value, index)}
              mode="dropdown"
              style={styles.picker}>
              <Picker.Item label="Select" value="0" testID="2"   />
              <Picker.Item label="Running" value="Running" testID="0"   />
              <Picker.Item label="Swimming" value="Swimming" testID="0"   />
              <Picker.Item label="Walking" value="Walking" testID="0"   />
              <Picker.Item label="Spinning" value="Spinning" testID="0"   />
              <Picker.Item
                label="Mountain Climbing"
                value="Mountain Climbing"
                testID="0"   />
              <Picker.Item label="Dancing" value="Dancing" testID="0"   />
              <Picker.Item
                label="Kickboxing"
                value="Kickboxing"
                testID="0"   />
              <Picker.Item
                label="Cross country skiing"
                value="Cross country skiing"
                testID="0"   />
              <Picker.Item
                label="Jumping jacks"
                value="Jumping jacks"
                testID="0"   />
              <Picker.Item label="Rowing" value="Rowing" testID="0"   />
              <Picker.Item
                label="Martial arts"
                value="Martial arts"
                testID="0"   />
              <Picker.Item label="Zumba" value="Zumba" testID="0"   />
              <Picker.Item
                label="Basketball"
                value="Basketball"
                testID="0"   />
              <Picker.Item
                label="Trampoline-ing"
                value="Trampoline-ing"
                testID="0"   />
              <Picker.Item
                label="Aerobic strength circuit"
                value="Aerobic strength circuit"
                testID="0"   />
              <Picker.Item label="Cycling" value="Cycling" testID="0"   />
              <Picker.Item label="Jogging" value="Jogging" testID="0"   />
              <Picker.Item
                label="Cardio exercises/ machines"
                value="Cardio exercises/ machines"
                testID="0"   />
              <Picker.Item
                label="Aerobic exercise classes"
                value="Aerobic exercise classes"
                testID="0"   />
              <Picker.Item
                label="Skipping/ Jump rope"
                value="Skipping/ Jump rope"
                testID="0"   />
              <Picker.Item
                label="Stair mill /Stair stepper"
                value="Stair mill /Stair stepper"
                testID="0"   />
              <Picker.Item
                label="Stationary bike"
                value="Stationary bike"
                testID="0"   />
              <Picker.Item
                label="Elliptical"
                value="Elliptical"
                testID="0"   />
              <Picker.Item
                label="Plyometrics"
                value="Plyometrics"
                testID="0"   />
              <Picker.Item label="Skating" value="Skating" testID="0"   />
              <Picker.Item label="Tennis" value="Tennis" testID="0"   />
              <Picker.Item label="Soccer" value="Soccer" testID="0" > </Picker.Item>
              <Picker.Item label="Boxing" value="Boxing" testID="0"   />
              <Picker.Item
                label="Hula-hooping"
                value="Hula-hooping"
                testID="0"   />
              <Picker.Item
                label="Other aerobic exercise"
                value="Other aerobic exercise"
                testID="0"   />
              <Picker.Item
                label="HIIT (High Intensity Interval Training)"
                value="HIIT (High Intensity Interval Training)"
                testID="1"   />
              <Picker.Item label="Pilates" value="Pilates" testID="1" />
              <Picker.Item
                label="Anaerobic Circuit training"
                value="Anaerobic Circuit training"
                testID="1"   />
              <Picker.Item
                label="Sprinting"
                value="Sprinting"
                testID="1"   />
              <Picker.Item
                label="Resistance exercises"
                value="Resistance exercises"
                testID="1"   />
              <Picker.Item
                label="Bodyweight exercise (e.g. push-ups, pull-ups, squats, lunges)"
                value="Bodyweight exercise (e.g. push-ups, pull-ups, squats, lunges)"
                testID="1"   />
              <Picker.Item
                label="Weight lifting"
                value="Weight lifting"
                testID="1"   />
              <Picker.Item label="Yoga" value="Yoga" testID="1"   />
              <Picker.Item
                label="Cross-fit"
                value="Cross-fit"
                testID="1"   />
              <Picker.Item
                label="Isometrics"
                value="Isometrics"
                testID="1"   />
              <Picker.Item
                label="Gymnastics"
                value="Gymnastics"
                testID="1"   />
              <Picker.Item
                label="Other anaerobic exercise"
                value="Other anaerobic exercise"
                testID="1"   />
            </Picker>
              </View>
              </View>
        ) : null}

        { !changeType ? (
            <View>
              <View style={{marginTop: 25, flexDirection: 'row'}}>
            <Text style={styles.inpTxt1}>
              Did you finish your exercise? {' '}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={finishExercise ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleFinishSwitch}
          value={finishExercise}
        />
          </View>
          </View>
        ) : null }
{ finishExercise ? (
   <View>
   <TouchableOpacity onPress={saveLast}>
    <Text style={{fontSize: 17, color: 'grey',  textAlign: 'center', paddingBottom: 10, paddingTop: 15}}>Go back to home page</Text>
   </TouchableOpacity>
  </View>
) : null
}

{ changeType && !finishExercise ? ( 
     <View>
     
{ currentBG > 0 && currentBG < 250 && TypeOfExercise != '0' && instruction != '' ?
  <Text style={styles.textHeader} >{instruction}</Text>
  : null
}
            { currentBG < 70 && TypeOfExercise != '0' && instruction != '' ?
              <View>
              <TouchableOpacity onPress={()=> navigation.navigate('hypo')}>
               <Text style={{fontSize: 15, color: 'grey',  paddingLeft: 20, backgroundColor: '#c3d4e0', paddingBottom: 10}}>Go to hypoglycemia page</Text>
              </TouchableOpacity>
             </View>
             : null
            }

         {currentBG >= 250 && TypeOfExercise != '0' ?
<View>
<Text style={styles.textHeader} >Do not start exercise now</Text>
<Text style={styles.textHeader} >Please check for Ketones, and enter your result here for further</Text>
<View style={{flexDirection: 'row'}}>
<Text style={styles.inpTxt}>Ketone reading source</Text>
<Picker
            itemStyle={{color: 'black'}}
              selectedValue={ketones}
              onValueChange={value => setKetones(value)}
              mode="dropdown"
              style={styles.picker}>
              <Picker.Item label="Select" value=""/>
              <Picker.Item label="blood" value="blood"/>
              <Picker.Item label="urine" value="urine"/>
              </Picker>
</View>
    </View>
:
null
    }
    
    {ketones == 'blood' && currentBG >= 250 ?

<View style={styles.vNext}>
<TextInput
  keyboardType="decimal-pad"
  placeholder="0.0"
  onChangeText={(val)=>setBlood(val)}
  style={styles.inputT} />
<Text style={{fontSize: 13, paddingTop: 20}}> mmol/L </Text>
</View>
      : null
      }

{ketones == 'urine' && currentBG >= 250 ?
<View style={styles.vNext}>
<Picker
            itemStyle={{color: 'black'}}
              selectedValue={urine}
              onValueChange={value => setUrine(value)}
              mode="dropdown"
              style={styles.picker}>
              <Picker.Item label="Select" value="-1"/>
              <Picker.Item label="Negative" value="Negative"/>
              <Picker.Item label="Trace" value="Trace"/>
              <Picker.Item label="Small" value="Small"/>
              <Picker.Item label="Moderate" value="Moderate"/>
              <Picker.Item label="Large" value="Large"/>
              </Picker>
              </View>
      : null
      }
 
{ currentBG >= 250 && TypeOfExercise != '0' && instruction2 != '' && ketones != '' ?
  <Text style={styles.textHeader} >{instruction2}</Text>
  : null
}
     <View style={styles.buttonV}>
     <TouchableOpacity onPress={checkExercise}>
       <LinearGradient
         colors={['#f5f5f5', '#e9ebee', '#e9ebee']}
         style={styles.buttonR}>
         <Text style={styles.titleB}>
           See the instruction
         </Text>

       </LinearGradient>
     </TouchableOpacity>
     </View>
     </View>
) : null}

</ScrollView>
              </View>
              </View>
          </LinearGradient>
          </View>
    );
};


const {height} = Dimensions.get('screen');
const height_logo = height * 0.15;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    pic: {

      width: height_logo,
      height: height_logo,
      marginRight: 10,
  },
  footer: {
    flex: 1,
    width: 380,
    height: 30,
    marginBottom: 15,
    marginLeft: 15,
    backgroundColor: '#fff',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 10,
},
action: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
    paddingBottom: 25,
  },
  internalText: {
    color: '#05375a',
    fontSize: 20,
    textAlign: 'left',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: '600',
    lineHeight: 30,
  },
  points: {
    color: '#05375a',
    fontSize: 16,
    textAlign: 'left',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: '500',
    lineHeight: 30,
  },
buttonV: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 35,
  },
  buttonR: {
    alignItems: 'center',
    width: 150,
    height: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  titleB: {
    color: '#05375a',
    fontSize: 15,
    fontWeight: 'bold',
  },
   radioB :{
    marginTop: 25,
    justifyContent: 'space-between',
    padding: 10,
    paddingTop:5,
    marginBottom: 10,
    },
 picker: {
    width: 230,
    height: 30,
    borderWidth: 2,
    borderColor: '#4c4c4c',
  },
  inpTxt: {
    //lables
    paddingLeft: 20,
    paddingTop: 15,
    fontSize: 17,
    color: '#05375a',
  },
  inpTxt1: {
    //lables
    paddingLeft: 20,
    fontSize: 17,
    color: '#05375a',
  },
  vNext: {
    // to make items next to each other
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 25,
  },
  inputT: {
    //inputs field
    width: 100,
    fontSize: 16,
    shadowColor: '#656363',
    height: 50,
    textAlign: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 0.62,

    elevation: 2,
  },
  textHeader:{
    paddingTop: 15,
    fontSize: 16,
    color: '#05375a',
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 25,
    backgroundColor: '#c3d4e0',
    paddingBottom: 10,
 },
});

export default recheckExercise;
