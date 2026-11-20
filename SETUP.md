# Login and admin dashboard (Firebase)

Login is off until you do these steps. Without them the app works as before, with no login.

1. **Create a Firebase project.** Go to https://console.firebase.google.com, click **Add project**, give it a name and create it. Google Analytics is not needed.
2. **Turn on sign-in.** Open **Build → Authentication → Get started**. Under **Sign-in method**:
   - turn on **Google**, and
   - turn on **Email/Password**.
3. **Allow your website.** In **Authentication → Settings → Authorized domains**, click **Add domain** and enter `imkeystudio.github.io`.
4. **Create Firestore.** Open **Build → Firestore Database → Create database**, choose **production mode** and a location near your users.
   - On the **Rules** tab, replace everything with the contents of `firestore.rules`.
   - Click **Publish**.
5. **Create the Realtime Database** (it shows who is online now). Open **Build → Realtime Database → Create database** and choose **locked mode**.
   - On the **Rules** tab, replace everything with the contents of `database.rules.json`.
   - Click **Publish**.
6. **Paste the web config.**
   1. Open **Project settings** (the gear icon) and go to **Your apps**.
   2. Click the web icon `</>`, register an app (no hosting needed) and copy the `firebaseConfig` object.
   3. Open `firebase_config.js` in the repository (next to `index.html`) and change its last line to:
      ```js
      window.AIA_FIREBASE = { apiKey: "...", authDomain: "...", projectId: "...", databaseURL: "https://<project>-default-rtdb.firebaseio.com", appId: "..." };
      ```
      Include `databaseURL`: copy it from the Realtime Database page.
   4. Commit and push.

   This config is public by design. The rules decide who can read what.
7. **Make yourself an admin.** Use the email you sign in with, in lower case.
   - In **Firestore → Data**, click **Start collection**. Name it `admins`, set the document ID to your email (for example `you@gmail.com`), and add any field, for example `role` = `admin`.
   - In **Realtime Database → Data**, add a child `admins`. Under it, add your email with every `.` replaced by `,` (for example `you@gmail,com`) and set the value to `true`.
8. **Open the dashboard.** Open `https://imkeystudio.github.io/<repo>/admin.html` and sign in. An admin also sees **Admin dashboard** in the account menu, which is the round button at the top right of the editor.

**What is stored:** each user's name and email, first and last visit, country (from the browser language), device and browser. It also stores sessions (start, length, app version, load time, frame rate) and these events: import (with time taken), export (format), save `.spine`, and error messages. Projects are not uploaded; they stay in the user's browser.

**Turning login off again:** set `window.AIA_FIREBASE = null;` in `firebase_config.js`.
