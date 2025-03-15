import React from 'react';
import {View} from 'react-native';

import {
  CustomHeader,
  Space,
  CustomButton,
  CustomTab,
  BaseLayout,
} from '../../component/index';
const CheckListScreen = () => {
  return (
    <BaseLayout>
      <CustomHeader title={'Danh sách kiểm tra'} />
      <Space h={44} />
      <CustomTab />
      <CustomTab />
      <CustomTab />
      <CustomTab isCompleted={true} />
      <Space h={20} />
      <View
        style={{
          alignSelf: 'center',
        }}>
        <CustomButton />
      </View>
    </BaseLayout>
  );
};
export default CheckListScreen;
