import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { clients } from "../data/clientsData";
import { Button, Modal } from "flowbite-react";
import "../style/page.css";

const Clients = () => {
  const { register, handleSubmit, reset } = useForm();
  const [clientList, setClientList] = useState(clients);
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (data) => {
    const newClient = { ...data, clientId: clientList.length + 1 };
    setClientList([...clientList, newClient]);
    setOpenModal(false);
    reset();
  };

  const deleteClient = (id) => {
    setClientList(clientList.filter((client) => client.clientId !== id));
  };

  const filteredClients = clientList.filter((client) =>
    client.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="flex justify-between gap-5 items-center">
        <h2 className="h2">Клиенты</h2>
        <input
            type="text"
            placeholder="Поиск по ФИО"
            className="form_input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button color="yellow" onClick={() => setOpenModal(true)}>
          Добавить клиента
        </Button>
      </div>
      
       <div className="list">
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <div key={client.clientId} className="item">
              <div className="item_list">
              <p className="item_head">ФИО: {client.fullName}</p>
              <p className="item_text">Пол: {client.gender}</p>
              <p className="item_text">Паспорт: {client.passport}</p>
              <p className="item_text">Дата рождения: {client.birthDate}</p>
              <button
                onClick={() => deleteClient(client.clientId)}
                className="btn_delete"
              >
                Удалить
              </button>
              </div>
            </div>
          ))
        ) : (
          <p>Клиенты не найдены</p>
        )}
      </div>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="mx-auto"
      >
        <Modal.Header>Добавить клиента</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="form_create">
            <input
              {...register("fullName", { required: true })}
              placeholder="ФИО"
              className="form_input"
            />
            <select
              defaultValue={"Мужской"}
              {...register("gender", { required: true })}
              className="form_input"
            >
              <option value={"Мужской"}>Мужской</option>
              <option value={"Женский"}>Женский</option>
            </select>
            <input
              {...register("passport", { required: true })}
              placeholder="Серия и номер паспорта"
              className="form_input"
            />
            <input
              {...register("birthDate", { required: true })}
              placeholder="Дата рождения"
              type="date"
              className="form_input"
            />
            <button type="submit" className="form_btn">
              Создать
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Clients;
