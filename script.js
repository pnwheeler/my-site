 /*---------------------LOGIC---------------------*/


//Get all of the project modals
const projects = document.getElementsByClassName('project-card');
const main = document.getElementById('main-grid');
//Show the associated modal for a given project
for (const project of projects) {
  project.addEventListener('click', function handleClick(event) {
    //Totally perfect practice by the books not cobbled together
    let curr_modal = document.getElementById(this.id.concat('-modal'));

    curr_modal.style.visibility = 'visible';
    curr_modal.style.width = '40vw';
    curr_modal.style.height = '50vh';
    curr_modal.style.opacity = '100%';
    curr_modal.style.transition = 'width .3s, height .3s, visibility .5s, opacity .5s';
    main.style.filter = 'blur(4px)';
    main.style.transition = 'filter .4s';
    main.style.pointerEvents = 'none';
  });
}
//Hide the modal container
function off(element){
    element.style.width = '0vw';
    element.style.height = '0vh';
    element.style.visibility = "hidden";
    element.style.opacity = "0%";
    element.style.transition = 'width 1s, height 1s, visibility .5s, opacity .5s';
    main.style.filter = 'none';
    main.style.transition = 'filter .4s';
    main.style.pointerEvents = 'auto';
    console.log(element.id);
}

/*--------------------EFFECTS--------------------*/
/*-------------------Parallax-------------------*/