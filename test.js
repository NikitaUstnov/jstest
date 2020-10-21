const inpNameRef = document.querySelector('form')
const inpCommentRef = document.querySelector('textarea')

// const subBtnEl = document.querySelector('.sub-btn')
 const resBtnEl = document.querySelector('.res-btn')

inpCommentRef.addEventListener('input', saveInpText)
inpNameRef.addEventListener('submit', sendTextEl)

savedTextEl()

function saveInpText(evt) {
    const message = evt.target.value
    localStorage.setItem('comment-msg', message)
}

function sendTextEl(evt) {
    evt.preventDefault()
    evt.currentTarget.reset()
    localStorage.removeItem('comment-msg')
}

function savedTextEl(evt) {
    const savedText = localStorage.getItem('comment-msg')

    if (savedText) {
       inpCommentRef.value = savedText
    }  
}

resBtnEl.addEventListener('click', onResBtnClick)

function onResBtnClick() {
    if (confirm("не нажимай сюда больше. напиши OK, ксли понял")) {
	
	alert("молодец");
	}
else {
        alert("все с тобой понятно");
        window.top.close()
	}
   
}