import transImg from '../../assets/projects/watch.png'
import inceptionImg from '../../assets/projects/docker-architecture-min.png'
import webservImg from '../../assets/projects/inception.svg'
import likeBashImg from '../../assets/projects/likeBash.jpg.jpg'
import raycastingImg from '../../assets/projects/raycasting.png'

export const projectsData = [
    {
      img: transImg,
      name: "Transcendence",
      desc: "Transcendence is a Ping Pong game, to learn about web developpement and SPA. The goal is to create a web app to play Pong, and socialize with other users",
      features: [
        "Real-Time Chat: Communicate with other users instantly through the integrated chat feature.",
        "Profile Page: Customize your profile, view your stats, and check your achievements.",
        "Game Page: Immerse yourself in the Pong Game environment with a dedicated game page.",
      ],
      tools: [
        "HTML5",
        "CSS3",
        "Tailwind",
        "ReactJs",
        "Nest.js",
        "PostgreSQL",
        "Socket.io",
      ],
      codeLink: "about:blank",
      demoLink: "about:blank"
    },
    {
      img: inceptionImg,
      name: "Inception",
      desc: "This project aims to broaden your knowledge of system administration by using Docker.You will virtualize several Docker images, creating them in your new personal virtual machine.",
      features: [
        "Docker: This involves creating Dockerfiles for each service and setting up the required environment for them to run.",
        "Docker Compose: use Docker Compose to orchestrate and manage the multi-container system. This helps in defining, configuring, and running multiple services with their dependencies.",
        "Network Configuration: The services must be configured to communicate with each other over a Docker-managed network.",
      ],
      tools: [
        "Docker",
        "Docker Compose",
        
      ],

      codeLink: "about:blank",
      demoLink: "about:blank"
    },
    {
      img: webservImg,
      name: "WebServer",
      desc: "The project aims to build a C++98 HTTP web server from scratch, handling GET, HEAD, POST, PUT, DELETE requests, serving static/dynamic content, and managing multiple connections using select().",
      features: [
        "HTTP/1.1 Protocol: Implement handling of HTTP requests and responses, including methods like GET, POST, and DELETE.",
        "Sockets: Use low-level socket programming to handle client-server communication.",
        "Concurrency: Handle multiple connections concurrently using techniques like forking or multi-threading.",
      ],
      tools: [
        "C++",
        "Socket Programming",
      ],

      codeLink: "about:blank",
      demoLink: "about:blank"
    },
    {
      img: raycastingImg,
      name: "Cub3d",
      desc: "It's a project designed to introduce students to 3D rendering techniques, focusing on developing a simple raycasting engine, which is the fundamental technique used in early 3D games like Wolfenstein 3D.",
      features: [
        "Raycasting: Students use this method to create a basic 3D effect by casting rays from a player's point of view and determining where they intersect with walls in a 2D map.",
        "Graphics Library: The project often requires the use of the MiniLibX library, which is a simple graphics library provided by 42 for handling window creation, image manipulation, and event handling (keyboard, mouse).",
        "Game Engine Basics: Students build a small game environment where they move within a 3D-like world. The project involves implementing textures, managing the movement and collision detection of the player, and rendering the scene in real-time.",
        "Mathematics Involved: The project requires students to understand some mathematical concepts such as trigonometry, vector calculations, and basic linear algebra for the calculations needed in rendering a 3D world from a 2D perspective."
      ],
      tools: [
        "C",
        "Graphics Libraries (MiniLibX)"
      ],

      codeLink: "about:blank",
      demoLink: "about:blank"
    },
    {
      img: likeBashImg,
      name: "Like Bash",
      desc: "This project helps students develop a deeper understanding of how command-line interpreters work, including process creation, file handling, and signal management.",
      features: [
        "Command Parsing: Students need to implement a way to parse user input into individual commands and arguments, handle quotes, and manage environment variables (like $HOME or $PATH).        ",
        "Built-in Commands: The shell must support basic built-in commands such as: cd echo  exit env export unset pwd",
        "Pipes and Redirections: Pipes (|) Redirection (>, >>, <), redirecting standard input/output to/from files."
      ],
      tools: [
        "C",
        "System calls functions",
        "Multi-process management",
      ],

      codeLink: "about:blank",
      demoLink: "about:blank"
    }
  ]