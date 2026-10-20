/* ========================================
   STUDENTHUB - MAIN JAVASCRIPT
======================================== */


/* ========================================
   PAGE DETECTION
======================================== */

const currentPage = window.location.pathname;


/* ========================================
   PROFILE
======================================== */

function loadProfile() {

    const profile = getProfile();

    const nameElements = document.querySelectorAll(
        ".profile-info h2"
    );

    const emailElements = document.querySelectorAll(
        ".profile-info p"
    );

    if (nameElements.length > 0) {

        nameElements.forEach(function(element) {
            element.textContent = profile.name;
        });

    }

    if (emailElements.length > 0) {

        emailElements.forEach(function(element) {
            element.textContent = profile.email;
        });

    }

}


/* ========================================
   EDIT PROFILE
======================================== */

const editProfileBtn = document.getElementById(
    "editProfileBtn"
);

if (editProfileBtn) {

    editProfileBtn.addEventListener(
        "click",
        function() {

            const profile = getProfile();

            const newName = prompt(
                "Enter your name:",
                profile.name
            );

            if (newName === null) {
                return;
            }

            const newEmail = prompt(
                "Enter your email:",
                profile.email
            );

            if (newEmail === null) {
                return;
            }

            profile.name = newName;
            profile.email = newEmail;

            saveProfile(profile);

            loadProfile();

            alert("Profile updated successfully!");

        }
    );

}


/* ========================================
   NOTES
======================================== */

const noteForm = document.getElementById(
    "noteForm"
);

const notesContainer = document.getElementById(
    "notesContainer"
);


// Display saved notes

function displayNotes() {

    if (!notesContainer) {
        return;
    }

    const notes = getNotes();

    notesContainer.innerHTML = "";

    if (notes.length === 0) {

        notesContainer.innerHTML = `
            <div class="note-card">

                <h3>No Notes Yet</h3>

                <p>
                    Create your first study note
                    using the form above.
                </p>

            </div>
        `;

        return;
    }


    notes.forEach(function(note, index) {

        const noteCard = document.createElement(
            "div"
        );

        noteCard.className = "note-card";

        noteCard.innerHTML = `

            <h3>
                ${note.title}
            </h3>

            <p class="note-subject">
                ${note.subject}
            </p>

            <p>
                ${note.content}
            </p>

            <button
                class="btn primary-btn delete-note"
                data-index="${index}"
            >
                Delete Note
            </button>

        `;

        notesContainer.appendChild(noteCard);

    });

}


// Save a new note

if (noteForm) {

    noteForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const title =
                document.getElementById(
                    "noteTitle"
                ).value;

            const subject =
                document.getElementById(
                    "noteSubject"
                ).value;

            const content =
                document.getElementById(
                    "noteContent"
                ).value;


            const notes = getNotes();

            const newNote = {

                title: title,

                subject: subject,

                content: content

            };


            notes.push(newNote);

            saveNotes(notes);

            noteForm.reset();

            displayNotes();

            alert("Note saved successfully!");

        }
    );

}


// Delete notes

if (notesContainer) {

    notesContainer.addEventListener(
        "click",
        function(event) {

            if (
                event.target.classList.contains(
                    "delete-note"
                )
            ) {

                const index =
                    event.target.dataset.index;

                const notes = getNotes();

                notes.splice(index, 1);

                saveNotes(notes);

                displayNotes();

            }

        }
    );

}


/* ========================================
   COMMUNITY POSTS
======================================== */

const postForm = document.getElementById(
    "postForm"
);

const postsContainer =
    document.getElementById(
        "postsContainer"
    );


// Display posts

function displayPosts() {

    if (!postsContainer) {
        return;
    }

    const posts = getPosts();

    postsContainer.innerHTML = "";


    if (posts.length === 0) {

        postsContainer.innerHTML = `
            <div class="post-card">

                <h3>
                    No Posts Yet
                </h3>

                <p>
                    Be the first student to
                    create a community post.
                </p>

            </div>
        `;

        return;

    }


    posts.forEach(function(post, index) {

        const postCard =
            document.createElement(
                "article"
            );

        postCard.className = "post-card";

        postCard.innerHTML = `

            <div class="post-header">

                <div class="post-avatar">
                    👤
                </div>

                <div>

                    <h3>
                        Student
                    </h3>

                    <p>
                        Community Member
                    </p>

                </div>

            </div>


            <div class="post-content">

                <h3>
                    ${post.title}
                </h3>

                <p>
                    ${post.content}
                </p>

            </div>


            <div class="post-actions">

                <button
                    type="button"
                    class="delete-post"
                    data-index="${index}"
                >
                    Delete
                </button>

            </div>

        `;

        postsContainer.appendChild(
            postCard
        );

    });

}


// Create a new post

if (postForm) {

    postForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const title =
                document.getElementById(
                    "postTitle"
                ).value;

            const content =
                document.getElementById(
                    "postContent"
                ).value;


            const posts = getPosts();

            const newPost = {

                title: title,

                content: content

            };


            posts.unshift(newPost);

            savePosts(posts);

            postForm.reset();

            displayPosts();

            alert(
                "Your post has been published!"
            );

        }
    );

}


// Delete community posts

if (postsContainer) {

    postsContainer.addEventListener(
        "click",
        function(event) {

            if (
                event.target.classList.contains(
                    "delete-post"
                )
            ) {

                const index =
                    event.target.dataset.index;

                const posts = getPosts();

                posts.splice(index, 1);

                savePosts(posts);

                displayPosts();

            }

        }
    );

}


/* ========================================
   START THE APP
======================================== */

// loadProfile();

// displayNotes();

// displayPosts();