import axios from "axios";

export default function ContactCard({ contact, onDelete }) {
  const remove = async () => {
    await axios.delete(`http://localhost:5000/api/contacts/${contact._id}`);
    onDelete();
  };

  return (
    <div className="contact-card">
      <div className="avatar"></div>

      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email || "-"}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>

      <div className="card-actions">
        <button className="edit">Edit</button>
        <button className="delete" onClick={remove}>Delete</button>
      </div>
    </div>
  );
}
