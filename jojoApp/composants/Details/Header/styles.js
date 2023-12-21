import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        rowGap: 20,
        alignItems: 'center',
        padding: 15
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconGroup: {
        flexDirection: 'row',
        columnGap: 30
    },
    card: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        backgroundColor: '#e6f1ed',
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default styles;