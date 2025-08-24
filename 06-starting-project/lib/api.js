const API_BASE_URL = "http://localhost:8080";

export async function getNews() {
  try {
    const response = await fetch(`${API_BASE_URL}/news`);
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

export async function getNewsBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch article");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching news by slug:", error);
    throw error;
  }
}
