
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.v1}>
                <Image style={styles.image1}
                    source={require('../assets/black.png')}
                />

            </View>
            <View style={styles.v2}>
                <Text style={styles.ten}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={styles.group}>
                    <Image style={styles.image2}
                        source={require('../assets/star.png')}
                    />
                    <Image style={styles.image2}
                        source={require('../assets/star.png')}
                    />
                    <Image style={styles.image2}
                        source={require('../assets/star.png')}
                    />
                    <Image style={styles.image2}
                        source={require('../assets/star.png')}
                    />
                    <Image style={styles.image2}
                        source={require('../assets/star.png')}
                    />
                    <Text style={{ left: 80 }}>(xem 828 danh gia)</Text>
                </View>
                <View style={styles.gia}>
                    <Text>1.790.000 d</Text>
                    <Text style={{ left: 80 }}><del>1.790.000</del></Text>
                </View>
                <View>
                    <Text style={styles.hoan}>o dau re hon hoan tien</Text>
                </View>



            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    v1: {
        flex: 1,

    },
    v2: {
        flex: 1,
        backgroundColor: "white",
    },
    image1: {
        flex: 1,
        width: 300,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70
    },
    ten: {
        fontSize: 15,
        marginLeft: 20
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: 20
    },
    image2: {

        justifyContent: 'flex-start',
        width: '20px',
        height: '20px',
    }, gia: {
        flexDirection: 'row',
        margin: 20

    },
    hoan: {
        margin: 20,
        color: "red"
    }
});
