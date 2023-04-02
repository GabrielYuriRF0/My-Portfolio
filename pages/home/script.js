function writeText(text, element, interval) {
	let i = 0;
	const timer = setInterval(function() {
	  if (i < text.length) {
		const novotext = element.innerHTML + text.charAt(i);
		element.innerHTML = novotext;
		i++;
	  } else {
		clearInterval(timer);
		const cursor = document.createElement("span");
		cursor.className = "cursor";
		element.appendChild(cursor);
		setInterval(function() {
		  cursor.style.display = cursor.style.display === "none" ? "" : "none";
		}, 500);
	  }
	}, interval);
  }

  
  const text = "Hello, welcome to my portfolio! Click 'Next' to continue...";


  const element = document.getElementById("text-content");
  const interval = 50;
  writeText(text, element, interval);


  