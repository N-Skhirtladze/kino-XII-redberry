export async function getHeroMovies() {
  try {
    const response = await fetch(
      "https://api.kinoxii.redberryinternship.ge/api/movies/featured",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch hero movies");
    }
    const data = await response.json();
    console.log("Hero movies fetched successfully:", data);
    return data.data;
  } catch (error) {
    console.error("Error fetching hero movies:", error);
    return [];
  }
}
