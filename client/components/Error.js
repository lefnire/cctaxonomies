import React from 'react';
import _ from 'lodash';

export default class Error extends React.Component {
  render() {
    let {error} = this.props;
    if (!error)
      return null;
    error = _.get(error, 'json.message')
      || _.get(error, 'response.statusText')
      || (error.toString && error.toString())
      || "An error occurred";
    return <div style={{color:'red'}}>{error}</div>;
  }
}