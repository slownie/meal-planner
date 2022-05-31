import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,TextInput,Keyboard,KeyboardAvoidingView} from 'react-native';

import RecipeData from '../components/RecipeData';

export default function Recipes() {

    const [recipeName, setRecipe] = useState('');
    const [recipeItems, setRecipeItems] = useState(RecipeData);

    const addRecipe = (text) => {
        Keyboard.dismiss();
        // setRecipeItems([...recipeItems, {id: (recipeItems.length+1).toString(), title: text}]);
        // setRecipe(null);
        const newRecipe = {id: (recipeItems.length + 1).toString(), title: text}
        var newArray = [...recipeItems, newRecipe];
        RecipeData.push(newRecipe);
        setRecipeItems(newArray);
    }

    const deleteRecipe = (index) => {
        let recipeCopy = [...recipeItems];
        recipeCopy.splice(index, 1);
        RecipeData.splice(index, 1);
        setRecipeItems(recipeCopy);

    }


    return (
        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                {/* Titles */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubtitle}>Recipes</Text>
                    <Text style={styles.titlesTitle}>Recipe List</Text>
                </View>

                {/* Write a Recipe */}
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding": "height"}
                    style={styles.writeTaskWrapper}>

                    {/* Write a Recipe Input Field */}
                    <TextInput 
                        style={styles.input}
                        placeholder={'Write a recipe'}
                        value={recipeName}
                        onChangeText={recipeName => setRecipe(recipeName)}
                    />

                    {/* Add Button */}
                    <TouchableOpacity onPress={() => addRecipe(recipeName)}>
                        <View style={styles.addWrapper}>
                            <Text>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

                {/* Recipe List */}
                <View style = {styles.recipeList}>
                    <Text style={styles.recipeTitle}>Recipes</Text>

                    {/* Recipe Items */}
                    {
                        recipeItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={item.id} onPress={() => deleteRecipe(index)}>
                                        <View key={item.id} style={styles.recipeCardWrapper}>
                                            <Text>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }
                        )
                    }
                </View>
            </ScrollView>
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

    writeTaskWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    },

    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
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

    recipeList: {
        paddingHorizontal: 20,
    },

    recipeTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 30,
    },

    recipeCardWrapper: {
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 20,
    },
});