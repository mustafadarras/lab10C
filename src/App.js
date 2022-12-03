import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <title>LAB10C</title>
      </head>
      <header className="App-header">
        <h2>How I installed React On My Computer</h2>
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

        <h2>Setting up webpage in GitHub</h2>
        <p>Step1: In the upper-right corner of any page, use the drop-down menu, and select New repository.</p>
        <p>Step2: Entered username.github.io as the repository name. Replace my username with my GitHub username</p>
        <p>Step3: Under my repository name, clicked Settings.</p>
        <p>Step4: In the "Code and automation" section of the sidebar, clicked  Pages. </p>
        <p>Step5: Under "Build and deployment", under "Source", select Deploy from a branch. </p>
        <p>Step6: Under "Build and deployment", under "Branch", use the None or Branch drop-down menu and select a publishing source.  </p>
        <p>Step7: Visit username.github.io to view your new website </p>
        <p>Step8: Uploaded my .js and .css files from C-drive directory to my  username.github.io  repository to host my website on Github.</p>
        
        
      </header>
    </div>
  );
}

export default App;
