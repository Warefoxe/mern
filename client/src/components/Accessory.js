import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Accessory({ accessory }) {
  const [quanity, setquanity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ margin: "70px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{accessory.name}</h1>
        <img
          src={accessory.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
          alt=""
        />
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <p>Кількість</p>
          <select
            className="form-control"
            value={quanity}
            onChange={(e) => {
              setquanity(e.target.value);
            }}
          >
            {[...Array(5).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">Ціна: {accessory.price * quanity}</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn">Додати до корзини</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{accessory.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={accessory.image} className="img-fluid"
          style={{ height: "400px" }}
          alt="" />
          <p>{accessory.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn">Закрити</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
