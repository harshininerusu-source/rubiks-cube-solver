import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function VisualizerScreen() {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(0);

  const faceColors = {
    white: '#ffffff',
    yellow: '#ffeb3b',
    red: '#f44336',
    orange: '#ff9800',
    blue: '#2196f3',
    green: '#4caf50',
  };

  const handleRotate = (axis, direction) => {
    const step = 15;
    if (axis === 'x') {
      setRotationX(rotationX + (direction === 'up' ? step : -step));
    } else if (axis === 'y') {
      setRotationY(rotationY + (direction === 'left' ? step : -step));
    } else if (axis === 'z') {
      setRotationZ(rotationZ + (direction === 'cw' ? step : -step));
    }
  };

  const handleReset = () => {
    setRotationX(0);
    setRotationY(0);
    setRotationZ(0);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="cube-outline" size={60} color="#fff" />
        <Text style={styles.headerTitle}>3D Visualizer</Text>
        <Text style={styles.headerSubtitle}>Rotate and explore the cube</Text>
      </View>

      <View style={styles.content}>
        {/* Cube Visualization */}
        <View style={styles.visualizerContainer}>
          <View
            style={[
              styles.cube,
              {
                transform: [
                  { rotateX: `${rotationX}deg` },
                  { rotateY: `${rotationY}deg` },
                  { rotateZ: `${rotationZ}deg` },
                ],
              },
            ]}
          >
            {/* Front Face */}
            <View style={[styles.face, styles.front, { backgroundColor: faceColors.green }]}>
              <Text style={styles.faceLabel}>F</Text>
            </View>
            {/* Back Face */}
            <View style={[styles.face, styles.back, { backgroundColor: faceColors.blue }]}>
              <Text style={styles.faceLabel}>B</Text>
            </View>
            {/* Right Face */}
            <View style={[styles.face, styles.right, { backgroundColor: faceColors.red }]}>
              <Text style={styles.faceLabel}>R</Text>
            </View>
            {/* Left Face */}
            <View style={[styles.face, styles.left, { backgroundColor: faceColors.orange }]}>
              <Text style={styles.faceLabel}>L</Text>
            </View>
            {/* Top Face */}
            <View style={[styles.face, styles.top, { backgroundColor: faceColors.white }]}>
              <Text style={styles.faceLabel}>U</Text>
            </View>
            {/* Bottom Face */}
            <View style={[styles.face, styles.bottom, { backgroundColor: faceColors.yellow }]}>
              <Text style={styles.faceLabel}>D</Text>
            </View>
          </View>
        </View>

        {/* Controls */}
        <View style={styles.controlsBox}>
          <Text style={styles.controlsTitle}>Rotation Controls</Text>

          {/* X-Axis Controls */}
          <View style={styles.controlSection}>
            <Text style={styles.axisLabel}>Rotate X-Axis</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleRotate('x', 'up')}
              >
                <Icon name="chevron-up" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleRotate('x', 'down')}
              >
                <Icon name="chevron-down" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Y-Axis Controls */}
          <View style={styles.controlSection}>
            <Text style={styles.axisLabel}>Rotate Y-Axis</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleRotate('y', 'left')}
              >
                <Icon name="chevron-left" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleRotate('y', 'right')}
              >
                <Icon name="chevron-right" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Z-Axis Controls */}
          <View style={styles.controlSection}>
            <Text style={styles.axisLabel}>Rotate Z-Axis</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleRotate('z', 'cw')}
              >
                <Icon name="rotate-clockwise" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleRotate('z', 'ccw')}
              >
                <Icon name="rotate-counterclockwise" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Reset Button */}
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Icon name="restart" size={20} color="#fff" />
            <Text style={styles.resetButtonText}>Reset View</Text>
          </TouchableOpacity>
        </View>

        {/* Color Legend */}
        <View style={styles.legendBox}>
          <Text style={styles.legendTitle}>Face Colors</Text>
          <View style={styles.legendGrid}>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: faceColors.white }]} />
              <Text style={styles.legendLabel}>White (U)</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: faceColors.yellow }]} />
              <Text style={styles.legendLabel}>Yellow (D)</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: faceColors.red }]} />
              <Text style={styles.legendLabel}>Red (R)</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: faceColors.orange }]} />
              <Text style={styles.legendLabel}>Orange (L)</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: faceColors.blue }]} />
              <Text style={styles.legendLabel}>Blue (B)</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.colorBox, { backgroundColor: faceColors.green }]} />
              <Text style={styles.legendLabel}>Green (F)</Text>
            </View>
          </View>
        </View>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Icon name="information" size={20} color="#1565c0" />
          <Text style={styles.infoText}>
            Use the controls below to rotate the cube in any direction. This helps visualize different cube faces and improve your spatial awareness!
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
  visualizerContainer: {
    height: 300,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8eaf6',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cube: {
    width: 150,
    height: 150,
    position: 'relative',
  },
  face: {
    position: 'absolute',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
  },
  front: {
    zIndex: 3,
  },
  back: {
    zIndex: 1,
    transform: [{ translateZ: -150 }],
  },
  right: {
    zIndex: 2,
    transform: [{ rotateY: '90deg' }, { translateZ: 75 }],
  },
  left: {
    zIndex: 2,
    transform: [{ rotateY: '-90deg' }, { translateZ: 75 }],
  },
  top: {
    zIndex: 2,
    transform: [{ rotateX: '90deg' }, { translateZ: 75 }],
  },
  bottom: {
    zIndex: 2,
    transform: [{ rotateX: '-90deg' }, { translateZ: 75 }],
  },
  faceLabel: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    opacity: 0.3,
  },
  controlsBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  controlsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  controlSection: {
    marginBottom: 15,
  },
  axisLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  controlButton: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#f44336',
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  legendBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  legendGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  legendItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  colorBox: {
    width: 30,
    height: 30,
    borderRadius: 4,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  legendLabel: {
    fontSize: 12,
    color: '#666',
  },
  infoBox: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    color: '#1565c0',
    fontSize: 12,
    marginLeft: 10,
    flex: 1,
    lineHeight: 18,
  },
});
