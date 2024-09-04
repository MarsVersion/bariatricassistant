import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'transparent',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: "'transparent'",
    borderRadius: 30,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold', 
    fontFamily: 'Poppins_700Bold',
    marginBottom: 35,
    color: "white",
    textAlign: "center",
  },
  form: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    color: "white",
  paddingVertical: 15, // Increase vertical padding to enlarge touchable area
    paddingHorizontal: 20, // Add horizontal padding for better space
    marginBottom: 30,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 2,
    paddingLeft: 30,
    backgroundColor: 'transparent',
  },
  checkboxLabel: {
    fontSize: 18,
    color: "white",
    marginLeft: 15,
    marginBottom: 3,
  },
  legend: {
    fontSize: 19,
    color: "white",
    fontWeight: "500",
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  result: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 4,
    maxWidth: 800,
    width: "100%",
    alignItems: "flex-start",
  },
  additionalInfo: {
    marginTop: 5,
    padding: 30,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "rgb(175, 4, 4)",
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
  customButton: {
    borderWidth: 0.5,
    borderColor: "rgb(175, 4, 4)",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  },
  customButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgb(175, 4, 4)',
  },
  strong: {
    fontWeight: 'bold',
  },
  listContainer: {
    paddingLeft: 0,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  listItemNumber: {
    width: 18,
    textAlign: 'left',
    marginRight: 5,
    fontSize: 13,
  },
  listItem: {
    flex: 1,
    fontSize: 14,
  },
});


export default styles;
