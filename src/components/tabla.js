import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCurrentTournament,tabFetchContent } from '../actions/actions'
import { Spinner, Reloader, LoadRetryRow } from './common';
import { TabNames } from '../constants/tabs'


import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableHighlight, 
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Tabla extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-football" size={29} style={{color: tintColor}} />,
    title: 'Tabla'
  };

  componentDidMount(){
    this.props.getCurrentTournament();
    
  }

  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps);
  }

  getContent(props = this.props) {    
    if (props.tournament.failedFetchingTournament) {      
      props.getCurrentTournament();
    } else if(props.tournament.showLoading){
      props.tabFetchContent(TabNames.STANDINGS,props.tournament.current.id)
    }
  }

  render(){
    const tournament = this.props.tournament;
    if (tournament.showLoading) {
      return <Spinner loadingText="Cargando" />; 
    } 
    return(
      <FlatList
        ListHeaderComponent={null}
        keyExtractor={(item) => item.equipo}
        data={tournament.data}
        renderItem={({item}) => <Text>{item.equipo}</Text>}
      />
    )
  }
}

const mapStateToProps = state => ({
   nav: state.nav, 
   tournament: state.tournament
  })
export default connect(mapStateToProps,{getCurrentTournament,tabFetchContent})(Tabla)


// const styles = StyleSheet.create({

// });



