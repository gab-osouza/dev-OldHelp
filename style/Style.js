import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    text: {
        fontFamily: 'PlusJakartaSans',
        fontSize: 16,
    },

    input: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontWeight: '600',
        borderWidth: 2,
        borderColor: '#581183',
        borderRadius: 15,
        width: "80%"
    },

    button: {
        color: '#581183',
        backgroundColor: '#581183',
        borderRadius: 20,
        width: "70%",
        paddingVertical: 8,
        alignItems: 'center',
    },

    textWhite: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 24
    },
    lineRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "70%"
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#581183',
    },
    textBold: {
        textAlign: 'center',
        width: 70,
        fontWeight: '1000',
        color: '#581183',

    },

});



