export default function App() {
  const showCompany = (name, revenue) => (
    <div id={name}>
      {name} makes {revenue} every year
    </div>
  );

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map(({ name, revenue }) => showCompany(name, revenue))}
      </div>
    </div>
  );
}
