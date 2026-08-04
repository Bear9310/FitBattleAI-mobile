import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import {
  CameraView,
  useCameraPermissions
} from "expo-camera";



export default function CameraScreen(){


  const [permission, requestPermission] =
    useCameraPermissions();



  const [active,setActive] =
    useState(false);



  if(!permission){

    return <View/>;

  }



  if(!permission.granted){


    return (

      <View style={styles.container}>


        <Text style={styles.text}>
          Camera permission required
        </Text>



        <TouchableOpacity
          onPress={requestPermission}
          style={styles.button}
        >

          <Text style={styles.text}>
            Allow Camera
          </Text>

        </TouchableOpacity>


      </View>

    );

  }




  return (

    <View style={styles.container}>


      {
        active &&

        <CameraView
          style={styles.camera}
          facing="front"
        />

      }



      <TouchableOpacity

        style={styles.button}

        onPress={()=>
          setActive(!active)
        }

      >

        <Text style={styles.text}>

          {
            active
            ?
            "Stop Camera"
            :
            "Start Camera"
          }

        </Text>


      </TouchableOpacity>



      <Text style={styles.status}>

        Pose Engine Ready

      </Text>



    </View>

  );

}




const styles=StyleSheet.create({

container:{
 flex:1,
 backgroundColor:"#111",
 justifyContent:"center",
 alignItems:"center"
},


camera:{
 width:"100%",
 height:"70%"
},


button:{
 backgroundColor:"#2563EB",
 padding:15,
 borderRadius:10,
 margin:20
},


text:{
 color:"#fff",
 fontSize:18
},


status:{
 color:"#00ff88",
 fontSize:20
}


});
