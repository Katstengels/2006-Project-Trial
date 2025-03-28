import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#000000',  
            tabBarInactiveTintColor: 'gray', 
            tabBarStyle: {
                height: 80
            }
        }}>
            <Tabs.Screen name="index" options={{ title: 'Home', tabBarLabelStyle: { fontSize: 30 } }} />
            <Tabs.Screen name="contact" options={{ title: 'Contact Us', tabBarLabelStyle: { fontSize: 30 } }} />
            <Tabs.Screen name="about" options={{ title: 'About Us', tabBarLabelStyle: { fontSize: 30 } }} />
            <Tabs.Screen name="login" options={{ title: 'Log In', tabBarLabelStyle: { fontSize: 30 } }} />
        </Tabs>
    );
}
