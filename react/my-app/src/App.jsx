import Card from './component/Card'
import EventHandlers from './component/EventHandlers'
import EventHandlersInProps from './component/EventHandlersInProps'
import EventPropagation from './component/EventPropagation'
import { Index } from './component/hooks/useEffect'
import { CleanUp } from './component/hooks/useEffect/CleanUp'
import Counter from './component/hooks/useState/Counter'
import LoginForm from './component/hooks/useState/login/LoginForm'
import Form from './component/hooks/useState/registration/Form'
import State from './component/hooks/useState/State'
import { Header, Footer } from './component/ImportExports'
import { LiftUpState } from './component/LiftUpState'
import Obj from './component/Obj'
import Profile from './component/Profile'
import { Pokemon } from './component/projects/pokemon'
import Todo from './component/projects/toDo/Todo'
import ToggleSwitch from './component/projects/toggleSwitch/ToggleSwitch'
import Sortcirc from './component/Sortcirc'
import "./index.css"

function App() {

  return (
    <>
      {/* <Header />y */}
      {/* <EventHandlers/> */}
      {/* <EventHandlersInProps/> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      {/* <LiftUpState/> */}
      {/* <ToggleSwitch /> */}
      {/* <Todo/> */}
      {/* <Sortcirc/> */}
      {/* <Obj /> */}
      {/* <div className='card-grid'> */}
       {/* <Card /> */}
      {/* </div> */}
      {/* <Footer /> */}
      {/* <Profile/> */}
      {/* <Counter/> */}
      {/* <Form/> */}
      {/* <LoginForm/> */}
      {/* <Index/> */}
      {/* <CleanUp/> */}
      <Pokemon/>
    </>
  )
}

export default App
