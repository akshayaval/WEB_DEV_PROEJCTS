// ========================================
// GET ELEMENTS FROM HTML
// ========================================

// Get the website name input
const siteName = document.getElementById("siteName");

// Get the website URL input
const siteURL = document.getElementById("siteURL");

// Get the Add Bookmark button
const addButton = document.getElementById("addButton");

// Get the container where bookmarks will appear
const bookmarkList = document.getElementById("bookmarkList");


// ========================================
// ADD BOOKMARK
// ========================================

addButton.addEventListener("click", function () {

    // Get the values entered by the user
    const name = siteName.value.trim();
    const url = siteURL.value.trim();


    // ========================================
    // VALIDATION
    // ========================================

    // Check if either input is empty
    if (name === "" || url === "") {

        alert("Please enter both the website name and URL.");

        return;
    }


    // ========================================
    // CREATE BOOKMARK CARD
    // ========================================

    // Create a new div
    const bookmarkCard = document.createElement("div");

    // Give the div the class "bookmark-card"
    bookmarkCard.className = "bookmark-card";


    // ========================================
    // CREATE WEBSITE LINK
    // ========================================

    const link = document.createElement("a");

    // Put the website name inside the link
    link.textContent = name;

    // Set the website URL
    link.href = url;

    // Open the website in a new tab
    link.target = "_blank";


    // ========================================
    // CREATE DELETE BUTTON
    // ========================================

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-button";


    // ========================================
    // DELETE BOOKMARK
    // ========================================

    deleteButton.addEventListener("click", function () {

        // Remove the bookmark card
        bookmarkCard.remove();

    });


    // ========================================
    // ADD ELEMENTS TO THE CARD
    // ========================================

    // Put the link inside the card
    bookmarkCard.appendChild(link);

    // Put the delete button inside the card
    bookmarkCard.appendChild(deleteButton);


    // ========================================
    // ADD CARD TO THE PAGE
    // ========================================

    bookmarkList.appendChild(bookmarkCard);


    // ========================================
    // CLEAR INPUTS
    // ========================================

    siteName.value = "";
    siteURL.value = "";

});