import { StyleSheet } from 'react-native';

const testingStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }, button: {
        marginBottom: 30, 
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    }, buttonText: {
        padding: 20,
        color: 'white'
    }
});

export default testingStyles;