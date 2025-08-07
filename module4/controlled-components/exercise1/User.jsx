import { useState } from "react";

export default function User() {
  // note: a map is used here to keep the array items in specified order
  const data = new Map([
    ["fullname", ""],
    ["age", ""],
  ]);
  const [user, setUser] = useState(data);

  const updateUser = (event) => {
    const newUser = new Map(user);
    newUser.set(event.target.name, event.target.value);
    setUser(newUser);
  };

  const submitUser = () => {
    alert(Array.from(user.entries()).map(([key, value]) => `${key}: ${value}`));
  };

  return (
    <>
      <h1>User Settings</h1>
      {Array.from(user.entries()).map(([key, value]) => (
        <div key={key} id={key} className="user-prop">
          <label htmlFor={key}>{key}</label>
          <input
            type="text"
            id={key}
            name={key}
            value={value}
            onChange={updateUser}
          />
        </div>
      ))}
      <button id="submit" onClick={submitUser}>
        Submit User
      </button>
    </>
  );
}
