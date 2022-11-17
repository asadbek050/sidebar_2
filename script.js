"use strict"

const menu = document.getElementById('toggle_menu')
const container = document.getElementById('container-fluid')
const sidebar = document.getElementById('sidebar')

menu.addEventListener('click' , function(){
    container.classList.toggle('container_fluid_toggle');
    sidebar.classList.toggle('sidebar_toggle')
    this.classList.toggle('whiteMenu')
})