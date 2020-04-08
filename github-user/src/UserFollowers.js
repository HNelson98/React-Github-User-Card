import React from 'react';

const UserFollowers = props => {
    console.log(props.friend)

    return(
    <div className="friends">
          {props.friend.map( user => (
          
            <div key={user.id}>
              <h2>{user.login}</h2>
              <img width = "150" src={user.avatar_url} alt="follower" />
            </div>
          ))}
        </div>
    )
}

export default UserFollowers 