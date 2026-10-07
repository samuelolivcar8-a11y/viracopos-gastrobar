const buttons = document.querySelectorAll(".category");
const categories = document.querySelectorAll(".menu-category");
const search = document.getElementById("menuSearch");

function showCategory(name) {
  categories.forEach(category => {
    category.classList.toggle(
      "active-category",
      category.dataset.menu === name
    );
  });

  buttons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === name
    );
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    showCategory(button.dataset.category);

    if (search) {
      search.value = "";
      document.querySelectorAll(".menu-item").forEach(item => {
        item.style.display = "";
      });
    }
  });
});


if (search) {

  search.addEventListener("input", () => {

    const term = search.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (!term) {
      showCategory("petiscos");

      document.querySelectorAll(".menu-item").forEach(item => {
        item.style.display = "";
      });

      return;
    }

    buttons.forEach(button => {
      button.classList.remove("active");
    });

    categories.forEach(category => {

      let found = false;

      category.querySelectorAll(".menu-item").forEach(item => {

        const text = item.textContent
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        const match = text.includes(term);

        item.style.display = match ? "" : "none";

        if (match) {
          found = true;
        }

      });

      category.classList.toggle("active-category", found);

    });

  });

}
