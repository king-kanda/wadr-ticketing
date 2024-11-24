import { Tabs } from "expo-router";
import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function RootLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        height: 65,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#F69522',   
        borderTopWidth: 0,        
        elevation: 0,              
        shadowOpacity: 0,           
      },
      tabBarLabelStyle: {
        fontSize: 12,      // Control the font size of the labels
        fontWeight: '500', // Make the font slightly bolder
        paddingBottom: 4,  // Space between icon and label
      },
      tabBarIconStyle: {
        marginTop: 4,     // Add some space above the icons
      },
    }}

    >

      <Tabs.Screen name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Foundation name="home" size={24} color="black" />,
        }}/>

      <Tabs.Screen name="sessions/sessions"
        options={{
          title: 'Sessions',
          tabBarIcon: ({ color }) => <MaterialIcons name="speaker-group" size={24} color="black" />,
        }}/>

      <Tabs.Screen name="polls"
        options={{
          title: 'Polls',
          tabBarIcon: ({ color }) => <FontAwesome5 name="poll-h" size={24} color="black" />,
        }}/>

      <Tabs.Screen name="sessions/[session]"
        options={{
          href: null,
        }}/>

      

    </Tabs>
  )
}
