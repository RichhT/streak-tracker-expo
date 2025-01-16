import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }} 
      />
      <Tabs.Screen 
        name="prizes" 
        options={{
          title: 'Prizes',
          tabBarLabel: 'Prizes',
        }} 
      />
    </Tabs>
  );
}