import React, {memo} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scaledSize, scaleHeight, scaleWidth} from '../utils';
import {Colors, Margin, Padding} from '../theme';
import {globalStyle} from '../style/global';
const CustomPopup = ({isVisible, setVisible, sendOTP, phone}) => {
  const onHideModal = () => {
    setVisible(false);
  };
  return (
    <Modal visible={isVisible} transparent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            width: scaleWidth(315),
            height: scaleHeight(227),
            position: 'absolute',
            bottom: scaleHeight(291),
            borderRadius: moderateScale(15),
            backgroundColor: '#F9F9FF',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.headerTxt}>Bạn chưa nhận được mã xác minh?</Text>
          <Text
            style={[
              globalStyle.text,
              {fontWeight: '400', marginTop: scaleHeight(Margin.margin16)},
            ]}>
            Một mã xác thực đã được gửi đến
          </Text>
          <Text style={styles.phonetxt}>{phone}</Text>
          <View style={styles.container_Btn}>
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  backgroundColor: Colors.LIGHT_ORRANGE,
                },
              ]}
              onPress={() => {
                onHideModal();
              }}>
              <Text
                style={{
                  fontSize: scaledSize(16),
                  fontWeight: '700',
                  textAlign: 'center',
                  color: Colors.WHITE,
                }}>
                Hủy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                sendOTP();
              }}
              style={[
                styles.btn,
                {
                  backgroundColor: Colors.LIGHT_PURPLE,
                },
              ]}>
              <Text
                style={{
                  fontSize: scaledSize(16),
                  fontWeight: '700',
                  textAlign: 'center',
                  color: Colors.WHITE,
                }}>
                Gọi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerTxt: {
    fontWeight: '700',
    fontSize: scaledSize(16),
    lineHeight: scaleHeight(18.75),
    textAlign: 'center',
    width: scaleWidth(149),
    height: scaleHeight(38),
    color: Colors.PRIMARY,
    marginTop: scaleHeight(Margin.margin25),
  },
  phonetxt: {
    fontWeight: '700',
    fontSize: scaledSize(16),
    textAlign: 'center',
    color: 'rgba(138, 141, 159, 1)',
  },
  container_Btn: {
    marginTop: scaleHeight(Margin.margin36),
    flexDirection: 'row',
    gap: moderateScale(15),
  },
  btn: {
    paddingVertical: scaleHeight(Padding.padding10),
    paddingHorizontal: scaleWidth(Padding.padding50),
    borderRadius: moderateScale(20),
  },
});

export default CustomPopup;
