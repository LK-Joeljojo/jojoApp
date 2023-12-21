import { View, Text, StyleSheet } from "react-native";
import Header from "../composants/Details/Header/Header";
import Body from "../composants/Details/Body/Body";


const DetailScreen = () => {
    return(
        <View style={styles.container}>
            <Header />
            <Body />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        height: '100vh',
        justifyContent: 'space-evenly',
        // rowGap: 50
    }
});

export default DetailScreen;