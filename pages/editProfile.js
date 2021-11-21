import React from 'react';
import { StyleSheet, 
    View,
    Image, 
    Text,
    ScrollView,
    TouchableOpacity, 
    Dimensions } from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const editProfile = ({ navigation }) => {
  return (

    <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.textHeader}>Hello Sara
             <Image source={require('../images/ballons.png')}
             style={{height: 30, width: 30}}/> 
         </Text>
         </View>
         <ScrollView>
        <View style={styles.body}>
           
        <TouchableOpacity onPress={()=>{navigation.navigate('pass', {textE: 'Account Information', }); }}>
            <LinearGradient style={styles.outer}
            colors={[ '#fec5bb', '#e5989b', '#a8dadc', '#457b9d']}>
            <View style={styles.inner}>
            <Text style={styles.textBody}>Account Information</Text>
            </View>
            
            </LinearGradient>
            </TouchableOpacity>
     {/* //=================// */}
            <TouchableOpacity onPress={()=>{navigation.navigate('pass', {textE: 'Clinic Information', }); }}>
            <LinearGradient style={styles.outer}
            colors={[ '#ffb4a2', '#e5989b', '#a8dadc', '#457b9d']}>
            <View style={styles.inner}>
            <Text style={styles.textBody}>Clinic Information</Text>
            </View>
            
            </LinearGradient>
            </TouchableOpacity>
            {/* //=================// */}
            <TouchableOpacity onPress={()=>{navigation.navigate('pass', {textE: 'Personal Information', }); }}>
            <LinearGradient style={styles.outer}
            colors={[ '#ffb4a2', '#e5989b', '#a8dadc', '#457b9d']}>
            <View style={styles.inner}>
            <Text style={styles.textBody}>Personal Information</Text>
            </View>
            
            </LinearGradient>
            </TouchableOpacity>
            {/* //======= ==========// */}
            <TouchableOpacity onPress={()=>{navigation.navigate('pass', {textE: 'Glucose and Ketones Monitoring Information', }); }}>
            <LinearGradient style={styles.outer}
            colors={[ '#ffb4a2', '#e5989b', '#a8dadc', '#457b9d']}>
            <View style={styles.inner}>
            <Text style={styles.textBody}>Glucose and Ketones Monitoring Information</Text>
            </View>
            </LinearGradient>
            </TouchableOpacity>
            {/* //=================// */}
            <TouchableOpacity onPress={()=>{navigation.navigate('pass', {textE: 'Insulin Information', }); }}>
            <LinearGradient style={styles.outer}
            colors={[ '#ffb4a2', '#e5989b', '#a8dadc', '#457b9d']}>
            <View style={styles.inner}>
            <Text style={styles.textBody}>Insulin Information</Text>
            </View>
            
            </LinearGradient>
            </TouchableOpacity>
             {/* //=================// */}
             <TouchableOpacity onPress={()=>{navigation.navigate('pass', {textE: 'Insulin Sensitivity Factor', }); }}>
            <LinearGradient style={styles.outer}
            colors={[ '#ffb4a2', '#e5989b', '#a8dadc', '#457b9d']}>
            <View style={styles.inner}>
            <Text style={styles.textBody}>Insulin Sensitivity Factor</Text>
            </View>
            
             </LinearGradient>
            </TouchableOpacity>
              {/* //=================// */}
              <TouchableOpacity onPress={()=>{navigation.navigate('pass', {textE: 'Insulin to Carbohydrate Ratio (ICR)', }); }}>
            <LinearGradient style={styles.outer}
            colors={[ '#ffb4a2', '#e5989b', '#a8dadc', '#457b9d']}>
            <View style={styles.inner}>
            <Text style={styles.textBody}> Insulin to Carbohydrate{'\n'} Ratio (ICR)</Text>
            </View>
            
            </LinearGradient>
            </TouchableOpacity>
           
        </View>
        </ScrollView>
    </View>      

    
  );
};


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

export default editProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF0F2',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
},
body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,

},
outer: {
    width: 275,
    height: 110,
    marginTop: 15,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inner: {
    width: 250,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
    
  },
textHeader:{
   fontSize: 15,
   color: '#05375a', 
},
textBody:{
    fontSize: 20,
    color: '#05375a', 
    textAlign: 'center',
    fontWeight: 'bold',
 } 
});


