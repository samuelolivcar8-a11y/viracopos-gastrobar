const categoryButtons = document.querySelectorAll(".category");
const menuCategories = document.querySelectorAll(".menu-category");
const searchInput = document.getElementById("menuSearch");

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {

    categoryButtons.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.category;

    menuCategories.forEach(section => {
      section.classList.remove("active-category");

      if (section.dataset.menu === category) {
        section.classList.add("active-category");
      }
    });

    if (searchInput) {
      searchInput.value = "";
      clearSearch();
    }
  });
});


function clearSearch() {
  document.querySelectorAll(".menu-item").forEach(item => {
    item.style.display = "";
  });
}


if (searchInput) {

  searchInput.addEventListener("input", () => {

    const search = searchInput.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const visibleCategory = document.querySelector(
      ".menu-category.active-category"
    );

    if (!visibleCategory) return;

    visibleCategory.querySelectorAll(".menu-item").forEach(item => {

      const text = item.textContent
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      item.style.display =
        text.includes(search) ? "" : "none";
    });

  });

}
