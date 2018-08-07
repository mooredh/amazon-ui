import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Card, CardItem, Right } from 'native-base';
import StarRating from 'react-native-star-rating'

export default class RecommendedCardItem extends Component {
  render() {
    return (
      <CardItem>
        <View>
            <Image style={{height: 90, width: 90}} source={this.props.imageUrl}/>
        </View>
        <Right style={{flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20}}>
        <Text>{this.props.itemName}</Text>
        <Text style={{color: 'grey', fontSize: 11}}>{this.props.itemCreator}</Text>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#c4402f'}}>{this.props.itemPrice}</Text>
        <Text style={{}}><Text style={{color: 'grey', fontWeight: '300', fontSize: 11}}>You save </Text>${this.props.savings}</Text>
        <StarRating disabled maxStars={5} rating={this.props.rating} starSize={12} fullStarColor='orange' emptyStarColor='orange' />
        </Right>
      </CardItem>
    )
  }
}