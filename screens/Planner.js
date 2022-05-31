import React, {useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useIsFocused } from '@react-navigation/native';

import RecipeData from '../components/RecipeData';

export default function Planner({navigation}) {

    // There is probably a better way to do this but keep it simple
    const [monday, setMonday] = useState('');
    const [tuesday, setTuesday] = useState('');
    const [wednesday, setWednesday] = useState('');
    const [thursday, setThursday] = useState('');
    const [friday, setFriday] = useState('');
    const [saturday, setSaturday] = useState('');
    const [sunday, setSunday] = useState('');
    
    const isFocused = useIsFocused();

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
                        style={styles.mealPicker}
                        onValueChange={(value, index) => setMonday(value)}
                    >   
                        {
                            RecipeData.map((item) => {
                                return <Picker.Item key={item.id} label={item.title} value={item.title}/>
                            })
                        }
                    </Picker>

                    <Text style={styles.mealsTitle}>Tuesday</Text>
                    <Picker
                        selectedValue={tuesday}
                        style={styles.mealPicker}
                        onValueChange={(value, index) => setTuesday(value)}
                    >   
                        {
                            RecipeData.map((item) => {
                                return <Picker.Item key={item.id} label={item.title} value={item.title}/>
                            })
                        }
                    </Picker>

                    <Text style={styles.mealsTitle}>Wednesday</Text>
                    <Picker
                        selectedValue={wednesday}
                        style={styles.mealPicker}
                        onValueChange={(value, index) => setWednesday(value)}
                    >   
                        {
                            RecipeData.map((item) => {
                                return <Picker.Item key={item.id} label={item.title} value={item.title}/>
                            })
                        }
                    </Picker>

                    <Text style={styles.mealsTitle}>Thursday</Text>
                    <Picker
                        selectedValue={thursday}
                        style={styles.mealPicker}
                        onValueChange={(value, index) => setThursday(value)}
                    >   
                        {
                            RecipeData.map((item) => {
                                return <Picker.Item key={item.id} label={item.title} value={item.title}/>
                            })
                        }
                    </Picker>

                    <Text style={styles.mealsTitle}>Friday</Text>
                    <Picker
                        selectedValue={friday}
                        style={styles.mealPicker}
                        onValueChange={(value, index) => setFriday(value)}
                    >   
                        {
                            RecipeData.map((item) => {
                                return <Picker.Item key={item.id} label={item.title} value={item.title}/>
                            })
                        }
                    </Picker>

                    <Text style={styles.mealsTitle}>Saturday</Text>
                    <Picker
                        selectedValue={saturday}
                        style={styles.mealPicker}
                        onValueChange={(value, index) => setSaturday(value)}
                    >   
                        {
                            RecipeData.map((item) => {
                                return <Picker.Item key={item.id} label={item.title} value={item.title}/>
                            })
                        }
                    </Picker>

                    <Text style={styles.mealsTitle}>Sunday</Text>
                    <Picker
                        selectedValue={sunday}
                        style={styles.mealPicker}
                        onValueChange={(value, index) => setSunday(value)}
                    >   
                        {
                            RecipeData.map((item) => {
                                return <Picker.Item key={item.id} label={item.title} value={item.title}/>
                            })
                        }
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