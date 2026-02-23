import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={require('../assets/images/saraya-logo.png')} style={styles.logo} resizeMode="cover" />

        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Masuk ke akun Anda</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.passwordWrap}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPass}
          />
          <TouchableOpacity onPress={() => setShowPass((prev) => !prev)} style={styles.eyeBtn} activeOpacity={0.7}>
            <Feather name={showPass ? 'eye-off' : 'eye'} size={22} color="#C3C3C3" />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.helperText}>Ingat saya</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.linkText}>Lupa password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/welcome')} activeOpacity={0.9}>
          <Text style={styles.primaryButtonText}>Masuk</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>atau</Text>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.9}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png',
            }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Masuk dengan Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} activeOpacity={0.9}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png',
            }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Masuk dengan Facebook</Text>
        </TouchableOpacity>

        <View style={styles.bottomRow}>
          <Text style={styles.helperText}>Belum punya akun? </Text>
          <TouchableOpacity onPress={() => router.push('/sign-up')} activeOpacity={0.7}>
            <Text style={styles.linkText}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  container: {
    paddingHorizontal: 28,
    paddingTop: 84,
    paddingBottom: 44,
    alignItems: 'center',
  },
  logo: {
    width: 86,
    height: 86,
    borderRadius: 43,
    marginBottom: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    color: '#6E6E73',
    marginBottom: 14,
    fontWeight: '400',
  },
  subtitle: {
    width: '100%',
    fontSize: 16,
    color: '#686868',
    marginBottom: 18,
  },
  input: {
    width: '100%',
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CDCDCD',
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  passwordWrap: {
    width: '100%',
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CDCDCD',
    backgroundColor: '#EFEFEF',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  eyeBtn: {
    paddingHorizontal: 14,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 34,
    paddingHorizontal: 2,
  },
  helperText: {
    color: '#6C6C6C',
    fontSize: 13,
  },
  linkText: {
    color: '#2258B6',
    fontSize: 13,
    fontWeight: '600',
  },
  primaryButton: {
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
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  orText: {
    marginVertical: 18,
    color: '#6F6F6F',
    fontSize: 16,
  },
  socialButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CDCDCD',
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  socialButtonText: {
    color: '#666',
    fontSize: 16,
  },
  socialIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  bottomRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
