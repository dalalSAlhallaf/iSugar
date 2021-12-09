import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import logoScreen from './pages/logoScreen';
import logIn from './pages/logIn';
import signUp from './pages/signUp';
import disclaimer from './pages/disclaimer';
import AccInfo from './pages/AccInfo';
import clinicInfo from './pages/clinicInfo';
import warning from './pages/warning';
import SQLite from 'react-native-sqlite-storage';
import personalInfo from './pages/personalInfo';
import ketones from './pages/ketones';
import insulin from './pages/insulin';
import isf from './pages/isf';
import icr from './pages/icr';
import Calc from './pages/Calc';
import sliding from './pages/sliding';
import editProfile from './pages/editProfile';
import passEdit from './pages/passEdit';
import AccInfoEdit from './pages/AccInfoEdit';
import clinicEdit from './pages/clinicEdit';
import personalEdit from './pages/personalEdit';
import ketonesEdit from './pages/ketonesEdit';
import insulinEdit from './pages/insulinEdit';
import isfEdit from './pages/isfEdit';
import icrEdit from './pages/icrEdit';
import carb from './pages/carb';
import insuResult from './pages/insuResult';
import signUpAR from './pages/signUpArabic';
import AccInfoAR from './pages/AccInfoArabic';
import AccInfoAREdit from './pages/AccInfoEditArabic';
import carbAR from './pages/carbArabic';
import clinicEditAR from './pages/clinicEditArabic';
import ketonesAR from './pages/ketonesArabic';
import clinicInfoAR from './pages/clinicInfoArabic';
import disclaimerAR from './pages/disclaimerArabic';
import editProfileAR from './pages/editProfileArabic';
import icrAR from './pages/icrArabic';
import icrEditAR from './pages/icrEditArabic';
import insulinAR from './pages/insulinArabic';
import insulinARe from './pages/insulinEdit';
import isfARA from './pages/isfArabic';
import isfEditAR from './pages/isfEditArabic';
import ketonesEditAR from './pages/ketonesEditArabic';
import logoAR from './pages/logoScreenArabic';
import passEditAR from './pages/passEditArabic';
import personalEditAR from './pages/personalEditArabic';
import warmar from './pages/warninAr';
import AuthStack from './pages/AuthStack';
import logInAR from './pages/logInAR';
import personalInfoAR from './pages/personalInfoArabic';
import AuthStackAR from './pages/AuthStackAR';
import CalcAR from './pages/CalcAR';





global.db = SQLite.openDatabase(
  {
    name: 'iSugar.db',
    location: 'Library'
  },
  () => {
    console.log('Success')
   },
  error => {
    console.log("ERROR: " + error);
  }
);

try {
  db.transaction( (tx) => {
      tx.executeSql(
       'CREATE TABLE IF NOT EXISTS UserAccount (UserID INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT NOT NULL, lastName	TEXT NOT NULL, email	TEXT NOT NULL, pass	TEXT NOT NULL, accountType	TEXT NOT NULL)',
      []
     );
     //=====//
     try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS KSUMC (UserID INTEGER NOT NULL UNIQUE, MRN TEXT NOT NULL, FOREIGN KEY("UserID") REFERENCES "UserAccount"("UserID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
    //=====//
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS patientprofile (UserID INTEGER NOT NULL UNIQUE, DOB TEXT NOT NULL, weightKG REAL NOT NULL, latest_HP1AC REAL NOT NULL, latest_HP1AC_date TEXT NOT NULL, typeOfGlucoseM TEXT NOT NULL, glucoseLevel_unit TEXT NOT NULL, ketonesMeasure TEXT NOT NULL, insulinRegimen TEXT NOT NULL, ISF INTEGER, targetBG_correct INTEGER, startBG_correct INTEGER, ISFIntervals INTEGER NOT NULL, insulinCalcMethod TEXT NOT NULL, fromBG INTEGER NOT NULL, toBG INTEGER NOT NULL, height REAL NOT NULL, diabetes_center TEXT NOT NULL, diagnosis_date TEXT NOT NULL, center_name TEXT, center_city TEXT, FOREIGN KEY("UserID") REFERENCES "UserAccount"("UserID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
    //========//
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS nonPatientprofile (UserID INTEGER NOT NULL UNIQUE, DOB TEXT NOT NULL, weightKG REAL NOT NULL, latest_HP1AC REAL NOT NULL, latest_HP1AC_date TEXT NOT NULL, typeOfGlucoseM TEXT NOT NULL, glucoseLevel_unit TEXT NOT NULL, ketonesMeasure TEXT NOT NULL, insulinRegimen TEXT NOT NULL, ISF INTEGER, targetBG_correct INTEGER, startBG_correct INTEGER, ISFIntervals INTEGER NOT NULL, insulinCalcMethod TEXT NOT NULL, fromBG INTEGER NOT NULL, toBG INTEGER NOT NULL, FOREIGN KEY("UserID") REFERENCES "UserAccount"("UserID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
    //====//
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS icrInterval (icrID INTEGER PRIMARY KEY AUTOINCREMENT, UserID INTEGER NOT NULL, fromTime TEXT NOT NULL, toTime TEXT NOT NULL, ICR INTEGER NOT NULL, FOREIGN KEY("UserID") REFERENCES "UserAccount"("UserID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
    //====//
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS isfInterval (isfID INTEGER PRIMARY KEY AUTOINCREMENT, UserID INTEGER NOT NULL, fromTime TEXT NOT NULL, toTime TEXT NOT NULL, ISF INTEGER NOT NULL, targetBG_correct INTEGER NOT NULL, startBG_correct INTEGER NOT NULL, FOREIGN KEY("UserID") REFERENCES "UserAccount"("UserID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
    //======/
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS insulinPen (insulinID INTEGER PRIMARY KEY AUTOINCREMENT, UserID INTEGER NOT NULL, insulinType TEXT NOT NULL, halfORfull INTEGER NOT NULL, FOREIGN KEY("UserID") REFERENCES "UserAccount"("UserID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
    //====/
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS insulinOther (insulinID INTEGER PRIMARY KEY AUTOINCREMENT, UserID INTEGER NOT NULL, insulinType TEXT NOT NULL, iDose REAL NOT NULL, iTime TEXT NOT NULL, FOREIGN KEY("UserID") REFERENCES "UserAccount"("UserID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
    //=====//
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS ssInterval (ssID INTEGER PRIMARY KEY AUTOINCREMENT, UserID INTEGER NOT NULL, fromTime TEXT NOT NULL, toTime TEXT NOT NULL, FOREIGN KEY("UserID") REFERENCES "UserAccount"("UserID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
    //======//
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS bgleveltoinsulin (bgID INTEGER PRIMARY KEY AUTOINCREMENT, ssID INTEGER NOT NULL, fromTime TEXT NOT NULL, toTime TEXT NOT NULL, FOREIGN KEY("ssID") REFERENCES "ssInterval"("ssID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
    //======//
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS takenInsulinDose (takenInsulinID INTEGER PRIMARY KEY AUTOINCREMENT, UserID INTEGER NOT NULL, BG_level REAL NOT NULL, ReasonForInsulin TEXT NOT NULL, CHO REAL NOT NULL, insulinDose INTEGER NOT NULL, Dose_time_hours INTEGER NOT NULL, Dose_time_minutes	INTEGER NOT NULL, Dose_Date_Month INTEGER NOT NULL, Dose_Date_Day INTEGER NOT NULL, Dose_Date_Year INTEGER NOT NULL, FOREIGN KEY("UserID") REFERENCES "UserAccount"("UserID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
    //====/
     //======//
     try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS plannedExercise (takenInsulinID INTEGER NOT NULL, type TEXT NOT NULL, duration	INTEGER NOT NULL,  FOREIGN KEY("takenInsulinID") REFERENCES "takenInsulinDose"("takenInsulinID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
     //======//
     try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS prevoiusExercise (takenInsulinID INTEGER NOT NULL, type TEXT NOT NULL, duration	INTEGER NOT NULL, Time	TEXT NOT NULL,  FOREIGN KEY("takenInsulinID") REFERENCES "takenInsulinDose"("takenInsulinID"))',
          []
         );
     })
    } catch (error) {
     console.log(error);
    }
     //======//
     try {
      db.transaction( (tx) => {
          tx.executeSql(
           'CREATE TABLE IF NOT EXISTS CHO (foodID INTEGER PRIMARY KEY AUTOINCREMENT, foodEnglishName TEXT NOT NULL, foodArabicName	TEXT NOT NULL, unit	TEXT NOT NULL, unitArabic	TEXT NOT NULL, gramsOfCHO REAL NOT NULL )',
          []
         );
         //------------child
         try {
          db.transaction( (tx) => {
              tx.executeSql(
               'INSERT INTO CHO (foodEnglishName, foodArabicName, unit, unitArabic, gramsOfCHO) VALUES (?,?,?,?,?),(?,?,?,?,?)',
              ['Cantaloupe', 'شمام',	'cup', 'كوب' , '15', 'Pineapple', 'أناناس', 'cup', 'كوب', '20']
             );
         })
        } catch (error) {
         console.log(error);
        }
     })
    } catch (error) {
     console.log(error);
    }
 })
 
} catch (error) {
 console.log(error);
}


global.uID='';
global.onlinUserID = 0;
global.AccType = '';
global.centName = '';
global.centCity = '';
global.Diabetescenter= '';
global.DOD = '';
global.weightKG = 0;
global.heightCM = 0;
global.DOBirth= '';
global.DOLatestHB1AC = '';
global.latestHB1AC_ = 0; 
global.glucoseUnit = '';
global.insulinReg = '';
global.ketonesMeasure = '';
global.bgTarget = 0;
global.bgStart = 0;
global.fromBG = 0;
global.toBG= 0;
global.InsulinSF = 0;
global.intervalISF = '';
global.insulinCalcMethod = '';
global.glucoseMonitor = '';

const Stack = createNativeStackNavigator();
const mainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
  screenOptions={{
    headerShown: false 
  }}
>



        <Stack.Screen name="logo" component={logoScreen}  />
        <Stack.Screen name="login" component={logIn} />
        <Stack.Screen name="signup" component={signUp} />
        <Stack.Screen name="temp" component={disclaimer} />
        <Stack.Screen name="accinfo" component={AccInfo} />
        <Stack.Screen name="clinic" component={clinicInfo} />
        <Stack.Screen name="warning" component={warning} />
        <Stack.Screen name="personal" component={personalInfo} />
        <Stack.Screen name="ketones" component={ketones} />
        <Stack.Screen name="insulin" component={insulin} />
        <Stack.Screen name="isf" component={isf} />
        <Stack.Screen name="icr" component={icr} />
        <Stack.Screen name="home" component={AuthStack} />
        <Stack.Screen name="sliding" component={sliding} />
        <Stack.Screen name="pass" component={passEdit}  />
        <Stack.Screen name="insulinEdit" component={insulinEdit}  />
        <Stack.Screen name="carb" component={carb}  />
        <Stack.Screen name="calc" component={Calc} />
        <Stack.Screen name="result" component={insuResult} />
        <Stack.Screen name="edit" component={editProfile}  />
        <Stack.Screen name="icrEdit" component={icrEdit}  />
        <Stack.Screen name="isfEdit" component={isfEdit}  />
        <Stack.Screen name="CalcAR" component={CalcAR}  />
        <Stack.Screen name="ketonesEdit" component={ketonesEdit}  />
        <Stack.Screen name="personalEdit" component={personalEdit}  />   
        <Stack.Screen name="clinicEdit" component={clinicEdit}  />
        <Stack.Screen name="AccEdit" component={AccInfoEdit}  />   
        <Stack.Screen name="signupAR" component={signUpAR}  />   
        <Stack.Screen name="accAR" component={AccInfoAR}  />   
        <Stack.Screen name="accEAR" component={AccInfoAREdit}  /> 
        <Stack.Screen name="carbAR" component={carbAR}  /> 
        <Stack.Screen name="ketoAR" component={ketonesAR}  /> 
        <Stack.Screen name="clinicEAR" component={clinicEditAR}  /> 
        <Stack.Screen name="clinicInfoAR" component={clinicInfoAR}  /> 
        <Stack.Screen name="discAR" component={disclaimerAR}  /> 
        <Stack.Screen name="icrAR" component={icrAR}  /> 
        <Stack.Screen name="icrERA" component={icrEditAR}  /> 
        <Stack.Screen name="isfARA" component={isfARA}  /> 
        <Stack.Screen name="insARE" component={insulinARe}  /> 
        <Stack.Screen name="insAR" component={insulinAR}  /> 
        <Stack.Screen name="editProAR" component={editProfileAR}  /> 
        <Stack.Screen name="ketonesEAR" component={ketonesEditAR}  /> 
        <Stack.Screen name="logoAR" component={logoAR}  /> 
        <Stack.Screen name="passEAR" component={passEditAR}  />  
        <Stack.Screen name="personalEAR" component={personalEditAR}  /> 
        <Stack.Screen name="warningAR" component={warmar}  /> 
        <Stack.Screen name="logInAR" component={logInAR}  />
        <Stack.Screen name="personalAR" component={personalInfoAR}  />
        <Stack.Screen name="HomeAR" component={AuthStackAR} />
        <Stack.Screen name="isfEditAR" component={isfEditAR} />


      </Stack.Navigator>
    </NavigationContainer>
  );//fffSS
  };
export default mainStack;