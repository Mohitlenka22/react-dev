import { Component } from 'react';

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        Name: 'Mohit',
        location: 'Vizag',
      },
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { Name, location } = this.state.userInfo;
    return (
      <div>
        <h1>{Name}</h1>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default UserClass;
