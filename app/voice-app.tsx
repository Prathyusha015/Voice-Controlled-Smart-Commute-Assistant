import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VoiceScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
            <View style={styles.content}>
                <View style={styles.voiceButton}>
                    <Text style={styles.voiceIcon}>🎙️</Text>
                </View>
                <Text style={styles.status}>Listening...</Text>
                <Text style={styles.hint}>Say "Take me home" or "Navigate to work"</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#667eea',
    },
    backButton: {
        padding: 20,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    },
    voiceButton: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    voiceIcon: {
        fontSize: 70,
    },
    status: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    hint: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 40,
    },
});
