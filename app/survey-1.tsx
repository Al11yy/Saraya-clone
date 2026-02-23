import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SurveyOne() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image source={require('../assets/images/saraya-logo.png')} style={styles.logo} resizeMode="cover" />

        <View style={styles.main}>
          <Text style={styles.question}>Nama bisnis kamu apa?</Text>
          <TextInput
            style={styles.input}
            placeholder="Nama Bisnis"
            placeholderTextColor="#B0B0B0"
            value={businessName}
            onChangeText={setBusinessName}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/survey-2')} activeOpacity={0.9}>
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
    marginBottom: 16,
    paddingHorizontal: 6,
  },
  input: {
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CDCDCD',
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
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
