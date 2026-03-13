document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");
  const body = document.body;

  if (hamburgerMenu && sidebar) {
    hamburgerMenu.addEventListener("click", () => {
      sidebar.classList.toggle("closed");
      body.classList.toggle("sidebar-closed");
    });
  }

  const categories = document.querySelectorAll(".category-pill");
  categories.forEach((category) => {
    category.addEventListener("click", () => {
      const activeBtn = document.querySelector(".category-pill.active");
      if (activeBtn) activeBtn.classList.remove("active");
      category.classList.add("active");
    });
  });

  const searchInput = document.querySelector(".search-bar");
  const searchBtn = document.querySelector(".search-button");

  const handleSearch = () => {
    if (searchInput.value.trim() !== "") {
      console.log("Searching for:", searchInput.value);
    }
  };

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", handleSearch);
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleSearch();
    });
  }
});
