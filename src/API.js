const API_URL = "https://api.blog.redberryinternship.ge/api";
const TOKEN = "85332c926ac083c613553d69d6b42dd3169c4bf002bce3425e76b2ca86ae9a1f";

export const getCategories = () => fetch(`${API_URL}/categories`);
export const getBlogs = () =>
  fetch(`${API_URL}/blogs`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
