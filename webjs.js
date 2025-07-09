const products = [
    
    {
      name: "Vivo X200 Pro",
      image: "pic/vivo.jpeg",
      link:"web21.html"
    },
    {
        name: "iqoo 9 pro",
        image: "pic/iqoo.jpeg"
    },
    {
        name: "Apple 16 Pro Max",
        image: "pic/apple.jpeg"
    },
    {
        name: "Samsung S24 Ultra",
        image: "pic/samsung.jpeg"
    }
  ];
const searchBar = document.getElementById("searchBar");
    const clearBtn = document.getElementById("clearBtn");
    const searchBtn = document.getElementById("searchBtn");
    const productList = document.getElementById("productList");

    function displayProducts(filtered) {
      productList.innerHTML = "";
    
      if (filtered.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
      }
    
      filtered.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
    
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-img" style="cursor:pointer">
          <div>
            <strong>${product.name}</strong><br>
          </div>
        `;
    
        // Navigate to product page on image click
        const img = div.querySelector(".product-img");
        img.addEventListener("click", () => {
          window.location.href = product.link;
        });
    
        productList.appendChild(div);
      });
    }

    function handleSearch() {
      const search = searchBar.value.trim().toLowerCase();

      if (search === "") {
        productList.innerHTML = "<p>Please enter a product name to search.</p>";
        clearBtn.style.display = "none";
        return;
      }

      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(search)
      );
      displayProducts(filtered);
      clearBtn.style.display = "none";
    }

    searchBtn.addEventListener("click", handleSearch);

    searchBar.addEventListener("input", () => {
      clearBtn.style.display =  "none";
    });

    clearBtn.addEventListener("click", () => {
      searchBar.value = "";
      productList.innerHTML = "";
      clearBtn.style.display = "";
      searchBar.focus();
    });


