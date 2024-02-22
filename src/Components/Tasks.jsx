import React from "react";

const Tasks = ( {tasks, settasks }) => {
  const deletehandler=(i)=>{
    const copytasks=[...tasks]
    copytasks.splice(i,1);
    settasks(copytasks)
    console.log(copytasks)

  }
  if (tasks.length > 0) {
    return (
      <div key={1} className="bg-zinc-700 w-full h-80">
        <ul>
        {tasks.map((task, i) => {
          return (
            <>
              <li key={i} className="flex m-3 justify-between items-center ">
                <h5 className="font-bold text-2xl">{task.title} </h5>
                <h6 className="font-semibold text-xl">{task.desc}</h6>{" "}
                <button onClick={()=>{
                  deletehandler(i)
                }} className="bg-red-600 px-4 py-2 font-bold text-white">Delete</button>
              </li>
            </>
          );
        })}
        </ul>
      </div>
    );
  }
  else{
return (
  <>
  <div key={2} className="bg-zinc-700 w-full h-80">
  <h5 className="font-bold text-2xl">No Task to do</h5></div>
  </>
)
  }
};

export default Tasks;
