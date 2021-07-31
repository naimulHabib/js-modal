'use strict';


const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')
const btnsOpneModal = document.querySelectorAll('.show-modal')

for(let i = 0; i<btnsOpneModal.length; i++)
    btnsOpneModal[i].addEventListener('click',function(){

    console.log("Clicked")
    modal.classList.remove("hidden");
    // overlay.classList.remove('hidden')
    });


closeModal.addEventListener('click',function(){
    modal.classList.add('hidden')
    // overlay.classList.add('hidden')
});
overlay.addEventListener('click',function(){
    modal.classList.add('hidden')
    // overlay.classList.add('hidden')
});

