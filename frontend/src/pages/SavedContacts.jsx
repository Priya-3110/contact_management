import { useEffect, useState } from "react";
import axios from "axios";
import ContactGrid from "../components/ContactGrid";

export default function SavedContacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // 🔍 Filter logic
  const filteredContacts = contacts.filter((c) =>
    `${c.name} ${c.email} ${c.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="content">
      <div className="saved-header">
        <h2>Saved Contacts</h2>

        <input
          className="search-input"
          type="text"
          placeholder="Search by name, email or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ContactGrid
        contacts={filteredContacts}
        onDelete={fetchContacts}
      />
    </main>
  );
}
