document.addEventListener("DOMContentLoaded", function() {
    const user = "FCCFdonations";
    const d1 = "outlo";
	const d2 = "ok.com";
    const et = document.getElementById("etransfer");

    if (et) {
        et.textContent = user + "@" + d1 + d2;
        
        // Optional: Make it a clickable 'mailto' link once it's built
        // et.href = "mailto:" + user + "@" + domain;
    }
});