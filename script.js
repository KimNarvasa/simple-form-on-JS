// Define a variable to store the registered user data
let registeredUsers = [];

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create an object to represent the registered user
    const newUser = {
        username,
        email,
        password,
    };

    // Push the user object to the registeredUsers array
    registeredUsers.push(newUser);

    // Clear the form inputs
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    // You can do something with the registered user data here (e.g., send it to a server)

    console.log("Registered Users:", registeredUsers);
}

// Add a submit event listener to the form
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", handleFormSubmit);





// Function to handle login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get login form input values
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Find a user with matching credentials in the registeredUsers array
    const matchedUser = registeredUsers.find(user => user.username === loginUsername && user.password === loginPassword);

    if (matchedUser) {
        alert("Login successful!");
        window.location.href = 'shop.html'
        // You can redirect or perform other actions for a successful login here
    } else {
        alert("Invalid username or password. Please try again.");
    }

    // Clear the login form inputs
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
}

// Add a submit event listener to the login form
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleLoginFormSubmit);
