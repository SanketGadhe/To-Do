import React, { useContext, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Tasks from "./Tasks";

const Form = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [tasks, settasks] = useState([]);
  const handelform = (e) => {
    e.preventDefault();
    settasks([...tasks, { title, desc }]);
    settitle("");
    setdesc("");
  };
  return (
    <div>
      <form className="m-6 flex" onSubmit={handelform}>
        <input
          type="text"
          placeholder="Enter Task Title"
          name="title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="font-bold text-xl p-1 m-2"
        />
        <input
          type="text"
          placeholder="Enter Task Detail"
          name="desc"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          className="font-bold text-xl p-1 m-2"
        />
        <button className="border-zinc-900 bg-zinc-600 font-bold text-xl border-2 mx-5 rounded px-4 py-2 flex items-center justify-corner">
          Add Task <IoAddCircleOutline />
        </button>
       
      </form>
      <ul>
      <Tasks tasks={tasks} settasks={settasks}/>
      </ul>
    </div>

  );
};

export default Form;
