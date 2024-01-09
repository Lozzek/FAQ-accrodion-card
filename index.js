let questions = document.querySelectorAll('.qna');
let question = document.querySelectorAll('.question');
let arrow = document.querySelectorAll('.arrow');

document.addEventListener('DOMContentLoaded', function () {
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            let answer = this.nextElementSibling;

            answer.classList.toggle('active');
        })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    arrow.forEach(function(arr) {
        arr.addEventListener('click', function() {
            arr.classList.toggle('rotate');
        })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    question.forEach(function(q) {
        q.addEventListener('click', function() {
            q.classList.toggle('question-clicked');
        })
    })
})