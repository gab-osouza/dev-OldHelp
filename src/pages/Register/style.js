import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },

    text: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
    },

    input: {
        selectionColor:'#581183',
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontWeight: '600',
        borderWidth: 2,
        borderColor: '#581183',
        borderRadius: 15,
        width: "80%",
    },

    button: {
        color: '#581183',
        backgroundColor: '#581183',
        borderRadius: 20,
        width: "70%",
        paddingVertical: 4,
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
        fontWeight: '1000',
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
        fontWeight: '600',
        fontSize: 24
    },

    purpleText: {
        color: '#581183',
    },

    greyText:{
        color: '#8C8C8C',
        marginHorizontal: 5
    },

});



