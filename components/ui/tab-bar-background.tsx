import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TabBarBackground() {
  // Use a simple semi-transparent background for web to avoid hook issues
  if (typeof window !== 'undefined') {
    return (
      <View
        style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(255, 255, 255, 0.8)' }]}
      />
    );
  }
  
  // Use BlurView for native platforms
  return (
    <BlurView
      tint="default"
      intensity={100}
      style={StyleSheet.absoluteFillObject}
    />
  );
}