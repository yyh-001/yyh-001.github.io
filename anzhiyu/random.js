var posts=["2024/07/10/hello-md/","2024/07/10/开发文档/","2024/07/10/【jetson笔记】ubuntu设置代理解决访问github问题/","2024/07/10/1000题/","2024/07/10/高数/","2024/07/10/飞机预警模型/","2024/07/10/敏感词软件使用说明/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };