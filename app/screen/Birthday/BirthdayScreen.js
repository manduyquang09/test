import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BaseLayout, CustomButton, CustomHeader, Space } from '../../component';
import { styles } from './birthday.style';
const BirthdayScreen = () => {
    return (
      <BaseLayout
      bottomLine={true}>
        <CustomHeader
        title={"Ngày sinh nhật"}
        />
        <Text
        style={styles.text}
        >Bạn sinh vào ngày nào?</Text>
        <View
        style={styles.container_Card}
        >
            <View
            style={[styles.row]}
            >
                <Text
                style={styles.dateTxt}
                >7</Text>
                    <Text
                style={styles.dateTxt}
                >Tháng 10</Text>
                   <Text
                style={styles.dateTxt}
                >2021</Text>
            </View>
            <View
            style={[styles.row]}
            >
                <Text
                style={styles.dateTxt}
                >7</Text>
                    <Text
                style={styles.dateTxt}
                >Tháng 10</Text>
                   <Text
                style={styles.dateTxt}
                >2021</Text>
            </View>
            <View
            style={[styles.row,{borderBottomWidth:0}]}
            >
                <Text
                style={styles.dateTxt}
                >7</Text>
                    <Text
                style={styles.dateTxt}
                >Tháng 10</Text>
                   <Text
                style={styles.dateTxt}
                >2021</Text>
            </View>
        </View>
        <Space
        h={35}
        />
        <CustomButton/>
      </BaseLayout>
    );
}
/**
 * 
 */

export default BirthdayScreen;
