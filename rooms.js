function showPopup() {
    document.getElementById("offerPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("offerPopup").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("offerPopup");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
