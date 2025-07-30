async function getAllData() {
  const getUsers = fetch("https://jsonplaceholder.typicode.com/users");
  const getPosts = fetch("https://jsonplaceholder.typicode.com/posts");
  const getComments = fetch("https://jsonplaceholder.typicode.com/comments");

  const results = await Promise.all([getUsers, getPosts, getComments]);
  if (results.some((res) => !res.ok)) throw new Error("failed to get data");

  const [resUsers, resPosts, resComments] = results;
  const users = resUsers.json();
  const posts = resPosts.json();
  const comments = resComments.json();

  return await Promise.all([users, posts, comments]);
}

const summaryDashboard = async () => {
  const [users, posts, comments] = await getAllData();
  const totalUsers = users.length;
  const totalPosts = posts.length;
  const totalComments = comments.length;
  const avgPostPerUser = totalPosts / totalUsers; // consider using Math.floor()
  const avgCommentsPerPost = totalComments / totalPosts;

  const summary = {
    totalUsers,
    totalPosts,
    totalComments,
    avgPostPerUser,
    avgCommentsPerPost,
  };

  // top 3 users info
  const commentsPerPost = comments.reduce((ac, comment) => {
    ac[comment.postId] = ac[comment.postId] + 1 || 1;
    return ac;
  }, {});

  const commentsPerUser = posts.reduce((ac, post) => {
    ac[post.userId] =
      ac[post.userId] + commentsPerPost[post.id] || commentsPerPost[post.id];
    return ac;
  }, {});

  const postsPerUserId = posts.reduce((ac, post) => {
    ac[post.userId] = ac[post.userId] + 1 || 1;
    return ac;
  }, {});

  const topThreeUsersyPostCount = Object.entries(postsPerUserId)
    .sort(([, a], [, b]) => a - b) // sort by value
    .map(([u]) => u) // retrieve name
    .slice(0, 3); // get top 3 of list

  const topThreeData = topThreeUsersyPostCount.map((id) => {
    return {
      name: users.filter((u) => u.id == id)[0].name,
      postCount: postsPerUserId[id],
      commentCount: commentsPerUser[id],
    };
  });

  // helper fn
  const isSorted = (arr) => arr.every((v, i, a) => !i || a[i - 1] <= v);

  // 5 more recent posts
  let topFivePosts;
  if (posts.length <= 5) {
    topFivePosts = posts;
  } else if (isSorted(posts)) {
    topFivePosts = posts.slice(-5);
  } else {
    let sortedArr = posts.slice(0, 5).sort((a, b) => b.id - a.id);
    for (const post of posts.slice(5)) {
      if (post.id > sortedArr[0]) {
        sortedArr[0] = post;
        sortedArr = sortedArr.sort((a, b) => b.id - a.id);
      }
    }

    topFivePosts = sortedArr;
  }

  return { summary, topThreeData, topFivePosts };
};

summaryDashboard().then((summary) => console.log(summary));
