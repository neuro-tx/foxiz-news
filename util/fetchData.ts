export async function getData(url: string) {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(`${URL}/${url}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
