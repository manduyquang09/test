import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Camera from '../../../Assets/Img/Camera';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {scaleHeight, scaleWidth} from '../../utils/dimensions';
import {Margin} from '../../theme';
import {styles} from './Signup.style';
import {globalStyle} from '../../style/global';
import {Logintxt} from '../../utils/text';
import {route} from '../../navigation/rootNavigator';
import {
  CustomHeader,
  BaseLayout,
  CustomButton,
  CustomeCheck,
  CustomInput,
} from '../../component';
const SignupScreen = ({navigation}) => {
  const [isChecked, setChecked] = useState(false);

  const authSchema = yup.object({
    userName: yup.string().required('userName is required'),
    email: yup
      .string()
      .email('please enter a valid Email')
      .required('is required'),
    passWord: yup
      .string()
      .required('password is required')
      .min(5, 'password must be at least 5 characters'),
    resignPassword: yup
      .string()
      .oneOf([yup.ref('passWord'), null], 'Mật khẩu xác nhận không khớp')
      .required('is required'),
    phone: yup
      .string()
      .required('is required')
      .matches(/^(84|0[3|5|7|8|9])[0-9]{8}$/, 'yêu cầu nhập đúng'),
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(authSchema),
  });
  const onSubmit = data => {
    console.log(1);
    if (isChecked) {
      navigation.navigate(route.OTP, {phone: data.phone});
    } else {
    }
  };

  return (
    <BaseLayout
    bottomLine={true}
    >
      <CustomHeader title={'Đăng ký'} />
      <View style={styles.container_Form}>
        <View style={styles.container_Camera}>
          <Camera />
        </View>

        <CustomInput
          name={'userName'}
          label={'Tên đầy đủ'}
          control={control}
          hassError={errors.userName?.message}
        />
        <CustomInput
          name={'phone'}
          label={'Số điện thoại'}
          control={control}
          hassError={errors.phone?.message}
        />
        <CustomInput
          name={'email'}
          label={'Email'}
          control={control}
          hassError={errors.email?.message}
        />
        <CustomInput
          name={'passWord'}
          label={'Mật khẩu'}
          control={control}
          hassError={errors.passWord?.message}
          issPassword={true}
        />
        <CustomInput
          name={'resignPassword'}
          label={'Nhập lại mật khẩu'}
          control={control}
          hassError={errors.resignPassword?.message}
          issPassword={true}
        />

        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            marginLeft: scaleWidth(Margin.margin20),
          }}>
          <CustomeCheck isChecked={isChecked} setChecked={setChecked} />
          <Text style={[styles.text, {}]}>
            {Logintxt.aggreement}
          </Text>
        </View>
        <Text
          style={[
            styles.text,
            {
              marginBottom: scaleHeight(15),
              alignSelf: 'flex-start',
              marginLeft: scaleWidth(Margin.margin30-3),
            },
          ]}>
          {Logintxt.policy}
        </Text>

        <CustomButton
          disabled={!isChecked}
          label={'Sign up'}
          paddHorizontal={118}
          paddVertical={14}
          onPress={handleSubmit(onSubmit)}
        />
        <View style={styles.container_signintxt}>
          <Text style={styles.text}>{Logintxt.havedAccount}</Text>
          <Text
            style={[
              styles.text,
              {
                color: '#FF4E98',
                fontWeight: 'bold',
              },
            ]}>
            Sign in !
          </Text>
        </View>
      </View>
    </BaseLayout>
  );
};

export default SignupScreen;
//mmkv
