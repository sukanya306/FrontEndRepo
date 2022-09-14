

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import FormUser from './Components/FormUser';
import MyProfile_Student from './Components/MyProfile_Student';
import StudentPage from './Components/StudentPage';


function App() {
  return (

    <div>
      <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<FormUser/>}/>
        <Route exact path="/StudentPage" element={<StudentPage/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path='/MyProfile' element={<MyProfile_Student/>}/>
      </Routes>
      
      
      </BrowserRouter>
       {/* <FormUser heading="Welcome Back! "/>  */}

      {/* <StudentPage/> */}
    </div>
  );
}

export default App;
