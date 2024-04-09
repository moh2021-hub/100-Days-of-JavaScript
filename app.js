// Get the HTML elements with IDs 'start', 'stop', and 'reset'
let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 

// Initialize variables for hour, minute, second, and count
let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 

// Add an event listener to the start button
startBtn.addEventListener('click', function () { 
	// Set the timer to true
	timer = true; 
	// Call the stopWatch function
	stopWatch(); 
}); 

// Add an event listener to the stop button
stopBtn.addEventListener('click', function () { 
	// Set the timer to false
	timer = false; 
}); 

// Add an event listener to the reset button
resetBtn.addEventListener('click', function () { 
	// Set the timer to false
	timer = false; 
	// Reset all the variables
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	// Set the HTML content of elements to display '00'
	document.getElementById('hr').innerHTML = "00"; 
	document.getElementById('min').innerHTML = "00"; 
	document.getElementById('sec').innerHTML = "00"; 
	document.getElementById('count').innerHTML = "00"; 
}); 

// Define the stopWatch function
function stopWatch() { 
	// Check if the timer is running
	if (timer) { 
		// Increment the count
		count++; 

		// Check if count reaches 100, if so increment seconds and reset count
		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		// Check if seconds reach 60, if so increment minutes and reset seconds
		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		// Check if minutes reach 60, if so increment hours and reset minutes and seconds
		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		// Convert hour, minute, second, and count to strings and pad with zeros if necessary
		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 

		// Update the HTML content of elements to display the time
		document.getElementById('hr').innerHTML = hrString; 
		document.getElementById('min').innerHTML = minString; 
		document.getElementById('sec').innerHTML = secString; 
		document.getElementById('count').innerHTML = countString; 

		// Call the stopWatch function recursively after 10 milliseconds
		setTimeout(stopWatch, 10); 
	} 
}
//