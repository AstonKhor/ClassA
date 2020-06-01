import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'Guest',
      classes: [],
    }
  }

  componentDidMount() {
    fetch('/classes/')
      .then((resp) => resp.json())
      .then((classes) => {
        this.setState({
          classes: classes,
        })
      })
      .catch((err) => {
        throw err;
      })
  }

  render() {
    return (
      <div>Main App</div>
    )
  }
}

export default App;