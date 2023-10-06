

window.addEventListener('scroll', () => {
 
    // nav bar

    let nav = document.querySelector('nav');
    nav.classList.toggle('nav-scroll', window.scrollY > 0);

    // Active Section Toggler

    let navLinkA = document.querySelectorAll('.nav-links li a');
    let sections = document.querySelectorAll('section');

    sections.forEach(section => {
        let up = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (up >= offset && up < offset + height) {
            navLinkA.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.nav-links li a[href*=' + id + ']').classList.add('active');
            });
        }

    });

});


// Phone Menu

let menu = document.querySelector('nav button');

menu.addEventListener('click',()=>{
    let navlinks = document.querySelector('.nav-links');
    navlinks.classList.toggle('toggle');
})



// certificate section js-->

const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        //run modal function
        imgModal(imgSrc);
    });
});
//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.querySelector(".main").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};





