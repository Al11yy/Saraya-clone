import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CHALLENGES = ['Manajemen Keuangan', 'Pemasaran', 'Operasional', 'Modal Usaha', 'Lainnya'];

export default function SurveyThree() {
  const router = useRouter();
  const [selected, setSelected] = useState('Manajemen Keuangan');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image source={require('../assets/images/saraya-logo.png')} style={styles.logo} resizeMode="cover" />

        <View style={styles.main}>
          <Text style={styles.question}>Apa tantangan terbesar yang Anda hadapi saat ini dalam membangun bisnis?</Text>

          <View style={styles.optionsWrap}>
            {CHALLENGES.map((item) => {
              const active = selected === item;
              return (
                <TouchableOpacity
                  key={item}
                  style={[styles.option, active && styles.optionActive]}
                  onPress={() => setSelected(item)}
                  activeOpacity={0.85}>
                  <Text style={[styles.optionText, active && styles.optionTextActive]}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)')} activeOpacity={0.9}>
          <Text style={styles.buttonText}>Lanjut</Text>
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
    paddingHorizontal: 30,
    paddingTop: 84,
    paddingBottom: 44,
  },
  logo: {
    width: 86,
    height: 86,
    borderRadius: 43,
    alignSelf: 'center',
    marginBottom: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  main: {
    flex: 1,
  },
  question: {
    fontSize: 18,
    color: '#656565',
    marginBottom: 30,
    paddingHorizontal: 0,
    lineHeight: 24,
  },
  optionsWrap: {
    gap: 16,
  },
  option: {
    height: 54,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#CDCDCD',
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.14,
    shadowRadius: 3,
    elevation: 3,
  },
  optionActive: {
    backgroundColor: '#CD3A4B',
    borderColor: '#CD3A4B',
  },
  optionText: {
    color: '#626262',
    fontSize: 16,
    fontWeight: '500',
  },
  optionTextActive: {
    color: '#fff',
  },
  button: {
    width: '96%',
    alignSelf: 'center',
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
