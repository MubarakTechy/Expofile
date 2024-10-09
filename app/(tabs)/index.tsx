// import { Image, StyleSheet, Platform } from 'react-native';
import {View, Text, StyleSheet,ImageBackground, TextInput, Button , ScrollView,  Image } from 'react-native'


export default function HomeScreen() {
  return(
    <ScrollView>
      <View  style = {style.container} >
          <ImageBackground style = {style.cova} source={require("@/assets/images/pizza 3d png.png")} >
            <View  >
              <Text style = { style.mark} > pizzaria </Text>
              <Text style = { style.mark}> do  </Text>
              <Text style = { style.mark}>Morro </Text>
            </View>
          </ImageBackground>
        <View style = {style.piss }>
       
          <TextInput  style={style.input} placeholder="Enter your Email"  />
          <TextInput  style={style.input}  placeholder="Enter text Telephone "  />
          <View style={{  }} >
          <Button
          
            title="Enter"
            color="#F2C111"/>
        </View>
          <View>
            <Text style = { style.mark2  }>Esqueceu a senha?</Text>
          </View>
          <View style= {{ justifyContent:'center', display: 'flex', alignItems: 'center',padding: 10,  }}>
               <View style ={style.small2} >
               <Text style ={style.small } >Menu</Text>
               </View>
          </View>
           
       </View>
    </View>  
         <View style= {{justifyContent: 'center', display: 'flex', backgroundColor : "#F6E2D3", alignItems: 'center', flexDirection: "row", padding:10, gap: 20,  }} >
             <Text style={{color: "black", fontSize: 25,  }}>Pizza</Text>
             <Text style={{color: "black", fontSize: 25,  }}>Doc</Text>
             <Text style={{color: "black", fontSize: 25,  }}>Price</Text>
         </View>
    <View style={{padding: 13, display:'flex', gap : 20, backgroundColor : "#F6E2D3", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
  
           <View>
                <View style={{display: "flex", marginLeft: 10, flexDirection: 'column', gap: 10, height: 350, width: 180, borderRadius: 10,  padding: 10, backgroundColor : "#6c5542"  }} >
                <Image 
                  source={require('../../assets/images/Pizza-de-calabresa.png')} 
                  style={{ width: 150, height: 150, }}/>
                  <Text style={{ fontSize: 17, color: "white"  }}> CALABRESA </Text>
                  <Text style={{color: "white"}}>Mussarela,Calabresa e Cebola.</Text>
                  <Text style={{ fontSize: 19, color: "yellow" }}>GRANDE = R$:50,00</Text>
                  <Text style={{ fontSize: 19,  color: "yellow"}}>MEDIA = R$:40,00</Text>
              </View>
           </View>
         <View style={{display: "flex", flexDirection: 'column', gap: 10, height: 350, width: 180, borderRadius: 10,  padding: 10, backgroundColor : "#6c5542"  }} >
          <Image 
            source={require('../../assets/images/Pizza-de-calabresa.png')} 
            style={{ width: 150, height: 150, }}/>
            <Text style={{ fontSize: 17, color: "white" }}> CALABRESA </Text>
            <Text style={{color: "white"}} >Mussarela,Calabresa e Cebola.</Text>
            <Text style={{ fontSize: 19, color: "yellow" }}>GRANDE = R$:50,00</Text>
            <Text style={{ fontSize: 19,  color: "yellow"}}>MEDIA = R$:40,00</Text>
         </View>
    </View>
    <View style={{padding: 10, display:'flex', backgroundColor : "#F6E2D3", gap : 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
         <View style={{display: "flex", flexDirection: 'column', gap: 10, height: 350, width: 180, borderRadius: 10,  padding: 10, backgroundColor : "#6c5542"  }} >
          <Image 
            source={require('../../assets/images/Pizza-de-calabresa.png')} 
            style={{ width: 150, height: 150, }}/>
            <Text style={{ fontSize: 17, color: "white" }}> CALABRESA </Text>
            <Text style={{color: "white"}}>Mussarela,Calabresa e Cebola.</Text>
            <Text style={{ fontSize: 19, color: "yellow" }}>GRANDE = R$:50,00</Text>
            <Text style={{ fontSize: 19,  color: "yellow"}}>MEDIA = R$:40,00</Text>
         </View>
         <View style={{display: "flex", flexDirection: 'column', gap: 10, height: 350, width: 180, borderRadius: 10,  padding: 10, backgroundColor : "#6c5542"  }} >
          <Image 
            source={require('../../assets/images/Pizza-de-calabresa.png')} 
            style={{ width: 150, height: 150, }}/>
            <Text style={{ fontSize: 17,color: "white"  }}> CALABRESA </Text>
            <Text style={{color: "white"}}>Mussarela,Calabresa e Cebola.</Text>
            <Text style={{ fontSize: 19, color: "yellow" }}>GRANDE = R$:50,00</Text>
            <Text style={{ fontSize: 19,  color: "yellow"}}>MEDIA = R$:40,00</Text>
         </View>
    </View>
    <View style={{padding: 10, display:'flex', backgroundColor : "#F6E2D3", gap : 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
         <View style={{display: "flex", flexDirection: 'column', gap: 10, height: 350, width: 180, borderRadius: 10,  padding: 10, backgroundColor : "#6c5542"  }} >
          <Image 
            source={require('../../assets/images/Pizza-de-calabresa.png')} 
            style={{ width: 150, height: 150, }}/>
            <Text style={{ fontSize: 17, color: "white" }}> CALABRESA </Text>
            <Text style={{color: "white"}}>Mussarela,Calabresa e Cebola.</Text>
            <Text style={{ fontSize: 19, color: "yellow" }}>GRANDE = R$:50,00</Text>
            <Text style={{ fontSize: 19,  color: "yellow"}}>MEDIA = R$:40,00</Text>
         </View>
         <View style={{display: "flex", flexDirection: 'column', gap: 10, height: 350, width: 180, borderRadius: 10,  padding: 10, backgroundColor : "#6c5542"  }} >
          <Image 
            source={require('../../assets/images/Pizza-de-calabresa.png')} 
            style={{ width: 150, height: 150, }}/>
            <Text style={{ fontSize: 17,color: "white"  }}> CALABRESA </Text>
            <Text style={{color: "white"}}>Mussarela,Calabresa e Cebola.</Text>
            <Text style={{ fontSize: 19, color: "yellow" }}>GRANDE = R$:50,00</Text>
            <Text style={{ fontSize: 19,  color: "yellow"}}>MEDIA = R$:40,00</Text>
         </View>
    </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
    container: {
       display: 'flex',
       justifyContent: "center",
       alignItems: "center",
       textAlign : 'center',
       backgroundColor: '#D47D16',  
     padding: 50,      
    },
   
   cova: {
     
     padding : 50,
     height : 300,
     width : 450,

   },
   mark : {
    textAlign : 'center',
    fontSize : 60,
    fontStyle : 'italic',
    color : 'white',
  },
  input: {
    height: 40,
    width : 300,
    padding: 10,
    borderColor: 'gray',
    color : 'black',
    backgroundColor : '#B59A87',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  piss : {
     padding: 20,
     marginTop : 50,
     gap : 30,
 
  },
  mark2:{
    fontSize : 20,
    color : 'black',
  },
  small:{
    fontSize: 40,
    fontStyle : 'italic',
    backgroundColor: '#F2C111',
    padding: 3,
    borderRadius: 50,
    width : 200,
    borderColor: 'white',
    color : 'black',
    marginLeft : 20,
    textAlign: "center",
    


    
  },
  small2:{
       
  }

  
  
})



