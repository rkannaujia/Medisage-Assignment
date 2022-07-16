import './Schedule.css';
import Matches from '../../Util/UpcomingMatch';
import Match from './Match';

const Schedule = () => {
  

 
  return (<>
  <div className="heading">Schedule</div>
    <div className="schedule">
      {Matches.map((match) => (
        <Match match={match} />
      ))}
    </div>
    </>
  )
}

export default Schedule
