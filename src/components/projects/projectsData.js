import analogClock from "../../asset/img/analogClock.jpg";
import cssPosition from "../../asset/img/css-position.jpg";
import foodOClock from "../../asset/img/foodOClock.jpg";
import staticPort from "../../asset/img/portfolio.jpg";
import photoEditor from "../../asset/img/simple-photo-editor.jpg";
import todoApp from "../../asset/img/todoApp.jpg";

const projectsData = [
  {
    id: 1,
    title: "Photo Editor",
    desc: "built with react",
    imgSrc: photoEditor,
    codeSrc: "https://github.com/abid-shahriar/simple-photo-editor",
    liveSrc: "https://abid-shahriar.github.io/simple-photo-editor/",
  },
  {
    id: 2,
    title: "todo app",
    desc: "html, css/sass, vanilla javascript",
    imgSrc: todoApp,
    codeSrc: "https://github.com/abid-shahriar/toDo-app",
    liveSrc: "https://abid-shahriar.github.io/toDo-app/",
  },
  {
    id: 3,
    title: "CSS position GUI",
    desc: "built with react",
    imgSrc: cssPosition,
    codeSrc: "https://github.com/abid-shahriar/react-css-position-gui",
    liveSrc: "https://abid-shahriar.github.io/react-css-position-gui",
  },
  {
    id: 4,
    title: "Static Portfolio",
    desc: "html, css/sass, JavaScript",
    imgSrc: staticPort,
    codeSrc: "https://github.com/abid-shahriar/portfolio",
    liveSrc: "https://abid-shahriar.netlify.app/",
  },
  {
    id: 5,
    title: "Restaurant Portfolio",
    desc: "html, css/sass, JavaScript",
    imgSrc: foodOClock,
    codeSrc: "https://github.com/abid-shahriar/restaurant-website",
    liveSrc: "https://food-o-clock.netlify.app/",
  },
  {
    id: 6,
    title: "Restaurant Portfolio",
    desc: "html, css/sass, JavaScript",
    imgSrc: analogClock,
    codeSrc: "https://github.com/abid-shahriar/analog-clock",
    liveSrc: "https://abid-shahriar.github.io/analog-clock/",
  },
];

export default projectsData;
