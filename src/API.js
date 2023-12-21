const API_URL = "https://api.blog.redberryinternship.ge/api";
const TOKEN = "59cc20dfcd124d87aa8af54342e1ed9438e70473c8422d820221b5bd5945f28a";

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
