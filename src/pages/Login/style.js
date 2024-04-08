import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },

    text: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
    },

    input: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: '#581183',
        borderRadius: 15,
    },

    button: {
        color: '#581183',
        backgroundColor: '#581183',
        borderRadius: 20,
        width: "70%",
        paddingVertical: 8,
        alignItems: 'center',
    },

    lineRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "70%"
    },

    line: {
        flex: 1,
        height: 2,
        backgroundColor: '#581183',
    },

    boldText: {
        fontWeight: 'bold',
    },

    centerText: {
        textAlign: 'center',
    },

    lineText: {
        width: 70,
        textAlign: 'center'
    },

    // color area
    whiteText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24
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

}); 



