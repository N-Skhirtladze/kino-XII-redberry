export async function signUp(credentials) {
  try {
    const response = await fetch(
      "https://api.kinoxii.redberryinternship.ge/api/register",
      {
        method: "POST",
        headers: {
          accept: "*/*",
        },
        body: credentials,
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        ok: false,
        data: data.errors || data.message || data,
      };
    }

    localStorage.setItem("token", data.data.token);

    return {
      ok: true,
      data: data.data.user,
    };
  } catch (error) {
    console.error("Registration request failed:", error);

    return {
      ok: false,
      data: "Something went wrong. Please try again.",
    };
  }
}
