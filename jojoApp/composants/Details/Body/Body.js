import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./style";


const Body = () => {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <View>
                    <View style={styles.titleName}>
                        <Text style={{fontSize: 13, color: '#00ae69'}}>Vegetables</Text>
                    </View>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Broccoli</Text>
                    <Text style={{fontSize: 13, color: '#000'}}>approx 100gm</Text>
                </View>
                <View style={styles.quantity}>
                    <View style={styles.quantityBtn}>
                        <Text style={{fontSize: 30, color: '#00ae69', fontWeight: 'bold'}}>-</Text>
                    </View>
                    <Text style={{fontSize: 25}}>1</Text>
                    <View style={styles.quantityBtn}>
                        <Text style={{fontSize: 30, color: '#00ae69', fontWeight: 'bold'}}>+</Text>
                    </View>
                </View>
            </View>
            <View style={styles.product}>
                <View style={styles.cardProduct}>
                    <View style={styles.card}></View>
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Agrifarm Inc</Text>
                        <Text>F5RJ+FJF, Chairtakol</Text>
                    </View>
                </View>
                <View style={styles.starGroup}>
                    <Icon name="star" size={30} color='yellow' />
                    <Text>4.9(89)</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Description</Text>
                <Text style={{fontSize: 20}}>Broccoli is anedible green plan in the cabbage family whose large flowering head, stalk and small associated leaves are <Text style={{color:'#02ab68', fontSize: 23}}>Read More</Text>
                </Text>
            </View>
            <View style={styles.btnGroup}>
                <View style={styles.btn1}>
                    <Icon name="shopping-bag" color='#02ab68' size={20} />
                </View>
                <View style={styles.btn2}>
                    <Text style={{color: '#02ab68', fontSize: 20}}>Add to cart $1.50</Text>
                </View>
            </View>
        </View>
    );
}



export default Body;