// Define personal information
var name = "Precious";
var surname = "Mohale";
var dateofbirth = "05/11/2005";
var bio = "I am someone who has enthusiasm, and I am a creative person who can manage time while working under pressure and retain my focus on quality delivery and achieving deadlines. My passion is to communicate with individuals of all levels and professions and make them feel free and appreciated every time I speak to them on the phone or in person. I am a motivated candidate seeking a challenge that leverages my skills and experience while also pursuing further studies in Security and Networking Engineering. I am committed to learning and adapting to emerging technologies in a direct, collaborative environment.";
var address = "2059 Cadmium Lane, Extension 26, Clayville, Olifantsfontien, 1666";
var email = "mbp.mohale@gmail.com";
var phone = "083 218 1118";
var aboutme = "I'm Precious Mohale and I am very passionate and creative when it comes to the IT Field and I have one year of working experience.  I've had the opportunity to work on a variety of projects, ranging from troubleshooting software and hardware issues, working with PCs, laptops, Liva's, switches, projector's and input and output devices. My approach to the IT Field is characterized by a blend of innovation and attention to detail, ensuring that each project I undertake is not only visually striking but also functional and user-friendly. I thrive in collaborative environments and am always eager to learn and adapt to new technologies and techniques. When I'm not designing, you can find me reading novels, listening to music, going to see new places and explore the world, singing and spending time with family.";
var educationalbackground = "Eduvos Midrand Campus Current Degree: In progress Major/Field of Study: Security and Network Engineering Year of Graduation: 2027 CodeTribe Academy Current: In progres Field of Study: Programming Curro Academy Clayville High School Current Degree: Bachelor's Degree Type: Highschool Year of Completion: 2022";
var workingexperience = "Information Technology Summer Intern Company: Curro New Road High School Start Date: January 2024 End Date: January 2024 Company: Curro Holdings Ltd Start Date: December 2022 End Date: December 2023";
var otherinformation = "Skills: Communication, Customer Satisfication, Problem-Solving, Education, Presentation, Time Management, Desktop Computers, Computer Hardware, Support Services, Business requirements, Preventative Maintenance. Casading Style Sheets (CSS), HTML";

// Define projects
var projects = [
    "Creating a Portfolio Website: Creating a portfolio website starts with defining the purpose and audience it is created for. Whether it is showcasing design projects, writing samples, or coding work, understanding who the target is and what is needed to be achieved is key."
];

// Render data in HTML
document.getElementById("name").textContent = name;
document.getElementById("surname").textContent = surname;
document.getElementById("bio").textContent = bio;
document.getElementById("address").textContent = address;
document.getElementById("email").textContent = email;
document.getElementById("phone").textContent = phone;


var projectsList = document.getElementById("projects");
projects.forEach(function(project) {
    var listItem = document.createElement("li");
    listItem.textContent = project;
    projectsList.appendChild(listItem);
});

// Form contact us 
function handleFormSubmit(event) {
    event.preventDefault();

    const cityInput = document.getElementById("city");
    const provinceInput = document.getElementById("province");
    const nameAndSurnameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const phoneNumberInput = document.getElementById("phonenumber");

    const isCityValid = cityInput.value !== "" && !cityInput.validity.typeMismatch;
    console.log(isCityValid);

    const isProvinceValid = provinceInput.value !== "" && !provinceInput.validity.typeMismatch;
    console.log(isProvinceValid);

    const isNameAndSurnameValid = nameAndSurnameInput.value !== "" && !nameAndSurnameInput.validity.typeMismatch;
    console.log(isNameAndSurnameValid);

    const isEmailValid = emailInput.value !== "" && !emailInput.validity.typeMismatch;
    console.log(isEmailValid);

    const isMessageValid = messageInput.value.trim() !== "";
    console.log(isMessageValid);

    const isPhoneNumberValid = phoneNumberInput.value !== "" && !phoneNumberInput.validity.typeMismatch;
    console.log(isPhoneNumberValid);
}

