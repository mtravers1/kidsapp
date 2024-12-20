// import { Image, StyleSheet, Platform, View, Text, ImageBackground} from 'react-native';

import photo from '/assets/photos/photo1.jpg'
import { useRouter } from 'expo-router';
import Custombutton from '@/components/CustomButton';
// export default function HomeScreen() {
//   const router=useRouter()
//   return (
//     <View
//     style={styles.view} 

//     >
//       <ImageBackground       
//       style={styles.background} 
//       resizeMode='cover' 
//       source={photo}>
//         <View style={styles.view1}>
//         <Text style={styles.text}>Welcome to my Story</Text>

//         </View>
//          <Custombutton title='Start my Story' 
//         onPress={()=>router.push("/story/story1")}/>


//           <Custombutton title='Play' 
//         onPress={()=>router.push("/games/game")}/>
          
   


//       </ImageBackground>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   background:{
//     flex:1,
//     width:500,
//     height:900

//   },

//   view:{
//     flex:1,
//     display:'flex',
//    alignItems:'center'
//   },
//   view1:{
//     flex:1,
//     display:'flex',
//    alignItems:'center',
//    justifyContent:'center'
//   },
//   text:{
//     color:'white',
//     marginTop:30,
//     fontSize:36,
//     fontWeight:'bold'
//   }
// });
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, Button } from 'react-native';

const HomeMenu = () => {
  const router=useRouter()
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Button  style={styles.title}>Adventure Quest</Button>
       
//         
        <Button style={styles.subtitle}>Let the adventure begin!</Button>
      </View>

      {/* Buttons Section */}
      <View style={styles.menuContainer}>
        {/* Play Quiz Button */}
        <TouchableOpacity onPress={()=>router.push("/story/story1")} style={[styles.button, styles.playButton]}>
          <Text  style={styles.buttonText}>Play Quiz</Text>
        </TouchableOpacity>

        {/* Leaderboard Button */}
        <TouchableOpacity style={styles.iconButton}>
          {/* <Image
            source={require('./assets/star-icon.png')} // Replace with your icon path
            style={styles.icon}
          /> */}
          <Text style={styles.iconText}>Leaderboard</Text>
        </TouchableOpacity>

        {/* Rewards Button */}
        <TouchableOpacity style={styles.iconButton}>
          {/* <Image
            source={require('./assets/treasure-icon.png')} // Replace with your icon path
            style={styles.icon}
          /> */}
          <Text style={styles.iconText}>Rewards</Text>
        </TouchableOpacity>

        {/* Settings Button */}
        <TouchableOpacity style={styles.iconButton}>
          {/* <Image
            source={require('./assets/gear-icon.png')} // Replace with your icon path
            style={styles.icon}
          /> */}
          <Text style={styles.iconText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB', // Sky blue
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFD700', // Sunshine yellow
    fontFamily: 'ComicSansMS', // Or any playful font
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  menuContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  playButton: {
    backgroundColor: '#FFD700', // Sunshine yellow
    borderColor: '#FF6347', // Candy red
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#32CD32', // Grass green
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
    width: '70%',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
  },
});

