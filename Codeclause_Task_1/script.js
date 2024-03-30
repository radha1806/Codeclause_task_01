function filterBlogs(category) {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(category + "Button").classList.add("active");

  const blogs = document.querySelectorAll(".blog");

  if (category === "all") {
    blogs.forEach((blog) => {
      blog.style.display = "flex";
    });
  } else {
    blogs.forEach((blog) => {
      const blogCategory = blog.getAttribute("data-category");
      if (blogCategory === category) {
        blog.style.display = "flex";
      } else {
        blog.style.display = "none";
      }
    });
  }
}
