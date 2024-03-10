const { onboardDeveloper } = require('tea-demo-arsen');

console.log("Starting tea-event-networking project...");

const developerInfo = {
    name: "Evan",
    email: "evan@teanetworking.com"
};

// Onboarding the developer to create a platform for tea event networking
const walletAddress = onboardDeveloper(developerInfo);

console.log("Tea-event-networking platform developer onboarded.");