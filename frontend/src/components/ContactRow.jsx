import { useState } from "react";
import API from "../api";
import EditContactModal from "./EditContactModal";

export default function ContactRow({ contact, onDelete }) {
  const [edit, setEdit] = useState(false);

  const remove = async () => {
    await API.delete(`/contacts/${contact._id}`);
    onDelete();
  };

  return (
    <>
      <div className="list-row">
        <span>{contact.name}</span>
        <span>{contact.email || "-"}</span>
        <span>{contact.phone}</span>

        <div className="row-actions">
          <button className="edit" onClick={() => setEdit(true)}>
            Edit
          </button>
          <button className="delete" onClick={remove}>
            Delete
          </button>
        </div>
      </div>

      {edit && (
        <EditContactModal
          contact={contact}
          onClose={() => setEdit(false)}
          onUpdate={onDelete}
        />
      )}
    </>
  );
}
