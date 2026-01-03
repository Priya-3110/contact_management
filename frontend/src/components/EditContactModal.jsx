import { useState } from "react";
import axios from "axios";

export default function EditContactModal({ contact, onClose, onUpdate }) {
  const [form, setForm] = useState({
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    message: contact.message || "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    await axios.put(
      `http://localhost:5000/api/contacts/${contact._id}`,
      form
    );
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
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
        />

        <div className="modal-actions">
          <button className="edit" onClick={submit}>Update</button>
          <button className="delete" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
