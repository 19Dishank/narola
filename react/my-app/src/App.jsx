import Card from './component/Card'
import EventHandlers from './component/EventHandlers'
import EventHandlersInProps from './component/EventHandlersInProps'
import EventPropagation from './component/EventPropagation'
import StateCounter from './component/hooks/Memo/StateCounter'
import UseMemo from './component/hooks/Memo/UseMemo'
import { Home } from './component/hooks/useContext/Home'
import { Dataprovier } from './component/hooks/useContext/Index'
import { Index } from './component/hooks/useEffect'
import { CleanUp } from './component/hooks/useEffect/CleanUp'
import UseId from './component/hooks/useId/UseId'
import UseReducreCounter from './component/hooks/useReducer/UseReducreCounter'
import ForwardRef from './component/hooks/useRef/ForwardRef'
import UseRefForm from './component/hooks/useRef/UseRefForm'
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
import { PropsDrillingAndContextAPI } from './component/PropsDrillingAndContextAPI'
import Sortcirc from './component/Sortcirc'
import "./index.css"
import { SwitchTheme } from './theme/SwitchTheme'

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
      {/* <Pokemon/> */}
      {/* <UseRefForm/> */}
      {/* <ForwardRef/> */}
      {/* <UseId/> */}
      {/* <PropsDrillingAndContextAPI/> */}
      {/* <Dataprovier>
        <Home/>
      </Dataprovier> */}
      {/* <SwitchTheme/> */}
      {/* <UseReducreCounter/> */}
      <StateCounter/>
      {/* <UseMemo/> */}
    </>
  )
}

export default App
