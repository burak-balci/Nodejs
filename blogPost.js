const posts = [
  { id: 1, desc: "Blog 1" },
  { id: 2, desc: "Blog 2" },
  { id: 3, desc: "Blog 3" },
];

const listPosts = () => {
  console.log("Posts");
  posts.map((post) => {
    console.log(post.desc);
  });
};

const addPost = (post) => {
  posts.push(post);
};

const processPost = async () => {
  try {
    await addPost({ id: 4, desc: "Blog 4" });
    listPosts();
  } catch (error) {
    console.log(error);
  }
};

processPost();
