// document.addEventListener('DOMContentLoaded', function(){
//     const nameElement = document.querySelector('#name');
//     const userNameelement = document.querySelector('#userName');
//     const avatarElement = document.querySelector('#avatar');
//     const reposElement = document.querySelector('#repos');
//     const followersElement = document.querySelector('#followers');
//     const followingsElement = document.querySelector('#following');
//     const linkElement = document.querySelector('#link');

//     fetch('https://api.github.com/users/amiasso')
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(json){

//             nameElement.innerText = json.name;
//             userNameelement.innerText = json.userNameelement;
//             avatarElement.src = json.avatar_url;
//             followersElement.innerText = json.followersElement;
//             followingsElement.innerText = json.followingsElement;
//             repos.innerText = json.public_repos;
//             linkElement = json.html_url;
//         })
           
// })