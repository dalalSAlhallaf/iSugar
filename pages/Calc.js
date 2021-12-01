import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  Button,
  ScrollView,
  StatusBar,
  Text,
  View,
  AppRegistry,
  Navigator,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Switch,
  Alert,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNSearchablePicker from 'react-native-searchable-picker';
import react from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import SQLite from 'react-native-sqlite-storage';

//=========================Local DB==========================
global.db = SQLite.openDatabase(
  {
    name: 'iSugear.db',
    creatFromLocation: '~iSugarL.db',
    location: 'Library',
  },
  () => {
    console.log('success');
  },
  error => {
    console.log('ERROR: ' + error);
  },
);
//=========================Local DB===============================



const Calc = () => {

 const insuCalc = () => {
   
  var a;
  var b;
  var c = 0;
  var IOB;
  var adjustment;
 
  if (
    ReData2.insulinType == 'Aspart' ||
    ReData2.insulinType == 'Lispro' ||
    ReData2.insulinType == 'Glulisine'
  ) {

     console.log('1-  '+c);
    if (bgLevel > 70) {
      console.log('2-  '+c);
      if (reason == '5') { //5 is the value for correction lable
      console.log('3-  '+c);
        if (bgLevel > ReData1.startBG) {
          console.log('4-  '+c);
          a = 0;
          b = (bgLevel - ReData1.targetBG) / ISF;
          c = a + b;
          console.log('5-  '+c);
          setTotal(c);
          if (timePrevDose <= 4) {
            console.log('6-  '+c);
            IOB = IOBSwitch();
            console.log('7-  '+IOB);
            c = total - IOB;
            setTotal(c);
          }
          if (PlannedExercise == true) {
            
            adjustment = PreExercise();
            c = total - adjustment * total;
            setTotal(c);
            // return (total);
          } else if (PreviousExercise == true) {
            
            adjustment = PostExercise();
             c = b - adjustment * b;
              setTotal(c);
            // return (total);
          }
        } else {
          alert('No correction required');
        }
      } else {
        if (calcMethod == 'ICR') {
          a = CHO / ICR;
          if (bgLevel > ReData1.startBG) {
            b = (bgLevel - ReData1.targetBG) / ISF;
          } else {
            b = 0;
          }
          c = a + b;
          setTotal(c);
          IOB = IOBSwitch();
          c = total - IOB;
          setTotal(c);
          if (PlannedExercise == true) {
            adjustment = PreExercise();
            c = total - adjustment * total
            setTotal(c);
            // return (total);
          } else if (PreviousExercise == true) {
            if(differ <= 4 && differ >=0){
            adjustment = PostExercise();
             c = total - adjustment * total
             setTotal(c);
            //  return (total);
            }
          }
        } else {
          c = slidingScale; // from database
           setTotal(c);
          IOB = IOBSwitch();
          c = total - IOB;
           setTotal(c);
          if (PlannedExercise == true) {
            adjustment = PreExercise();
            c = total - adjustment * total
             setTotal(c);
            //  return (total);
          } else if (PreviousExercise == true) {
            adjustment = PostExercise();
             c = total - adjustment * total
             setTotal(c);
            //  return (total);
          }
        }
      }
    } else {
      alert('Your blood sugar is low!');
    }
  } else {
    alert(
      'Your Insulin type is not supported in this application. Please contact your Diabetes center for instruction & recommendations for insulin bolus calculation & dose determination',
    );
  }
};

const IOBSwitch = () => {
 
  var num = 0;
  if (timePrevDose < 1){
     num = 1 * PrevDose;
  }else if (timePrevDose >= 1 && timePrevDose < 2){
    num = 0.75 * PrevDose;
  }else if (timePrevDose >= 2 && timePrevDose < 3){
     num = 0.5 * PrevDose;
  }else if (timePrevDose >= 3 && timePrevDose <= 4){
     num = 0.25 * PrevDose;
  }

  return num;
};

const PreExercise = () => {
  var adjNum = 1;
  var p = parseInt(preDuration);
  var numi = parseInt(preTypeOfExercise);
  console.log('da p:  '+p);
  if (numi >= 0 && numi <= 30) {

    if (p < 15){
      //nothing
    }else if (p >= 15 && p < 30){
       adjNum = 0.25;
    }else if (p >= 30 && p <= 45){
      adjNum = 0.5;
    }else if (p > 45){
      adjNum = 0.75;
    }else if (preDuration == 'unknown'){
      adjNum = 0.25;
    }

  } else if (numi > 30 && numi <= 42) {

    if (p < 15){
      //nothing
    }else if (p >= 15 && p < 30){
      //nothing
    }else if (p >= 30 && p <= 45){
      adjNum = 0.25;
    }else if (p > 45){
      adjNum = 0.5;
    }else if (preDuration == 'unknown'){
      adjNum = 0.25;
    }

  }
  return adjNum;
};

const PostExercise = () => {
  var adjNum = 1;
  var p = parseInt(postDuration);
  var numi = parseInt(postTypeOfExercise);
  if (numi >= 0 && numi <= 30) {

    if (p < 30){
      adjNum = 0.25;
    }else if (p >= 30 && p <= 45){
      adjNum = 0.4;
    }else if (p > 45){
     adjNum = 0.5;
    }

  } else if (numi > 30 && numi <= 42) {

    if (p < 30){
      adjNum = 0.25;
    }else if (p >= 30 && p <= 45){
      adjNum = 0.3;
    }else if (p > 45){
     adjNum = 0.4;
    }

   
  }
   return adjNum;
};


//======================End of insuling Calc methods===================


  //=================To test only
  const test = () => {
    var t = ReData1.startBG + ReData1.targetBG;
    setTotala({
      ...totala,
      total: t,
    });
  };

  //=========================Retrive From DB========================
  // var time='';
  const [ReData1, setReData1] = useState({
    calcMethod: '',
    startBG: 0,
    targetBG: 0,
    timePrevDose: -1,
    doseAmount: -1,
    ISF: 0,
    ICR: 0,
  });

  const [ReData2, setReData2] = useState({
    insulinType: '',
  });
  const [totala, setTotala] = useState({
    total: 0,
  });

  useEffect(() => {
    retrieve();
    retrieve2();
    retrieve3();
  }, []);

  //--------------Queries-------------------

  // ICR -ISF - PATIENT PROFILE -
  const retrieve = () => {
    //=============================
    // try {
    //   db.transaction(tx => {
    //     console.log('qwqw');
    //     tx.executeSql(
    //       'SELECT UserID, fromTime, toTime, ISF, targetBG_correct, startBG_correct FROM isfInterval',
    //       [],
    //       (tx, results) => {
    //               var fromList = [];
    //               var toList = [];
    //               var ISFList = [];
    //               var targetBGList = [];
    //               var startBGList = [];
    //               // console.log(results +"Hello");

    //         var rows2 = results.rows;
    //         for (let z = 0; z < rows2.length; z++) {

    //           var userid2 = rows2.item(z).UserID;

    //           if (userid2 == 159) {
    //             fromList.push(rows2.item(z).fromTime);
    //             toList.push(rows2.item(z).toTime);
    //             ISFList.push(rows2.item(z).ISF);
    //             targetBGList.push(rows2.item(z).targetBG_correct);
    //             startBGList.push(rows2.item(z).startBG_correct);

    //             console.log(fromList + 'kk');
    //           }
    //         }
    //       },
    //     );
    //     console.log('qwqw2222');
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    //=============================
    // patient profile table
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT UserID, ISF, ISFIntervals, targetBG_correct, startBG_correct, insulinCalcMethod, insulinRegimen FROM patientprofile',
          [],
          (tx, results) => {
            var rows = results.rows;
            var ISFInterval = 0;

            for (let i = 0; i < rows.length; i++) {
              var userid = rows.item(i).UserID;

              if (userid == 222) {
                console.log('Hii  ' + rows.item(i).ISFIntervals);

                ISFInterval = rows.item(i).ISFIntervals;

                if (ISFInterval == 0) {
                  console.log('hello if hi');
                  setReData1({
                    ...ReData1,
                    calcMethod: rows.item(i).insulinCalcMethod,
                    startBG: rows.item(i).startBG_correct,
                    targetBG: rows.item(i).targetBG_correct,
                    ISF: rows.item(i).ISF,
                  });

                  console.log(
                    ReData1.calcMethod +
                      ' - ' +
                      ReData1.startBG +
                      ' - ' +
                      ReData1.targetBG +
                      ' - ' +
                      ReData1.ISF,
                  );

                  return;
                } //else {

                //   for (let i = 0; i < rows.length; i++) {
                //     if (userid == 222) {
                //       fromLsit.push(rows.item(i).fromTime);
                //       toList.push(rows.item(i).toTime);
                //       ISFList.push(rows.item(i).ISF);
                //     }
                //   }
                // }
              }
            }
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  //=========================ICR intervals
  const retrieve2 = () => {
    // insulinPen table
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT UserID, fromTime, toTime, ICR FROM icrInterval',
          [],
          (tx, results) => {
            var rows = results.rows;
            var fromListICR = [];
            var toListICR = [];
            var icrList = [];
            // console.log(results + '-');

            for (let i = 0; i < rows.length; i++) {
              var userid = rows.item(i).UserID;

              if (userid == 222) {
                fromListICR.push(rows.item(i).fromTime);
                toListICR.push(rows.item(i).toTime);
                icrList.push(rows.item(i).ICR);
              }
            }
            for (let z = 0; z < fromListICR.length; z++) {
              //if (nowTime >= fromTime)
            }

            console.log(toListICR + ' \n' + fromListICR + '\n' + icrList);

            return;
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  //===================Insulin Type
  const retrieve3 = () => {
    // insulinPen table
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT UserID, insulinType FROM insulinPen',
          [],
          (tx, results) => {
            var rows = results.rows;

            for (let i = 0; i < rows.length; i++) {
              var userid = rows.item(i).UserID;

              if (userid == 222) {
                setReData2({
                  ...ReData2,
                  insulinType: rows.item(i).insulinType,
                });
                console.log(ReData2.insulinType);

                return;
              }
            }
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  //DateTime

  var nowDate = new Date();
  var nowTime = moment.utc(nowDate).format('h:mm a'); // 11:40 PM

  const [PosTime, setPosTime] = useState(new Date());
  const [showPosTime, setShowPosTime] = useState(false);

  const onChangePosTime = (event, selectedDate) => {
    const currentDate = selectedDate || PosTime;
    setShowPosTime(Platform.OS === 'ios');
    setPosTime(currentDate);
  };

  const showPosTimeMethod = () => {
    setShowPosTime(true);
  };

  //DateTime

  //Pre Switch
  const [isPreEnabled, setIsPreEnabled] = useState(false);
  const togglePreSwitch = () =>
    setIsPreEnabled(previousState => !previousState);
  //Post Switch
  const [isPostEnabled, setIsPostEnabled] = useState(false);
  const togglePostSwitch = () =>
    setIsPostEnabled(previousState => !previousState);
  //=================================================================================

  const [reason, setReason] = useState('0'); //ReasonForInsulin
  const [preDuration, setPreDuration] = useState('0'); //Duration of pre exersize
  const [preTypeOfExercise, setPreTypeOfExercise] = useState('0'); //reason of pre exercize
  const [postDuration, setPostDuration] = useState('0'); //Duration of post exersize
  const [postTypeOfExercise, setPostTypeOfExercise] = useState('0'); //reason of post exercize
  const [bgLevel, setbgLevel] = useState(0);
  const [CHO, setCHO] = useState(0);
  var isValidBG = true;
  var isValidCHO = true;

  return (
    <LinearGradient colors={['#AABED8', '#fff']} style={styles.container}>
      <View style={{top: 10, alignItems: 'center'}}>
        <Image source={require('./images/logo.png')} style={styles.pic} />
      </View>
      <ScrollView style={styles.contView}>
        <Text
          style={{
            color: '#000',
            fontSize: 25,
            textAlign: 'left',
            paddingTop: 20,
            paddingLeft: 15,
          }}>
          Insulin Bolus Calculator
        </Text>

        <Text style={styles.inpTxt}>{reason}</Text>

        <View style={styles.vNext}>
          <Text style={styles.inpTxt}>Current BG levet: </Text>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="000.00"
            onChangeText={value => setbgLevel(value)}
            style={styles.inputT}
          />
          <Text style={{fontSize: 15, paddingTop: 15}}>mg/dl</Text>
        </View>

        <Text style={styles.inpTxt}>Reason for insulin: </Text>

        <Picker
          selectedValue={reason}
          onValueChange={value => setReason(value)}
          mode="dropdown"
          style={styles.picker}>
          <Picker.Item label="Pre-Breakfast" value="0" testID="meal"></Picker.Item>
          <Picker.Item label="Pre-Lunch" value="1" testID="meal"></Picker.Item>
          <Picker.Item label="Pre-Dinner" value="2" testID="meal"></Picker.Item>
          <Picker.Item
            label="Pre-Daytime snack"
            value="3"
            testID="meal"></Picker.Item>
          <Picker.Item
            label="Pre-Bedtime snack"
            value="4"
            testID="meal"></Picker.Item>
          <Picker.Item
            label="No meal only for correction"
            value="5"
            testID="correction"></Picker.Item>
        </Picker>

        <View style={styles.vNext}>
          <Text style={styles.inpTxt}>Meal carbohydrate content: </Text>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="000.00 g"
            onChangeText={value => setCHO(value)}
            style={styles.inputT}></TextInput>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Calculate carbohydrate in a meal
          </Text>
          <Image
            source={require('./images/carb.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>

        <Text style={styles.inpTxt}>
          Do you have planned exercise wihtin the upcoming 3 hours?{' '}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isPreEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={togglePreSwitch}
          value={isPreEnabled}
          disabled={isPostEnabled}
        />

        {isPreEnabled ? (
          <View style={{backgroundColor: '#c3d4e0', marginTop: 20}}>
            <View>
              <Text style={styles.inpTxt}>Type of exercise: </Text>
              <Picker
                selectedValue={preTypeOfExercise}
                onValueChange={value => setPreTypeOfExercise(value)}
                mode="dropdown"
                style={styles.picker}>
                <Picker.Item label="Select" value="0" testID="2"></Picker.Item>
                <Picker.Item label="Running" value="1" testID="0"></Picker.Item>
                <Picker.Item
                  label="Swimming"
                  value="2"
                  testID="0"></Picker.Item>
                <Picker.Item label="Walking" value="3" testID="0"></Picker.Item>
                <Picker.Item
                  label="Spinning"
                  value="4"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Mountain Climbing"
                  value="5"
                  testID="0"></Picker.Item>
                <Picker.Item label="Dancing" value="6" testID="0"></Picker.Item>
                <Picker.Item
                  label="Kickboxing"
                  value="7"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Cross country skiing"
                  value="8"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Jumping jacks"
                  value="9"
                  testID="0"></Picker.Item>
                <Picker.Item label="Rowing" value="10" testID="0"></Picker.Item>
                <Picker.Item
                  label="Martial arts"
                  value="11"
                  testID="0"></Picker.Item>
                <Picker.Item label="Zumba" value="12" testID="0"></Picker.Item>
                <Picker.Item
                  label="Basketball"
                  value="13"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Trampoline-ing"
                  value="14"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Aerobic strength circuit"
                  value="15"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Cycling"
                  value="16"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Jogging"
                  value="17"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Dancing"
                  value="18"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Cardio exercises/ machines"
                  value="19"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Aerobic exercise classes"
                  value="20"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Skipping/ Jump rope"
                  value="21"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Stair mill /Stair stepper"
                  value="22"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Stationary bike"
                  value="23"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Elliptical"
                  value="24"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Skating"
                  value="25"
                  testID="0"></Picker.Item>
                <Picker.Item label="Tennis" value="26" testID="0"></Picker.Item>
                <Picker.Item label="Soccer" value="27" testID="0"></Picker.Item>
                <Picker.Item label="Boxing" value="28" testID="0"></Picker.Item>
                <Picker.Item
                  label="Hula-hooping"
                  value="29"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="Other aerobic exercise"
                  value="30"
                  testID="0"></Picker.Item>
                <Picker.Item
                  label="HIIT (High Intensity Interval Training)"
                  value="31"
                  testID="1"></Picker.Item>
                <Picker.Item
                  label="Pilates"
                  value="32"
                  testID="1"></Picker.Item>
                <Picker.Item
                  label="Anaerobic Circuit training"
                  value="33"
                  testID="1"></Picker.Item>
                <Picker.Item
                  label="Sprinting"
                  value="34"
                  testID="1"></Picker.Item>
                <Picker.Item
                  label="Resistance exercises"
                  value="35"
                  testID="1"></Picker.Item>
                <Picker.Item
                  label="Bodyweight exercise (e.g. push-ups, pull-ups, squats, lunges)"
                  value="36"
                  testID="1"></Picker.Item>
                <Picker.Item
                  label="Weight lifting"
                  value="37"
                  testID="1"></Picker.Item>
                <Picker.Item label="Yoga" value="38" testID="1"></Picker.Item>
                <Picker.Item
                  label="Cross-fit"
                  value="39"
                  testID="1"></Picker.Item>
                <Picker.Item
                  label="Isometrics"
                  value="40"
                  testID="1"></Picker.Item>
                <Picker.Item
                  label="Gymnastics"
                  value="41"
                  testID="1"></Picker.Item>
                <Picker.Item
                  label="Other anaerobic exercise"
                  value="42"
                  testID="1"></Picker.Item>
              </Picker>

              <Text style={styles.inpTxt}>Duration of exercise: </Text>
              <Picker
                selectedValue={preDuration}
                onValueChange={value => setPreDuration(value)}
                mode="dropdown"
                style={styles.picker}>
                <Picker.Item label="Select" value="0"></Picker.Item>
                <Picker.Item
                  label="Less than 15 minutes"
                  value="14"></Picker.Item>
                <Picker.Item label="15 to 29 minutes" value="16"></Picker.Item>
                <Picker.Item label="30 to 45 minutes" value="31"></Picker.Item>
                <Picker.Item
                  label="More than 45 minutes"
                  value="46"></Picker.Item>
                <Picker.Item label="Unknown" value="Unknown"></Picker.Item>
              </Picker>
            </View>
          </View>
        ) : null}

        <Text style={styles.inpTxt}>
          Did you exercise wihtin the past 6 hours?
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isPostEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={togglePostSwitch}
          value={isPostEnabled}
          disabled={isPreEnabled}
        />
        {isPostEnabled ? (
          <View style={{backgroundColor: '#c3d4e0', marginTop: 20}}>
            <Text style={styles.inpTxt}>Type of exercise: </Text>
            <Picker
              selectedValue={postTypeOfExercise}
              onValueChange={value => setPostTypeOfExercise(value)}
              mode="dropdown"
              style={styles.picker}>
              <Picker.Item label="Select" value="0" testID="2"></Picker.Item>
              <Picker.Item label="Running" value="1" testID="0"></Picker.Item>
              <Picker.Item label="Swimming" value="2" testID="0"></Picker.Item>
              <Picker.Item label="Walking" value="3" testID="0"></Picker.Item>
              <Picker.Item label="Spinning" value="4" testID="0"></Picker.Item>
              <Picker.Item
                label="Mountain Climbing"
                value="5"
                testID="0"></Picker.Item>
              <Picker.Item label="Dancing" value="6" testID="0"></Picker.Item>
              <Picker.Item
                label="Kickboxing"
                value="7"
                testID="0"></Picker.Item>
              <Picker.Item
                label="Cross country skiing"
                value="8"
                testID="0"></Picker.Item>
              <Picker.Item
                label="Jumping jacks"
                value="9"
                testID="0"></Picker.Item>
              <Picker.Item label="Rowing" value="10" testID="0"></Picker.Item>
              <Picker.Item
                label="Martial arts"
                value="11"
                testID="0"></Picker.Item>
              <Picker.Item label="Zumba" value="12" testID="0"></Picker.Item>
              <Picker.Item
                label="Basketball"
                value="13"
                testID="0"></Picker.Item>
              <Picker.Item
                label="Trampoline-ing"
                value="14"
                testID="0"></Picker.Item>
              <Picker.Item
                label="Aerobic strength circuit"
                value="15"
                testID="0"></Picker.Item>
              <Picker.Item label="Cycling" value="16" testID="0"></Picker.Item>
              <Picker.Item label="Jogging" value="17" testID="0"></Picker.Item>
              <Picker.Item label="Dancing" value="18" testID="0"></Picker.Item>
              <Picker.Item
                label="Cardio exercises/ machines"
                value="19"
                testID="0"></Picker.Item>
              <Picker.Item
                label="Aerobic exercise classes"
                value="20"
                testID="0"></Picker.Item>
              <Picker.Item
                label="Skipping/ Jump rope"
                value="21"
                testID="0"></Picker.Item>
              <Picker.Item
                label="Stair mill /Stair stepper"
                value="22"
                testID="0"></Picker.Item>
              <Picker.Item
                label="Stationary bike"
                value="23"
                testID="0"></Picker.Item>
              <Picker.Item
                label="Elliptical"
                value="24"
                testID="0"></Picker.Item>
              <Picker.Item label="Skating" value="25" testID="0"></Picker.Item>
              <Picker.Item label="Tennis" value="26" testID="0"></Picker.Item>
              <Picker.Item label="Soccer" value="27" testID="0"></Picker.Item>
              <Picker.Item label="Boxing" value="28" testID="0"></Picker.Item>
              <Picker.Item
                label="Hula-hooping"
                value="29"
                testID="0"></Picker.Item>
              <Picker.Item
                label="Other aerobic exercise"
                value="30"
                testID="0"></Picker.Item>
              <Picker.Item
                label="HIIT (High Intensity Interval Training)"
                value="31"
                testID="1"></Picker.Item>
              <Picker.Item label="Pilates" value="32" testID="1"></Picker.Item>
              <Picker.Item
                label="Anaerobic Circuit training"
                value="33"
                testID="1"></Picker.Item>
              <Picker.Item
                label="Sprinting"
                value="34"
                testID="1"></Picker.Item>
              <Picker.Item
                label="Resistance exercises"
                value="35"
                testID="1"></Picker.Item>
              <Picker.Item
                label="Bodyweight exercise (e.g. push-ups, pull-ups, squats, lunges)"
                value="36"
                testID="1"></Picker.Item>
              <Picker.Item
                label="Weight lifting"
                value="37"
                testID="1"></Picker.Item>
              <Picker.Item label="Yoga" value="38" testID="1"></Picker.Item>
              <Picker.Item
                label="Cross-fit"
                value="39"
                testID="1"></Picker.Item>
              <Picker.Item
                label="Isometrics"
                value="40"
                testID="1"></Picker.Item>
              <Picker.Item
                label="Gymnastics"
                value="41"
                testID="1"></Picker.Item>
              <Picker.Item
                label="Other anaerobic exercise"
                value="42"
                testID="1"></Picker.Item>
            </Picker>

            <Text style={styles.inpTxt}>Duration of exercise: </Text>
            <Picker
              selectedValue={postDuration}
              onValueChange={value => setPostDuration(value)}
              mode="dropdown"
              style={styles.picker}>
              <Picker.Item label="Select" value="0"></Picker.Item>
              <Picker.Item
                label="Less than 30 minutes"
                value="14"></Picker.Item>
              <Picker.Item label="30 to 45 minutes" value="31"></Picker.Item>
              <Picker.Item
                label="More than 45 minutes"
                value="46"></Picker.Item>
            </Picker>

            <Text style={styles.inpTxt}>Time of exersice: </Text>
            <View>
              <Button onPress={showPosTimeMethod} title="Set Time" />
            </View>

            {showPosTime && (
              <DateTimePicker
                testID="PosTime"
                value={PosTime}
                mode={'time'}
                onChange={onChangePosTime}
              />
            )}
          </View>
        ) : null}

        <TouchableOpacity
          style={{
            marginTop: 30,
            paddingTop: 15,
            paddingBottom: 30,
            backgroundColor: '#6496d7',
          }}
          onPress={test}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>Calculate</Text>
        </TouchableOpacity>

        <Text></Text>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  prefix: {
    backgroundColor: '#9c4',
  },
  text: {
    color: '#000',
    fontSize: 30,
  },
  pic: {
    width: 70,
    height: 90,
  },
  inputT: {
    //inputs field

    width: 110,
    fontSize: 16,
    shadowColor: '#000',
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

  contView: {
    //Conten's view
    backgroundColor: '#fff',
    height: 550,
    width: 360,
    alignSelf: 'center',
    top: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 7,
  },

  inpTxt: {
    //lables
    paddingLeft: 20,
    paddingTop: 15,
    fontSize: 18,
  },

  vNext: {
    // to make items next to each other
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 30,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingLeft: 30,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 0.9,

    elevation: 3,
  },

  ddown: {
    //drop down list style

    paddingLeft: 0,
    paddingTop: 13,
    shadowColor: '#000',

    height: 40,
    width: 160,

    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 0.62,

    elevation: 2,
    backgroundColor: '#f5f5f5',
  },
});

export default Calc;
