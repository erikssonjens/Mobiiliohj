import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

        marginLeft: 20,
        marginRight: 20,
        marginTop:70,
        height: "100%",
      },
      label: {
        marginTop: 10,
        marginBottom: 5,
        fontWeight: 'bold'
      },
      center: {
        textAlign: "center",
      },
      calculation: {
        paddingBottom: 10,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 30,
        color: "green",
        textShadowColor:'#737373',
        textShadowOffset:{width: 4, height: 4},
        textShadowRadius:15,
      },
      button: {
        marginTop: 15,
        backgroundColor: '#00aeef',
        borderRadius: 20       
     },
      header:{
        textAlign: "center",
        color: "#00aeef",
        fontSize: 15,
        fontWeight: "bold",
        fontSize: 35
      },
      buttonContainer: {
        flexDirection: "row",
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        marginBottom: 10,
        alignItems: 'center',
    },
    labelBut: {
        marginLeft: 10,
        
    },
    circle: {
        height: 35,
        width: 35,
        borderRadius: 20,
        transform: [{ rotate: '45deg'}],
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#000',
        borderLeftColor: '#000',
        borderRightColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    checkCircle: {
        height: 35,
        width: 35,
        backgroundColor: '#00aeef',
        borderRadius: 20,
    },
    
     
})
