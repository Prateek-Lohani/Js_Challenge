var textarea = document.querySelector('textarea');
var counter = document.querySelector('.counter');

var limit = textarea.getAttribute('maxlength');
console.log(limit);

textarea.addEventListener("input", function () {
    counter.textContent = textarea.value.length;
    if (textarea.value.length > limit) {
        textarea.classList.add('error');
    } else {
        textarea.classList.remove('error');
    }
});

