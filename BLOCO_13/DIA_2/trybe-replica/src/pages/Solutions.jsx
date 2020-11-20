import React from 'react';
import { Link } from 'react-router-dom';

class Solutions extends React.Component {
  render() {
    console.log(this.props);
  if(this.props.match.params.solutionId) return <h2>{this.props.match.params.solutionId}</h2>
    return (
      <div>
        <h1>Gabaritos</h1>
        {this.props.avaiableSolutions.map((solution) => (
          <div key={solution}>
            <span>
              <Link className='solution-link' to={`/solutions/${solution}`}>
                {solution}
              </Link>
            </span>
          </div>
        ))}
      </div>
      )
  }
}

export default Solutions;