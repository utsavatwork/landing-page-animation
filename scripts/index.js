"use strict";
const buildLeftOverlay = () => {
    const leftOverlay = document.createElement('div');
    leftOverlay.id = 'left-overlay';
    // Content container
    const div = document.createElement("div");
    div.id = 'left-overlay-content';
    // Archieve Image    
    const imgContainer = document.createElement("div");
    imgContainer.id = 'archieve-img';
    const showImg = document.createElement("img");
    const imgCaption = document.createElement("p");
    imgCaption.innerText = "Steal from the league's 2021 edition!";
    imgContainer.append(showImg, imgCaption);
    showImg.setAttribute('src', 'https://images.unsplash.com/photo-1599982946086-eb42d9e14eb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D');
    // Title
    const title = document.createElement('h2');
    title.id = 'overlay-title';
    title.innerText = 'New York Recreational Cricket League!';
    // Button
    const btn = document.createElement('button');
    btn.innerHTML = 'Know More!';
    console.log('kkrewr');
    btn.onclick = (event) => {
        raiseCurtain();
    };
    // btn.addEventListener('click', (event: MouseEvent) => {
    //     console.log('kefwkefbkwfbwkjrfgwr');
    //     raiseCurtain();
    // });
    div.append(imgContainer, title, btn);
    leftOverlay.appendChild(div);
    return leftOverlay;
};
const buildRightOverlay = () => {
    const rightOverlay = document.createElement('div');
    rightOverlay.id = 'right-overlay';
    const newYorkImg = document.createElement('img');
    newYorkImg.id = 'nyc-img';
    newYorkImg.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1682629789675-5a2ecb3db5c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3eW9ya3xlbnwwfHwwfHx8MA%3D%3D');
    rightOverlay.append(newYorkImg);
    return rightOverlay;
};
const raiseCurtain = () => {
    const leftOverlay = document.getElementById('left-overlay');
    const rightOverlay = document.getElementById('right-overlay');
    leftOverlay.style.left = '-100vw';
    rightOverlay.style.left = '100vw';
};
window.addEventListener('DOMContentLoaded', (event) => {
    const materialIconsLink = document.createElement('link');
    materialIconsLink.setAttribute('rel', 'stylesheet');
    materialIconsLink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,1,200');
    document.head.appendChild(materialIconsLink);
    const emailLink = document.createElement('a');
    emailLink.setAttribute('href', 'mailto:info@nyrcl.com');
    const emailIcon = document.createElement("i");
    emailIcon.setAttribute('class', 'material-symbols-outlined large');
    emailIcon.innerText = 'email';
    emailLink.appendChild(emailIcon);
    const callLink = document.createElement('a');
    callLink.setAttribute('href', 'tel:5551234567');
    const callIcon = document.createElement("i");
    callIcon.setAttribute('class', 'material-symbols-outlined large');
    callIcon.innerText = 'call';
    callLink.appendChild(callIcon);
    const iconsContainer = document.createElement('div');
    iconsContainer.id = 'icons-container';
    iconsContainer.append(emailLink, callLink);
    const sideLayLeft = document.createElement("div");
    sideLayLeft.id = 'side-lay-left';
    const sideLayRight = document.createElement("div");
    sideLayRight.id = 'side-lay-right';
    document.body.append(buildLeftOverlay(), buildRightOverlay(), iconsContainer, sideLayLeft, sideLayRight);
});
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
});
