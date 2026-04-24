import { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar"
import UserCard from "./components/UserCard"

function App() {
  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSearch(username) {
    setLoading(true)
    setError("")
    setUserData(null)
    setRepos([])

    const userResponse = await fetch(`https://api.github.com/users/${username}`)

    if (!userResponse.ok) {
      setError("User not found.")
      setLoading(false)
      return
    }

    const userData = await userResponse.json()
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`)
    const reposData = await reposResponse.json()

    setUserData(userData)
    setRepos(reposData)
    setLoading(false)
  }

  useEffect(() => {
    handleSearch("sharjeel-ashraf1")
  }, [])

  return (
    <div className="app">
      <h1>GitHub Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && <UserCard user={userData} />}
      {repos.length > 0 && (
        <div className="repos-grid">
          {repos.map((repo) => (
            <div key={repo.id} className="repo-card">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
              <p>{repo.description}</p>
              <span className="stars">⭐ {repo.stargazers_count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App