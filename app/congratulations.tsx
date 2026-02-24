import { router } from 'expo-router'
import React, { useRef, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  Dimensions,
  Platform,
  Image,
} from 'react-native'

const { width, height } = Dimensions.get('window')

export default function Congrats() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const slideAnim = useRef(new Animated.Value(30)).current
  const scaleAnim = useRef(new Animated.Value(0.8)).current

  useEffect(() => {
    Animated.sequence([
      Animated.delay(100),
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.spring(scaleAnim, { toValue: 1, friction: 5, tension: 60, useNativeDriver: true }),
      ]),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#C8102E" />

      {/* Background merah atas */}
      <View style={styles.backgroundTop} />
      <View style={styles.backgroundCurve} />

      {/* Ilustrasi */}
      <Animated.View
        style={[
          styles.illustrationWrapper,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Image
          source={require('@/assets/images/img-congrats-sec.png')}
          style={styles.illustrationImage}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Konten bawah */}
      <Animated.View
        style={[
          styles.contentSection,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Text style={styles.congratsTitle}>Congratulations!</Text>
        <Text style={styles.congratsDesc}>
          Terima kasih sudah mengisi survei.{'\n'}
          Mulai belajar dan raih hadiah untuk berkembang{'\n'}
          lebih cepat!
        </Text>
      </Animated.View>

      {/* Bottom CTA */}
      <Animated.View style={[styles.bottomSection, { opacity: fadeAnim }]}>
        <Text style={styles.readyText}>Rekomendasi kelas untuk kamu sudah siap</Text>
        <TouchableOpacity
          style={styles.ctaButton}
          activeOpacity={0.85}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.ctaText}>Belajar Sekarang!</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  // Background
  backgroundTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.28,
    backgroundColor: '#C8102E',
  },
  backgroundCurve: {
    position: 'absolute',
    top: height * 0.22,
    left: -width * 0.1,
    width: width * 1.2,
    height: height * 0.1,
    backgroundColor: '#C8102E',
    borderBottomLeftRadius: width,
    borderBottomRightRadius: width,
  },

  // Illustration
  illustrationWrapper: {
    marginTop: height * 0.03,
    width: width * 0.85,
    height: height * 0.36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
  },

  // Content
  contentSection: {
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: height * 0.01,
  },
  congratsTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontSize: 28,
    fontWeight: '700',
    color: '#C8102E',
    marginBottom: 16,
  },
  congratsDesc: {
    fontSize: 15,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 24,
  },

  // Bottom
  bottomSection: {
    position: 'absolute',
    bottom: height * 0.05,
    left: 28,
    right: 28,
    alignItems: 'center',
  },
  readyText: {
    fontSize: 13,
    color: '#888888',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#C8102E',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#C8102E',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
})