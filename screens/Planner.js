import React, {useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Planner() {

    const [monday, setMonday] = useState('')

    return (
        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>

                {/* Titles */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubtitle}>Meals</Text>
                    <Text style={styles.titlesTitle}>Meal Planner</Text>
                </View>

                {/* Meals of the Weak */}
                <View style={styles.mealsWrapper}>
                    <Text style={styles.mealsTitle}>Monday</Text>
                    <Picker
                        selectedValue={monday}
                        mode="dropdown"
                        style={styles.mealPicker}
                    >   
                        <Picker.Item label="Select a meal" value=""/>
                    </Picker>

                    <Text style={styles.mealsTitle}>Tuesday</Text>
                    <Picker
                        selectedValue={monday}
                        mode="dropdown"
                        style={styles.mealPicker}
                    >   
                        <Picker.Item label="Select a meal" value=""/>
                    </Picker>

                    <Text style={styles.mealsTitle}>Wednesday</Text>
                    <Picker
                        selectedValue={monday}
                        mode="dropdown"
                        style={styles.mealPicker}
                    >   
                        <Picker.Item label="Select a meal" value=""/>
                    </Picker>

                    <Text style={styles.mealsTitle}>Thursday</Text>
                    <Picker
                        selectedValue={monday}
                        mode="dropdown"
                        style={styles.mealPicker}
                    >   
                        <Picker.Item label="Select a meal" value=""/>
                    </Picker>

                    <Text style={styles.mealsTitle}>Friday</Text>
                    <Picker
                        selectedValue={monday}
                        mode="dropdown"
                        style={styles.mealPicker}
                    >   
                        <Picker.Item label="Select a meal" value=""/>
                    </Picker>

                    <Text style={styles.mealsTitle}>Saturday</Text>
                    <Picker
                        selectedValue={monday}
                        mode="dropdown"
                        style={styles.mealPicker}
                    >   
                        <Picker.Item label="Select a meal" value=""/>
                    </Picker>

                    <Text style={styles.mealsTitle}>Sunday</Text>
                    <Picker
                        selectedValue={monday}
                        mode="dropdown"
                        style={styles.mealPicker}
                    >   
                        <Picker.Item label="Select a meal" value=""/>
                    </Picker>

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

    mealsWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },

    mealsTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    mealPicker: {
        marginBottom: 20
    }
});