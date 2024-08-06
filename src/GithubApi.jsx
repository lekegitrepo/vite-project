import { useState, useEffect } from "react";
import "./App.css";

function GithubApi() {
  const [repositories, setRepositories] = useState([]);
  const [search, setSearch] = useState("react");

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  const handleOnClick = () => {
    fetch(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        <input type="text" value={search} onChange={handleOnChange} />
        <button onClick={handleOnClick}>Search</button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Repository Name</th>
            <th>URL</th>
          </tr>
          {repositories.map((repository) => (
            <tr key={repository.id}>
              <td>{repository.full_name}</td>
              <td>
                <a href={repository.html_url} target="_blank">
                  {repository.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GithubApi;
