import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BaseLayout, CustomButton, CustomHeader } from '../../component';
import { styles } from './Hoppy.style';
import { scaled } from '../../utils';
import { IMAGES } from '../../../Assets';
const HoppyScreen = () => {
    return (
        <BaseLayout
        bottomLine={true}
        >
            <CustomHeader
                title={"Sở thích"}

            />
            <Text
                style={styles.text}
            >Chọn một vài sở thích của bạn để kết nối với những người dùng có điểm chung tương tự.</Text>
         <View
         style={styles.column}
         >
            <View
            style={styles.row}
            >
                <Image source={IMAGES.Movies}/>
                <Image source={IMAGES.Design}/>
                <Image source={IMAGES.Technology}/>
            </View>
            <View
            style={styles.row}
            >
                <Image source={IMAGES.Music}/>
                <Image source={IMAGES.Athlete}/>
                <Image source={IMAGES.Gaming}/>
            </View>
            <View
            style={styles.row}
            >
                <Image source={IMAGES.Swimming}/>
                <Image source={IMAGES.Shopping}/>
                <Image source={IMAGES.Cooking}/>
            </View>
            <View
            style={styles.row}
            >
                <Image source={IMAGES.Art}/>
                <Image source={IMAGES.Photograpy}/>
                <Image source={IMAGES.Book_Read}/>
            </View>
         </View>
  <View
  style={styles.bottomContainer}
  >
  <CustomButton/>
  </View>
        </BaseLayout>
    );
}


export default HoppyScreen;