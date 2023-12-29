// TODO: Remove token from here
const TOKEN = "r8_CaA6QDMruhGxtwAAKcTKnccQdDfMaVw2ZxDWH";

export default async function ask(prompt: string) {
  const response = await fetch("/chat", {
    method: "POST",
    headers: {
      Authorization: `Token ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      version:
        "02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",

      input: { prompt: prompt },
    }),
  });

  if (response.status !== 201) {
    const error = await response.json();
    return error;
  }

  const prediction = await response.json();
  const id = prediction.id;
  console.log("qqq", prediction.urls.get);
  return getResults(id);
}

async function getResults(id: string) {
  const response = await fetch("/chat/" + id, {
    method: "POST",
    headers: {
      Authorization: `Token ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 201) {
    const error = await response.json();
    return error;
  }

  const result = await response.json();
  console.log("qqq", result);
  return result;
}
