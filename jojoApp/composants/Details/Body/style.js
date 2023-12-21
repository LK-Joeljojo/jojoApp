import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        justifyContent: 'space-between',
        rowGap: 30,
        padding: 15
    },
    title: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleName: {
        width: 'fit-content', 
        padding: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#00ae69',
    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    },
    quantityBtn: {
        width: 40,
        height: 40, 
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#00ae69',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    product: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderStyle: 'solid',
        padding: 10
    },
    cardProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20
    },
    card: {
        width: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#e6f1ed'
    }, 
    btnGroup: {
        flexDirection: 'row',
        columnGap: 20,
        justifyContent: 'center'
    }, 
    btn1:{
        width: 70,
        padding: 10,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn2:{
        width: 280,
        padding: 10,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#02ab68',
        alignItems: 'center',
        justifyContent: 'center'
    },
    starGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    }
});
export default styles;