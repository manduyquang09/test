import React, { useState, useCallback, useRef, useEffect, useMemo, memo } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {

    const [value, setValue] = useState(1)
    const result = useMemo(() => {
        console.log("test")
        return value * 10
    }, [value])
    const onChangevalue = ()=>{
        setValue(result)
    }
    return (
        <View>
            <Text>{value}</Text>
            <TouchableOpacity
                onPress={() => onChangevalue()}
            ><Text>click here</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default Child
