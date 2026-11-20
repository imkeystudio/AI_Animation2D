/* AI_animation: Firebase settings for login and the admin dashboard (see SETUP.md).
   Leave it null and the app runs without login, exactly as before.
   To turn login on, paste your project's web config (Firebase console → Project settings → Your apps → Web app), e.g.:
   window.AIA_FIREBASE = {
     apiKey: "…", authDomain: "your-project.firebaseapp.com", projectId: "your-project",
     databaseURL: "https://your-project-default-rtdb.firebaseio.com", appId: "…"
   };
   The web config is public by design; access is controlled by firestore.rules and database.rules.json. */
window.AIA_FIREBASE = window.AIA_FIREBASE || null;
