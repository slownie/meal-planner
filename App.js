import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Planner from "./screens/Planner";
import Recipes from "./screens/Recipes";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Meal Planner" 
          component={Planner} 
          options={{
            headerShown: false,
            tabBarIcon: ({color,size}) => (
              <Ionicons name="reader" color={color} size={24} />
            ),
          }}
        />
        {/* <Tab.Screen name="Grocery List" component={GroceryShop} options={{headerShown: false}}/> */}
        <Tab.Screen 
          name="Recipes" 
          component={Recipes} 
          options={{
            headerShown: false,
            tabBarIcon: ({color,size}) => (
              <Ionicons name="nutrition" color={color} size={24} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}