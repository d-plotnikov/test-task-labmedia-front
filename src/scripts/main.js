"use strict";

let searchInput = document.querySelector('.js-search-input'),
    searchResetBtn = document.querySelector('.js-search-reset-btn'),
    sortableBtnDate = document.querySelector('.js-sortable-btn-date'),
    sortableBtnRating = document.querySelector('.js-sortable-btn-rating'),
    modal = document.querySelector('.js-modal'),
    modalBtn = document.querySelectorAll('.js-modal-btn'),
    template = document.querySelector('#template').content.querySelector('tr'),
    element = document.querySelector('.js-users'),
    pageCounter = document.querySelector('#template2').content.querySelector('li'),
    pagination = document.querySelector('.js-pagination'),
    userData,
    perPage = 5,
    keyUser = 0,
    countPage = 0,
    userList,
    userSearch

setTimeout(() => {
    userSearch = userData
    rerenderApp(userData)
}, 700)








