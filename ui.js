class UI {

  constructor() {
    this.profile = document.getElementById("profile");

  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
      <div class="col-md-3">
      <img class="img-fluid mb-3" src="${user.avatar_url}">
      <a href="${user.html_url}" target= "_blank" class="btn btn-primary btn-block ">View Profile</a>
      </div>
      <div class="col-md-9">
        <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success">Followers: ${user.public_followers}</span>
        <span class="badge badge-info">Following: ${user.public_following}</span>
      <br><br>

      <ul class="list-group">
        <li class="list-group-item">Company: ${user.company}</li>
        <li class="list-group-item">Website/Blog: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member since: ${user.created_at}</li>
      </ul>
      </div>

      </div>

      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    
    
    `;
  }

  showRepos(repos) {
    
    let output = "";
    repos.forEach(function(repo)  {
      output += `
        <div class = "card card-body mb-2">
          <div class="row">
            <div classs="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            
            </div>
            <div classs="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>

            </div>
          </div>
        </div>
      
      `;
    }); 

    document.getElementById("repos").innerHTML = output;
  }

  alertProfile(message, className) {

  //clear all the alerts  before starting
    this.clearAlert();
  //create div elemnet
    const div = document.createElement("div");
  //append the class to div
    div.className = className;
  //append the text
    div.appendChild(document.createTextNode(message));
  //select where to put the div usually we put the div between the parent and where we want to place it inbetween
    const container = document.querySelector(".searchContainer");  
    const search = document.querySelector(".search");
  //insert element
    container.insertBefore(div, search);  
  
    //timeout after few seconds
    setTimeout( () => {
      this.clearAlert();
    }, 2000)
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  clearAlert() {
    const clearAlert = document.querySelector(".alert");
    if(clearAlert) {
      clearAlert.remove();
    }

  }
}