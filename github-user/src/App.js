import React from 'react';
import axios from 'axios'
import UserFollowers from './UserFollowers';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      login: "",
      avatar: "",
      followers: "",
      following: "",
      friends: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/hnelson98").then(res => {
      console.log(res.data, "RESPONSE")
      this.setState({
        name: res.data.name,
        login: res.data.login,
        avatar: res.data.avatar_url,
        followers: res.data.followers,
        following: res.data.following,
      })
    }).catch(err => {
      console.log("USER ERROR:", err)
    });


    axios.get("https://api.github.com/users/hnelson98/followers")
      .then(res => {
        console.log("FOLLOWERS RESPONSE:", res.data)
        this.setState({
          friends: res.data,
        })
      })
      .catch(err => {
        console.log("FOLLOWERS ERROR:", err)
      });


  }





  render() {
    return (
      <div className="app">
        <h1>Github Users</h1>
        <div className="user">
          <h2 className="name">{this.state.name}</h2>
          <img width="200" src={this.state.avatar} alt={"Avatar"} />
          <h3>Username: {this.state.login}</h3>
          <p>Followers: {this.state.followers} Following: {this.state.following}</p>
        </div>
        <UserFollowers friend={this.state.friends} />
      </div>
    )
  }
}
export default App;
