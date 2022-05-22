/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */

import React, {  useState, useEffect } from 'react';
import {  StyleSheet, 
  View,
  Image,
  Text,
  Platform, 
  alert,
  Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SQLite from 'react-native-sqlite-storage';

global.db = SQLite.openDatabase(
    {
      name: 'iSugar.db',
      location: 'Library'
    },
    () => {
      console.log('Success')
     },
    error => {
      console.log('ERROR: ' + error);
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
             'CREATE TABLE IF NOT EXISTS CHO (foodID INTEGER PRIMARY KEY AUTOINCREMENT, foodEnglishName TEXT NOT NULL UNIQUE, foodArabicName	TEXT NOT NULL, unit	TEXT NOT NULL, unitArabic	TEXT NOT NULL, gramsOfCHO REAL NOT NULL )',
            []
           );
           //------------child
           try {
            db.transaction( (tx) => {
                tx.executeSql(
                 'INSERT INTO CHO (foodEnglishName, foodArabicName, unit, unitArabic, gramsOfCHO) VALUES (?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?), (?,?,?,?,?),(?,?,?,?,?), (?,?,?,?,?),  (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?), (?,?,?,?,?) ',
                ['Cantaloupe', 'شمام',	'cup', 'كوب' , '15', 'Pineapple', 'أناناس', 'cup', 'كوب', '20', 'Raspberry', 'توت العليق الأحمر', 'cup', 'كوب', '7.5', 'Blackberry', 'توت العليق الأسود', 'cup', 'كوب', '7', 'Blueberry','التوت الأزرق','cup','كوب','15', 'Strawberry', 'فراولة', 'cup', 'كوب', '12', 'Watermelon ', 'جح' ,'cup' ,'كوب' ,'12', 'Dried fruits','فواكه مجففة','cup','كوب','60', 'Canned fruits', 'فواكه معلبة', 'cup', 'كوب', '30', 'Popcorn', 'فشار', 'cup', 'كوب', '15', 'Indomie','اندومي','cup','كوب','30', 'Corn flakes','كورن فليكس','cup','كوب','30', 'Full fat milk','حليب كامل الدسم','cup','كوب','15', 'Low fat milk', 'حليب قليل الدسم', 'cup', 'كوب', '15', 'Chocolate milk', 'حليب بالشوكولاتة', 'cup', 'كوب', '30', 'Full fat laban', 'لبن كامل الدسم', 'cup', 'كوب', '15', 'skim fat laban','لبن منزوع الدسم','cup','كوب','15', 'Low fat laban', 'لبن قليل الدسم', 'cup', 'كوب', '15', 'Full fat yogurt', 'زبادي كامل الدسم' ,'cup', 'كوب', '15', 'Skim fat yogurt', 'زبادي منزوع الدسم', 'cup', 'كوب', '15', 'Low fat yogurt', 'زبادي قليل الدسم', 'cup', 'كوب', '15', 'Flavoured yogurt','زبادي بالنكهات','cup','كوب','22.5', 'Skim milk','حليب منزوع الدسم','cup','كوب','15', 'Vermicelli', 'شعيرية', 'cup', 'كوب', '60', 'Stewed vegetables', 'مرق خضار', 'cup', 'كوب', '15', 'Oats soup', 'شوربة الشوفان', 'cup', 'كوب', '15', 'Lentils soup', 'شوربة عدس', 'cup', 'كوب', '20']
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

var calcMethod = [
  
  {label: 'I use a ratio (ICR) to calculate my meal insulin'+'\n', value: 'ICR', valueIndex: 1},
  {label: 'I use sliding scale to determine my meal insulin'+'\n', value: 'Sliding Scale', valueIndex: 0},
  
  ];
  const icr = ({ navigation, route }) =>{
   
    useEffect(() => {
      MethodForCalc('Sliding Scale');
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
    const [insulin1, setInsulin1] = useState(0);
    const [insulin2, setInsulin2] = useState(0);
    const [insulin3, setInsulin3] = useState(0);
    const [mode, setMode] = useState('date');
//--------------Date----------------------- 
    const [date1From, setDate1From] = useState(new Date());         // time entries x6 for user
    const [show1From, setShow1From] = useState(false);

//-------------------------------------------
    const [date1TO, setDate1TO] = useState(new Date());
    const [show1TO, setShow1TO] = useState(false);
    const [toRange1, setToRange1] = useState(0);
//-------------------------------------------
    const [date2From, setDate2From] = useState(new Date());
    const [show2From, setShow2From] = useState(false);
//-------------------------------------------
    const [date2TO, setDate2TO] = useState(new Date());
    const [show2TO, setShow2TO] = useState(false);
    const [toRange2, setToRange2] = useState(0);
//-------------------------------------------
    const [date3From, setDate3From] = useState(new Date());
    const [show3From, setShow3From] = useState(false);

//-------------------------------------------
    const [date3TO, setDate3TO] = useState(new Date());
    const [show3TO, setShow3TO] = useState(false);
    const [toRange3, setToRange3] = useState(0);
//-------------------------------------------                   
    const [date4From, setDate4From] = useState(new Date());
    const [show4From, setShow4From] = useState(false);
//-------------------------------------------
    const [date4TO, setDate4TO] = useState(new Date());
    const [show4TO, setShow4TO] = useState(false);
    const [fromRange1, setFromRange1] = useState(0);
//-------------------------------------------
    const [date5From, setDate5From] = useState(new Date());
    const [show5From, setShow5From] = useState(false);
//-------------------------------------------
    const [date5TO, setDate5TO] = useState(new Date());
    const [show5TO, setShow5TO] = useState(false);
    const [fromRange2, setFromRange2] = useState(0);
//-------------------------------------------
    const [date6From, setDate6From] = useState(new Date());
    const [show6From, setShow6From] = useState(false);

//-------------------------------------------
    const [date6TO, setDate6TO] = useState(new Date());
    const [show6TO, setShow6TO] = useState(false);
    const [fromRange3, setFromRange3] = useState(0);
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
    showMode3To('time');
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
  var ssID=0; 

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

  if (data.caluMethod == 'Sliding Scale'){
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'INSERT INTO ssInterval (UserID, fromTime, toTime)' 
           +'VALUES (?,?,?)',
             [uID, date1From, date1TO]
         );
        
        //  getData();
     })
     
 } catch (error) {
     console.log(error);
 }

}
try {
  db.transaction((tx) => {
      tx.executeSql(
          "SELECT ssID, UserID FROM ssInterval",
          [],
          (tx, results) => {
              var rows = results.rows;
              for (let i = 0; i < rows.length; i++) {
                  ssID = rows.item(i).ssID;
                  var ID = rows.item(i).UserID;
                  if (uID == ID ){
                    console.log(ssID);
                      return;
                  }      
                }
              }

          
      )
      
  })
} catch (error) {
  console.log(error);
}
    try {
      db.transaction( (tx) => {
          tx.executeSql(
           'INSERT INTO bgleveltoinsulin (ssID, fromBGLevel, toBGLevel, nsulinDose)' 
           +'VALUES (?,?,?,?)',
             [ssID, fromRange1, toRange1, insulin1 ]
         );
        
        //  getData();
     })
     
    } catch (error) {
     console.log(error);
    }
    console.log(ssID+' '+fromRange1+' '+toRange1+' '+insulin1);
    try {
        db.transaction( (tx) => {
            tx.executeSql(
             'INSERT INTO bgleveltoinsulin (ssID, fromBGLevel, toBGLevel, nsulinDose)' 
             +'VALUES (?,?,?,?)',
               [ssID, fromRange2, toRange2, insulin2 ]
           );
          
          //  getData();
       })
       
      } catch (error) {
       console.log(error);
      }
      console.log(ssID+' '+fromRange2+' '+toRange2+' '+insulin2);
      try {
        db.transaction( (tx) => {
            tx.executeSql(
             'INSERT INTO bgleveltoinsulin (ssID, fromBGLevel, toBGLevel, nsulinDose)' 
             +'VALUES (?,?,?,?)',
               [ssID, fromRange3, toRange3, insulin3 ]
           );
          
          //  getData();
       })
       
      } catch (error) {
       console.log(error);
      }
      console.log(ssID+' '+fromRange3+' '+toRange3+' '+insulin3);
  navigation.navigate('home') 
 
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
        {AccType == 'Patient Account' ? <Text style={styles.title}>Step 7 of 7: Insulin to Carbohydrate Ratio (ICR)  {'\n'}</Text>
        : <Text style={styles.title}>Step 6 of 6: Insulin to Carbohydrate Ratio (ICR)  {'\n'}</Text>}
      
         
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
    width: 350,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 35,
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
buttonV: {
  marginTop: 60,
  alignItems: 'center',
  justifyContent: 'center'
  
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
  width: 250,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: 5,
  paddingBottom: 5,
},
actionSub: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fff',
  },
actionB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,

},
buttonR: {
  alignItems: 'center',
  width: 200,
  height: 55,
  justifyContent: 'center',
  borderRadius: 15,
  flexDirection: 'row',
  
},
buttonRS: {
  alignItems: 'center',
  width: 200,
  height: 45,
  marginTop: 15,
  justifyContent: 'center',
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
  },
  titleB1S: {
    color: '#05375a',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonR1S: {
    alignItems: 'center',
    width: 150,
    height: 55,
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    
  },
});

