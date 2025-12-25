fetch("patchnotes.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("patch-list");

    data.forEach(post => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${post.link}">
          <strong>${post.title}</strong>
          <span>${post.date}</span>
        </a>
      `;
      list.appendChild(li);
    });
  });
