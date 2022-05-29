import * as React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';

export default function Planner() {
    return (
        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>

                {/* Titles */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubtitle}>Meals</Text>
                    <Text style={styles.titlesTitle}>Meal Planner</Text>
                </View>

                {/* Search */}
                

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
    }
});