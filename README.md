# herokublog
Learning about Heroku, Postgres, and Express! Wanted to make a blog site for fun.
Two big pains so far: Figuring out Postgres. I've only used MySQL. They seem like the same thing but setting Postgres up, I went through all the same headaches as previous DBs I've used.
NPM. UGHHHHH I had so many problems with npm. I kept having path's set to User instead of sudo/global, whatever that means. Installed NVM and so far it's working beautifully and easy!


CRA (Create React App) hosts index.js. I can then fetch any node routes, not controlling the actual url of the heroku application. node api fetches right now only send data i believe to the client. I think since this is SPA it's different than node sending templates to render on each router.


# Merge dev into master
git checkout master
git pull origin master
git merge test
git push origin master
