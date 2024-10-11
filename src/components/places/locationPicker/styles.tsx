import { StyleSheet } from "react-native";
import { Theme } from "../../../../constants/theme";

export const styles = StyleSheet.create({
    mapContainer : {
        width : '100%',
        height : 200,
        marginVertical : 8,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Theme.primary100,
        borderRadius : 4,
        overflow : 'hidden'
    },
    actions : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        overflow : 'hidden'



    },
    image : {
        width : '100%',
        height : '100%',
        borderRadius : 4,
    }
    
})