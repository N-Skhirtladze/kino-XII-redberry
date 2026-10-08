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

export async function getSearchedMoveis(name) {
  try {
    const response = await fetch(
      `https://api.kinoxii.redberryinternship.ge/api/search?q=${name}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch searched movies");
    }

    const data = await response.json();
    console.log("Searched movie fetched successfully: ", data);
    return data.data;
  } catch (error) {
    console.log("Error fetching searched movies: ", error);
    return [];
  }
}

export async function getNowPlaying() {
  try {
    const response = await fetch(
      "https://api.kinoxii.redberryinternship.ge/api/movies/now-playing",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch 'Now Playing' movies");
    }
    const data = await response.json();
    console.log("'Now Playing' movies fetched successfully:", data);
    return data.data;
  } catch (error) {
    console.error("Error fetching 'Now Playing' movies:", error);
    return [];
  }
}

export async function getComingSoon() {
  try {
    const response = await fetch(
      "https://api.kinoxii.redberryinternship.ge/api/movies/coming-soon",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch 'Coming Soon' movies");
    }
    const data = await response.json();
    console.log("'Coming Soon' movies fetched successfully:", data);
    return data.data;
  } catch (error) {
    console.error("Error fetching 'Coming Soon' movies:", error);
    return [];
  }
}
