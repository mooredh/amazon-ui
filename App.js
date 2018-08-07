import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import { Container, Content, Header, Left, Right, Icon, Body, List, ListItem } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator /> 
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={[{backgroundColor: '#3a455c', height: 90}, styles.androidHeader]}>
      <Left style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
        <Icon name="person" style={{color: '#fff', }} />
        <Text style={{marginLeft: 5, fontSize: 22, color: '#fff', fontStyle: 'italic', }}>Hello, Moore</Text>
      </Left>
    </Header>
    <Content>
      <FlatList style={{borderTopWidth: .5, borderTopColor: '#f0f0f0'}} 
      data={[
        'Home', 'Shop by Category', "Today's deals"
      ]}
      renderItem={({item}) => {
        return (
          <ListItem noBorder>
            <Text key={item}>{item}</Text>
          </ListItem>
        ) 
      }}
      />

      <FlatList style={{ borderTopWidth: .5, borderTopColor: '#f0f0f0' }} 
      data={[
        'Your Wishlist', 'Your Account', 'Amazon Play', 'Prime', 'Sell on Amazon'
      ]}
      renderItem={({item}) => {
        return (
          <ListItem noBorder>
            <Text key={item}>{item}</Text>
          </ListItem>
        ) 
      }}
      />

      <FlatList style={{ borderTopWidth: .5, borderTopColor: '#f0f0f0' }} 
      data={[
        'Settings', 'Customer Service'
      ]}
      renderItem={({item}) => {
        return (
          <ListItem noBorder>
            <Text key={item}>{item}</Text>
          </ListItem>
        ) 
      }}
      />
    </Content>
  </Container>
)


const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen: { screen: HomeScreen }
}, {
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  }
});
