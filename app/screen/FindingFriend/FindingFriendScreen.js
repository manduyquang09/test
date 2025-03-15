import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Margin} from '../../theme';
import {LOCKED_HEART} from '../../../Assets';
import {
  CustomButton,
  SquareBox,
  CustomHeader,
  BaseLayout,
} from '../../component';
import {moderateScale, scaleHeight} from '../../utils';

const FindingFriendScreen = () => {
  return (
    <BaseLayout>
      <CustomHeader title={'Mục đích tìm bạn'} />
      <View
        style={{
          marginTop: Margin.margin34,
          gap: moderateScale(16),
          alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row', gap: moderateScale(15)}}>
          <SquareBox
            title={'Hẹn hò'}
            icon={<LOCKED_HEART />}
            bgIconColor={'#00BCE5'}
          />
          <SquareBox
            title={'Trò chuyện'}
            icon={<LOCKED_HEART />}
            bgIconColor={'#FFBF35'}
          />
        </View>
        <SquareBox
          title={'Kết hôn'}
          icon={<LOCKED_HEART />}
          bgIconColor={'#FF4E98'}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: scaleHeight(131),
          alignSelf: 'center',
        }}>
        <CustomButton />
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({});

export default FindingFriendScreen;
