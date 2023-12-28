const API_URL = "https://api.blog.redberryinternship.ge/api";
// const TOKEN =
//   "59cc20dfcd124d87aa8af54342e1ed9438e70473c8422d820221b5bd5945f28a";
const TOKEN =
  "f41b884660edc6f431d281e8600458db83c2efe3aab2a331f1e35170a9f32732";

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
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("image", data.photo);
  formData.append("author", data.author);
  formData.append("publish_date", data.date);
  formData.append("categories", `[${data.category.toString()}]`);
  formData.append("email", data.authorEmail);

  return fetch(`${API_URL}/blogs`, {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: formData,
  });
};

export const getCurBlog = (id) =>
  fetch(`${API_URL}/blogs/${id}`, {
    headers: { Authorization: `Bearer ${TOKEN}`, accept: "application/json" },
  });
