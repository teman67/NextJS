const API_BASE_URL = "http://localhost:8080";

export async function getNews(filters = {}) {
  try {
    const searchParams = new URLSearchParams();

    if (filters.year) {
      searchParams.append("year", filters.year);
    }

    if (filters.month) {
      searchParams.append("month", filters.month);
    }

    const url = searchParams.toString()
      ? `${API_BASE_URL}/news?${searchParams.toString()}`
      : `${API_BASE_URL}/news`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

export async function getFilterOptions() {
  try {
    const response = await fetch(`${API_BASE_URL}/news/filters/options`);
    if (!response.ok) {
      throw new Error("Failed to fetch filter options");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching filter options:", error);
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
