import React from 'react';
import { StyleSheet, View } from 'react-native';

export default props => {
    return(
        <View style={StyleSheet.container}>
            <View style={styles.coreMine} />
            <View style={styles.line} />
            <View style={[styles.line, { transform: [{ rotate: '45deg'}] }]} />
            <View style={[styles.line, { transform: [{ rotate: '90deg'}] }]} />
            <View style={[styles.line, { transform: [{ rotate: '135deg'}] }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        marginTop: 5,
        marginLeft: -3,
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black'
    }
})