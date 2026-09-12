// import Card from "react-bootstrap/Card";
import Button from "./Button";

function ListItem({ deleteItem, filteredItems }) {
  console.log(filteredItems, "fikl");
  return (
    <>
      {filteredItems &&
        filteredItems.map((item) => {
          return (
            <>
              <div className="col-sm-6 mb-3" key={item.id}>
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title title-clamp">{item.title}</h5>

                    <p className="card-text line-clamp-3">{item.body}</p>
                    <Button
                      btnText="Delete Task"
                      className={"btn btn-danger mt-auto align-self-start"}
                      onClickButton={() => deleteItem(item.id)}
                    ></Button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
export default ListItem;
