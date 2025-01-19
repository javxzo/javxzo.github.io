
function createSparkles() {
  const sparkleContainer = document.querySelector('.sparkle-container');
  const sparkleCount = 50; 

  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Randomize position and delay
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.animationDelay = Math.random() * 3 + 's';
    sparkle.style.animationDuration = 3 + Math.random() * 2 + 's';
    sparkle.style.width = sparkle.style.height = Math.random() * 8 + 3 + 'px'; // Random size
    
    sparkleContainer.appendChild(sparkle);
  }
}


window.onload = createSparkles;


const projects = [
    {
      image: "projects/Olympics.png",
      title: "2024 Olympics Power BI Dashboard",
      description: "Developed a 5-page Power BI dashboard for the 2024 Olympics, featuring interactive visuals on medal breakdowns, athlete performance, and historical comparisons across Olympic years. Created a Python-based visual analytics podium page using Seaborn, Matplotlib, and Plotly, providing enhanced insights into medal distributions and key highlights.",
      github: "https://github.com/javxzo/Olympics-2024-Power-Bi-Dashboard",
      languages: "Power BI, SQL, Python, Excel", 
    },
    {
      image: "projects/image2.png",
      title: "SQLink - A Murder Mystery",
      description: "Developed SQLink, an interactive murder-mystery game that tests SQL skills through solving crime scenarios using database queries. Designed the frontend with HTML, CSS, and JavaScript, using CodeMirror for SQL editing and Confetti.js for animations. Implemented a Node.js backend with RestAPIs to handle SQL query execution and game interactions to uncover clues and solve the mystery through database queries.",
      github: "https://github.com/javxzo/SQLink",
      languages: "Javascript, HTML, CSS, SQLite3, Node.js, RestAPIs", 
    },
    {
      image: "projects/Spotify_DB.png",
      title: "Spotify Flashback: 2023 Rewind",
      description: "Analyzed the top songs of 2023 using Kaggle data, creating an interactive dashboard with Power BI and Deneb. Integrated album covers and streaming trends by utilizing Spotify’s API and data processing in Excel and Power BI. Showcased music trends through interactive visuals and comparative analyses, highlighting artist evolution, genre popularity, and user behavior over time.",
      github: "https://github.com/javxzo/Spotify-Power-Bi-Project",
      languages: "HTML, Deneb, Excel, Power BI, Spotify API", 
    },
    {
      image: "projects/tableau.png",
      title: "Human Resources Tableau Analysis",
      description: "Developed a dynamic HR dashboard in Tableau with interactive Overview and Employee List pages. Used SQL and Excel for data queries and preprocessing to ensure accurate data visualization. Generated a realistic HR dataset using the Faker library to simulate various employee scenarios.",
      github: "https://public.tableau.com/app/profile/jav.alam/viz/HR_Dashboard_17258551608650/HRSummary",
      languages: "SQL, Excel, Tableau, Faker", 
    },
    {
      image: "projects/twit.png",
      title: "Twitter Sentiment Analysis",
      description: "This Jupyter notebook performs sentiment analysis on Twitter data. The project includes data preprocessing, training a machine learning model, and evaluating its performance.The main features of the repository include cleaning and stemming of tweet text, training a logistic regression model to classify tweets as positive or negative, assessing the model's accuracy on test data, saving the trained model for future use and, using the saved model to predict the sentiment of new tweets.",
      github: "https://github.com/javxzo/Twitter-Sentiment-Analysis",
      languages: "Python, Pandas, Scikit-learn, Pickle", 
    },
    {
      image: "projects/sales.png",
      title: "Supermarket Sales Dashboard",
      description: "This project was made to practice making dashboards and manipulating information in Excel. It utilizes pivot tables, advanced Excel functions, interactive controls and visualizations. The final deliverable is an interavtive and visually appealing dashboard that provides insights into the bike sales data and a fully cleaned bike sales data set. It representations information like: average income per purchase, customer age brackets, customer commute, sales region and more!",
      github: "https://github.com/javxzo/Supermarket-Sales-Analysis-with-Excel",
      languages: "Excel", 
    },
    {
      image: "projects/survey.png",
      title: "Professional Survey Data Analysis",
      description: "Analyzing real survey data on professional aspects such as salary, job titles, and programming languages using interactive Power BI dashboards.",
      github: "https://github.com/javxzo/Professional-Survey-Data-Analysis-in-Power-BI",
      languages: "Excel, SQL, Power BI", 
    },
    {
      image: "projects/image5.png",
      title: "WIP - Perfume Analytics and Recommendation System",
      description: "Developed a dynamic HR dashboard in Tableau with interactive Overview and Employee List pages. Used SQL and Excel for data queries and preprocessing to ensure accurate data visualization. Generated a realistic HR dataset using the Faker library to simulate various employee scenarios.",
      github: "https://github.com/javxzo",
      languages: "SQL, Python, Excel, Power BI", 
    },
  ];
  
  
  let currentIndex = 0;
  
  const projectImage = document.getElementById("project-image");
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");
  const githubLink = document.getElementById("github-link");

  function updateProject(index) {
    const project = projects[index];
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    githubLink.href = project.github;
  
    const projectSubtitle = document.getElementById("project-subtitle");
    projectSubtitle.textContent = `${project.languages}`;
  }
  
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProject(currentIndex);
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProject(currentIndex);
  });
  
  updateProject(currentIndex);
  
  const categories = [
    {
      title: "languages",
      items: ["Python", "SQL", "Java", "JavaScript", "C", "HTML", "CSS"],
      images: ["python.png", "sql.png", "java.svg", "javascript.png", "c.png", "html.png", "css.png"],
    },
    {
      title: "tools",
      items: ["VBA", "DAX", "Pandas", "Numpy", "Matplotlib", "Plotly", "Scikit-learn", "Git"],
      images: ["vba.png", "dax.png", "pandas.png", "numpy.svg", "matplotlib.png", "plotly.svg", "scikit-learn.png", "git.png"],
    },
    {
      title: "platforms",
      items: ["Power BI", "Tableau", "Excel", "MS SQL", "Anaconda", "Visual Studio Code", "GitHub"],
      images: ["powerbi.png", "tableau.png", "excel.png", "mssql.png", "anaconda.png", "vscode.png", "github.png"],
    },
  ];
  
  let currentCategoryIndex = 0;
  
  const skillsTitle = document.getElementById("skills-title");
  const skillsGrid = document.getElementById("skills-grid");
  const skillsDescription = document.getElementById("skills-description");
  
  function updateSkillsSection() {
    const category = categories[currentCategoryIndex];
    skillsTitle.textContent = category.title;
    skillsGrid.innerHTML = "";
    category.images.forEach((img, index) => {
      const imgElement = document.createElement("img");
      imgElement.src = `logos/${img}`;
      imgElement.alt = category.items[index];
      imgElement.title = category.items[index];
      skillsGrid.appendChild(imgElement);
    });
    skillsDescription.textContent = category.items.join(", ");
  }
  
  document.getElementById("prev-category").addEventListener("click", () => {
    currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
    updateSkillsSection();
  });
  
  document.getElementById("next-category").addEventListener("click", () => {
    currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
    updateSkillsSection();
  });
  
  updateSkillsSection();
  