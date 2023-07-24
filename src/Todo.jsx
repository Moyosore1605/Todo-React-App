import React, { useState, useEffect, useRef } from 'react'

const Todo = () => {
    let dates
    const [hours, setHours] = useState()
    const [timer, setTimer] = useState("")
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    const [indexCounter, setIndexCounter] = useState(0)
    const [count, setCount] = useState(false)
    const [btnDisplay, setBtnDisplay] = useState("Add to the List")
    const [title, setTitle] = useState("")
    const [savedTitle, setSavedTitle] = useState("")
    const [description, setDescription] = useState("")
    const [savedDescription, setSavedDescription] = useState("")
    const [disTime, setDisTime] = useState("")
    const [savedTime, setSavedTime] = useState("")
    const [status, setStatus] = useState("Uncompleted")
    const [savedStatus, setSavedStatus] = useState("Uncompleted")
    const [userTodo, setUserTodo] = useState([])

    const [formData,setFormData] = useState({title1:'',descri1:'',timeer1:''});
    const {title1,descri1,timeer1} = formData;

    // const getCurrentTime = () => {
    //     dates = new Date()
    //     setHours(dates.getHours())
    //     setMinutes(dates.getMinutes())
    //     setSeconds(dates.getSeconds())
    //     setTimer(`${hours}:${minutes}`)
    // }
    // setInterval(() => { getCurrentTime() }, 1000)

    const onChange = (e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
        setTitle(title1)
        setDescription(descri1)
        setTimer(timeer1)
    }

    const addInfo = (event) => {
        event.preventDefault()
        if (count == false) {
            console.log(disTime);
            console.log(timer);
            if (title == "" && description == "" && disTime == "") {
                setUserTodo([...userTodo])
            }
            else {
                setUserTodo([...userTodo, { title: title, description: description, disTime: disTime, status: status }])
            }
        }
        else if (count == true) {
            setBtnDisplay("Add to the List")
            setStatus(savedStatus)
            if (title == "") {
                setTitle(savedTitle)
            }
            if (description == "") {
                setDescription(savedDescription)
            }
            if (disTime == "") {
                setDisTime(savedTime)
            }
            userTodo.splice(indexCounter, 1, { title: title, description: description, disTime: disTime, status: status })
            setUserTodo([...userTodo])
            setCount(false)
        }
        setFormData({title1:'',descri1:'',timeer1:''})
    }
    const changeTask = (params) => {
        setIndexCounter(params)
        setBtnDisplay(`Edit Info of Number ${params + 1}`)
        setSavedTitle(userTodo[indexCounter].title)
        setSavedDescription(userTodo[indexCounter].description)
        setSavedTime(userTodo[indexCounter].disTime)
        setSavedStatus(userTodo[indexCounter].status)
        setCount(true)
    }
    const completedTask = (params) => {
        userTodo[params].status = "Completed"
        setUserTodo([...userTodo])
    }
    const deleteTask = (params) => {
        userTodo.splice(params, 1)
        setUserTodo([...userTodo])
    }

    // ||
    return (
        <main>
            <div className='div1'>
                <h1>To-Do List</h1>
                <div className="div2">
                    {/* <h1 className="me-2">{hours}:{minutes}:{seconds}</h1> */}
                    <form>
                        <input id='title1' value={title1} placeholder="State the title" onChange={onChange} />
                        <input id='descri1' value={descri1} placeholder="State the description" onChange={onChange} />
                        <input id='timeer1' value={timeer1} type="time" onChange={onChange} />
                        <button className='add' onClick={addInfo}>{btnDisplay}</button>
                    </form>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Title</th>
                            <th className="descwidth">Description</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Done ?</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                </table>
                {userTodo.map((value, index) =>
                    <div className="div3" key={index}>
                        <p>{index + 1}</p>
                        <p>{value.title}</p>
                        <p className="descwidth">{value.description}</p>
                        <p>{value.disTime}</p>
                        <p>{value.status}</p>
                        <p><button className="btn-primary" onClick={() => changeTask(index)}>Edit Task</button></p>
                        <p><button className="btn-success" onClick={() => completedTask(index)}>Done</button></p>
                        <p><button className="btn-danger" onClick={() => deleteTask(index)}>Delete Task</button></p>
                    </div>
                )}
            </div>
        </main>
    )
}
export default Todo