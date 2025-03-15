import React from 'react';
import {Image, Text, View} from 'react-native';
import {scaleHeight} from '../../utils/dimensions';
import {globalStyle} from '../../style/global';
import {styles} from './Success.style';
import {route} from '../../navigation/rootNavigator';
import BaseLayout from '../../component/BaseLayout/BaseLayout';
import {IMAGES} from '../../../Assets';
import CustomButton from '../../component/customButton';
import Space from '../../component/Space';
const SuccessScreen = ({navigation}) => {
  const onMoveSignup = () => {
    navigation.navigate(route.SIGNUP);
  };
  return (
    <BaseLayout>
      <Image source={IMAGES.greenCheck} style={styles.container_Img} />
      <View style={styles.container_Form}>
        <Text style={styles.successTxt}>Thành công</Text>
        <Text
          style={[
            globalStyle.text,
            {
              textAlign: 'center',
              marginTop: scaleHeight(20),
            },
          ]}>
          Tài khoản của bạn đã được tạo
        </Text>
        <Text
          style={[
            globalStyle.text,
            {
              textAlign: 'center',
              marginTop: scaleHeight(4),
            },
          ]}>
          thành công.
        </Text>
        <Text
          style={[
            globalStyle.text,
            {
              textAlign: 'center',
              marginTop: scaleHeight(10),
            },
          ]}>
          Vui lòng đăng nhập để sử dụng
        </Text>
        <Text
          style={[
            {
              textAlign: 'center',
            },
            globalStyle.text,
          ]}>
          tài khoản của bạn và tận hưởng.
        </Text>
        <Space h={24} />
        <CustomButton
          label={'Đưa tôi đến màn đăng nhập'}
          onPress={()=> onMoveSignup()}
          paddVertical={14}
          paddHorizontal={47}
          isY={true}
        />
      </View>
      <View style={globalStyle.bottom_Line}></View>
    </BaseLayout>
  );
};

export default SuccessScreen;
