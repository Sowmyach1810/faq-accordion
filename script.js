const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", function () {

        const answer = this.nextElementSibling;

        this.classList.toggle("active");
        answer.classList.toggle("show");

        const symbol = this.querySelector("span");

        if (answer.classList.contains("show")) {
            symbol.textContent = "−";
        } else {
            symbol.textContent = "+";
        }
    });
});
