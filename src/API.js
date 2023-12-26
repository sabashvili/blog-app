const API_URL = "https://api.blog.redberryinternship.ge/api";
const TOKEN =
  "59cc20dfcd124d87aa8af54342e1ed9438e70473c8422d820221b5bd5945f28a";

export const getCategories = () => fetch(`${API_URL}/categories`);
export const getBlogs = () =>
  fetch(`${API_URL}/blogs`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });

export const login = (loginEmail) =>
  fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      email: loginEmail,
    }),
  });

export const blogCreate = (data) => {
  fetch(`${API_URL}/blogs`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      // image: data.photo,
      author: data.author,
      publish_date: data.date,
      categories: data.category,
      email: data.authorEmail,
    }),
  });
};

// const formData = new FormData();
// formData.append("title", data.title);
// formData.append("description", data.description);
// formData.append("image", data.photo);
// formData.append("author", data.author);
// formData.append("publish_date", data.date);
// formData.append("categories", data.category);
// formData.append("email", data.authorEmail);
