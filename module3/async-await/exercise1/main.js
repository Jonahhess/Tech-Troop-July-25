// async version
async function getUserById(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) throw new Error("Use not found");

  const user = await response.json();
  if (!user) throw new Error("Error fetching user");

  // additional error chacking for props
  if (!user.name || !user.email) throw new Error("missing details");

  console.log(`Found user: ${user.name} (${user.email})`);
  return user;
}
