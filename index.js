function addingEventListener() {
    const input = document.getElementById("button"); 
  
    if (input) { 
      input.addEventListener("click", () => alert("I was clicked"));
    } else {
      console.error("Element with ID 'button' not found.");
    }
  }