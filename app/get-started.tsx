import { useRouter } from 'expo-router';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GetStarted() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#8A0303" />

      <View style={styles.topShape} />

      <View style={styles.content}>
        <Image source={require('../assets/images/saraya-logo.png')} style={styles.logo} resizeMode="cover" />
        <Text style={styles.brand}>SARAYA</Text>
        <Text style={styles.tagline}>Master Finance, Earn Rewards,{'\n'}Grow Faster!</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/sign-in')} activeOpacity={0.9}>
          <Text style={styles.buttonText}>Mulai Sekarang!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  topShape: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '43%',
    backgroundColor: '#C60C24',
    borderBottomLeftRadius: 170,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 26,
    paddingTop: '60%',
  },
  logo: {
    width: 124,
    height: 124,
    borderRadius: 62,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.28,
    shadowRadius: 7,
    elevation: 8,
  },
  brand: {
    fontSize: 24,
    letterSpacing: 1,
    color: '#151515',
    fontFamily: 'serif',
    marginBottom: 28,
  },
  tagline: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#1f1f1f',
    marginBottom: 82,
  },
  button: {
    width: '88%',
    backgroundColor: '#C8102E',
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 4,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
