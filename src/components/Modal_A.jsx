import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Modal_A({
  inputTitle,
  inputBody,
  setInputTitle,
  setInputBody,
  show,
  handleClose,
  handleAddTodo,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                autoFocus
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                value={inputBody}
                onChange={(e) => setInputBody(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            href="https://react-bootstrap.netlify.app/docs/components/modal/"
            target="_blank"
            onClick={() => handleClose()}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              (handleClose(), handleAddTodo());
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal_A;
