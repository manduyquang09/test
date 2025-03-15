import React, { useRef, useState } from 'react';
import { StyleSheet, View, FlatList, Text, StatusBar, Image, Dimensions, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import data from "../../../data.json";

const HomeScreen = ({ navigation }) => {
  const limit = 5;
  const [Data, setData] = useState(data.slice(0, limit));
  const isStop = useRef(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [refreshing, setRefreshing] = useState(false);

  const getData = async (type = "refresh" | "loadmore") => {
    if (isLoading) return;

    if (type === "refresh") {
      setRefreshing(true);
      setData([]);
      isStop.current = false;
    }

    try {
      setIsLoading(true); 

      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (type === "refresh") {
        setData(data.slice(0, limit));
      }

      if (type === "loadmore") {
        const newData = data.slice(Data.length, Data.length + limit);

        if (newData.length > 0) {
          setData((prev) => [...prev, ...newData]);
        } else {
          isStop.current = true;
        }
      }

      setIsLoading(false);  
    } catch (err) {
      setIsLoading(false);  
    } finally {
      setRefreshing(false);  
    }
  };

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 5,
          height: Dimensions.get("window").height / 5.5,
          elevation: 1,
          borderRightWidth: 1,
        }}
        onPress={()=>{
          navigation.navigate("detail",{foot:item})
        }}
      >
        <View style={{ width: "50%", height: "100%", backgroundColor: "blue" }}>
          <Image
            source={{ uri: item.img }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {item.footName + "\t" + item.id}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="clip" style={{ marginBottom: 5 }}>
            {item.des}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "flex-start", width: "100%", justifyContent: "space-between" }}>
            {item.color.length > 0 && item.color.map((color, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: color,
                  width: 15,
                  height: 15,
                  borderWidth: 1,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              />
            ))}
            <View style={{ flex: 1 }}></View>
            <Text style={{ marginTop: 0, marginLeft: 5, alignSelf: "flex-end", fontWeight: "bold", fontSize: 15 }}>
              {item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#fff'} translucent barStyle={'dark-content'} />
      <View style={{ height: StatusBar.currentHeight + 10 }}></View>
      
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 3 }}></View>}
        data={Data}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (Data.length === data.length && !isStop.current) {  //
            getData("refresh");
          } else if (Data.length < data.length) {
            getData("loadmore");
          }
        }}
        onEndReachedThreshold={1}
        renderItem={({ item }) => <RenderItem item={item} />}
        ListFooterComponent={() => {
          return isLoading ? (
            <View style={{ marginVertical: 10 }}>
              <ActivityIndicator size="small" color="#0000ff" />
            </View>
          ) : null;
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() =>  getData("refresh")}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
