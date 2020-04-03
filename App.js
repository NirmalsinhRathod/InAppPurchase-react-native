/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
// import * as RNIap from 'react-native-iap';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// const itemSkus = Platform.select({
//   ios: [
//     'point_1000',
//   ],
//   android: [
//     'com.purchase.coin',
//   ],
// });

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       productList: [],
//       receipt: "",
//       availableItemsMessage: "",
//       purchaseIndicator: false,
//       subscriptionIndicator: false,
//       availableIndicator: false,
//       modalVisible: false,
//       validateItem: [],
//     };
//   }

//   async componentDidMount() {
//     RNIap.initConnection();
//     try {
//       console.log("componentDidMount");
//       if (Platform.OS === "android") {
//         await RNIap.consumeAllItems();
//       }
//       const products = await RNIap.getProducts(itemSkus);
//       this.setState({ products });

//     } catch (err) {
//       console.warn(err); // standardized err.code and err.message available
//     }
//   }
//   async componentDidMount() {
//     try {
//       const result = await RNIap.initConnection();
//       if (Platform.OS === "android") {
//         await RNIap.consumeAllItems();
//       }
//     } catch (err) {
//       console.warn(err.code, err.message);
//     }

//   }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//     RNIap.endConnection();
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="Purchse"
//           color="#841584"
//           onPress={() => this.retriveData()}></Button>
//       </View>
//     );
//   }
//   retriveData = async () => {
//     try {
//       var myArray = await AsyncStorage.getItem('key');
//       myArray = JSON.parse(myArray)
//       if (myArray !== null) {
//         this.setState({
//           validateItem: myArray
//         })
//         console.log(this.state.validateItem);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   purchseItem() {
//     try {

//       const products = RNIap.getProducts(itemSkus);
//       this.setState({ products });
//       console.log(JSON.stringify(products));
//       alert(JSON.stringify(products))
//     } catch (err) {
//       console.warn(err);
//     }
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, { Component } from "react";
import ModuleInApp from "./src/Container/ModuleInApp/Index";

export default class App extends Component {
  render() {
    return <ModuleInApp />;
  }
}
