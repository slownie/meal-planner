import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import RecipeList from './RecipeList';
import RecipeCreate from './RecipeCreate';
import RecipeInfo from './RecipeInfo';

const Stack = createNativeStackNavigator();

export default function Recipes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RecipeList" component={RecipeList} options={{headerShown: false}}/>
            <Stack.Screen name="CreateRecipe" component={RecipeCreate} options={{headerShown: false}} />
            <Stack.Screen name="RecipeInfo" component={RecipeInfo} options={{headerShown: false}} />
        </Stack.Navigator>
    );
} 
