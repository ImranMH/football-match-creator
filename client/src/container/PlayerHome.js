import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allPayer } from '../actions/player';
import PlayerList from '../components/pages/PlayerList';
console.log('player home');
class PlayerHome extends Component {
  componentDidMount = () => {
    this.props.getPlayer()
    console.log(this.props.players);
  }
  renderDetail() {
    const { players } = this.props;
    if (players.length > 0) {
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
    players: state.player.players
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getPlayer: allPayer }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(PlayerHome);

