import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <title>LAB10C</title>
      </head>
      <header className="App-header">
      <div>
      <h1>How I installed React On My Computer</h1>
        <p>
        First, I went to "www.nodejs.org". After going into the webiste,
        I downloaded a 64 bit version of the "Node js" to my computer.
        I then installed it on my computer, then created a folder on my 
        C drive that is called "react". 
        Next, I opened Windows powershell as administrator, then on powershell
        I changed my directory to the location of my react folder, then 
        executed the command "npm init reac-app reactjs", once the installation was downloaded
        I opened the folder "reactjs" using Visual Studio Code to start editing my website.
        then I went to my reactjs folder using the cd command and then I executed the command
        "npm start". Finally, I was able to change and design my Lab10C website.
        </p>
        </div>

        <div>
        <h1>How I Hosted My webpage on GitHub</h1>
        <p>1. Installed git on my computer.</p>
        <p>2. Created a new github account.</p>
        <p>3. Created a new repository and called it "lab10c".</p>
        <p>4. I have added my lab10c github repository as a remote in my local git repository using the command "git remote add origin https://github.com/mdarras/lab10c.git".</p>
        <p>5. Generated a production build of my application and deployed it to github pages using the command "npm run deploy".</p>
        <p>6. As a result my application was hosted onto my gh-pages, and I was able to access it by going to my repository's setting on github and click on the pages tab which includes a link to my webpage.</p>
        <p>7. I committed my source code to the master branch and pushed it to use it later.</p>
        </div>
        <div>
        <h1>Difficulties Encountered</h1>
        <p>
        I had difficulties with installing react on my computer, once I have installed git, I was a bit lost on how to start actually coding in it.
        </p>
        <p>The hardest part was uploading my webpage to github, it took me almost 5 hours to figure out how github works (I have never used github before starting this lab).
          However, after watching numerous youtube tutorials on how to upload my webpage to github, I figured it out. 
        </p>
        </div>
       
        
        
      </header>
    </div>
  );
}

export default App;
