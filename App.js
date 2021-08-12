import React, { useRef } from 'react';
import MeasuredInputs from './components/MeasuredInputs.js'
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Alert,
  Pressable,
  Animated,
  useWindowDimensions
} from "react-native";

const createAboutAlert = () =>
  Alert.alert(
    "About",
    "Version 1.0.0\n\n Running icon by Mourad Mokrane, from the thenounproject.com",
    [
      {
        text: "OK"
      }
    ]
  )

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 50, marginBottom: 40}}>LSI Calculator</Text>
      <Image style={styles.runningLogo} source={require('./assets/running.png')} resizeMode='contain' />
      <Pressable onPress={() =>{createAboutAlert()}}>
        <Text style={{marginTop: 40, fontSize: 10}}>About</Text>
      </Pressable>
    </View>
  )
}

function QuadScreen(props) {
  const [involvedAverage, setInvolvedAverage] = React.useState(0)
  const [notInvolvedAverage, setNotInvolvedAverage] = React.useState(0)
  const [involvedLimb, setInvolvedLimb] = React.useState("Left")

  const Averages = React.useContext(AveragesContext)
  const LSI = ((involvedAverage/notInvolvedAverage) * 100).toFixed(2)

  React.useEffect(() => {
    Averages.quads.handler(LSI)
  })

  return(
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{ fontSize: 40, alignSelf: 'center' }}>
          Quads
        </Text>
        <View style={{flex: 1, flexDirection: 'row', alignContent: 'space-between', justifyContent: 'center'}}>
          <MeasuredInputs 
            limb="Left" 
            involvedLimb={involvedLimb} 
            setInvolvedLimb={setInvolvedLimb}
            setAverage = {involvedLimb == "Left" ? setInvolvedAverage : setNotInvolvedAverage}
          />
          <MeasuredInputs 
            limb="Right" 
            involvedLimb={involvedLimb} 
            setInvolvedLimb={setInvolvedLimb}
            setAverage = {involvedLimb == "Right" ? setInvolvedAverage : setNotInvolvedAverage}
          />
        </View>
      </View>
  )
}

function HamstringScreen(props) {
  const [involvedAverage, setInvolvedAverage] = React.useState(0)
  const [notInvolvedAverage, setNotInvolvedAverage] = React.useState(0)
  const [involvedLimb, setInvolvedLimb] = React.useState("Left")

  const Averages = React.useContext(AveragesContext)
  const LSI = ((involvedAverage/notInvolvedAverage) * 100).toFixed(2)

  React.useEffect(() => {
    Averages.hamstrings.handler(LSI)
  })

  return(
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{ fontSize: 40, alignSelf: 'center' }}>
        Hamstrings
      </Text>
      <View style={{flex: 1, flexDirection: 'row', alignContent: 'space-between', justifyContent: 'center'}}>
        <MeasuredInputs 
          limb="Left" 
          involvedLimb={involvedLimb} 
          setInvolvedLimb={setInvolvedLimb}
          setAverage = {involvedLimb == "Left" ? setInvolvedAverage : setNotInvolvedAverage}
        />
        <MeasuredInputs 
          limb="Right" 
          involvedLimb={involvedLimb} 
          setInvolvedLimb={setInvolvedLimb}
          setAverage = {involvedLimb == "Right" ? setInvolvedAverage : setNotInvolvedAverage}
        />
      </View>
    </View>
  )
}

function HipsScreen(props) {
  const [involvedAverage, setInvolvedAverage] = React.useState(0)
  const [notInvolvedAverage, setNotInvolvedAverage] = React.useState(0)
  const [involvedLimb, setInvolvedLimb] = React.useState("Left")

  const Averages = React.useContext(AveragesContext)
  const LSI = ((involvedAverage/notInvolvedAverage) * 100).toFixed(2)

  React.useEffect(() => {
    Averages.hips.handler(LSI)
  })

  return(
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{ fontSize: 40, alignSelf: 'center' }}>
        Hips
      </Text>
      <View style={{flex: 1, flexDirection: 'row', alignContent: 'space-between', justifyContent: 'center'}}>
        <MeasuredInputs 
          limb="Left" 
          involvedLimb={involvedLimb} 
          setInvolvedLimb={setInvolvedLimb}
          setAverage = {involvedLimb == "Left" ? setInvolvedAverage : setNotInvolvedAverage}
        />
        <MeasuredInputs 
          limb="Right" 
          involvedLimb={involvedLimb} 
          setInvolvedLimb={setInvolvedLimb}
          setAverage = {involvedLimb == "Right" ? setInvolvedAverage : setNotInvolvedAverage}
        />
      </View>
    </View>
  )
}

function FinalScreen(props) {
  const Averages = React.useContext(AveragesContext)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 50, marginBottom: 20}}>Final Averages</Text>
      <Text style={styles.finalAverageText}>
        {Averages.quads.avg == 'NaN' ? 'Quads: Calculating...' : 'Quads: ' + Averages.quads.avg + '%'}
      </Text>
      <Text style={styles.finalAverageText}>
        {Averages.hamstrings.avg == 'NaN' ? 'Hamstrings: Calculating...' : 'Hamstrings: ' + Averages.hamstrings.avg + '%'}
      </Text>
      <Text style={styles.finalAverageText}>
        {Averages.hips.avg == 'NaN' ? 'Hips: Calculating...' : 'Hips: ' + Averages.hips.avg + '%'}
      </Text>
    </View>
  )
}

const AveragesContext = React.createContext()

const App = () => {
  const [quadAverage, setQuadAverage] = React.useState(0)
  const [hamstringAverage, setHamstringAverage] = React.useState(0)
  const [hipAverage, setHipAverage] = React.useState(0)

  const screens = [
    <HomeScreen/>, 
    <QuadScreen/>, 
    <HamstringScreen/>,
    <HipsScreen/>, 
    <FinalScreen/>
  ]
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  return (
    <AveragesContext.Provider value={{
        quads:{avg:quadAverage, handler:setQuadAverage},
        hamstrings:{avg:hamstringAverage, handler:setHamstringAverage},
        hips:{avg:hipAverage, handler:setHipAverage}
      }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            //style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                }
              }
            ],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={1}
          >
            {screens.map((screen, screenIndex) => {
              return (
                <View 
                  style={{ width: windowWidth, height: 400 }}
                  key={screenIndex}
                >
                  {screen}
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {screens.map((screen, screenIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (screenIndex - 1),
                  windowWidth * screenIndex,
                  windowWidth * (screenIndex + 1)
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp"
              });
              return (
                <Animated.View
                  key={screenIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    </AveragesContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    height: 420,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  finalAverageText: {
    fontSize: 25,
    marginTop: 20
  },
  runningLogo: {
    marginTop: 10,
    height: 200,
    width: 200,
    // resizeMode: 'center'
  }
});

export default App;