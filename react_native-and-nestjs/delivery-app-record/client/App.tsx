import Toast from '@/components/ui/Toast';
import Navigation from '@/navigation/Navigation';
import AuthProvider from '@/providers/auth/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false //чтобы отключать запросы при переходе на другое окно
		}
	}
})

export default function App() {
  return (
		<QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar style='light'/>
      <Toast/>
    </QueryClientProvider>
  );
}
