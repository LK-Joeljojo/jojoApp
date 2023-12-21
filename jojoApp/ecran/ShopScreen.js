import { StyleSheet, View } from "react-native";
import Header from "../composants/using/Header";
import Categorie from "../composants/using/Categorie";
import Deals from "../composants/using/Deals";
import Item from "../composants/using/Item";
import Footer from "../composants/using/Footer";

const ShopScreen = () => {
    return(
        <View style={styles.container}>
            <Header />
            <Categorie />
            <Deals />
            <Item />
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        flexDirection: 'column',
    }
});

export default ShopScreen;