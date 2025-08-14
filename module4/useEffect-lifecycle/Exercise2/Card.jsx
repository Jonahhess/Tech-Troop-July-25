export default function Card({ obj }) {
  return (
    <div key={obj.id} className="card">
      <h1>Title: {obj.title}</h1>
      <p>{obj.body}</p>
    </div>
  );
}
