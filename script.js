function addTask() {
    var input = document.getElementById("input");
    var newTask = input.value;
    if (newTask != "") {
      var item = document.createElement("li");
      item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
                       '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
                       '<input type="button" class="important" onclick="makeImportant(this.parentNode)" value="!"> ' +
                       newTask; // Append the new task text
      document.getElementById("tasks").appendChild(item);
      input.value = "";
      input.placeholder = "enter task";
    }
  }
  
  // change styling used for given item
  function markDone (item) { 
      item.className = 'finished';
  }
  
  function remove (item) {
    // remove item completely from document
    if(item.className != 'finished'){
      item.remove();
    }
    else{
      item.className = "unfinished";
    }
   
  }
  
  function doAbout() {
    var element = document.getElementById("divabout");
    element.innerHTML="The Author is Goktug Ibolar";
    element.className = "yellowbackground";
    
  }
  
  function clearAbout() {
    var element = document.getElementById("divabout");
    // Clear the content of the divabout element
    element.innerHTML = "";
    
    // Append the about button back to the divabout element
    var aboutButton = document.createElement("input");
    aboutButton.setAttribute("id", "aboutButton");
    aboutButton.setAttribute("type", "button");
    aboutButton.setAttribute("value", "About");
    aboutButton.setAttribute("onclick", "doAbout()");
    element.appendChild(aboutButton);
    
    // Reset the class name if needed
    element.className = "divabout";
  }
  
  
  function makeImportant(item) {
    if(item.className != "important"){
     item.className = "important"; 
    }
    else{
      item.className = "unimportant";
    }
  }