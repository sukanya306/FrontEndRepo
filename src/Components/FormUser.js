import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import classes from './Home.module.css'
import studentImage from '../Pictures/student.png'
import { useNavigate } from 'react-router-dom'
import StudentPage from './StudentPage';
import { ToastContainer, toast } from 'react-toastify'
import axios from "axios"
export default function FormUser() {
  // useNavigate will contain the hostory of pages
  const navigate = useNavigate()
  const res = null
  const [userid, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const userid_check = localStorage.getItem("USERID")
  const password_check = localStorage.getItem("Password")

  const handlesubmit = () => {
    localStorage.setItem("USERID", userid)
    localStorage.setItem("Password", password)
    console.log(userid_check)
    console.log(password_check)


  }
  const handleClick = async (e) => {
    e.preventDefault()
    // const Student = { userid, password }
    console.log(userid, password)
    //  navigate('./StudentPage')

    // fetch("http://localhost:9090/student/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(Student)
    // }).then(() => {
    //   console.log("New Student Added")
    // })

    res = await axios.post("http://localhost:9090/student/add", { userid: userid, password: password, role: role })
      .then((response) => {
        console.log(response)
        if (res.response) {
          navigate('./StudentPage')
        }
        else {
          toast("Please login")
        }
      })
    // console.log(res.response)


  }

  return (
    <div>
      <div>
        <header className={classes.header}></header>

        {/* {res?<h1>hello</h1>:<h1>bye</h1>} */}
        {/* {userid_check && password_check ? toast("Login successfull"): */}

        <Form className={classes.form} onSubmit={handlesubmit}>
          <header >

            <div style={{ fontSize: "28px", marginLeft: "65px" }}>Welcome Back!<br></br>LogIn Here
            </div>
          </header>

          <FormGroup row>
            <Label for="userid" sm={4}>UserId&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
            {/* <Input invalid/> */}
            <Col sm={7}>
              <Input {...{ required: true }} type="text" name="userid" id="userid"
                value={userid}
                onChange={(e) => setUserId(e.target.value)} />
            </Col>
            {/* <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback> */}
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={4}>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
            <Col sm={7}>
              <Input required type="password" name="password" id="examplePassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup tag="fieldset">
            <FormGroup row check>
              <Label check sm={5}>
                {/* <Col sm={10}> */}
                <Input type="radio" name="radio1" value="student" id="student" style={{ marginRight: "10px" }} required />{' '}
                {/* </Col> */}
                Student&nbsp;&nbsp;&nbsp;
              </Label>
              {/* </FormGroup>
            <FormGroup row check> */}
              <Label check sm={2}>
                {/* <Col sm={10}> */}
                <Input type="radio" name="radio1" value="admin" id="admin" style={{ marginRight: "10px" }} required />{' '}
                {/* </Col> */}
                Admin
              </Label>
            </FormGroup>

          </FormGroup>

          <Button style={{ background: "rgba(52, 95, 62, 0.8)" }} onClick={handleClick}>Submit</Button>
        </Form>
        {/* } */}
      </div>
      <div className={classes.image}>
        <img src={studentImage} className="rounded float-end" alt='' style={{ width: "700px" }}></img>
      </div>

    </div>
  )





}






