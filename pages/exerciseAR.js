/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  alert,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';

const exercise = ({navigation}) => {
  var onlinUserID = 15;
  var BGlevel = 0;
  var glucagonFlag = '';
  var finding = '';
  var checkCase1 = '';
  var checkCase2 = '';
  var checkCase3 = '';
  var checkCase4 = '';
  var eMsgFlag = '';
  var eMsgFlagDate = moment().format('YYYY-MM-DD');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    checkGlucagon();
    checkAnnual();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const repeatMessage = () => {
        Alert.alert(
          //Title
          '',
          //body
          'هل ترغب في رؤية التعليمات السابقة بشكل يومي؟',
          [
            {
              text: 'نعم',
              onPress: () => {
              console.log('Yes pressed');
              eMsgFlag = '1';
              checkFlag();
              navigation.navigate('exercise3');
              },
            },
            {
              text: 'لا',
              onPress: () => {
              console.log('No pressed');
              checkRepeat();
              },
            },
          ]
        );
        };//end repeatAlert

        const checkRepeat = () => {
          checkHypo();
          if (checkCase1 == '1' || checkCase2 == '1' || checkCase3 == '1' || checkCase4 == '1'){
            eMsgFlag = '1';
            checkFlag();
          } else {
            eMsgFlag = '0';
            checkFlag();
          }
          navigation.navigate('exercise3');
        };
//====================================================To check if user had hypoglycemia for 2 consecutive days================================
        const checkHypo = () => {
          console.log('in DB1:');
          // eslint-disable-next-line quotes
          var InsertAPIURL = "http://192.168.56.1/isugar/checkHypo.php";   //API to  signup

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
             console.log(response[0].flag2);

         if (response[0].flag == 'true' && response[0].flag2 == 'true'){
          // if (onlinUserID != '0'){
              console.log(response[0].userID);
              checkCase1 = '1';
                console.log('inside hypo: ');
         //}
         console.log(onlinUserID + '-' + response[0].flag + '-' + response[0].flag2);
         }
         console.log('inside onlineDB for hypo: ');
         checkBGLevel();
        })
        .catch((error)=>{
            // alert('Error Occured' + error);
        // eslint-disable-next-line semi
        })
        // eslint-disable-next-line semi
        }
//====================================================To check if User had BG< 50mg/dl in past 48h============================================
        const checkBGLevel = () => {
          console.log('in DB2:');
          // eslint-disable-next-line quotes
          var InsertAPIURL = "http://192.168.56.1/isugar/checkBGLevel.php";   //API to  signup

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
              BGlevel = response[0].bglevel;
              console.log(response[0].bglevel);
                console.log('inside bg level: ');
                checkCase2 = '1';
         //}
         console.log(onlinUserID + ' - bg level in past 48h: ' + BGlevel);
         }
         console.log('inside onlineDB for BG level: ');
         checkGlucagon();
        })
        .catch((error)=>{
            // alert('Error Occured' + error);
        // eslint-disable-next-line semi
        })
        // eslint-disable-next-line semi
        }
//====================================================To check if Glucagon message appeared for the user in hypoglycemia section==============
        const checkGlucagon = () => {
          console.log('in DB3:');
          // eslint-disable-next-line quotes
          var InsertAPIURL = "http://192.168.56.1/isugar/checkGlucagonFlag.php";   //API to  signup

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
              glucagonFlag = response[0].glucagonFlag;
              console.log(response[0].glucagonFlag);
              checkCase3 = '1';
                console.log('inside glucagon: ');
         //}
         console.log(onlinUserID + '- glucagon flag: ' + glucagonFlag);
         }
         console.log('inside onlineDB for glucagon: ');
         checkAnnual();
        })
        .catch((error)=>{
            // alert('Error Occured' + error);
        // eslint-disable-next-line semi
        })
        // eslint-disable-next-line semi
        }
//====================================================To check if	User selected evidence of retinopathy=======================================
        const checkAnnual = () => {
          console.log('in DB4:');
          // eslint-disable-next-line quotes
          var InsertAPIURL = "http://192.168.56.1/isugar/checkAnnualTest.php";   //API to  signup

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
              console.log(response[0].userID);
              finding = response[0].EvidenceOfRetinopathy;
              console.log(response[0].EvidenceOfRetinopathy);
              checkCase4 = '1';
              console.log('check case 4: ' + checkCase4);
                console.log('inside Annual test: ');
         console.log(onlinUserID + '- EvidenceOfRetinopathy: ' + finding);
         }
         console.log('inside onlineDB for annual test: ');
        })
        .catch((error)=>{
            // alert('Error Occured' + error);
        // eslint-disable-next-line semi
        })
        // eslint-disable-next-line semi
        }
        const checkFlag = () => {
          console.log('in DB of check flag');
          // eslint-disable-next-line quotes
          var InsertAPIURL = "http://192.168.56.1/isugar/updateEMsgFlag.php";   //API to  signup

          var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          };
          var Data = {
            UserID: onlinUserID,
            eMsgFlag: eMsgFlag,
            eMsgFlagDate: eMsgFlagDate,
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
            // alert('Error Occured' + error);
        // eslint-disable-next-line semi
        })
        // eslint-disable-next-line semi
        }


    return (
        <View style={styles.container}>
              <View style={{top: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 30}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
         <Entypo name="menu" color="#05375a" size={35} />
         </TouchableOpacity>
         <View style={{alignItems: 'center', marginRight: 130, paddingTop: -10, paddingEnd: 15}}>
         <Text
          style={{
            color: '#05375a',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingLeft: 15,
          }}>
       التمارين
        </Text>
         </View>
      </View>
          <View style={styles.footer}>
           <View>
            <ScrollView>
             <View style={styles.action}>
              <View><Text style={styles.internalText}>ويوصى بالتمرين لمدة ٦٠ دقيقة كل يوم. ومع ذلك،
              يوصى بعدم الممارسة إذا كان أحد ما يلي ينطبق: </Text></View>
               <View><Text style={styles.points}> ١- لديك مرض أو تشعر بعدم الارتياح</Text></View>
               <View><Text style={styles.points}> ٢- لديك مستوى عالي من الجلوكوز في الدم أعلى من أو يساوي ٢٥٠ مج/دل، وكيتون الدم/البول إيجابي</Text></View>

               { checkCase3 == '1' ?
               <View>
               <View><Text style={styles.pointHighlight}> ٣- كان لديك انخفاض حاد في نسبة الدم (أقل من ٥٠ مج/دل)  أو نقص في نسبة الدم الذي كان يتطلب مساعدة خارجية خلال الـ ٢٤ ساعة السابقة أو نقص في نسبة الدم المتكرر </Text></View>
             </View>
             :  <View><Text style={styles.points}>٣- كان لديك انخفاض حاد في نسبة الدم(أقل من ٥٠ مج/دل) أو نقص في نسبة الدم الذي كان يتطلب مساعدة خارجية خلال الـ ٢٤ ساعة السابقة أو نقص في نسبة الدم المتكرر </Text></View>
            }

             { checkCase4 == '1' ?
              <View>
                <View><Text style={styles.pointHighlight}>٤- إذا كان لديك اعتلال الشبكية الانتشاري أو تمارين اعتلال الكلى التي تزيد ضغط الدم يجب تجنبها</Text></View>
                <View>
                 <TouchableOpacity onPress={()=> navigation.navigate('logoScreen')}>
                  <Text style={{fontSize: 15, color: 'grey',  paddingLeft: 20}}>اضغط هنا من أجل المزيد من التفاصيل </Text>
                 </TouchableOpacity>
                </View>
                  </View>
             :    <View>
               <Text style={styles.points}>٤- إذا كان لديك اعتلال الشبكية الانتشاري أو تمارين اعتلال الكلى التي تزيد ضغط الدم يجب تجنبها </Text>
               <View>
                 <TouchableOpacity onPress={()=> navigation.navigate('logoScreen')}>
                  <Text style={{fontSize: 15, color: 'grey',  paddingLeft: 20}}>اضغط هنا من أجل المزيد من التفاصيل </Text>
                 </TouchableOpacity>
                </View></View>
             }

             </View>
             <View style={styles.buttonV}>
          <TouchableOpacity onPress={repeatMessage}>
            <LinearGradient
              colors={['#f5f5f5', '#e9ebee', '#e9ebee']}
              style={styles.buttonR}>
              <Text style={styles.titleB}>
                Ok
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
            </ScrollView>
           </View>
          </View>
          </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
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
    fontSize: 18,
    textAlign: 'right',
    paddingTop: 20,
    paddingLeft: 20,
    fontWeight: '600',
    lineHeight: 30,
  },
  points: {
    color: '#05375a',
    fontSize: 16,
    textAlign: 'right',
    paddingTop: 20,
    paddingLeft: 20,
    fontWeight: '500',
    lineHeight: 30,
  },
  pointHighlight: {
    color: '#05375a',
    fontSize: 18,
    textAlign: 'left',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: '600',
    lineHeight: 30,
  },
buttonV: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 15,
  },
  buttonR: {
    alignItems: 'center',
    width: 150,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
  titleB: {
    color: '#05375a',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default exercise;

