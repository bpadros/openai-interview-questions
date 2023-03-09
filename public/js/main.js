function onSubmit(e) {
  e.preventDefault();

  document.querySelector(".questions").textContent = "";

  const prompt = document.querySelector("#prompt").value;

  generatequestionRequest(prompt);
}

async function generatequestionRequest(prompt) {
  try {
    const response = await fetch("/openai/generatequestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    const data = await response.json();
    const questi = data.data;
    document.querySelector(".questions").textContent = questi;
  } catch (error) {}
}

document.querySelector("#form-question").addEventListener("submit", onSubmit);
