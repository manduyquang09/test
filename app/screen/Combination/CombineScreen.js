import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Combine.style';
import {CUP, FEMALE_ICON, LOVE, SEEKING_FRIEND} from '../../../Assets';

import {
  CustomHeader,
  SquareBox,
  BaseLayout,
  CustomButton,
} from '../../component';
const CombineScreen = () => {
  return (
    <BaseLayout>
      <CustomHeader title={'Sự kết hợp hoàn hảo'} />
      <Text style={styles.text}>
        Bạn hy vọng tìm thấy điều gì trên ứng dụng hẹn hò YLY?
      </Text>

      <View style={styles.container_box}>
        <View style={styles.row}>
          <SquareBox
            title={'Kết nối với người yêu'}
            icon={<LOVE />}
            bgIconColor={'#FF4E98'}
          />
          <SquareBox
            bgIconColor={'#23D2C3'}
            title={'Tình yêu'}
            icon={<FEMALE_ICON />}
          />
        </View>
        <View style={styles.row}>
          <SquareBox
            title={'Tìm bạn'}
            icon={<SEEKING_FRIEND />}
            bgIconColor={'#6C4DDA'}
          />
          <SquareBox
            title={'Đồng điệu tầm hồn'}
            bgIconColor={'#FFBF35'}
            icon={<CUP />}
          />
        </View>
      </View>
      <View style={styles.containar_btn}>
        <CustomButton />
      </View>
    </BaseLayout>
  );
};

export default CombineScreen;
