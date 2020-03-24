const user_age = Number(prompt("Hi there, how old are you?"));
    if (user_age === 18) {
    	alert("Congratulations! You're old enough to drive now. Enjoy the ride!");
    } else if (user_age < 18) {
    	alert("Sorry you're still too young to drive. Powering off...");
    } else if (user_age > 18) {
    	alert("Enjoy your ride. Powering on...");
    }