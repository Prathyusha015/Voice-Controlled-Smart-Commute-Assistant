import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RouteDisplayScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Route Details</Text>
            </View>
            <View style={styles.mapPlaceholder}>
                <Text style={styles.mapText}>Map Preview</Text>
            </View>
            <View style={styles.details}>
                <View style={styles.routeInfo}>
                    <Text style={styles.destination}>Work</Text>
                    <Text style={styles.eta}>25 mins • 12 km</Text>
                </View>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navButtonText}>Start Navigation</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        marginRight: 20,
    },
    backButtonText: {
        fontSize: 24,
        color: '#333',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    mapPlaceholder: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapText: {
        color: '#999',
        fontSize: 18,
    },
    details: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    routeInfo: {
        marginBottom: 20,
    },
    destination: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    eta: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    navButton: {
        backgroundColor: '#667eea',
        padding: 18,
        borderRadius: 15,
        alignItems: 'center',
    },
    navButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
