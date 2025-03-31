var ul = document.getElementById("ul_pr");

function add(id) {
    var li_new = document.createElement("li");
    var li_inp = document.createTextNode(id);
    li_new.appendChild(li_inp);
    ul.appendChild(li_new);
    ul.appendChild(document.createElement("br"));
}

// Function to clear cart
window.emptyList = function () {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
};

// Dropdown Menu Functionality
document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent bubbling

            // Toggle active class on current dropdown
            dropdown.classList.toggle("active");

            // Close other dropdowns
            dropdowns.forEach((otherDropdown) => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove("active");
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
        }
    });
});
