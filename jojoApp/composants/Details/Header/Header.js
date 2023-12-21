import { View, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='chevron-left' size={30} />
                <View style={styles.iconGroup}>
                    <Icon name='upload' size={30} />
                    <Icon name='info-circle' size={30} />
                </View>
            </View>
            <View style={styles.card}>
                <Image source={require('./../../../ressources/2.png')} style={{width: 200, height: 200}} />
            </View>
        </View>
    );
}



export default Header;