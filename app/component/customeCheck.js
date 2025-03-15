import React, {memo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {LinearGradient as Linear} from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {scaleWidth,scaled} from '../utils';
import { Colors } from '../theme';
const CustomeCheck = ({isChecked, setChecked, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
      }}
      onPress={() => setChecked(!isChecked)}>
      <Linear
        colors={[Colors.LIGHT_PINK, Colors.PINK]}
        style={{
          ...scaled(16),
          marginRight: scaleWidth(4),
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        {isChecked && <Icon name="check" size={12} color={Colors.WHITE} />}
      </Linear>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomeCheck;
