import { AuthError } from 'firebase/auth';

export const getAuthErrorMessage = (error: AuthError): string => {
    const errorMessages: Record<string, string> = {
        'auth/invalid-email': 'Please enter a valid email address',
        'auth/user-disabled': 'This account has been disabled. Please contact support',
        'auth/user-not-found': 'We couldn\'t find an account with this email',
        'auth/wrong-password': 'Incorrect password. Please try again',
        'auth/email-already-in-use': 'This email is already registered. Try signing in instead',
        'auth/weak-password': 'Password must be at least 6 characters long',
        'auth/network-request-failed': 'Connection failed. Please check your internet connection',
        'auth/too-many-requests': 'Too many attempts. Please try again in a few minutes',
        'auth/invalid-credential': 'Invalid login credentials. Please check your email and password',
        'auth/popup-closed-by-user': 'Sign-in popup was closed. Please try again',
        'auth/popup-blocked': 'Pop-up was blocked by your browser. Please allow pop-ups and try again',
        'auth/cancelled-popup-request': 'Multiple pop-up requests were cancelled'
    };

    return errorMessages[error.code] || 'An error occurred. Please try again';
};