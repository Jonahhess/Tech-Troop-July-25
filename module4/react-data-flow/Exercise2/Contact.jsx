export default function Contact({ name, getConversation }) {
  return (
    <p id={`contact-${name}`} onClick={() => getConversation(name)}>
      {name}
    </p>
  );
}
