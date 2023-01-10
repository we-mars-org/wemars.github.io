# WE Mars
This repository holds all the data needed to run a standalone website using node.js for the backend. The actual deployment happens through Github Pages in the wemars.gitlab.io repo. There is a process for moving changes in one repo to the other. **This is the main repository**. All changes need to be moved over to the other repo, not the other way

To run locally, simply type `node app.js` in the command line in the same folder as the app.js file, and it will start the server listening on port 3000.

# Moving files to Github Pages repo
To move files from one repo to the other, you need to follow a few steps:
1. Ensure your local branch of we-mars-org/Website is up to date
2. In your local branch, in the top level folder, enter `git rm -rf --cached .`. This will unlink all the files in your local branch. **IF YOU DO NOT ADD THE `--cached` TAG, ALL YOUR LOCAL FILES WILL BE DELETED**
3. Select only the files which are in we-mars-org/wemars.github.io, which for now is Source/ and index.html using `git add Source` and `git add index.html`
4. Commit these to your local branch
5. Push them to the **test branch** in the github pages repo using `git push (REMOTE) HEAD:test`. REMOTE is whatever remote you have established for the other repo. If you do not have a remote established, you can using `git remote add (NAME) https://github.com/we-mars-org/wemars.github.io`, or avoid using remotes by substituting in the url https://github.com/we-mars-org/wemars.github.io for remote
6. Done

To set up your local branch for the we-mars-org/Website repo again, run `git rm -rf --cached .` then `git add -A` to include all files in your index again
