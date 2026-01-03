import ContactRow from "./ContactRow";

export default function ContactGrid({ contacts, onDelete }) {
  return (
    <div className="list">
      <div className="list-header">
        <span>Name</span>
        <span>Email</span>
        <span>Phone</span>
        <span>Actions</span>
      </div>

      {contacts.map((c) => (
        <ContactRow key={c._id} contact={c} onDelete={onDelete} />
      ))}
    </div>
  );
}
