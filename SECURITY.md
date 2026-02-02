# Security Information

## React Security Advisory (January 2026)

### Status: ✅ NOT AFFECTED

Recent React security advisories (CVE-2025-55182, CVE-2025-55183, CVE-2025-55184, CVE-2025-67779, CVE-2026-23864) affect **React Server Components** only.

**WeekMatrix is NOT affected** because:
- We use **React Native with Expo** (not React Server Components)
- We don't use any server-side rendering frameworks
- We don't use Next.js, react-router server features, or other affected frameworks
- Our app runs entirely client-side with Firebase as the backend

### What We Did

1. **Updated React** to version 19.1.5 (latest safe version)
2. **Verified** no server components are used in our codebase
3. **Confirmed** we only use client-side React Native components

### Security Best Practices

Our app follows security best practices:

1. **Firebase Security Rules** - User data is scoped to authenticated users only
2. **Input Validation** - All user inputs are validated and sanitized
3. **Authentication** - Secure Firebase Auth with email/password
4. **HTTPS Only** - All Firebase communication uses HTTPS
5. **No Hardcoded Secrets** - Configuration uses environment variables

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Reporting Security Issues

If you discover a security vulnerability, please:
1. **DO NOT** open a public GitHub issue
2. Email security concerns to: [your-email@domain.com]
3. Include detailed steps to reproduce the issue
4. Allow reasonable time for response before public disclosure

### Dependencies

We regularly monitor and update dependencies for security vulnerabilities:
- Firebase SDK (latest stable)
- Expo SDK (latest stable)
- React Native (latest stable)
- All npm packages are audited with `npm audit`

### Environment Security

- **Development**: Use `.env` files (never commit to git)
- **Production**: Use secure environment variable management
- **API Keys**: Restrict Firebase API keys to specific domains/apps
- **Database**: Enable Firestore security rules in production