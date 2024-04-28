// Toggle and Responsive navigation
document.addEventListener("DOMContentLoaded", () => {

    const navSlide = () => {
        const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click", () => {
       navLists.classList.toggle("nav-active");
       burger.classList.toggle("toggle-burger"); 
    });
}
    navSlide();
    
});
// Clear form before unload
// document.addEventListener("DOMContentLoaded", () => {
//     // Function to reset the form
//     const resetForm = () => {
//         for (const form of document.getElementsByTagName("form")){
//             form.reset();
//         }
//     };

//     // Attach submit event listener to the form
//     const contactForm = document.getElementById("contact-form"); // Assuming your form has an id of "contact-form"
//     contactForm.addEventListener("submit", (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         resetForm(); // Call the resetForm function when the form is submitted
//     });
// });





window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
};