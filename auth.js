// HiHey Authentication Module
// Secure messaging application

// User database (in production, use a backend)
const users = {};
const conversations = {};
const groups = {};

// Current user
let currentUser = null;

// OAuth Configuration
const oauthConfig = {
  google: {
    clientId: 'YOUR_GOOGLE_CLIENT_ID',
    redirectUri: window.location.origin + '/callback'
  },
  apple: {
    teamId: 'YOUR_APPLE_TEAM_ID',
    keyId: 'YOUR_APPLE_KEY_ID',
    bundleId: 'YOUR_BUNDLE_ID'
  },
  microsoft: {
    clientId: 'YOUR_MICROSOFT_CLIENT_ID',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: window.location.origin + '/callback'
  }
};

// Login with OAuth providers
function loginWithGoogle() {
  console.log('Initiating Google OAuth login');
  // In production, use Google Sign-In SDK
  alert('Google OAuth: Implement with Google Sign-In SDK');
}

function loginWithApple() {
  console.log('Initiating Apple OAuth login');
  // In production, use Apple Sign-In
  alert('Apple OAuth: Implement with Apple Sign-In SDK');
}

function loginWithMicrosoft() {
  console.log('Initiating Microsoft OAuth login');
  // In production, use MSAL (Microsoft Authentication Library)
  alert('Microsoft OAuth: Implement with MSAL SDK');
}

// Email/Password Login
function loginWithEmail(event) {
  event.preventDefault();
  const form = document.getElementById('emailLoginForm');
  const email = form.elements[0].value;
  const password = form.elements[1].value;
  
  if (authenticateUser(email, password)) {
    currentUser = { email, password, id: generateUserId(), createdAt: new Date() };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password');
  }
}

// User registration
function signupUser(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements[0].value;
  const email = form.elements[1].value;
  const password = form.elements[2].value;
  const confirmPassword = form.elements[3].value;
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  
  if (users[email]) {
    alert('Email already registered');
    return;
  }
  
  // Hash password (in production, use bcrypt on backend)
  const hashedPassword = hashPassword(password);
  
  users[email] = {
    id: generateUserId(),
    name: name,
    email: email,
    password: hashedPassword,
    createdAt: new Date(),
    encryptionKey: generateEncryptionKey(),
    twoFactorEnabled: false,
    activityLog: []
  };
  
  alert('Account created successfully! Please login.');
  toggleSignup();
}

// Authentication helper
function authenticateUser(email, password) {
  if (users[email] && users[email].password === hashPassword(password)) {
    return true;
  }
  return false;
}

// Logout
function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

// Toggle signup modal
function toggleSignup() {
  const modal = document.getElementById('signupModal');
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    modal.style.display = 'block';
  } else {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
}

// Generate user ID
function generateUserId() {
  return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}

// Hash password (simple hash - use bcrypt in production)
function hashPassword(password) {
  return btoa(password); // Base64 encoding (not secure for production)
}

// Generate encryption key
function generateEncryptionKey() {
  return 'key_' + Math.random().toString(36).substr(2, 32);
}

// Encrypt message
function encryptMessage(message, key) {
  // Simple encryption - use TweetNaCl.js or libsodium in production
  return btoa(message);
}

// Decrypt message
function decryptMessage(encrypted, key) {
  return atob(encrypted);
}

// Log activity for security
function logActivity(action, details) {
  if (currentUser && users[currentUser.email]) {
    users[currentUser.email].activityLog.push({
      timestamp: new Date(),
      action: action,
      details: details
    });
  }
}

// Enable two-factor authentication
function enableTwoFactorAuth() {
  if (currentUser) {
    users[currentUser.email].twoFactorEnabled = true;
    alert('Two-factor authentication enabled');
  }
}

// Check if user is authenticated
function isAuthenticated() {
  const user = localStorage.getItem('currentUser');
  return user !== null;
}

// Initialize on page load
window.addEventListener('load', function() {
  if (!isAuthenticated() && window.location.pathname !== '/index.html') {
    window.location.href = 'index.html';
  }
});

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    loginWithGoogle,
    loginWithApple,
    loginWithMicrosoft,
    loginWithEmail,
    signupUser,
    logout,
    encryptMessage,
    decryptMessage,
    enableTwoFactorAuth,
    isAuthenticated,
    logActivity
  };
}
