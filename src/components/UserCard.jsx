function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <div className="user-info">
        <h2>{user.name || user.login}</h2>
        <p className="username">@{user.login}</p>
        <p className="bio">{user.bio}</p>
        <div className="user-stats">
          Followers: <span>{user.followers}</span>
          Following: <span>{user.following}</span>
          Repos: <span>{user.public_repos}</span>
        </div>
        <a className="github-link" href={user.html_url} target="_blank" rel="noreferrer">
          View on GitHub →
        </a>
      </div>
    </div>
  )
}

export default UserCard