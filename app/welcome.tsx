import { useRouter } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={require('../assets/images/saraya-logo.png')} style={styles.logo} resizeMode="cover" />
          <Text style={styles.brand}>SARAYA</Text>
        </View>

        <View style={styles.middle}>
          <Text style={styles.title}>Selamat datang di Saraya,{'\n'}Gloria</Text>
          <Text style={styles.desc}>
            Mari kita mulai untuk mempersiapkan konten{'\n'}pilihan sesuai dengan kebutuhan kamu!
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/survey-1')} activeOpacity={0.9}>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 95,
    paddingBottom: 120,
  },
  top: {
    alignItems: 'center',
  },
  logo: {
    width: 86,
    height: 86,
    borderRadius: 43,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  brand: {
    fontSize: 24,
    letterSpacing: 1,
    color: '#151515',
    fontFamily: 'serif',
  },
  middle: {
    width: '100%',
    alignItems: 'center',
    marginTop: -36,
  },
  title: {
    fontSize: 16,
    color: '#181818',
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  desc: {
    fontSize: 14,
    color: '#6D6D6D',
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    width: '96%',
    backgroundColor: '#C8102E',
    borderRadius: 999,
    paddingVertical: 13,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
