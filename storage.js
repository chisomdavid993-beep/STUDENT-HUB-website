/* ========================================
   STUDENTHUB - LOCAL STORAGE
======================================== */


/* ========================================
   NOTES
======================================== */

// Get all saved notes
function getNotes() {

    const notes = localStorage.getItem("studentHubNotes");

    if (notes) {
        return JSON.parse(notes);
    }

    return [];
}


// Save notes
function saveNotes(notes) {

    localStorage.setItem(
        "studentHubNotes",
        JSON.stringify(notes)
    );

}


/* ========================================
   COMMUNITY POSTS
======================================== */

// Get all community posts
function getPosts() {

    const posts = localStorage.getItem("studentHubPosts");

    if (posts) {
        return JSON.parse(posts);
    }

    return [];
}


// Save community posts
function savePosts(posts) {

    localStorage.setItem(
        "studentHubPosts",
        JSON.stringify(posts)
    );

}


/* ========================================
   PROFILE
======================================== */

// Get student profile
function getProfile() {

    const profile = localStorage.getItem("studentHubProfile");

    if (profile) {
        return JSON.parse(profile);
    }

    return {
        name: "Student Name",
        email: "student@example.com",
        department: "Computer Science",
        level: "200 Level",
        institution: "Your School Name",
        about: "",
        goals: "",
        skills: ""
    };

}


// Save student profile
function saveProfile(profile) {

    localStorage.setItem(
        "studentHubProfile",
        JSON.stringify(profile)
    );

}