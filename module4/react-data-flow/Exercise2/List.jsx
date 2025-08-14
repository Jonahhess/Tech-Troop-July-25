import Contact from "./Contact";

export default function List({ contacts, getConversation }) {
  return contacts.map((c) => (
    <Contact name={c} key={c} getConversation={getConversation}></Contact>
  ));
}
