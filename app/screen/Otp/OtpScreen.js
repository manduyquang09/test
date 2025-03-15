import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import {globalStyle} from '../../style/global';
import {styles} from './Otp.style';
import {Otptxt} from '../../utils/text';
import {route as Route} from '../../navigation/rootNavigator';
import {scaleHeight} from '../../utils';
import {
  CustomHeader,
  CustomPopup,
  BaseLayout,
  CustomButton,
} from '../../component';
const OtpScreen = ({navigation, route}) => {
  const {phone} = route.params;
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [otp, setOTP] = useState('');
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);
  const onResend = () => {
    // count = 0

    if (seconds === 0 && minutes === 0) {
      setVisible(true);
    } else {
      console.log('success');
    }
  };
  const onSendOTP = () => {
    setSeconds(20);
    setMinutes(1);
    setVisible(false);
  };
  const onVerify = () => {
    if (Number(otp) === 5555) {
      navigation.navigate(Route.SUCCESS);
    }
  };
  return (
    <BaseLayout>
      <CustomHeader title={'Xác nhận'} />
      <Text style={styles.confirmTxt}>Xác minh OTP</Text>
      <View
        style={{
          position: 'absolute',
          bottom: scaleHeight(577),
          width: '100%',
        }}>
        <Text
          style={[globalStyle.text, {fontWeight: '400', textAlign: 'center'}]}>
          {Otptxt.receivedCode}
        </Text>
        <Text
          style={[globalStyle.text, {fontWeight: '700', textAlign: 'center'}]}>
          {phone}
        </Text>
      </View>

      {/* box */}
      <OtpInput
        numberOfDigits={4}
        type="numeric"
        autoFocus={true}
        onTextChange={text => setOTP(text)}
        theme={{
          containerStyle: styles.otp_Box,
          pinCodeContainerStyle: styles.boxTxt,
        }}
      />
      {/*  */}
      <Text style={styles.timeTxt}>
        Còn {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds} giây
      </Text>
      <View></View>
      <View style={styles.resendBox}>
        <Text style={globalStyle.text}>{Otptxt.notReceived}</Text>
        <TouchableOpacity 
        disabled ={seconds > 0 || minutes > 0 ?true :false}
        style={styles.resendBtn} onPress={() => onResend()}>
          <Text
            style={[
              globalStyle.text,
              {
                color: seconds > 0 || minutes > 0 ? 'black' : '#FF4E98',
                fontWeight: '700',
              },
            ]}>
            Gửi Lại
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: scaleHeight(343),
          alignSelf: 'center',
        }}>
        <CustomButton
          label={'Xác minh ngay'}
          onPress={()=>onVerify()}
          paddHorizontal={94}
          paddVertical={12}
        />
      </View>
      <CustomPopup
        isVisible={isVisible}
        setVisible={setVisible}
        sendOTP={onSendOTP}
        phone={phone}
      />
    </BaseLayout>
  );
};

export default OtpScreen;
