import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CubeSolver from '../utils/cubeSolver';
import RubiksCube from '../utils/cubeModel';

const STEPS = [
  {
    id: 1,
    title: 'White Cross',
    description: 'Get white edge pieces on top with matching center colors',
    difficulty: 'Easy',
  },
  {
    id: 2,
    title: 'White Corners',
    description: 'Complete the first layer by placing white corners',
    difficulty: 'Easy',
  },
  {
    id: 3,
    title: 'Middle Layer',
    description: 'Place the four edge pieces in the middle layer',
    difficulty: 'Medium',
  },
  {
    id: 4,
    title: 'Yellow Cross',
    description: 'Orient yellow edges to make a cross on top',
    difficulty: 'Medium',
  },
  {
    id: 5,
    title: 'Yellow Edges',
    description: 'Position yellow edges correctly on the last layer',
    difficulty: 'Medium',
  },
  {
    id: 6,
    title: 'Yellow Corners',
    description: 'Solve the final corners to complete the cube',
    difficulty: 'Hard',
  },
];

export default function TutorialScreen() {
  const [selectedStep, setSelectedStep] = useState(null);
  const [stepDetails, setStepDetails] = useState(null);

  const handleStepPress = (stepId) => {
    setSelectedStep(selectedStep === stepId ? null : stepId);
    
    if (selectedStep !== stepId) {
      const cube = new RubiksCube();
      const solver = new CubeSolver(cube);
      solver.solveCube();
      const details = solver.getStepExplanation(stepId);
      setStepDetails(details);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return '#4caf50';
      case 'Medium':
        return '#ff9800';
      case 'Hard':
        return '#f44336';
      default:
        return '#999';
    }
  };

  const renderStepItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.stepCard,
        selectedStep === item.id && styles.stepCardActive,
      ]}
      onPress={() => handleStepPress(item.id)}
    >
      <View style={styles.stepHeader}>
        <View style={styles.stepNumberContainer}>
          <Text style={styles.stepNumber}>{item.id}</Text>
        </View>
        <View style={styles.stepInfo}>
          <Text style={styles.stepTitle}>{item.title}</Text>
          <Text style={styles.stepDesc}>{item.description}</Text>
        </View>
        <View
          style={[
            styles.difficultyBadge,
            { backgroundColor: getDifficultyColor(item.difficulty) },
          ]}
        >
          <Text style={styles.difficultyText}>{item.difficulty}</Text>
        </View>
      </View>

      {selectedStep === item.id && stepDetails && (
        <View style={styles.detailsContainer}>
          <View style={styles.detailSection}>
            <Text style={styles.detailLabel}>What to Do:</Text>
            <Text style={styles.detailText}>{stepDetails.description}</Text>
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.detailLabel}>Algorithm:</Text>
            <View style={styles.algorithmBox}>
              <Text style={styles.algorithm}>{stepDetails.algorithm}</Text>
            </View>
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.detailLabel}>Tips:</Text>
            {stepDetails.tips.map((tip, index) => (
              <View key={index} style={styles.tipItem}>
                <Text style={styles.tipBullet}>•</Text>
                <Text style={styles.tipText}>{tip}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="school" size={60} color="#fff" />
        <Text style={styles.headerTitle}>Learn the Method</Text>
        <Text style={styles.headerSubtitle}>
          Master the layer-by-layer solving technique
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.introTitle}>6 Steps to Solve Your Cube</Text>
        <Text style={styles.introText}>
          Click on any step to learn the technique. Start from step 1 and work your way up!
        </Text>

        <FlatList
          data={STEPS}
          renderItem={renderStepItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          style={styles.stepsList}
        />

        <View style={styles.tipsBox}>
          <Icon name="lightbulb" size={24} color="#ff9800" />
          <View style={styles.tipsContent}>
            <Text style={styles.tipsTitle}>Pro Tips</Text>
            <Text style={styles.tipsText}>
              • Start slowly and practice each step repeatedly{'\n'}
              • Once you've memorized the algorithms, you'll solve faster{'\n'}
              • Don't rush - understanding is more important than speed
            </Text>
          </View>
        </View>

        <View style={styles.progressBox}>
          <Text style={styles.progressTitle}>Your Progress</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '0%' }]} />
          </View>
          <Text style={styles.progressText}>
            Complete all steps to track your progress
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
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  introTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  introText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  stepsList: {
    marginBottom: 20,
  },
  stepCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  stepCardActive: {
    backgroundColor: '#f0ebf8',
    borderWidth: 2,
    borderColor: '#6200ee',
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepNumberContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumber: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  stepInfo: {
    flex: 1,
    marginLeft: 15,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  stepDesc: {
    fontSize: 12,
    color: '#999',
  },
  difficultyBadge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  difficultyText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  detailSection: {
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 20,
  },
  algorithmBox: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#6200ee',
  },
  algorithm: {
    fontSize: 13,
    fontFamily: 'monospace',
    color: '#333',
    fontWeight: 'bold',
  },
  tipItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tipBullet: {
    color: '#6200ee',
    fontSize: 14,
    marginRight: 10,
    fontWeight: 'bold',
  },
  tipText: {
    fontSize: 12,
    color: '#666',
    flex: 1,
    lineHeight: 18,
  },
  tipsBox: {
    backgroundColor: '#fff3e0',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  tipsContent: {
    marginLeft: 15,
    flex: 1,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff6f00',
    marginBottom: 8,
  },
  tipsText: {
    fontSize: 12,
    color: '#e65100',
    lineHeight: 18,
  },
  progressBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6200ee',
  },
  progressText: {
    fontSize: 12,
    color: '#999',
  },
});
