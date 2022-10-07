import { Text, TextInput, View, Alert } from 'react-native';
import {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './components/Styles';
import Radiobutton from './components/Radiobutton';
import { Button } from 'react-native-elements';

export default function App() {
  const [weight,setWeight] = useState(0);
  const [bottle,setBottle] = useState(0);
  const [hour,setHour] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState("Set");
  const [openBT, setOpenforBottles] = useState(false);
  const [openHR, setOpenforHours] = useState(false);
  const [color, setColor] = useState('red');



  const counter_list = Array();
  for(let i=1;i<16;i++){
    counter_list.push({label:i.toString(),value:i})
  }

  const genders = [{label: 'Male',value: 'male'},
                   {label: 'Female',value: 'female'},]

  function bottlesToLit(){return bottle * 0.33}
  function grams(){return bottlesToLit() * 8 * 4.5}
  function burning(){return weight / 10}
  function gramsLeft(){return grams() - (burning() * hour)}
  function forMale() {return (gramsLeft() / (weight * 0.7)).toFixed(2)}
  function forFemale() {return (gramsLeft() / (weight * 0.6)).toFixed(2)}


  const weightAlert = () =>
    Alert.alert(
      "Weight cannot be empty.",
      " ",
      [
        { text: "OK",}
      ]
    );
  
  useEffect(()=>{
    if(result >= 0.5 && result < 1){setColor('#fff3d1')}
    if(result < 0.5){setColor('#e4fad4')}
    if(result > 1){setColor('#ffd9d9')}
  },[result])

  function calculate(){

      let mes = "Set";
      if(weight == 0) {
        mes +=" weight";
        weightAlert();
      };
      if(bottle == 0) {mes +=" bottles"};
      if(hour == 0) {mes +=" time"};
      setMessage(mes);

      if(mes == "Set"){
        if(gender == 'male'){setResult(forMale())}
        else{setResult(forFemale())}
    }
  }

  function resultcolor(){
    if(result>= 0.5 && result <1){
      return{
        color: '#fce703'
      }
    }
    if(result>=1){
      return{
        color: 'red'
      }
    }
  }

  return (
    
      <View style={styles.container}>
      <Text style={styles.header}>Alcometer</Text>
      <Text style={styles.label}>Weight</Text>
      <TextInput
       returnKeyType='done'
        keyboardType='number-pad'
        placeholder='Enter your weight'
        onChangeText={text => setWeight(text)}
      />
      <Text style={styles.label}>Bottles</Text>
      <DropDownPicker
        zIndex={2000}
        open={openBT}
        items={counter_list}
        placeholder={bottle?(bottle.toString() + (bottle == 1 ? ' bottle ':' bottles ')):("No bottles selected")}
        setOpen={setOpenforBottles}
        setValue={setBottle}
        autoScroll={true}
      />
      <Text style={styles.label}>Time</Text>
      <DropDownPicker
        zIndex={1000}
        id="second"
        style={styles.bottomScroll}
        open={openHR}
        items={counter_list}
        placeholder={hour?(hour.toString() + (hour == 1 ? ' hour ':' hours ')):("No hours selected")}
        setOpen={setOpenforHours}
        setValue={setHour}
        autoScroll={true}
      />
      <Text style={styles.label}>Gender</Text>
      <Radiobutton style={styles.label} options={genders} onPress={(value) => {setGender(value)}} />
      <Text style={[styles.calculation,resultcolor()]}>{message == "Set"?(result>0?result:"No alcohol"):message}</Text>
      <Button onPress={calculate} buttonStyle={styles.button} title="Calculate"></Button>
      </View>
    
  );
}
