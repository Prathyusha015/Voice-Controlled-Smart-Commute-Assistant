import { useAuth } from '@/app/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  const { logout } = useAuth();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const name = await AsyncStorage.getItem('userName');
    setUserName(name || 'User');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await logout();
          router.replace('/auth/welcome');
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning, {userName}!</Text>
            <Text style={styles.subGreeting}>Where would you like to go?</Text>
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutIcon}>🚪</Text>
          </TouchableOpacity>
        </View>

        {/* Weather Card */}
        <View style={styles.weatherCard}>
          <View>
            <Text style={styles.weatherTemp}>☁️ 24°C</Text>
            <Text style={styles.weatherDesc}>Partly Cloudy</Text>
          </View>
          <View style={styles.weatherRight}>
            <Text style={styles.weatherCondition}>Good conditions</Text>
            <Text style={styles.weatherSub}>for driving</Text>
          </View>
        </View>

        {/* Voice Button */}
        <View style={styles.voiceContainer}>
          <TouchableOpacity
            style={styles.voiceButton}
            onPress={() => router.push('/voice-app')}
          >
            <View style={styles.pulseRing} />
            <Text style={styles.voiceIcon}>🎙️</Text>
          </TouchableOpacity>
          <Text style={styles.voiceHint}>Tap to speak or say "Hey Commute"</Text>
        </View>

        {/* Quick Access */}
        <View style={styles.quickAccess}>
          <Text style={styles.sectionTitle}>QUICK ACCESS</Text>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/route-display')}
          >
            <View style={styles.quickCardContent}>
              <Text style={styles.quickIcon}>🏢</Text>
              <View>
                <Text style={styles.quickTitle}>Go to Office</Text>
                <Text style={styles.quickSubtitle}>Usually 25 min</Text>
              </View>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/route-display')}
          >
            <View style={styles.quickCardContent}>
              <Text style={styles.quickIcon}>🏠</Text>
              <View>
                <Text style={styles.quickTitle}>Go Home</Text>
                <Text style={styles.quickSubtitle}>Usually 30 min</Text>
              </View>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/route-display')}
          >
            <View style={styles.quickCardContent}>
              <Text style={styles.quickIcon}>☕</Text>
              <View>
                <Text style={styles.quickTitle}>Coffee Shop</Text>
                <Text style={styles.quickSubtitle}>10 min away</Text>
              </View>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  logoutIcon: {
    fontSize: 24,
  },
  weatherCard: {
    backgroundColor: '#3b82f6',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherTemp: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  weatherDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 5,
  },
  weatherRight: {
    alignItems: 'flex-end',
  },
  weatherCondition: {
    fontSize: 14,
    color: '#fff',
  },
  weatherSub: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  voiceContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  voiceButton: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#667eea',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  pulseRing: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#667eea',
    opacity: 0.3,
  },
  voiceIcon: {
    fontSize: 60,
  },
  voiceHint: {
    marginTop: 15,
    fontSize: 14,
    color: '#666',
  },
  quickAccess: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#999',
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  quickCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quickCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  quickIcon: {
    fontSize: 28,
  },
  quickTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  quickSubtitle: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  arrow: {
    fontSize: 20,
    color: '#ccc',
  },
});


