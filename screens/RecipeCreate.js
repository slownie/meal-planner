import React, {useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity,Keyboard,Alert } from 'react-native';

import RecipeData from '../components/RecipeData';

export default function RecipeCreate({navigation}) {

    const [recipeName, setRecipe] = useState('');
    const [recipeItems, setRecipeItems] = useState(RecipeData);

    const addRecipe = (text) => {

        if (recipeName === "") {
            Alert.alert("", "Input cannot be blank");
        } else {
            Keyboard.dismiss();
            // setRecipeItems([...recipeItems, {id: (recipeItems.length+1).toString(), title: text}]);
            // setRecipe(null);
            const newRecipe = {id: (recipeItems.length + 1).toString(), title: text}
            var newArray = [...recipeItems, newRecipe];
            RecipeData.push(newRecipe);
            navigation.navigate('RecipeList');
        }
    }

    return (
        <View style={styles.container}>
            {/* Titles */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesSubtitle}>Recipes</Text>
                <Text style={styles.titlesTitle}>Create a Recipe</Text>
            </View>

            {/* Recipe Name */}
            <View style={styles.nameWrapper}>
                <Text style={styles.nameTitle}>Recipe Name</Text>
                <TextInput 
                    value={recipeName}
                    onChangeText={recipeName => setRecipe(recipeName)}
                    style={styles.input}/>
            </View>

            {/* Recipe Name */}

            {/* Add Button */}
            <TouchableOpacity onPress={() => addRecipe(recipeName)}>
                <View style={styles.addWrapper}>
                    <Text>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titlesWrapper: {
        marginTop: 50,
        paddingHorizontal: 20,
    },

    titlesSubtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#808080',
    },

    titlesTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5,
    },

    nameWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },

    nameTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },

    input: {
        marginTop: 8,
        paddingLeft: 4,
        borderWidth: 1
    },

    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
});