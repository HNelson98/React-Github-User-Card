import React from 'react';

const UserFollowers = props => {
    console.log(props.friend)

    return(
    <div className="friends">
          {props.friend.map( user => (
          
            <div key={user.id} className="friendCard">
              <h2>{user.login}</h2>
             <a href= {user.html_url}><img className= "followerImg" width = "150" src={user.avatar_url} alt="follower" /></a>
            </div>
          ))}
        </div>
    )
}

export default UserFollowers 