//Initialise classes

const gitHub =  new Github;

const ui = new UI;
//Create a event lsitener 
const searchBox = document.getElementById("searchUser");

 searchBox.addEventListener("keyup", (e) => {
  let userText = e.target.value;

  if(userText !== ""){
    gitHub.getUsers(userText)
      .then(data => {
        if(data.profile.message === "Not Found") {
          //alert
          ui.alertProfile("User Not Found...", "alert alert-danger");
        }

        else {
          //carry on with operations
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  }

  else {
    //clear profile

    ui.clearProfile();
  }
 });

