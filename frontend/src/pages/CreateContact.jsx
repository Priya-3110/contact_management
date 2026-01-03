import { useState } from "react";
import axios from "axios";
import ContactForm from "../components/ContactForm";

export default function CreateContact() {
  return (
    <main className="content">
      <ContactForm />
    </main>
  );
}
