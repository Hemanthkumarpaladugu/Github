import {Component} from 'react'
import RepoCard from '../RepoCard'

import './index.css'

class StarredRepo extends Component {
  const = (repositoriesList = [
    {
      id: '1',
      ownerUrl: 'https://avatars.githubusercontent.com/u/7560860?v=4',
      repositoryName: 'redux-react-hook',
      repositoryDescription:
        'React Hook for accessing state and dispatch from a Redux store',
      numberOfStars: '4',
      numberOfIssues: '2',
      timeInterval: '24-10-2010',
      ownerName: 'Facebook',
    },
  ])

  componentDidMount() {
    this.getReposList()
  }

  getReposList = async () => {
    const apiUrl =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'

    const options = {
      Method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    console.log(response)
    // const fetchedData = JSON.stringify(response)
  }

  render() {
    return (
      <>
        <div className="app-container">
          <h1 className="app-heading"> Most Starred Repos</h1>
          <ul>
            {repositoriesList.map(item => (
              <RepoCard key={item.id} repoData={item} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default StarredRepo
