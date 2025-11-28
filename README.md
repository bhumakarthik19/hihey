# 👋 HiHey - Secure Messaging Platform

A modern, secure messaging application built with HTML, CSS, and JavaScript featuring OAuth authentication, end-to-end encryption, private/public messaging, and group creation.

## Features

### Authentication & Security 🔐
- **OAuth 2.0 Support**
  - Google Sign-In
  - Apple Sign-In
  - Microsoft Sign-In
- **Email/Password Authentication**
- **Password Hashing** (bcrypt recommended for production)
- **Two-Factor Authentication (2FA)**
- **Activity Logging** for security audits
- **End-to-End Encryption** for all messages

### Messaging Features 💬
- **Private Messaging** - Direct encrypted messages between users
- **Public Messaging** - Share messages with groups
- **Group Creation** - Create and manage messaging groups
- **Message Management** - Edit, delete, and recall messages
- **Read Receipts** - See when messages are read
- **Message Reactions** - React to messages with emojis

### User Management 👥
- **User Profiles** - Customizable user profiles
- **Contacts** - Manage and organize contacts
- **Blocking** - Block users from messaging you
- **Privacy Controls** - Full control over who can contact you

### Advanced Security Features 🛡️
- **Encryption Key Management** - Secure generation and storage
- **Session Management** - Automatic timeout after inactivity
- **CSRF Protection** - Protection against cross-site attacks
- **Input Validation** - All user inputs validated
- **Rate Limiting** - Prevent brute force attacks
- **Audit Logs** - Complete activity tracking

## Project Structure

```
hihey/
├── index.html      # Login page with OAuth options
├── auth.js         # Authentication module
├── styles.css      # Responsive styling
└── README.md       # This file
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (for backend integration)
- OAuth credentials from Google, Apple, and Microsoft

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hihey.git
cd hihey
```

2. Open `index.html` in your browser

3. Create an account or login with OAuth

### Configuration

Update OAuth credentials in `auth.js`:

```javascript
const oauthConfig = {
  google: {
    clientId: 'YOUR_GOOGLE_CLIENT_ID',
    redirectUri: 'YOUR_REDIRECT_URI'
  },
  apple: {
    teamId: 'YOUR_APPLE_TEAM_ID',
    keyId: 'YOUR_APPLE_KEY_ID',
    bundleId: 'YOUR_BUNDLE_ID'
  },
  microsoft: {
    clientId: 'YOUR_MICROSOFT_CLIENT_ID',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: 'YOUR_REDIRECT_URI'
  }
};
```

## Usage

### Creating an Account
1. Click "Sign up here" on the login page
2. Enter your name, email, and password
3. Confirm your password
4. Your account is created with end-to-end encryption enabled

### OAuth Login
1. Click any OAuth provider button (Google, Apple, Microsoft)
2. Follow the provider's authentication process
3. You'll be logged in automatically

### Sending Messages
1. Navigate to Messages section
2. Start a new conversation
3. Choose message type (Private/Public)
4. Type and send your encrypted message
5. Recipient will receive notification

### Creating Groups
1. Go to Groups section
2. Click "Create Group"
3. Add group name and members
4. Enable end-to-end encryption
5. Share the group code with members

## Security Best Practices

### For Users
- Enable Two-Factor Authentication
- Use strong passwords (min 12 characters)
- Don't share your encryption keys
- Log out from public devices
- Review your activity log regularly

### For Developers
- Always hash passwords with bcrypt
- Use HTTPS for all communications
- Implement rate limiting
- Keep dependencies updated
- Use CSP (Content Security Policy) headers
- Implement CORS properly

## API Integration (Coming Soon)

Backend API endpoints:
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/messages/send` - Send message
- `GET /api/messages/private` - Get private messages
- `POST /api/groups/create` - Create group
- `GET /api/groups` - List user groups

## Technology Stack

**Frontend:**
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- LocalStorage for session management

**Security Libraries (Production):**
- TweetNaCl.js for encryption
- bcrypt for password hashing
- MSAL for Microsoft OAuth
- FirebaseAuth for Google/Apple OAuth

## Roadmap

- [ ] Backend API with Node.js/Express
- [ ] MongoDB database integration
- [ ] Real-time messaging with WebSockets
- [ ] Video/Audio calling
- [ ] Message search functionality
- [ ] Cloud backup
- [ ] Mobile app (React Native)
- [ ] Message reactions and stickers
- [ ] Message threading
- [ ] User presence indicators

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Security Disclosure

If you discover a security vulnerability, please email security@hihey.app instead of using the issue tracker.

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Email: support@hihey.app
- Discord: [Join our server]

## Acknowledgments

- OAuth implementation guides
- Security best practices from OWASP
- UI/UX inspiration from modern messaging apps

---

**Made with ❤️ for secure, private communication**
