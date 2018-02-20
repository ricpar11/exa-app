import React, { Component } from 'react';
import {NavigatorIOS} from 'react-native'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
  TabBarIOS,
} from 'react-native';
import { setTabSelectorActionCreator,setLoginInActionCreator,setBackbuttonTitleActionCreator,hideNavigationTitleActionCreator } from "../../actions/actions.js"
import firebaseApp from "../../../firebase.js"
import { connect } from 'react-redux'
import Forums  from './forums'
import Sports  from './sports'
import Settings  from './settings'
import Announcements  from './announcements'
import Schedules  from './schedules'
import Icon from 'react-native-vector-icons/Ionicons';



class MainApp extends Component {
  _changeTab(title){
    this.props.dispatch(setTabSelectorActionCreator(title));
  }
  render(){
    return(
        <TabBarIOS
        tintColor="#3498db"
        barTintColor="#FFF">
                <Icon.TabBarItem
                  title="Ajustes"
                  selected={this.props.selectedTab === 'Ajustes'}
                  iconName="ios-settings"
                  selectedIconName="ios-settings"
                  onPress={() => {this._changeTab('Ajustes',this)}}
                  >
                </Icon.TabBarItem>
                <Icon.TabBarItem
                  title="Foros"
                  selected={this.props.selectedTab === 'Foros'}
                  iconName="ios-folder"
                  selectedIconName="ios-folder"
                  onPress={() => {this._changeTab('Foros')}}
                >
                  <NavigatorIOS
                        initialRoute={{
                            title : 'Foros',
                            component: Forums
                           }}
                  />
                </Icon.TabBarItem>
                <Icon.TabBarItem
                  title="Deportes"
                  selected={this.props.selectedTab === 'Deportes'}
                  iconName="ios-football"
                  selectedIconName="ios-football"
                  onPress={() => {this._changeTab('Deportes')}}
                >
                <Sports />
                </Icon.TabBarItem>
                <Icon.TabBarItem
                  title="Anuncios"
                  selected={this.props.selectedTab === 'Anuncios'}
                  iconName="ios-alert"
                  selectedIconName="ios-alert"
                  onPress={() => {this._changeTab('Anuncios')}}
                >
                <Announcements />
                </Icon.TabBarItem>
                <Icon.TabBarItem
                  title="Horario"
                  selected={this.props.selectedTab === 'Horarios'}
                  iconName="ios-calendar"
                  selectedIconName="ios-calendar"
                  onPress={() => {this._changeTab('Horarios')}}
                >
                <Schedules />
                </Icon.TabBarItem>
        </TabBarIOS>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    selectedTab: store.tabSelector.value,
    loginIn: store.authentication.loginIn,
    // backButtonTitle: store.navigation.backButtonTitle,
    // hideNavigationTitle: store.navigation.hideNavigationTitle
  }
}

export default connect(mapStateToProps)(MainApp)

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
