var posts=["2024/07/10/hello-world/","2024/07/10/hello-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };