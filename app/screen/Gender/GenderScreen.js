import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Gender.style';
import {FEMALE_ICON, MALE_ICON} from '../../../Assets';
import {
  CustomHeader,
  SquareBox,
  BaseLayout,
  CustomButton,
} from '../../component';
const GenderScreen = () => {
  return (
    <BaseLayout>
      <CustomHeader title={'Giới tính'} />
      <Text style={styles.text}>Giới tính của bạn là?</Text>
      <View style={styles.container_Box}>
        <SquareBox
          title={'Nữ'}
          bgIconColor={'#FF4E98'}
          icon={<FEMALE_ICON />}
        />
        <SquareBox title={'Nam'} bgIconColor={'#23D2C3'} icon={<MALE_ICON />} />
      </View>

      <View style={styles.container_Btn}>
        <CustomButton />
      </View>
    </BaseLayout>
  );
};

export default GenderScreen;
