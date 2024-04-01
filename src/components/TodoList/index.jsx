import React from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import Modal from "./Modal";

import { useSelector } from "react-redux";

const TodoList = () => {
  const { isOpenModal } = useSelector((state) => state.todo);

  return (
    <>
      {isOpenModal && <Modal />}
      {/* background */}
      <div className="min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 dark:from-gray-700 dark:via-gray-900 dark:to-black pt-16 sm:pt-24 font-nunito">
        <div className="bg-cyan-200 flex flex-col-reverse sm:flex-row justify-center w-11/12 sm:w-5/6 md:w-2/3 mx-auto rounded-br-3xl rounded-tl-3xl shadow-2xl dark:bg-slate-800 dark:shadow-cyan-500	dark:shadow-md ">

          <div className="w-full sm:w-2/3 p-5 md:p-7 dark:text-custom-white">
            <TodoForm />
            <TodoItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
