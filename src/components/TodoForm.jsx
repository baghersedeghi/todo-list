function TodoForm({
  inputTitle,
  inputBody,
  setInputTitle,
  setInputBody,
  handleAddTodo,
}) {
  return (
    <>
      <div className="d-flex flex-column gap-3 mb-5">
        <label
          htmlFor="title "
          className="form-label fw-bold fs-1 lh-1 m-2 p-2 d-flex"
        >
          Label:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          className="form-control w-50 "
        />
        <textarea
          type="text"
          id="body"
          name="body"
          value={inputBody}
          onChange={(e) => setInputBody(e.target.value)}
          className="form-control   w-50 "
        ></textarea>
        <button
          type="button"
          className="btn btn-primary p-2 m-2"
          onClick={handleAddTodo}
        >
          add todo
        </button>
      </div>
    </>
  );
}
export default TodoForm;
