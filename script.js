document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     ELEMENTOS
  ===================================================== */

  const categoryButtons =
    document.querySelectorAll(".category");

  const menuCategories =
    document.querySelectorAll(".menu-category");

  const searchInput =
    document.getElementById("menuSearch");


  /* =====================================================
     TROCA DE CATEGORIA
  ===================================================== */

  function showCategory(categoryName) {

    categoryButtons.forEach(button => {

      const isActive =
        button.dataset.category === categoryName;

      button.classList.toggle(
        "active",
        isActive
      );

    });


    menuCategories.forEach(category => {

      const isActive =
        category.dataset.menu === categoryName;

      category.classList.toggle(
        "active-category",
        isActive
      );

    });


    /* Limpa pesquisa ao trocar categoria */

    if (searchInput) {

      searchInput.value = "";

      document
        .querySelectorAll(".menu-item")
        .forEach(item => {

          item.style.display = "";

        });

    }

  }


  /* =====================================================
     CLIQUE NAS CATEGORIAS
  ===================================================== */

  categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

      const category =
        button.dataset.category;

      showCategory(category);

    });

  });


  /* =====================================================
     BUSCA NO CARDÁPIO
  ===================================================== */

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      () => {

        const searchTerm =
          searchInput.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();


        /* Sem pesquisa */

        if (!searchTerm) {

          showCategory("petiscos");

          return;

        }


        /* Remove categoria ativa */

        categoryButtons.forEach(button => {

          button.classList.remove("active");

        });


        let foundSomething = false;


        menuCategories.forEach(category => {

          let categoryHasResult = false;


          const items =
            category.querySelectorAll(".menu-item");


          items.forEach(item => {

            const itemText =
              item.textContent
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");


            const matches =
              itemText.includes(searchTerm);


            item.style.display =
              matches ? "" : "none";


            if (matches) {

              categoryHasResult = true;

              foundSomething = true;

            }

          });


          category.classList.toggle(
            "active-category",
            categoryHasResult
          );

        });


        /* =================================================
           NENHUM RESULTADO
        ================================================= */

        let noResults =
          document.querySelector(".menu-no-results");


        if (!foundSomething) {

          if (!noResults) {

            noResults =
              document.createElement("div");

            noResults.className =
              "menu-no-results";

            noResults.innerHTML = `
              <strong>Nenhum item encontrado.</strong>
              <span>Tente pesquisar por outro termo.</span>
            `;

            noResults.style.padding =
              "40px 0";

            noResults.style.color =
              "rgba(255,255,255,.55)";

            noResults.style.display =
              "flex";

            noResults.style.flexDirection =
              "column";

            noResults.style.gap =
              "8px";

            document
              .querySelector(".menu-content")
              .appendChild(noResults);

          }

          noResults.style.display =
            "flex";

        } else {

          if (noResults) {

            noResults.style.display =
              "none";

          }

        }

      }
    );

  }


  /* =====================================================
     NAVEGAÇÃO SUAVE
  ===================================================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener("click", event => {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(targetId);


        if (!target) {
          return;
        }


        event.preventDefault();


        const headerHeight =
          document
            .querySelector(".header")
            ?.offsetHeight || 0;


        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;


        window.scrollTo({

          top: targetPosition,

          behavior: "smooth"

        });

      });

    });


  /* =====================================================
     HEADER AO ROLAR
  ===================================================== */

  const header =
    document.querySelector(".header");


  let lastScroll =
    window.scrollY;


  window.addEventListener(
    "scroll",
    () => {

      const currentScroll =
        window.scrollY;


      if (!header) {
        return;
      }


      if (currentScroll > 50) {

        header.classList.add(
          "header-scrolled"
        );

      } else {

        header.classList.remove(
          "header-scrolled"
        );

      }


      lastScroll =
        currentScroll;

    },
    { passive: true }
  );


  /* =====================================================
     REVELAÇÃO DAS SEÇÕES
  ===================================================== */

  const revealElements =
    document.querySelectorAll(
      ".section-heading, .experience-card, .menu-item, .gallery-photo, .contact-content, .contact-links"
    );
