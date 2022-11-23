import * as React from "react";
import "./task-manager.css";
import { useGetAllTaskQuery } from "../api/api";

export const TodoTask = () => {
  const { data, isLoading, isError, isFetching } = useGetAllTaskQuery();
  console.log(data);

  return (
    <div className="mainComponent">
      <div className="todo-list">
        <h1>Todo Task</h1>
      </div>

      <div className="input_field">
        <input type="text" placeholder="Enter Your Task" />
        <button type="submit">Send</button>
      </div>

      <div>
        <ul>
          <li>
            {data?.task?.map((item) => {
              return <p style={{color:'black'}}>{item.task}</p>;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};
