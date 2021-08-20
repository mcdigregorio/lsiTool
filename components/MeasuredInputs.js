import React from "react"
import { 
  StyleSheet,
  Text,
  TextInput,
  View 
} from "react-native"
import Button from './Button.js'

export default function MeasuredInputs(props) {
  const [number1, onChangeNumber1] = React.useState(null)
  const [number2, onChangeNumber2] = React.useState(null)
  const [number3, onChangeNumber3] = React.useState(null)

  const avg = ((parseFloat(number1) + parseFloat(number2) + parseFloat(number3))/3).toFixed(2)
  // const setAvg = () => {
  //   props.setAverage(avg)
  // }

  React.useEffect(() => {
    props.setAverage(avg)
  })
  //props.limb == props.involvedLimb ? props.setInvolvedAverage(avg) : props.setNotInvolvedAverage(avg)


  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
      <Text style={styles.title}>{props.limb}</Text>
      <Button 
        limb={props.limb} 
        involvedLimb={props.involvedLimb} 
        setInvolvedLimb={props.setInvolvedLimb}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="50"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="50"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="50"
        keyboardType="decimal-pad"
      />
      <Text style={styles.average}>
        {avg == 'NaN' ? 'Calculating...' : avg + "  lbf"}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    alignSelf: 'stretch',
    height: 40,
    marginVertical: 12,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18
  },
  title: {
    fontSize: 30  ,
    marginVertical: 10
  },
  average: {
    fontSize: 22,
    marginVertical: 10
  }
})