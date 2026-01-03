import { useState } from "react";
import API from "../api";

export default function EditContactModal({ contact, onClose, onUpdate }) {
  const [form, setForm] = useState(contact);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const update = async () => {
    await API.put(`/contacts/${contact._id}`, form);
    onUpdate();
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Edit Contact</h3>

        <input name="name" value={form.name} onChange={handleChange} />
        <input name="email" value={form.email} onChange={handleChange} />
        <input name="phone" value={form.phone} onChange={handleChange} />
        <textarea name="message" value={form.message} onChange={handleChange} />

        <div className="modal-actions">
          <button className="edit" onClick={update}>Update</button>
          <button className="delete" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
