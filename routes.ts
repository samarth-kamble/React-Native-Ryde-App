/**
 *  An arrayy of routes that are accessble to the public
 *  These routes do not require the authentication
 *  @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 *  An array of routes that are used for authentication
 *  These routes will redirect  logged in users to /settings
 *  @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @types {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 *  @types {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
