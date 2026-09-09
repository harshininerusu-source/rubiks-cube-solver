import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="cube" size={80} color="#6200ee" />
        <Text style={styles.title}>Rubik's Cube Solver</Text>
        <Text style={styles.subtitle}>Learn & Solve with Ease</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Welcome!</Text>
        <Text style={styles.description}>
          This app teaches you how to solve a 3x3 Rubik's cube using the beginner layer-by-layer method.
          No matter how scrambled your cube is, you'll be able to solve it step by step.
        </Text>

        <View style={styles.featureCard}>
          <Icon name="school" size={32} color="#6200ee" />
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Step-by-Step Tutorial</Text>
            <Text style={styles.featureDesc}>Learn each layer solving technique with detailed explanations</Text>
          </View>
        </View>

        <View style={styles.featureCard}>
          <Icon name="puzzle" size={32} color="#6200ee" />
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Cube Solver</Text>
            <Text style={styles.featureDesc}>Input your cube state and get the solution</Text>
          </View>
        </View>

        <View style={styles.featureCard}>
          <Icon name="cube-outline" size={32} color="#6200ee" />
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>3D Visualizer</Text>
            <Text style={styles.featureDesc}>Visualize the cube and practice moves</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Tutorial')}
        >
          <Text style={styles.primaryButtonText}>Start Learning</Text>
          <Icon name="arrow-right" size={20} color="#fff" style={styles.buttonIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Solver')}
        >
          <Text style={styles.secondaryButtonText}>Solve Your Cube</Text>
          <Icon name="puzzle" size={20} color="#6200ee" style={styles.buttonIcon} />
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Icon name="information" size={20} color="#6200ee" />
          <Text style={styles.infoText}>
            The layer-by-layer method is perfect for beginners. You'll master it in no time!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 30,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  featureText: {
    marginLeft: 15,
    flex: 1,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  featureDesc: {
    fontSize: 12,
    color: '#999',
  },
  primaryButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#6200ee',
  },
  secondaryButtonText: {
    color: '#6200ee',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginLeft: 8,
  },
  infoBox: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    color: '#1565c0',
    fontSize: 12,
    marginLeft: 10,
    flex: 1,
  },
});
