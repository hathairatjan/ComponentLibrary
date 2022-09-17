import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, SafeAreaViewBase} from 'react-native';
import {Slider, Text, Header, Icon} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type SlidersComponentProps = {};

const Sliders: React.FunctionComponent<SlidersComponentProps> = () => {
  const [valueRed, setValueRed] = useState(0); // save red
  const [valueGreen, setValueGreen] = useState(0); // save green
  const [valueBlue, setValueBlue] = useState(0); // save blue
  const bgColor = () => {
    let r = valueRed;
    let g = valueGreen;
    let b = valueBlue;
    return `rgb(${r},${g},${b})`; // เปลี่ยนค่าสีที่เก็บมาเป็น rgb
  };

  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        centerComponent={{text: 'MixColor', style: styles.heading}}
      />
      <View style={styles.contentContainer}>
        <View style={styles.sliderContainerView}>
          <View style={styles.sliderView}>
            value={valueRed}
            onValueChange={setValueRed}
            maximumValue={255}
            minimumValue={0}
            step={1}
            allowTouchTrack trackStyle={styles.sliderTrackStyle}
            thumbStyle={styles.sliderThumbStyle}
            thumbProps=
            {{
              children: (
                <Icon
                  name="twitter"
                  type="font-awesome"
                  size={20}
                  reverse
                  containerStyle={{bottom: 20, right: 20}}
                  color={'red'}
                />
              ),
            }}
            />
          </View>
          <View style={styles.valueView}>
            {' '}
            {/* ครอบ value ให้อยู่ขวา */}
            <Text style={styles.textValue}>
              Value: 0x{valueRed.toString(16)}{' '}
              {/* แสดงตัวเลขในรูปแบบฐานสิบหก */}
            </Text>
          </View>
        </View>
        <View style={styles.sliderContainerView}>
          <View style={styles.sliderView}>
            <Slider
              value={valueGreen}
              onValueChange={setValueGreen}
              maximumValue={255}
              minimumValue={0}
              step={1}
              allowTouchTrack
              trackStyle={styles.sliderTrackStyle}
              thumbStyle={styles.sliderThumbStyle}
              thumbProps={{
                children: (
                  <Icon
                    name="twitter"
                    type="font-awesome"
                    size={20}
                    reverse
                    containerStyle={{bottom: 20, right: 20}}
                    color={'green'}
                  />
                ),
              }}
            />
          </View>
          <View style={styles.valueView}>
            <Text style={styles.textValue}>
              Value: 0x{valueGreen.toString(16)}
            </Text>
          </View>
        </View>
        <View style={styles.sliderContainerView}>
          <View style={styles.sliderView}>
            <Slider
              value={valueBlue}
              onValueChange={setValueBlue}
              maximumValue={255}
              minimumValue={0}
              step={1}
              allowTouchTrack
              trackStyle={styles.sliderTrackStyle}
              thumbStyle={styles.sliderThumbStyle}
              thumbProps={{
                children: (
                  <Icon
                    name="twitter"
                    type="font-awesome"
                    size={20}
                    reverse
                    containerStyle={{bottom: 20, right: 20}}
                    color={'blue'}
                  />
                ),
              }}
            />
          </View>
          <View style={styles.valueView}>
            <Text style={styles.textValue}>
              Value: 0x{valueBlue.toString(16)}
            </Text>
          </View>
        </View>
        {/* แสดงผลสีด้วยการดึง function bgColor มาใช้ */}
        <View
          style={{backgroundColor: bgColor(), width: '100%', height: '100%'}}
        />
      </View>
    </SafeAreaProvider>
  );
};
/*
 */
const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  sliderTrackStyle: {height: 5, backgroundColor: 'transparent'},
  sliderThumbStyle: {height: 15, width: 15, backgroundColor: 'transparent'},
  sliderContainerView: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    marginBottom: 5,
  },
  sliderView: {
    width: '80%',
    paddingRight: 15,
  },
  valueView: {
    width: '20%',
    alignItems: 'flex-end',
    textAlign: 'right',
    height: 50,
  },
  textValue: {
    fontWeight: 'bold',
    lineHeight: 40,
  },
});

export default Sliders;
