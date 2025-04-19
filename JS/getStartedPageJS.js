// "use strict";

// // main code
// let loginBtns = document.querySelector("#loginBtn");
// let signupBtns = document.querySelector("#signupBtn");
// let blankTemplates = document.querySelector(".blank-template");

// blankTemplates.addEventListener("click", function () {
//   window.location.href = `/build`;
// });

// loginBtns.addEventListener("click", function () {
//   window.location.href = `/login`;
// });

// signupBtns.addEventListener("click", function () {
//   window.location.href = `/signup`;
// });

// "use strict";

// // main code
// let loginBtn = document.querySelector("#loginBtn");
// let signupBtn = document.querySelector("#signupBtn");
// let blankTemplate = document.querySelector(".blank-template");

// blankTemplate.addEventListener("click", function () {
//   window.location.href = `/build`;
// });

// loginBtn.addEventListener("click", function () {
//   // Show the login modal instead of redirecting
//   $("#loginModal").modal("show");
// });

// signupBtn.addEventListener("click", function () {
//   window.location.href = `/signup`;
// });

// // Show/hide password functionality
// document.addEventListener("DOMContentLoaded", function () {
//   const showPasswordBtn = document.querySelector(".show-password");
//   if (showPasswordBtn) {
//     showPasswordBtn.addEventListener("click", function () {
//       const passwordInput = document.getElementById("password");
//       const showText = this;

//       if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         showText.textContent = "Hide";
//       } else {
//         passwordInput.type = "password";
//         showText.textContent = "Show";
//       }
//     });
//   }
// });

// "use strict";

// // main code
// let loginBtn = document.querySelector("#loginBtn");
// let signupBtn = document.querySelector("#signupBtn");
// let blankTemplate = document.querySelector(".blank-template");
// let switchToLoginLink = document.querySelector("#switchToLogin");

// blankTemplate.addEventListener("click", function () {
//   window.location.href = `/build`;
// });

// loginBtn.addEventListener("click", function () {
//   // Show the login modal
//   $("#loginModal").modal("show");
// });

// signupBtn.addEventListener("click", function () {
//   // Show the signup modal instead of redirecting
//   $("#signupModal").modal("show");
// });

// // Switch from signup to login modal
// if (switchToLoginLink) {
//   switchToLoginLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     $("#signupModal").modal("hide");
//     setTimeout(function () {
//       $("#loginModal").modal("show");
//     }, 500);
//   });
// }

// // Show/hide password functionality for login
// document.addEventListener("DOMContentLoaded", function () {
//   const showPasswordBtn = document.querySelector(".show-password");
//   if (showPasswordBtn) {
//     showPasswordBtn.addEventListener("click", function () {
//       const passwordInput = document.getElementById("password");
//       const showText = this;

//       if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         showText.textContent = "Hide";
//       } else {
//         passwordInput.type = "password";
//         showText.textContent = "Show";
//       }
//     });
//   }

//   // Show/hide password functionality for signup
//   const showPasswordSignupBtn = document.querySelector(".show-password-signup");
//   if (showPasswordSignupBtn) {
//     showPasswordSignupBtn.addEventListener("click", function () {
//       const passwordInput = document.getElementById("signupPassword");
//       const showText = this;

//       if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         showText.textContent = "Hide";
//       } else {
//         passwordInput.type = "password";
//         showText.textContent = "Show";
//       }
//     });
//   }
// });

// "use strict";

// // main code
// let loginBtns = document.querySelector("#loginBtn");
// let signupBtns = document.querySelector("#signupBtn");
// let blankTemplates = document.querySelector(".blank-template");

// blankTemplate.addEventListener("click", function () {
//   window.location.href = `/build`;
// });

// loginBtn.addEventListener("click", function () {
//   window.location.href = `/login`;
// });

// signupBtn.addEventListener("click", function () {
//   window.location.href = `/signup`;
// });

// "use strict";

// // main code
// let loginBtn = document.querySelector("#loginBtn");
// let signupBtn = document.querySelector("#signupBtn");
// let blankTemplate = document.querySelector(".blank-template");
// let switchToLoginLink = document.querySelector("#switchToLogin");
// let switchToSignupLink = document.querySelector("#switchToSignup");
// let forgotPasswordLink = document.querySelector("#forgotPasswordLink");
// let switchToLoginFromReset = document.querySelector("#switchToLoginFromReset");

// blankTemplate.addEventListener("click", function () {
//   window.location.href = `/build`;
// });

// loginBtn.addEventListener("click", function () {
//   // Show the login modal
//   $("#loginModal").modal("show");
// });

// signupBtn.addEventListener("click", function () {
//   // Show the signup modal instead of redirecting
//   $("#signupModal").modal("show");
// });

// // Switch from signup to login modal
// if (switchToLoginLink) {
//   switchToLoginLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     $("#signupModal").modal("hide");
//     setTimeout(function () {
//       $("#loginModal").modal("show");
//     }, 500);
//   });
// }

// // Switch from login to signup modal
// if (switchToSignupLink) {
//   switchToSignupLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     $("#loginModal").modal("hide");
//     setTimeout(function () {
//       $("#signupModal").modal("show");
//     }, 500);
//   });
// }

// // Show forgot password modal
// if (forgotPasswordLink) {
//   forgotPasswordLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     $("#loginModal").modal("hide");
//     setTimeout(function () {
//       $("#forgotPasswordModal").modal("show");
//     }, 500);
//   });
// }

// // Switch from reset password back to login
// if (switchToLoginFromReset) {
//   switchToLoginFromReset.addEventListener("click", function (e) {
//     e.preventDefault();
//     $("#forgotPasswordModal").modal("hide");
//     setTimeout(function () {
//       $("#loginModal").modal("show");
//     }, 500);
//   });
// }

// // Show/hide password functionality
// document.addEventListener("DOMContentLoaded", function () {
//   // Login password toggle
//   const showPasswordBtn = document.querySelector(".show-password");
//   if (showPasswordBtn) {
//     showPasswordBtn.addEventListener("click", function () {
//       const passwordInput = document.getElementById("password");
//       const showText = this;

//       if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         showText.textContent = "Hide";
//       } else {
//         passwordInput.type = "password";
//         showText.textContent = "Show";
//       }
//     });
//   }

//   // Signup password toggle
//   const showPasswordSignupBtn = document.querySelector(".show-password-signup");
//   if (showPasswordSignupBtn) {
//     showPasswordSignupBtn.addEventListener("click", function () {
//       const passwordInput = document.getElementById("signupPassword");
//       const showText = this;

//       if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         showText.textContent = "Hide";
//       } else {
//         passwordInput.type = "password";
//         showText.textContent = "Show";
//       }
//     });
//   }

//   // Reset password form validation
//   const resetForm = document.querySelector("#forgotPasswordModal form");
//   const resetEmailInput = document.getElementById("resetEmail");
//   const resetErrorMessage = document.querySelector(
//     "#forgotPasswordModal .error-message"
//   );

//   if (resetForm) {
//     resetForm.addEventListener("submit", function (e) {
//       if (!resetEmailInput.value.trim()) {
//         e.preventDefault();
//         resetErrorMessage.style.display = "block";
//         resetEmailInput.classList.add("error");
//       } else {
//         resetErrorMessage.style.display = "none";
//         resetEmailInput.classList.remove("error");
//       }
//     });

//     resetEmailInput.addEventListener("input", function () {
//       if (resetEmailInput.value.trim()) {
//         resetErrorMessage.style.display = "none";
//         resetEmailInput.classList.remove("error");
//       }
//     });

//     resetEmailInput.addEventListener("blur", function () {
//       if (!resetEmailInput.value.trim()) {
//         resetErrorMessage.style.display = "block";
//         resetEmailInput.classList.add("error");
//       }
//     });
//   }
// });

"use strict";

// main code
let loginBtn = document.querySelector("#loginBtn");
let signupBtn = document.querySelector("#signupBtn");
let bottomButtonDiv = document.querySelector("#bottomButtonDiv");
let blankTemplate = document.querySelector(".blank-template");
let switchToLoginLink = document.querySelector("#switchToLogin");
let switchToSignupLink = document.querySelector("#switchToSignup");
let forgotPasswordLink = document.querySelector("#forgotPasswordLink");
let switchToLoginFromReset = document.querySelector("#switchToLoginFromReset");

// Function to create the dropdown menu HTML
function createDropdownMenu() {
  const dropdownHTML = `
    <div class="account-dropdown" id="accountDropdown">
      <a href="/feedback" class="dropdown-item">
        <i class="fa-regular fa-comment"></i> Give Feedback
      </a>
      <a href="/support" class="dropdown-item">
        <i class="fa-regular fa-envelope"></i> Support
      </a>
      <a href="/benefits" class="dropdown-item">
        <i class="fa-solid fa-graduation-cap"></i> Student Benefits
      </a>
      <a href="/settings" class="dropdown-item">
        <i class="fa-solid fa-gear"></i> Settings
      </a>
      <a href="#" class="dropdown-item" id="logoutBtn">
        <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
      </a>
    </div>
  `;
  return dropdownHTML;
}

// Function to render the logged-in UI
function renderLoggedInUI() {
  bottomButtonDiv.innerHTML = `
    <div class="account-container my-account-highlight" id="myAccountBtn">
      <i class="fa-regular fa-user user-icon"></i>
      <a href="#" class="account-link">My account</a>
    </div>
    ${createDropdownMenu()}
  `;

  // Add event listener to My account button
  document
    .getElementById("myAccountBtn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("accountDropdown").classList.toggle("show");
    });

  // Add event listener to Logout button
  document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault();
    // Logout functionality
    localStorage.removeItem("isLoggedIn");
    renderLoggedOutUI();
    document.getElementById("accountDropdown").classList.remove("show");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    const dropdown = document.getElementById("accountDropdown");
    const accountBtn = document.getElementById("myAccountBtn");

    if (
      dropdown &&
      !accountBtn.contains(e.target) &&
      !dropdown.contains(e.target)
    ) {
      dropdown.classList.remove("show");
    }
  });
}

// Function to render the logged-out UI
function renderLoggedOutUI() {
  bottomButtonDiv.innerHTML = `
    <button id="loginBtn" class="colorBtn btn btn-block">Login</button>
    <button id="signupBtn" class="colorBtn btn btn-block">Signup</button>
  `;

  // Reattach event listeners to new buttons
  document.querySelector("#loginBtn").addEventListener("click", function () {
    $("#loginModal").modal("show");
  });

  document.querySelector("#signupBtn").addEventListener("click", function () {
    $("#signupModal").modal("show");
  });
}

// Function to check login status and render appropriate UI
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    renderLoggedInUI();
  }
}

// Call this function when the page loads
document.addEventListener("DOMContentLoaded", function () {
  checkLoginStatus();
});

blankTemplate.addEventListener("click", function () {
  window.location.href = `/build`;
});

// Only add event listeners if these buttons exist (user not logged in)
if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    // Show the login modal
    $("#loginModal").modal("show");
  });
}

if (signupBtn) {
  signupBtn.addEventListener("click", function () {
    // Show the signup modal
    $("#signupModal").modal("show");
  });
}

// Form submission handler for login
const loginForm = document.querySelector("#loginModal form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Simulate successful login
    localStorage.setItem("isLoggedIn", "true");
    $("#loginModal").modal("hide");

    // Update UI to show account instead of login/signup
    renderLoggedInUI();
  });
}

// Switch from signup to login modal
if (switchToLoginLink) {
  switchToLoginLink.addEventListener("click", function (e) {
    e.preventDefault();
    $("#signupModal").modal("hide");
    setTimeout(function () {
      $("#loginModal").modal("show");
    }, 500);
  });
}

// Switch from login to signup modal
if (switchToSignupLink) {
  switchToSignupLink.addEventListener("click", function (e) {
    e.preventDefault();
    $("#loginModal").modal("hide");
    setTimeout(function () {
      $("#signupModal").modal("show");
    }, 500);
  });
}

// Show forgot password modal
if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener("click", function (e) {
    e.preventDefault();
    $("#loginModal").modal("hide");
    setTimeout(function () {
      $("#forgotPasswordModal").modal("show");
    }, 500);
  });
}

// Switch from reset password back to login
if (switchToLoginFromReset) {
  switchToLoginFromReset.addEventListener("click", function (e) {
    e.preventDefault();
    $("#forgotPasswordModal").modal("hide");
    setTimeout(function () {
      $("#loginModal").modal("show");
    }, 500);
  });
}

// Show/hide password functionality
document.addEventListener("DOMContentLoaded", function () {
  // Login password toggle
  const showPasswordBtn = document.querySelector(".show-password");
  if (showPasswordBtn) {
    showPasswordBtn.addEventListener("click", function () {
      const passwordInput = document.getElementById("password");
      const showText = this;

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showText.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        showText.textContent = "Show";
      }
    });
  }

  // Signup password toggle
  const showPasswordSignupBtn = document.querySelector(".show-password-signup");
  if (showPasswordSignupBtn) {
    showPasswordSignupBtn.addEventListener("click", function () {
      const passwordInput = document.getElementById("signupPassword");
      const showText = this;

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showText.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        showText.textContent = "Show";
      }
    });
  }

  // Reset password form validation
  const resetForm = document.querySelector("#forgotPasswordModal form");
  const resetEmailInput = document.getElementById("resetEmail");
  const resetErrorMessage = document.querySelector(
    "#forgotPasswordModal .error-message"
  );

  if (resetForm) {
    resetForm.addEventListener("submit", function (e) {
      if (!resetEmailInput.value.trim()) {
        e.preventDefault();
        resetErrorMessage.style.display = "block";
        resetEmailInput.classList.add("error");
      } else {
        resetErrorMessage.style.display = "none";
        resetEmailInput.classList.remove("error");
      }
    });

    resetEmailInput.addEventListener("input", function () {
      if (resetEmailInput.value.trim()) {
        resetErrorMessage.style.display = "none";
        resetEmailInput.classList.remove("error");
      }
    });

    resetEmailInput.addEventListener("blur", function () {
      if (!resetEmailInput.value.trim()) {
        resetErrorMessage.style.display = "block";
        resetEmailInput.classList.add("error");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get current path
  const currentPath = window.location.pathname;

  // Remove selected-nav class from all nav buttons
  const navButtons = document.querySelectorAll(".nav-menu .btn");
  navButtons.forEach((button) => button.classList.remove("selected-nav"));

  // Add selected-nav class to the appropriate button
  if (currentPath === "/get-started" || currentPath === "/") {
    document
      .querySelector('.nav-menu a[href="/get-started"]')
      .classList.add("selected-nav");
  } else if (currentPath === "/cover-letter") {
    document
      .querySelector('.nav-menu a[href="/cover-letter"]')
      .classList.add("selected-nav");
  } else if (currentPath === "/job-tracker") {
    document
      .querySelector('.nav-menu a[href="/job-tracker"]')
      .classList.add("selected-nav");
  } else if (currentPath === "/more") {
    document
      .querySelector('.nav-menu a[href="/more"]')
      .classList.add("selected-nav");
  }
});





