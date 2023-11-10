import { useState } from 'react';

const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

const getCookieConsentFromLocalStorage = () => {
  return isLocalStorageAvailable ? localStorage.getItem('cookieConsent') : null;
};

const setCookieConsentInLocalStorage = (value) => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('cookieConsent', value);
  }
};

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(getCookieConsentFromLocalStorage());

  const handleAcceptCookies = () => {
    setCookieConsent('accepted');
    setCookieConsentInLocalStorage('accepted');
  };

  const handleDeclineCookies = () => {
    setCookieConsent('declined');
    setCookieConsentInLocalStorage('declined');
  };

  if (cookieConsent === 'accepted' || cookieConsent === 'declined') {
    return null; // If cookies are already accepted or declined, hide the banner
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white py-4 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p>We use cookies to improve your experience on our website.</p>
        <button onClick={handleAcceptCookies} className='bg-gradient-to-r from-green-400 to-green-700 text-white px-4 py-2 rounded-md ml-8'>
          Accept
        </button>
        <button onClick={handleDeclineCookies} className='bg-gradient-to-r from-orange-400 to-orange-700 text-white px-4 py-2 rounded-md ml-8'>
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;