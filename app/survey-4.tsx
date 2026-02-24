import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type TopicItem = {
  id: string;
  label: string;
  image: ImageSourcePropType;
};

const TOPICS: TopicItem[] = [
  { id: 'kelola-keuangan', label: 'Kelola Keuangan', image: require('../assets/images/img-survey4/undraw_books_re_8gea 1.png') },
  { id: 'akses-modal', label: 'Akses Modal', image: require('../assets/images/img-survey4/undraw_pitching_re_fpgk 1.png') },
  { id: 'investasi', label: 'Investasi', image: require('../assets/images/img-survey4/undraw_investment_re_rpk5 1.png') },
  { id: 'tabungan', label: 'Tabungan', image: require('../assets/images/img-survey4/undraw_vault_re_s4my 1.png') },
  { id: 'arus-kas', label: 'Kelola Arus Kas', image: require('../assets/images/img-survey4/undraw_receipt_re_fre3 (1) 1.png') },
  { id: 'pajak', label: 'Perencanaan Pajak', image: require('../assets/images/img-survey4/undraw_progress_data_re_rv4p 1.png') },
  { id: 'asuransi', label: 'Asuransi Bisnis', image: require('../assets/images/img-survey4/undraw_security_on_re_e491 1.png') },
  { id: 'anggaran', label: 'Menyusun anggaran Bisnis', image: require('../assets/images/img-survey4/undraw_predictive_analytics_re_wxt8 1.png') },
  { id: 'ekspansi', label: 'Perencanaan Ekspansi', image: require('../assets/images/img-survey4/undraw_growth_chart_r99m 1.png') },
  { id: 'konten', label: 'Pemasaran Konten', image: require('../assets/images/img-survey4/undraw_social_media_re_sulg 1.png') },
  { id: 'kol', label: 'Strategi KOL', image: require('../assets/images/img-survey4/undraw_mobile_marketing_re_p77p 2.png') },
  { id: 'digital', label: 'Pemasaran Digital', image: require('../assets/images/img-survey4/undraw_marketing_re_7f1g 2.png') },
];

export default function SurveyFour() {
  const router = useRouter();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (id: string) => {
    setSelectedTopics((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, id];
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={require('../assets/images/saraya-logo.png')} style={styles.logo} resizeMode="cover" />

        <Text style={styles.title}>Apa jenis topik edukasi yang paling Anda butuhkan?</Text>
        <Text style={styles.subtitle}>Pilih 3</Text>

        <View style={styles.grid}>
          {TOPICS.map((topic) => {
            const isSelected = selectedTopics.includes(topic.id);
            return (
              <TouchableOpacity
                key={topic.id}
                style={[styles.card, isSelected && styles.cardSelected]}
                onPress={() => toggleTopic(topic.id)}
                activeOpacity={0.9}>
                <Image source={topic.image} style={styles.cardImage} resizeMode="contain" />
                <Text style={styles.cardLabel}>{topic.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, selectedTopics.length !== 3 && styles.buttonDisabled]}
          disabled={selectedTopics.length !== 3}
          onPress={() => router.push('/survey-5')}
          activeOpacity={0.9}>
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
    paddingHorizontal: 24,
    paddingTop: 84,
    paddingBottom: 110,
  },
  logo: {
    width: 86,
    height: 86,
    borderRadius: 43,
    alignSelf: 'center',
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    color: '#686868',
    fontSize: 38 / 2,
    lineHeight: 56 / 2,
    marginBottom: 14,
  },
  subtitle: {
    color: '#6C6C6C',
    fontSize: 16,
    marginBottom: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },
  card: {
    width: '48%',
    minHeight: 118,
    borderRadius: 18,
    backgroundColor: '#C8102E',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#C8102E',
  },
  cardSelected: {
    backgroundColor: '#c8102fd5',
    borderColor: '#c8102fd5',
  },
  cardImage: {
    width: 84,
    height: 56,
  },
  cardLabel: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: '#ECECEC',
    borderTopWidth: 1,
    borderTopColor: '#D4D4D4',
  },
  button: {
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
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18 / 1.2,
    fontWeight: '500',
  },
});

