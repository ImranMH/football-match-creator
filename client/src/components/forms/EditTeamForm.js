import React, { Component } from 'react';
//import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
//import axios from 'axios';
import InputElement from './InputElement'
import { withRouter } from "react-router-dom";

class EditTeamForm extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired
  }
  static contextTypes = {
    router: PropTypes.object
  }
  state = {
    data: {
      title: '',
      continent: '',
      group: '',
      flag: '',
      ranking: 0,
    },
    loading: false,
    errors: {}
  }
componentWillMount = () => {
  this.setState({
    data: this.props.data
  })
}

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  })
  submitHandle = e => {
    e.preventDefault()
    const errors = this.validator(this.state.data)
    this.setState({ errors: errors })
    if (Object.keys(errors).length === 0) {
      //this.props.submit(this.state.data);
      let data = this.state.data
      this.props.submit(data)
      // axios.post('/api/team/addTeam', { data }).then(res => {
      //   //this.context.router.history.push("/");
      //   this.props.history.push("/");
      // })
    }
  }
  validator(data) {

    const errors = {}
    if (!data.title) errors.title = "Invalid Country"
    if (!data.continent) errors.continent = "Invalid continent"
    if (!data.group) errors.group = "Invalid Group"
    if (!data.flag) errors.flag = "Invalid flag"
    if (!data.ranking) errors.ranking = "Invalid Ranking"

    return errors
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandle}>
   
          <InputElement nil={'title'} label={'Name Of The Country'}
            placeholder={'brazil'} value={data.title} onchange={this.onChange} />
          <InputElement nil={'group'} label={'Group'}
            placeholder={'D'} value={data.group} onchange={this.onChange} />
          <InputElement nil={'flag'} label={'flag'}
            placeholder={'br'} value={data.flag} onchange={this.onChange} />
          <InputElement nil={'ranking'} type={'number'} label={'Ranking'}
            placeholder={'2'} value={data.ranking} onchange={this.onChange} />

          <fieldset>
            <label htmlFor="ranking"> Continent</label>
            <select className="form-control" name="continent" value={data.continent} onChange={this.onChange}>
              <option value="europe">Europe</option>
              <option value="south_america">South America</option>
              <option value="asia">Asia</option>
              <option value="africa">Africa</option>
              <option value="north_america">North America</option>
            </select>
          </fieldset>
          <button className="btn btn-primary" type="submit" > {this.props.btnText} </button>
        </form>
      </div>
    );
  }
}
//export default AddTeamForm
export default withRouter(EditTeamForm)


