'use script';

const home = document.getElementById('home');
const projects = document.getElementById('projects');
const review = document.getElementById('review');
const about = document.getElementById('about');

const toHome=()=>{
    projects.style.display='none';
    review.style.display='none';
    about.style.display='none';
    home.style.display='block';
}
const toProjects=()=>{
    review.style.display='none';
    about.style.display='none';
    home.style.display='none';
    projects.style.display='block';
}

const toReview=()=>{
    projects.style.display='none';
    home.style.display='none';
    about.style.display='none';
    review.style.display='block';
}

const toAbout=()=>{
    projects.style.display='none';
    review.style.display='none';
    home.style.display='none';
    about.style.display='block';
}


projects.innerHTML+=generateTable('PROJECTS');