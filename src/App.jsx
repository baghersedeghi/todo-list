import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import "./App.css";
// import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Loading from "./components/Loading";
import Button from "./components/Button";
import Modal_A from "./components/Modal_A";
// import SearchBox from "./components/SearchBox";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    try {
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleAddTodo() {
    if (!inputTitle || !inputBody) return;
    const newTodo = { id: Date.now(), title: inputTitle, body: inputBody };
    setTodos([...todos, newTodo]);
    setInputTitle("");
    setInputBody("");
  }
  function handleDeleteTodo(id) {
    setTodos((prev) => prev.filter((i) => i.id !== id));
  }
  useEffect(() => {
    if (todos !== null) return;
    // console.log('fetchhhhhhh');

    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw Error("error message !!!!");

        const data = await res.json();

        const newTodos = data.map((item) => ({
          title: item.title,
          id: item.id,
          body: item.body,
        }));
        setTodos(newTodos);
      } catch (error) {
        console.log(error, "fetch catch");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });

  useEffect(() => {
    console.log("Todos updated:", todos);
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch {
      console.log("local catch");
    } finally {
      setLoading(false);
    }
  }, [todos]);
  return (
    <>
      <h1 className="fs-1 fw-bold  my-5 text-center">
        TODO LIST
      </h1>
      <div className="container">
        <div className="row ">
          <Button
            btnText="New Task "
            icon={<FaPlus />}
            onClickButton={handleShow}
            className={"btn btn-outline-success mb-4"}
          ></Button>
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
      </div>

      <Modal_A
        show={show}
        inputTitle={inputTitle}
        inputBody={inputBody}
        handleClose={handleClose}
        setInputTitle={setInputTitle}
        setInputBody={setInputBody}
        handleAddTodo={handleAddTodo}
      ></Modal_A>
      {/* <TodoForm
        inputTitle={inputTitle}
        setInputTitle={setInputTitle}
        setInputBody={setInputBody}
        handleAddTodo={handleAddTodo}
      /> */}
      <Loading loading={loading}></Loading>
    </>
  );
}

export default App;
