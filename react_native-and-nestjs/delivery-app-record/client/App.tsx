import Navigation from '@/navigation/Navigation';
import AuthProvider from '@/providers/auth/AuthProvider';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
    <AuthProvider>
      <SafeAreaProvider>
          <Navigation/>
      </SafeAreaProvider>
    </AuthProvider>
      <StatusBar style='light'/>
    </>
  );
}
