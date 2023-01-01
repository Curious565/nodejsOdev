const posts = [
  { name: "Post 1", description: "Desc1" },
  { name: "Post 2", description: "Desc2" },
  { name: "Post 3", description: "Desc3" },
];

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (newPost) {
      resolve(posts.push(newPost));
    } else {
      reject("BIR HATA OLUSTU!");
    }
  });
};

const listPosts = () => posts.map((post) => console.log(post.name));

async function showPost() {
  try {
    await addPost({ name: "Post 5", description: "Desc5" });
    listPosts();
  } catch (err) {
    console.log(err);
  }
}

showPost();
