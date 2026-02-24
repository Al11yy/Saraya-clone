import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LEVELS = [
  { id: 'basic', label: 'Basic: Baru memulai' },
  { id: 'menengah', label: 'Menengah: Paham dasar keuangan' },
  { id: 'mahir', label: 'Mahir: Paham perencanaan dan analisis' },
];

export default function SurveyFive() {
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState('basic');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image source={require('../assets/images/saraya-logo.png')} style={styles.logo} resizeMode="cover" />

        <Text style={styles.title}>Kemampuan Finansial Anda saat ini (pilih yang paling sesuai):</Text>

        <View style={styles.optionsWrap}>
          {LEVELS.map((level) => {
            const active = selectedLevel === level.id;
            return (
              <TouchableOpacity
                key={level.id}
                style={[styles.option, active && styles.optionActive]}
                onPress={() => setSelectedLevel(level.id)}
                activeOpacity={0.85}>
                <Text style={[styles.optionText, active && styles.optionTextActive]}>{level.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/congratulations')} activeOpacity={0.9}>
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
    paddingHorizontal: 24,
    paddingTop: 84,
    paddingBottom: 44,
  },
  logo: {
    width: 86,
    height: 86,
    borderRadius: 43,
    alignSelf: 'center',
    marginBottom: 72,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    color: '#656565',
    fontSize: 38 / 2,
    lineHeight: 56 / 2,
    marginBottom: 110,
    paddingHorizontal: 8,
  },
  optionsWrap: {
    gap: 14,
  },
  option: {
    minHeight: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.14,
    shadowRadius: 4,
    elevation: 4,
  },
  optionActive: {
    backgroundColor: '#C8102E',
    borderColor: '#C8102E',
  },
  optionText: {
    color: '#6B6B6B',
    fontSize: 30 / 2,
    textAlign: 'center',
  },
  optionTextActive: {
    color: '#fff',
  },
  button: {
    marginTop: 'auto',
    backgroundColor: '#C8102E',
    borderRadius: 999,
    paddingVertical: 14,
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

