import React, { ChangeEvent, FC, useState } from "react";
import { Data, inputF } from "../interfaces/Interfaces";
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from "../Actions/Actions";
import { RootState } from "../store/store";

const TodoTask: FC = () => {
  const dispatch = useDispatch()
  let task: Data[] = useSelector((state: RootState) => {
    return state.allReducers.todo['task'];
  });
  // console.log(task)

  const [data, setData] = useState<Data>({
    task: "", deadline: 0, id: 0
  })
  const [id, setID] = useState<number>(0);
  const [todoList, setTodoList] = useState<Data[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: inputF = e.target;
    setData(ev => ({
      ...ev,
      [name]: value,
    }))
  };

  const addTask = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    if (!isEdit && data.task !== '' && data.deadline !== 0) {
      const newTask: Data = { task: data.task, deadline: data.deadline, id: task.length + 1 };
      dispatch(addTodo(newTask))
      setData({
        task: "", deadline: 0, id: 0
      })
    } else {
      const newEditTask: Data = { task: data.task, deadline: data.deadline, id: Number(id) };
      dispatch(editTodo(newEditTask))
      setData({
        task: "", deadline: 0, id: 0
      })
      setIsEdit(false)
    }
  };

  const deleteTask = (taskId: number): void => {
    dispatch(deleteTodo(taskId))
  };

  const EditTask = (taskId: number)=> {
    const ind = task.findIndex((tasks) => (tasks.id === taskId))
    setID(taskId)
    setData({
      task: task[ind].task,
      deadline: task[ind].deadline,
      id: task[ind].id
    })
    setIsEdit(true)
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" name="task" onChange={changeHandler} value={data.task} placeholder="Task..." />
          <input type="number" name="deadline" onChange={changeHandler} value={data.deadline} placeholder="Deadline (in Days)..." />
        </div>
        {
          isEdit ?
            <button onClick={addTask}>Update</button>
            :
            <button onClick={addTask}>Add Task</button>
        }
      </div>
      <div className="todoList">
        {task.map((task: Data, key: number) => {
          return (
            <div className="task" key={key}>
              <div className="content">
                <span>{key + 1}</span>
                <span>{task.task}</span>
                <span>{task.deadline} {task.deadline > 1 ? "days" : "day"} </span>
              </div>
              <button onClick={() => { deleteTask(task.id); }}>X</button>
              <button onClick={() => { EditTask(task.id); }}>edit</button>
            </div>);
        })}
      </div>
    </div>
  );
};

export default TodoTask;
