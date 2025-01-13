import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d', // Warna untuk tab aktif
        tabBarStyle: { backgroundColor: '#fff' }, // Latar belakang tab bar
      }}
    >
      {/* Halaman Index */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Index',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Halaman Beranda */}
      <Tabs.Screen
        name="Beranda"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Halaman Absen */}
      <Tabs.Screen
        name="absen"
        options={{
          title: 'Absen',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'newspaper' : 'newspaper-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Halaman Profil */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'} // Gunakan person untuk ikon profil
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
