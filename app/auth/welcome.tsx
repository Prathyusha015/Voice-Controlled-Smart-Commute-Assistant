import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>

        {/* TOP CONTENT */}
        <View style={styles.topSection}>

          {/* IMAGE */}
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: 'https://picsum.photos/seed/commute/600/800' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          {/* TITLE + ICON */}
          <View style={styles.textBlock}>
            <View style={styles.titleRow}>
              <View style={styles.smallIcon}>
                <Feather name="mic" size={16} color="#fff" />
              </View>
              <Text style={styles.title}>Commutely</Text>
            </View>

            <Text style={styles.subtitle}>
              Your voice-powered smart commute assistant
            </Text>
          </View>
        </View>

        {/* BUTTONS */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/auth/login')}
          >
            <Text style={styles.primaryButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/auth/signup')}
          >
            <Text style={styles.secondaryButtonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.guestButton}>
            <Text style={styles.guestButtonText}>Continue as guest</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  topSection: {
    flex: 1,
    justifyContent: 'center',
  },

  imageWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 30,
  },

  image: {
    width: '100%',
    height: 360,
  },

  textBlock: {
    alignItems: 'center',
    marginBottom: 20,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },

  smallIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#35C2C1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E232C',
  },

  subtitle: {
    fontSize: 16,
    color: '#8391A1',
    textAlign: 'center',
    paddingHorizontal: 10,
  },

  buttonContainer: {
    marginTop: 10,
  },

  primaryButton: {
    backgroundColor: '#1E232C',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 12,
  },

  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  secondaryButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1E232C',
    marginBottom: 10,
  },

  secondaryButtonText: {
    color: '#1E232C',
    fontSize: 16,
    fontWeight: '600',
  },

  guestButton: {
    alignItems: 'center',
    marginTop: 6,
  },

  guestButtonText: {
    color: '#35C2C1',
    fontSize: 14,
    fontWeight: '600',
  },
});
