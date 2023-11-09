import {Link} from 'react-dom'
import './index.css'

const RepoCard = cardsData => {
  const {
    ownerUrl,
    repositoryName,
    repositoryDescription,
    numberOfStars,
    numberOfIssues,
    timeInterval,
    ownerName,
  } = cardsData

  return (
    <>
      <div className="repo-card">
        <li>
          <Link to="/repos/ownerName/repositoryName">
            <div className="owner-image">
              <img src={ownerUrl} alt="Owner Avatar" className="owner_img" />
            </div>
            <div className="repo-details">
              <h1 className="repo-heading">{repositoryName}</h1>
              <p className="repo-description">{repositoryDescription}</p>
              <div className="repo-card-bottom">
                <div className="no-of-stars">{numberOfStars}</div>
                <div className="no-of-issues">{numberOfIssues}</div>
                <div className="last-published">
                  <p>
                    Last pushed {timeInterval} by {ownerName}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </div>
    </>
  )
}

export default RepoCard
