import { Component } from 'react';

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {} 

  render() {
    const { count } = this.state;
    return (
      <>
        {/* <div>
          <h1>{Name}</h1>
          <h2>{location}</h2>
        </div> */}
        <h2>{count}</h2>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase
        </button>
      </>
    );
  }
}

export default UserClass;
