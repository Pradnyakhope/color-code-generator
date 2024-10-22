let container = document.querySelector(".container");

    // Function to generate random hex color
    function randomColor() {
        let letters = '0123456789ABCDEF';
        let colorCode = "";
        for (let i = 0; i < 6; i++) {
            let randomNumber = Math.floor(Math.random() * letters.length);
            colorCode += letters[randomNumber];
        }
        return colorCode;
    }

    // Loop to create 30 random color divs
    for (let i = 1; i <= 300; i++) {
        let div = document.createElement("div");
        let newColor = randomColor();
        div.classList.add("color-container");
        div.innerText = "#" + newColor;
        div.style.background = "#" + newColor;

        // Create copy button
        let copyBtn = document.createElement("button");
        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        copyBtn.setAttribute("data-color", newColor);
        copyBtn.classList.add("copy-btn");

        // Append button to the div
        div.appendChild(copyBtn);
        container.appendChild(div);
    }

    // Add event listener for the copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            let color = btn.getAttribute("data-color");  // Get color from the data attribute
            navigator.clipboard.writeText("#" + color).then(() => {
                alert("Copied: #" + color);
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        });
    });