import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { Button } from 'react-native';


const DashboardScreen = () => {
  // Data grafik untuk dijadikan contoh
  const dataGrafik = {
    labels: ['Jan', 'Mar'],
    datasets: [
      {
        data: [20, 45, 28],
      },
    ],
  };

  
  const berita = [
    {
      title: 'Lorem ipsum dolor sit amet',
      content: 'Consectetur adipiscing elit. ...',
      image: 'https://example.com/image1.jpg',
      link: 'https://example.com/article/1',
    },
    {
      title: 'Pellentesque habitant morbi tristique senectus',
      content: 'Et netus et malesuada fames ac turpis egestas.',
      image: 'https://example.com/image2.jpg',
      link: 'https://example.com/article/2',
    },
    // ... tambahkan berita lainnya
  ];

  return (
    <View style={styles.container}>
    {/* Layout 1 (Selamat Datang dan Placeholder Logo) */}
    <View style={styles.layout1}>
      <Text style={styles.selamatDatangText}>Selamat Datang di Aplikasi</Text>
      <View style={styles.logoContainer}>
        {/* Placeholder untuk logo */}
        <FontAwesome5 name="user-circle" size={50} color="gray" />
      </View>
      <Button title="Login" onPress={() => alert('Anda berhasil login!')} style={styles.loginButton} />
    </View>
  
    {/* Batas Layout */}
    <View style={styles.separator} />
  
    {/* Layout Utama */}
    <View style={styles.layoutContainer}>
      {/* Layout 2 (Grafik Batang) */}
      <View style={styles.layout2}>
        <Text style={styles.beritaTitle}>Data Kerjasama</Text>
        <BarChart
          data={dataGrafik}
          width={300}
          height={400}
          yAxisLabel="Jumlah"
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{ marginVertical: 8, borderRadius: 16 }}
        />
      </View>
  
      {/* Batas Layout */}
      <View style={styles.separatorVertical} />
  
      {/* Layout 3 (Berita) */}
      <View style={styles.layout3}>
        <Text style={styles.beritaTitle}>Berita Terbaru</Text>
        {berita.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(item.link)}
            style={styles.beritaItem}
          >
            <Image source={{ uri: item.image }} style={styles.beritaImage} />
            <View style={styles.beritaTextContainer}>
              <Text style={styles.beritaItemTitle}>{item.title}</Text>
              <Text style={styles.beritaItemContent}>{item.content}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </View>
  
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 20,
    backgroundColor: '#3498db', // Warna latar belakang tombol
    padding: 10,
    borderRadius: 5,
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  layout1: {
    alignItems: 'center',
  },
  selamatDatangText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: "normal",
    marginTop: 50,
    marginBottom: 50,
  },
  logoContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 50,
    marginBottom: 20,
  },
  separator: {
    height: 5,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 10,
  },
  layoutContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  layout2: {
    flex: 1,
  },
  layout3: {
    flex: 1,
    alignItems: 'center',
  },
  separatorVertical: {
    width: 1,
    height: '100%',
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  beritaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  beritaItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  beritaImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  beritaTextContainer: {
    flex: 1,
  },
  beritaItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  beritaItemContent: {
    fontSize: 14,
  },
});

export default DashboardScreen;
