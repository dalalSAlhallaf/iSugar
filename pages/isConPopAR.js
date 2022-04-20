import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, 
    View,
    Image, 
    Text,
    TouchableOpacity,
    Button,
    Platform,
    ScrollView,
    Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushNotification from "react-native-push-notification";



  const isConPopAR = ({navigation}) =>{

    const handleNotification = ()=>{
      PushNotification.localNotificationSchedule({
        channelId: 'test',
        title: 'Check Your BG level !',
        message: 'Check Your BG level',
        date: new Date(Date.now()+ 60*1000),
        allowWhileIdle: true,


      });
    }

    const createChannels = () =>{
      PushNotification.createChannel(
        {
          channelId: 'test',
          channelName: 'Test Channel'
        }
      )
    }


    const navInstrYes = () =>{

     if (recheckCounter >= 3) {

      glucaFlag = 1;
      navigation.navigate('notConsciousAR');
      

    } else {
      navigation.navigate('hypoConsciousAR');
      handleNotification();
  
      
      //set notification reminder.
    }
  };

  //===============================

      const navInstrNo = () =>{
        glucaFlag = 1;
        navigation.navigate('notConsciousAR');
    
  };


   //==================================================================
  const [DOB, setDOB] = useState('');
  // const [weight, setWeight] = useState(0);
  // const [age, setAge] = useState(0);

  //if age >= 4 -> Show intranasal glucagon


      useEffect(() => {
      createChannels()
      retrieveAW();
        }, []);

 
  //====================retrive age & wight=========================
  const retrieveAW = () => {
    var dateOfB='';
     try {
      console.log('step1');
      db.transaction(tx => {
        tx.executeSql(
          'SELECT DOB, weightKG FROM patientprofile WHERE UserID=?',
          [uID],
          (tx, results) => {
            var rows = results.rows;
             for (let i = 0; i < rows.length; i++) {
            dateOfB=rows.item(i).DOB;
           weight = rows.item(i).weightKG;

        var currentDate = new Date();
        var birthDay = new Date(dateOfB);
        var age2 = currentDate.getFullYear() - birthDay.getFullYear();
        console.log('getFullYear:  '+birthDay.getFullYear());
        var mon = currentDate.getMonth() - birthDay.getMonth();
        if (mon < 0 || mon == 0) {
            age2= age2-1;
        }
        age=age2;

            
             }

          },
        );

      });
    } catch (error) {
      console.log(error);
    }

  };


    //const AccountT = route.params;
    return (
      <View style={styles.container}>
      <LinearGradient colors={['#E7EFFA', '#E7EFFA','#AABED8']} style={styles.container}>
         <View style={styles.header}>
         <Image source={require('./images/logo.png')}
         style={styles.logo}
         resizeMode='stretch'/>
         </View>
      </LinearGradient>
      <View style={styles.footer}>
        <ScrollView>
      <Text style={styles.title}>  </Text>
      <View style={styles.textD}>
      <Text style={styles.text32}>هل المريض بكامل وعيه وقادر على الشرب والأكل؟</Text>
      </View>
      
     
        <View style={styles.buttonV}>
        <TouchableOpacity onPress={navInstrYes} > 
                <LinearGradient
                    colors={['#E7EFFA', '#AABED8', '#AABED8']} style={styles.buttonR}
                >
                    <Text style={styles.titleB}>نعم</Text>
                  
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={navInstrNo}> 
                <LinearGradient
                    colors={['#E7EFFA', '#AABED8', '#AABED8']} style={styles.buttonR}
                >
                    <Text style={styles.titleB}>لا</Text>
                  
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

export default isConPopAR;

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
    height: height_logo,

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
text32: {
  color: '#05375a',
  fontSize: 25,
  textAlign: 'center',
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},
title: {
    color: '#05375a',
    fontSize: 25,
    fontWeight: 'bold'
},

titleB: {
  color: '#05375a',
  fontSize: 20,
  fontWeight: 'bold',
 
},
buttonV: {
  flex: 1,
  flexDirection: 'row',
  marginHorizontal: 50,
  marginTop: 45,
  justifyContent: 'space-between',
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
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5
},
buttonR: {
  alignItems: 'center',
  width: 100,
  height: 40,
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

