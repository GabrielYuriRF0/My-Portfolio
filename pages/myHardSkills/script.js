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

  const text = "MY HARD SKILLS";
  const element = document.getElementById("text-content");
  const interval = 50;
  writeText(text, element, interval);



  function typeEffect() {
	const textItems = document.querySelectorAll('#text li');
	let i = 0;
  
	function typeText() {
	  const text = textItems[i].textContent;
	  let j = 0;
	  textItems[i].textContent = '';
	  textItems[i].classList.remove('hidden');
	  textItems[i].classList.add('show');
	  const typeInterval = setInterval(() => {
		if (j >= text.length) {
		  clearInterval(typeInterval);
		  i++;
		  if (i < textItems.length) {
			setTimeout(typeText, 1000); // tempo de espera em milissegundos
		  }
		} else {
		  textItems[i].textContent += text.charAt(j);
		  j++;
		}
	  }, 40); // tempo de espera em milissegundos
	}
  
	typeText();
  }
  
  typeEffect();
  
  
  
  

  

  