document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", () => {
    const inputContainers = document.querySelectorAll(".input-container");
    let canSubmit = true;
    const user = {};
    for (const container of inputContainers) {
      const key = container.id;

      const input = container.children[2];
      const value = input.value;

      const existingErrorMsg = container.lastElementChild !== input; // error was already appended
      const errorMsg = generateErrors(key, value);

      if (!errorMsg) {
        user[key] = value;
        if (existingErrorMsg) {
          container.children[3].remove();
        }
        continue;
      }

      canSubmit = false;
      if (!existingErrorMsg) {
        const p = document.createElement("p");
        p.innerHTML = errorMsg;
        p.style.color = "red";
        container.appendChild(p);
      }
    }

    if (canSubmit) {
      document.getElementById("form").style.display = "none";
      document.getElementById("title").innerHTML = `Welcome, ${user.name}`;
    }
  });
});

function generateErrors(key, value) {
  switch (key) {
    case "name": {
      if (value.length <= 2) return "Name must be at least 3 characters long";
      break;
    }
    case "salary": {
      if (value <= 10000 || value >= 16000)
        return "Choose salary in range 10k-16k";
      break;
    }
    case "bday": {
      if (!value) return "Select Date";
      break;
    }
    case "phone": {
      if (value.length !== 10) return "Phone must be 10 digits long";
      break;
    }
    default: {
      return "an unexpected error occurred.";
    }
  }
}
