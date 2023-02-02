import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9d9d9',
        display: "flex",
        // justifyContent: 'center'
    },
    title: {
        // backgroundColor: 'green', 
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    bts: {
        backgroundColor: '#334191',
        padding: 8,
        borderRadius: 10
    },
    btnText: {
        color: 'white'
    },
    list: {
        marginTop: 20,
        // backgroundColor: 'blue',
        width: '100%',
    },
    item: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 8,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        height: 50
    },
    todoText: {
        color: "black",
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    editMenu: {
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row'
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 50
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    subModal: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 16,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 100,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 10,
        borderRadius: 10,
        width: "70%",
        height: 40
    },
    textBoxs: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'red',
        justifyContent: 'space-evenly'
    },
    addBtn: {
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 85
    },
    addBtnText: {
        color: 'white',
        marginHorizontal: 15,
        fontWeight: 'bold'
    },
    modalTitle: {
        fontSize: 20,
        color: 'black',
        padding: 10
    }
})