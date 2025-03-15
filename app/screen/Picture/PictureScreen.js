import React from 'react';
import {Text, View} from 'react-native';
import {scaleHeight} from '../../utils';
import {
  PickPictureBox,
  CustomHeader,
  CustomButton,
  BaseLayout,
} from '../../component';
import {styles} from './Picture.style';

const PictureScreen = () => {
  return (
    <BaseLayout>
      <CustomHeader title={'Hình ảnh'} />
      <Text style={styles.text}>Tải lên những bức ảnh đẹp nhất của bạn!</Text>

      <View style={styles.container_box}>
        <View style={styles.row}>
          <PickPictureBox />
          <PickPictureBox />
        </View>
        <View style={styles.row}>
          <PickPictureBox />
          <PickPictureBox />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: scaleHeight(100),
          alignSelf: 'center',
        }}>
        <CustomButton />
      </View>
    </BaseLayout>
  );
};

export default PictureScreen;
