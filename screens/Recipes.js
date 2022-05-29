import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,TextInput,Keyboard,KeyboardAvoidingView} from 'react-native';

import RecipeData from '../components/RecipeData';

export default function Recipes() {

    const [recipe, setRecipe] = useState();
    const [recipeItems, setRecipeItems] = useState([]);

    const addRecipe = () => {
        Keyboard.dismiss();
        setRecipeItems([...recipeItems, recipe]);
        setRecipe(null);
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

                    <TextInput 
                        style={styles.input}
                        placeholder={'Write a recipe'}
                    />

                    <TouchableOpacity>
                        <View style={styles.addWrapper}>
                            <Text>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>


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
    }
});