import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import RootNavigator from './app/navigation/rootNavigator';
import PictureScreen from './app/screen/Picture/PictureScreen';
import Test from './test';
import { Colors } from './app/theme';
import { CombineScreen, FindingFriendScreen, GenderScreen, MarriageScreen } from './app/screen';
import HoppyScreen from './app/screen/Hobby/HoppyScreen';
import GradientButton from './app/component/gradient';
import { BaseLayout, CustomButton, Space } from './app/component';
import BirthdayScreen from './app/screen/Birthday/BirthdayScreen';

const App = () => {
    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
    <BirthdayScreen/>
        </SafeAreaView>
    );
};

export default App;
