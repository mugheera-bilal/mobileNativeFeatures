import { StyleSheet } from "react-native";
import { Theme } from "../../../../constants/theme";

export const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        alignItems : 'flex-start',
        borderRadius : 6,
        marginVertical : 12,
        backgroundColor : Theme.primary500,
        elevation : 2
    },
    pressed : {
        opacity : 0.9
    },
    image : {
        flex : 1,
        borderBottomLeftRadius : 4,
        borderTopLeftRadius : 4,
        height : '100%'

    },
    info : {
        flex : 2,
        padding : 12
    },
    title : {
        fontWeight : 'bold',
        fontSize : 18,
        color : Theme.gray700
    } ,
    address : {
        fontSize : 18,
        color : Theme.gray700
    }
  
    
})