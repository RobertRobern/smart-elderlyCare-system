import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardView } from '../components/CardView'
import { componentStyles, textStyle } from '../theme/style'
import { Checkbox, RadioButton, Switch } from 'react-native-ui-lib'

export default function Settings() {
  const [darkMode, SetDarkMode] = useState(false);

  useEffect(() => {
    // SetDarkMode(darkMode);
  });
  return (

    <>
      <View style={[
        componentStyles.rowContainer,
        {
          flex: .3,
          alignItems: 'flex-start'
        }
      ]}
      >
        <Text style={textStyle.h4}>Theme</Text>
      </View>

      <CardView
        // backgroundColor={'#77f2cb'}
        containerStyle={{
          marginBottom: 5,
          flex: .6
        }}
      >
        <View
          style={[
            componentStyles.rowContainer,
            { justifyContent: 'space-between' }
          ]}>
          <Text
            style={textStyle.h5}>Change to dark mode</Text>
          <Switch
            id='dark-mode'
            value={darkMode}
            onColor={'green'}
            offColor={'grey'}
            onValueChange={() => SetDarkMode(true)}
          />
        </View>
      </CardView>

      <View style={[
        componentStyles.rowContainer,
        {
          flex: .3,
          alignItems: 'flex-start'
        }
      ]}
      >
        <Text style={textStyle.h4}>Theme</Text>
      </View>
      <CardView
        // backgroundColor={'red'}
        containerStyle={{
          marginBottom: 5,
        }}
      />
      <View style={[
        componentStyles.rowContainer,
        {
          flex: .3,
          alignItems: 'flex-start'
        }
      ]}
      >
        <Text style={textStyle.h4}>Theme</Text>
      </View>
      <CardView
        // backgroundColor={'pink'}
        containerStyle={{
          marginBottom: 5,
        }}
      />
      <View style={[
        componentStyles.rowContainer,
        {
          flex: .3,
          alignItems: 'flex-start'
        }
      ]}
      >
        <Text style={textStyle.h4}>Theme</Text>
      </View>
      <CardView
        // backgroundColor={'cyan'}
        containerStyle={{
          marginBottom: 5,
        }}
      />
      <View style={[
        componentStyles.rowContainer,
        {
          flex: .3,
          alignItems: 'flex-start'
        }
      ]}
      >
        <Text style={textStyle.h4}>Theme</Text>
      </View>
      <CardView
        // backgroundColor={'red'}
        containerStyle={{
          marginBottom: 5,
        }}
      />
    </>
  )
}

/* Integration of elderly and care giver's app algorithm 
elderly(mary).
elderly(albert).
elderly(jane).

elderly(millicent).
elderly(mike).
elderly(awino).

% family_member(robert, [mary,jane,albert]).

list_family(mary[robert,steve,otieno]).
list_family(albert[lornah,james,bright]).

is_careGiver(X, mary):- list_family(X,TAIL).

% is_family(robert, mary) :- robert is a relative
% careGiver(robert).
% careGiver(lornah).
% friend(lornah).
% family_member(robert, mary).
% family_friend(lornah, mary).
% isResponsible(X, mary):- family_member(X, mary); family_friend(Y, mary).
*/