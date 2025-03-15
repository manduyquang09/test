import React from 'react';
import {Text, View} from 'react-native';
import {CHAIR, CUP, DOCUMENT} from '../../../Assets';
import {styles} from './Marriage.style';
import {
  CustomHeader,
  BaseLayout,
  SquareBox,
  CustomButton,
} from '../../component';
const MarriageScreen = () => {
  return (
    <BaseLayout>
      <CustomHeader title={'Tính trạng hôn nhân'} />
      <Text style={styles.text}>Tình trạng hôn nhân của bạn?</Text>
      <View style={styles.container_Box}>
        <View style={styles.row}>
          <SquareBox
            icon={<CHAIR />}
            bgIconColor={'#00BCE5'}
            title={'Độc thân'}
          />
          <SquareBox
            icon={<CHAIR />}
            title={'Đã ly hôn'}
            bgIconColor={'#FFBF35'}
          />
        </View>
        <View style={styles.row}>
          <SquareBox icon={<CUP />} bgIconColor={'#466FFF'} title={'Ly thân'} />
          <SquareBox
            icon={<DOCUMENT />}
            title={'Góa chồng'}
            bgIconColor={'#FF4E98'}
          />
        </View>
      </View>
      <View style={styles.container_Btn}>
        <CustomButton />
      </View>
    </BaseLayout>
  );
};

export default MarriageScreen;
