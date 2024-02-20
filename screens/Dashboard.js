import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Avatar, Text, AvatarHelper, Colors, Typography, AvatarProps, Card, Image, GridList } from 'react-native-ui-lib';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import colorPalletes from '../theme/colorPalletes'
import { textStyle, componentStyles, cardStyles, dashboardStyles } from '../theme/style'
import {cardContent} from '../data/card'
import {dataDoughnut} from '../data/chart'

const avatarImage = require('../assets/images/profile.jpg');

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomCard = (props) => {
  const {
    cardColor = '#6ed6ff',
    cardTitle = 'Card Title',
    cardReadings = 0,
  } = props;

  return (
    <>
      <Card flex row={true}
        containerStyle={{
          margin: 8,
          backgroundColor: `${cardColor}`
        }}
      >
        <View style={componentStyles.columnContainer}>
          <Text white style={textStyle.h4}>{cardTitle}</Text>
          <Image
            source={avatarImage}
            style={{ width: 150, height: 102 }}
          />
          {/* <Doughnut data={dataDoughnut} /> */}
          <Text white style={textStyle.h4}>{cardReadings}</Text>
        </View>


        {/* <Card.Section flex
          content={[
            { text: `${cardTitle}`, text50: true, white: true },
            {
              text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
              text80: true,
              $textDefault: true
            },
            { text: '500p/s', text50: true, $textDisabled: true, white: true }
          ]}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
            backgroundColor: '#6ed6ff'
          }}>
            
        </Card.Section> */}
      </Card>
    </>

  )

}
const MetricView = () => {
  return (
    <>
      {/* <GridList
      numColumns={2}
      containerWidth={100}
      data={cardContent}
      // Work oon Grid List
      >
      </GridList> */}

      <View style={cardStyles.container}>
        {cardContent.length > 0 && cardContent.map((result, index) => {
          // if (result.backgroundColor == '#6ed6ff') {
          //   console.log(result.backgroundColor);

          // }
          {/* <GridList></GridList> */ }
          return (
            <CustomCard key={index}
              cardColor={result.backgroundColor}
              cardTitle={result.title}
              cardReadings={result.value}
            />
          )
        })}

        {/* <CustomCard /> */}
        {/* First card */}
        {/* <Card flex center row={true}
            containerStyle={{
              margin: 8,
            }}
          >    
                 
            <Card.Section flex
              content={[
                { text: {title}, text50: true, white: true },
                {
                  text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
                  text80: true,
                  $textDefault: true
                },
                { text: '500p/s', text50: true, $textDisabled: true, white: true }
              ]}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 8,
                backgroundColor: '#6ed6ff'
              }}>
            </Card.Section>            
      </Card> */}

        {/* Second card */}
        {/* <Card flex center row={true}
            containerStyle={{
              margin: 8,

            }}
          >            
            <Card.Section flex
              content={[
                { text: 'Temperature', text50: true, white: true },
                {
                  text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
                  text80: true,
                  $textDefault: true
                },
                { text: '24 oC', text50: true, $textDisabled: true , white: true }
              ]}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 8,
                backgroundColor: '#5297ff'
              }}>
            </Card.Section>            
      </Card> */}
      </View>
    </>

  )
}

export default function Dashboard( props ) {
  // const {username} = props;
  return (
    // Main Container
    <View style={dashboardStyles.container} >

      {/* Sub Container 1 */}
      <View style={dashboardStyles.userContainer}>

        {/* Mini Sub Container 1.1*/}
        <View style={dashboardStyles.userBio}>
          <View style={dashboardStyles.username}>
            <Text style={textStyle.h4}>Hi, Robert</Text>
          </View>
          <View style={dashboardStyles.avatar}>
            <Avatar
              source={avatarImage}
              size={50}
              onPress={() => alert("You are about to open Profile page")}
              label='Avatar'
            />
          </View>
        </View>

        {/* Mini Sub Container 1.2*/}
        <View style={dashboardStyles.healthScore}>
          <Card flex center row={true}
            containerStyle={{
              backgroundColor: '#f1f1f6',
              margin: 8,
            }}
          >
            <Card.Section flex imageSource={avatarImage}
              imageStyle={{ width: 150, height: 102 }}
              style={{
                justifyContent: 'center',
              }}
            />
            <Card.Section flex
              content={[
                { text: 'Health Score', text70: true, grey10: true },
                {
                  text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
                  text80: true,
                  $textDefault: true
                },
                { text: 'wix.to/A465c', text90: true, $textDisabled: true }
              ]}
              style={{
                justifyContent: 'center',
              }}>

            </Card.Section>
          </Card>
        </View>
      </View>

      {/* Sub Container 2*/}
      <View style={dashboardStyles.userMetrics}>
        <Text style={textStyle.h4}>Metrics</Text>
        <MetricView />
        {/* <MetricView/> */}
        {/* <Doughnut data={data} /> */}
      </View>

    </View>
  )
}

