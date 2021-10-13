import React, {useState, useEffect} from 'react'
import logService from "./services/logs"
import activityService from "./services/activities"

const History = ({history,filter,setHistory}) => {
  const updateDate = (historyObject, day) => {
    const newDate = historyObject.date+ day * 86400000 // 1 day in milliseconds
    logService.getCurrentTime()
      .then(response =>{
        const now=response
        console.log(now)
        if(newDate <= now) //dont allow future dates
        {
         console.log(historyObject.id)
         historyObject.date= newDate
         logService.update(historyObject.id, historyObject);
         setHistory(history.map(oldObject=>historyObject.id===oldObject.id ? 
           {...oldObject, date: historyObject.date}
           : oldObject))
   }
      })
    
}
  if(history){
    let historyCopy = history.concat()
    historyCopy.reverse()
    return(
      <>
    <table id="history">
      <tbody>
      {historyCopy.filter(historyObject => historyObject.activityName.toUpperCase().search(filter.toUpperCase())!==-1)
        .map(historyObject =>  <tr key={historyObject.id}>
      
      <td className="history-date">
      <div className="group-arrow">
        <button className="icon-button-up" onClick={()=>updateDate(historyObject,1)}>▲</button>
        <button className="icon-button-down" onClick={()=>updateDate(historyObject,-1)}>▼</button>
      </div>
      <div className="history-date-text">{new Date(historyObject.date).toDateString()}</div>
      </td>
      <td className="history-activity">
      {historyObject.activityName}
      </td>
    </tr> )}
    </tbody> 
</table>

</>)
}}

const NewActivityButton = ({newActivity, activities, setActivities}) => {
  const onClick = () => {

    if(newActivity){
      const alreadyExists = activities.filter(activity => activity.activityName.toUpperCase() === newActivity.toUpperCase)
      if (alreadyExists.length===0){      
        const activityObject = {
          activityName: newActivity,
        }
        activityService.create(activityObject)
          .then(activity => {
            activityObject.id = activity.id
            setActivities(activities.concat(activityObject))
         })
      }
    }
  }
  return <button className="new-activity" onClick={()=>onClick()}>+New Activity</button>
}

const RemoveActivityButton = ({activityToRemove, activities, setActivities}) => {
  const onClick = () => {
    if(activityToRemove){
      const activityObjectToRemove = activities.filter(activity => activityToRemove.toUpperCase() ===activity.activityName.toUpperCase())
      if(activityObjectToRemove[0]){
      activityService.deleteById(activityObjectToRemove[0].id)
        .then(() => {
          setActivities(activities.filter(activity => activityObjectToRemove[0].activityName!== activity.activityName))
        })
      }
     }
  }
  return <button className="remove-activity" onClick={()=>onClick()}>-Remove Activity</button>
}
const ActivityButtons = ({activities, setActivities, filter, history, setHistory}) => {

  const onClick = (activity)=>{
    const historyObject = {
      activityName: activity,
    }
    logService.create(historyObject)
      .then(log => {
        historyObject.date=log.date
        historyObject.id = log.id
        console.log(historyObject.id)
        setHistory(history.concat(historyObject))
      })
  }
  //  if(filter){
  //    setActivities(activities.filter(activity => activity.activityName.toUpperCase().search(filter.toUpperCase())!==-1))
  //  }
  return(
  <div className="activity-buttons">
    {activities.map((activity) => <button key={activity.id} onClick={()=>onClick(activity.activityName)}>{activity.activityName}</button>)}
  </div>
  )
}
const App = () => {
  const [filter, setFilter] = useState("")
  const [history, setHistory]=useState([])
  const [activities, setActivities]= useState([])
  useEffect(() => {
    logService
      .getAll()
      .then(savedLogs => {
        setHistory(savedLogs)
      })
  }, [])
  useEffect(() => {
    activityService
      .getAll()
      .then(savedActivities => {
        console.log(savedActivities.length)
        if(savedActivities.length>0){
          setActivities(savedActivities)
        }
      })
  }, [])

    return (
    <>
      <h1>Activity Logger</h1>
    <div className="filter">
      1. Enter activity name to search existing logs, or to add/remove an activity type. <br></br>
      2. Press the activity's button to create a new log. <br></br>
      <input className="filter-bar" onChange={(event)=>setFilter(event.target.value)}></input>
      <div className="edit-activities">
        <NewActivityButton newActivity={filter} activities={activities} setActivities={setActivities}></NewActivityButton>
        <RemoveActivityButton activityToRemove={filter} activities={activities} setActivities={setActivities}></RemoveActivityButton>
      </div>
      <ActivityButtons activities={activities} setActivities={setActivities} filter={filter} history={history} setHistory={setHistory}></ActivityButtons>
      <History history={history} filter={filter} setHistory={setHistory}></History>
      
      </div>
    </>
  )
}

export default App