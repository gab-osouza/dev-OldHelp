import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
    },

    boldText: {
        fontWeight: 'bold',
    },

    centerText: {
        marginTop: "45%",
        textAlign: 'center',
    },

    // color area
    whiteText: {
        color: '#fff',
    },

    purpleText: {
        color: '#581183',
    },

    greyText: {
        color: '#8C8C8C',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 5
    },
    marginH: {
        marginHorizontal: 50
    }, 
    // novo
    header:{
        backgroundColor: '#581183',
        height: 90,
        gap: 5,
        paddingTop: 20,
        paddingLeft: 20
    },
    border:{
        borderWidth: 1,
        borderColor: '#fff',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 20,
        width: "50%"
    }
}); 



