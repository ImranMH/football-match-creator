import React, { Component } from 'react';
//import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
//import axios from 'axios';
import InputElement from './InputElement'
import { withRouter } from "react-router-dom";

 class AddTeamForm extends Component {
  static propTypes = {
    addNewTeam: PropTypes.func.isRequired,
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

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  })
  submitHandle = e => {
    e.preventDefault()
    const errors = this.validator(this.state.data)
    console.log(errors)
    this.setState({ errors: errors })
    if (Object.keys(errors).length === 0) {
      let data = this.state.data
      this.props.addNewTeam(data)
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
    const { data } = this.state

    return (
      <div>
        <form onSubmit={this.submitHandle}>
          {/* <fieldset>
            <label htmlFor="title"> Name Of The Country </label>
            <input className="form-control" type="text" id="title" name="title" placeholder="Brazil" value={data.title} onChange={this.onChange} />
          </fieldset> */}
          <InputElement nil={'title'} label={'Name Of The Country'} 
            placeholder={'brazil'} value={data.title} onchange={this.onChange} />
          <InputElement nil={'group'} label={'Group'}
            placeholder={'D'} value={data.group} onchange={this.onChange} />
          <InputElement nil={'flag'} label={'flag'}
            placeholder={'br'} value={data.flag} onchange={this.onChange} />
          <InputElement nil={'ranking'} type={'number'} label={'Ranking'}
            placeholder={'2'} value={data.ranking} onchange={this.onChange} />
          {/* <fieldset>
            <label htmlFor="group"> Group</label>
            <input className="form-control" type="text" id="group" name="group" placeholder="D" value={data.group} onChange={this.onChange} />
          </fieldset> */}
          {/* <fieldset>
            <label htmlFor="flag"> flag</label>
            <input className="form-control" type="text" id="flag" name="flag" placeholder="Brazil" value={data.flag} onChange={this.onChange} />
          </fieldset> */}
          {/* <fieldset>
            <label htmlFor="ranking"> Ranking</label>
            <input className="form-control" type="text" id="ranking" name="ranking" placeholder="2" value={data.ranking} onChange={this.onChange} />
          </fieldset> */}
          <fieldset>
            <label htmlFor="ranking"> Continent</label>
            <select className="custom-select mr-sm-2" name="continent" value={data.continent} onChange={this.onChange}>
              <option defaultValue='' > Select a Continent</option>
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
export default withRouter(AddTeamForm)


