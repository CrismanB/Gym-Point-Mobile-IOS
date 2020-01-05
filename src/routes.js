import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignIn from './pages/Signin';
import Checkins from './pages/Checkins';
import Helper from './pages/Helper';
import Answer from './components/Answer';
import Question from './components/Question';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                }),
                App: createBottomTabNavigator(
                    {
                        Checkins,
                        Help: {
                            screen: createSwitchNavigator({
                                Helper,
                                Answer,
                                Question,
                            }),
                            navigationOptions: {
                                tabBarLabel: 'Pedir ajuda',
                                tabBarIcon: <Icon name="help" size={24} />,
                            },
                        },
                    },
                    {
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: '#ee4d64',
                            inactiveTintColor: '#3b3b3b',
                        },
                    },
                ),
            },
            {
                initialRouteName: signedIn ? 'App' : 'Sign',
            },
        ),
    );
