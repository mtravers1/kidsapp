import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
// import two from '@/assets/photos/photo2.jpg'
const three = require ('@/assets/photos/photo3.jpg')
const two = require('@/assets/photos/photo2.jpg')
const four = require ('@/assets/photos/photo4.jpg')
const five = require('@/assets/photos/photo5.jpg')
const six = require ('@/assets/photos/photo6.jpg')
const seven = require('@/assets/photos/photo7.jpg')
import Custombutton from '@/components/CustomButton'
import AnswerButton from '@/components/AnswerButton'
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated'
import { Double } from 'react-native/Libraries/Types/CodegenTypes'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

function story1() {

  const [showScore, setShowScore]=useState(false)
  const [currentQuestion, setCurrentQuestion]=useState(0)
  const [score, setScore]=useState(0)
  // const [answer2, setAnswer2]=useState('')
  // const [answer3, setAnswer3]=useState('')
  // const [answer4, setAnswer4]=useState('')
  const quizData=[{
   id:1,
    text:'My whole family comes to help us. Grandma, Grandpa, Leo, Trevor, Auntie Jenn and Grandma Jay',
    question:'Who did no come to help put up the tree',
    options:[
      'Grandma', 'Trevor', 'Grandma', 'Martin'
    ],
    answer:'Martin',
    pic:two
  },
  {
    id:2,
    text:'Today we finally put up our Christmas Tree',
    question:'What color is the star',
    options:[
      'blue', 'green', 'yellow', 'black'
    ],
    answer:'yellow',
    pic:three,
  },
  {
    id:3,
    text:'We put up the tree and then we decorate it with some of my favorite ornaments, I havge a very special one from my neighbors Carley and Sammuel. The are Girl Scourts',
    question:'Who was the special ornaments from',
    options:[
      'Charles and kenny', 'dameatris and billy', 'Grandma and Grandpa', 'Carley and Sammuel'
    ],
    answer:'Carley and Sammuel',
    pic:five,
  },
  {
    id:4,
    text:'I helped my mommy and daddy fix his room. We gave away some of my old clothes We have his curtains and will still need to put up two crib, but my daddy doesnt have all the parts yet',
    question:'What did they give away',
    options:[
      'Clothes', 'Shoes', 'Food', 'Car'
    ],
    answer:'Clothes',
    pic:four,
  },
  {
    id:5,
    text:'His name is Tristan Oliver. Tristan means "compassionate spirit" and Oliver means "Man of Peace" I am so excited is see him',
    question:'What does Tristan mean',
    options:[
      'Brite and wise', 'quiet and peacefull', 'Compassionate Spirit'
    ],
    answer:'Compassionate Spirit',
    pic:six,
  },
  {
    id:6,
    text:'We put up the tree and then we decorate it with some of my favorite ornaments, I havge a very special one from my neighbors Carley and Sammuel. The are Girl Scourts',
    question:'Who was the special ornaments from',
    options:[
      'Charles and kenny', 'dameatris and billy', 'Grandma and Grandpa', 'Carley and Sammuel'
    ],
    answer:'Carley and Sammuel',
    pic:seven,
  }

]
  // const onPress = ()=>{
  //  if(answer==='Martin')
  //   console.log('true')
  // }
  const handleClick=(item:any)=>{
    const answer = quizData[currentQuestion]?.answer
    if(answer===item){
      setScore((prevScore)=>prevScore+1)
      alert('Right Answer')
      const nextQuestion = currentQuestion+1
    if(nextQuestion<quizData.length){
      setCurrentQuestion(nextQuestion)
    }
    else{
      setShowScore(true)
    }
    }
    else{
      alert('Wrong Try Again')
    }
    
    
  }

  return (
    <SafeAreaView style={styles.sav}>
 

         {/* {quizData.map((i)=>( */}
         <View style={styles.score}>Score: {score}</View>
         <View style={styles.top}>
        
        <TouchableOpacity style={styles.iconButton}>
                {/* <Image
                  source={require('./assets/treasure-icon.png')} // Replace with your icon path
                  style={styles.icon}
                /> */}
                <Text style={styles.iconText}>Rewards</Text>
              </TouchableOpacity>

         </View>
 <Image
 style={styles.img}

 source={quizData[currentQuestion].pic} 
 />
        {/* ))} */}
       
        <View style={styles.top}>

        <Text style={styles.text1}>{quizData[currentQuestion]?.text}</Text>
            <Text style={styles.text2}>{quizData[currentQuestion]?.question}?</Text>
            </View>
                  <View style={styles.top}>
          {quizData[currentQuestion]?.options.map((item, key)=>{
            // return(<TouchableOpacity
            // >
            //   <Text>{item}</Text>
            // </TouchableOpacity>)

            
            return(
              
            <AnswerButton
            key={key}
            // style={styles.iconButton} 
            title={item}
            onPress={()=>handleClick(item)}
            >
              
            </AnswerButton>)
          })}
      </View>
      
      
    </SafeAreaView>
  )
}

export default story1

const styles=StyleSheet.create({
  score:{
    display:'flex',
    alignItems:'flex-end',
    fontFamily:''
  },
  top:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
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
  sav:{
    backgroundColor: '#87CEEB', // Sky blue
    height:'100%'

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
  view:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text1:{
    margin:5,
    fontSize:16,
    fontWeight:'bold'

  },
  text2:{
    margin:5,
    fontSize:16,
    fontWeight:'bold'
  },
  img:{
    // width:scale(400),
    // height:verticalScale(250),
    margin:'auto',
    // width:wp(40),
    // height:hp(40),
    width: '100%',
    height: 250,
    objectFit:'cover',
    

  },
  button:{
    marginBottom:1
  }
})
