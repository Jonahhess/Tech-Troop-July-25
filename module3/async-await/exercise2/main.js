// Starter code structure:
async function getUserWithPosts(userId) {
  if (typeof userId !== "number" || Number.isNaN(userId))
    throw new Error("bad user id");

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) throw new Error("no response");

  const user = await response.json();
  if (!user) throw new Error("no user");

  const getPosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!getPosts.ok) throw new Error("could not get posts");

  const posts = await getPosts.json();
  // user may have no posts. that's okay. expect to return []

  return { user, posts };
}
