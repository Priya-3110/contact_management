import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const isValid =
    form.name.trim() &&
    form.phone.trim() &&
    (!form.email || /\S+@\S+\.\S+/.test(form.email));

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacts", form);
    setForm({ name: "", email: "", phone: "", message: "" });
    setSuccess("Contact saved successfully!");
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <h2>Create Contact</h2>
        <button disabled={!isValid} onClick={submit}>
          Save Contact
        </button>
      </div>

      <div className="form-grid">
        <input name="name" placeholder="Name *" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone *" value={form.phone} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />
      </div>

      {success && <p className="success">{success}</p>}
    </div>
  );
}
