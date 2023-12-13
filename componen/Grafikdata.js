import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const GrafikKerjasama = ({ data }) => {
  const chartData = {
    labels: ['Mitra A', 'Mitra B', 'Mitra C', 'Mitra D'],
    datasets: [
      {
        data: data.map(item => item.jumlah),
      },
    ],
  };

  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Grafik Kerjasama</Text>
      <BarChart
        data={chartData}
        width={300}
        height={200}
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
  );
};

export default GrafikKerjasama;
