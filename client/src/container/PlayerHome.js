import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allPayer } from '../actions/player';
import PlayerList from '../components/pages/PlayerList';

class PlayerHome extends Component {
  componentDidMount = () => {
    this.props.getPlayer()
    console.log(this.props.players);
  }
  renderDetail() {
    const { players } = this.props;
    console.log(players)
    if (players) {
      return <PlayerList players={players} />
    } else {
      return <div> Loading ... </div>
    }
  }
  render() {
    return (
      <div>
        {this.renderDetail()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    players: state.player
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getPlayer: allPayer }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(PlayerHome);

