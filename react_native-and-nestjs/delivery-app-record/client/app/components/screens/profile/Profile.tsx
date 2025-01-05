import React, { FC } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/button/Button';
import { useAuth } from '@/hooks/useAuth';
import { AuthService } from '@/services/auth/auth.service';
import { useProfile } from './useProfile';
import Layout from '@/components/ui/layout/Layout';

const Profile: FC = () => {
  const { setUser } = useAuth();
  const { profile } = useProfile();

  return (
    <Layout>
      <Heading isCenter>{profile?.name}</Heading>
      <Heading isCenter>{profile?.email}</Heading>
      <Heading isCenter>Id: {profile?.id}</Heading>

      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: profile?.avatarPath }}
          style={styles.avatar}
        />
      </View>

      <Button
        onPress={() => AuthService.logout().then(() => setUser(null))}
        style={styles.logoutButton}
      >
        Logout
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    marginVertical: 24, // my-6
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 160, // w-40 (40 * 4 = 160)
    height: 160, // h-40
    borderRadius: 80, // rounded-full
  },
  logoutButton: {
    marginTop: 20, // mt-5 (5 * 4 = 20)
    width:'40%'
  },
});

export default Profile;