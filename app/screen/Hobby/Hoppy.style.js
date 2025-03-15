import { StyleSheet } from "react-native";
import { scaleHeight, scaleWidth } from "../../utils";
import { Margin } from "../../theme";
export const styles = StyleSheet.create({
    text:{
        width:scaleWidth(335),
        height:scaleHeight(38), 
        fontWeight:"400", 
        fontSize:16, 
        lineHeight:scaleHeight(18.75),
        color:"#4E4B66",
        marginVertical:scaleHeight(Margin.margin34), 
        marginLeft:scaleWidth(Margin.margin20), 
   
    },
    column:{
        flexDirection:"column", 
        gap:scaleHeight(Margin.margin16),
        marginHorizontal:scaleWidth(Margin.margin20),
      
    }, 
    row:{
        flexDirection:"row", 
     justifyContent:"space-between",
  
    },
    bottomContainer:{
        marginTop:scaleHeight(Margin.margin27)
    }
})