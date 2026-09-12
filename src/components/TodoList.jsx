import ListItem from "./ListItem";
import { useState } from "react";

function TodoList({ todos, onDeleteTodo }) {
  const [search, setSearch] = useState("");
  const filteredItems =
    todos &&
    todos.filter((item) => {
      const searchText = search.toLowerCase();
      return item.title.toLowerCase().includes(searchText);
    });

  return (
    <>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {todos && (
        <div className="container ">
          <div className="row  gy-3 gx-5  ">
            <ListItem
              deleteItem={onDeleteTodo}
              filteredItems={filteredItems}
            ></ListItem>
          </div>
        </div>
      )}
    </>
  );
}
export default TodoList;
