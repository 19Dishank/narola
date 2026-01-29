import Card from './component/Card'
import EventHandlers from './component/EventHandlers'
import EventHandlersInProps from './component/EventHandlersInProps'
import EventPropagation from './component/EventPropagation'
import State from './component/hooks/State'
import { Header, Footer } from './component/ImportExports'
import { LiftUpState } from './component/LiftUpState'
import Obj from './component/Obj'
import Profile from './component/Profile'
import Todo from './component/projects/toDo/Todo'
import ToggleSwitch from './component/projects/toggleSwitch/ToggleSwitch'
import "./index.css"

function App() {

  return (
    <>
      {/* <Header /> */}
      {/* <EventHandlers/> */}
      {/* <EventHandlersInProps/> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      {/* <LiftUpState/> */}
      {/* <ToggleSwitch /> */}
      <Todo/>
      {/* <Obj /> */}
      {/* <div className='card-grid'> */}
       {/* <Card /> */}
      {/* </div> */}
      {/* <Footer /> */}
      {/* <Profile/> */}
    </>
  )
}

export default App
