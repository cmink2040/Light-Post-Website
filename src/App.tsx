import RequestMaker from './parts/requests'
import Workspace from './parts/workspace'

import Navbar from './theme_components/navbar'

function App() {
  return (
    <div className='bg-zinc-900 text-white h-screen'>
      <Navbar />
      <div className='flex flex-row'>
        <Workspace />
        <RequestMaker />
      </div>
     
    </div>
  )
}

export default App
