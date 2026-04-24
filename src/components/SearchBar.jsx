import { useState } from "react"

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (input.trim() === "") return
    onSearch(input.trim())
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar