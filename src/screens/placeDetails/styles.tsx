import { StyleSheet } from "react-native";
import { Theme } from "../../../constants/theme";

export const styles = StyleSheet.create({
    screen : {
        alignItems : 'center'
    },
    image : {
        height : '35%',
        minHeight : 300,
        width : '100%'
    },
    locationContainer : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    addressContainer : {
        padding : 20
    },
    address : {
        color : Theme.primary500,
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 16
    }
    
})