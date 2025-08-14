export default function Conversation({ conversation, getList }) {
  const namedConvo = conversation.convo.map((c) =>
    c.sender === "self"
      ? { ...c, sender: "me" }
      : { ...c, sender: conversation.with }
  );

  return (
    <>
      <h1>Conversation with: {conversation.with}</h1>
      <button onClick={getList}>Back</button>
      {namedConvo.map((c, index) => (
        <p key={index} id={index}>
          <strong>{c.sender}: </strong>
          {c.text}
        </p>
      ))}
    </>
  );
}
