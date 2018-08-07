import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Platform, StatusBar, Image } from 'react-native'
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'
import RecommendedCardItem from '../components/RecommendedCardItem'
import { recommended } from '../assets/recommended'

export default class HomeScreen extends Component {
    renderRecommended() {
        if (recommended) {
            return (recommended.map((item, i) => <RecommendedCardItem key={i}
                itemName={item.itemName}
                itemCreator={item.itemCreator}
                itemPrice={'$' + item.itemPrice}
                savings={item.savings}
                imageUrl={item.imageUrl}
                rating={item.rating}
            />
            ))
        } 
    }
  render() {
    return (
      <Container>
        <StatusBar barStyle='light-content' />
        <Header style={[{backgroundColor: '#3a455c', height: 90, borderBottomColor: '#757575'}, styles.androidHeader]}>
            <Left style={{flexDirection: 'row',}}>
                <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{color: '#fff', marginRight: 15,}} />
                <FAIcon name="amazon" style={{fontSize: 32, color: '#fff'}} /> 
            </Left>
            <Right>
                <Icon name="md-cart" style={{color: '#fff', }} /> 
            </Right>
        </Header>
        <View 
        style={{position: 'absolute', left: 0, right: 0, top: 90, height: 70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5,}}
        >
            <TouchableOpacity>
                <View style={{width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10,}}>
                    <Text style={{fontSize: 12,}}>Shop by</Text>
                    <Text style={{fontWeight: 'bold',}}>Category</Text>
                </View>
            </TouchableOpacity>
            <View style={{flex: 1, height: '100%', marginLeft: 5, justifyContent: 'center',}}>
                <Item style={{backgroundColor: '#fff', paddingHorizontal: 10, borderRadius: 4,}}>
                    <Icon name="search" style={{fontSize: 20, paddingTop: 5,}} />
                    <Input placeholder="Search" />
                </Item>
            </View>
        </View>
        <Content style={{backgroundColor: '#d5d5d6', marginTop: 70,}}>
            <View style={{height: 50, backgroundColor: '#fff', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between',}}>
                <Text>Hello, Moore</Text>
                <View style={{flexDirection: 'row',}}>
                    <Text>Your Account </Text>
                    <Icon name="arrow-forward" style={{fontSize: 18,}} />
                </View>
            </View>
            <Swiper style={{height: 100}} autoplay showsPagination={false}>
                <View style={{flex:1}}>
                    <Image style={{flex: 1, height: null, width: null, resizeMode: 'contain'}} source={require('../assets/images/swiper_2.jpg')} />
                </View>
                <View style={{flex:1}}>
                    <Image style={{flex: 1, height: null, width: null, resizeMode: 'contain'}} source={require('../assets/images/swiper_3.jpg')} />
                </View>
                <View style={{flex:1}}>
                    <Image style={{flex: 1, height: null, width: null, resizeMode: 'contain'}} source={require('../assets/images/swiper_2.jpg')} />
                </View>
            </Swiper>
            <Card style={{marginLeft: 5, marginRight: 5,}}>
                <CardItem header style={{borderBottomWidth: 1, borderColor: '#dee0e2',}}>
                    <Text>Your Recommendations</Text>
                </CardItem>
                {this.renderRecommended()}
            </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight, 
            }
        })
    }
})