import { useState } from "react";
import axios from "axios";
import EditContactModal from "./EditContactModal";

export default function ContactRow({ contact, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const remove = async () => {
    await axios.delete(`http://localhost:5000/api/contacts/${contact._id}`);
    onDelete();
  };

  return (
    <>
      <div className="list-row">
        <span>{contact.name}</span>
        <span>{contact.email || "-"}</span>
        <span>{contact.phone}</span>

        <div className="row-actions">
          <button className="edit" onClick={() => setShowEdit(true)}>
            Edit
          </button>
          <button className="delete" onClick={remove}>
            Delete
          </button>
        </div>
      </div>

      {showEdit && (
        <EditContactModal
          contact={contact}
          onClose={() => setShowEdit(false)}
          onUpdate={onDelete}
        />
      )}
    </>
  );
}
