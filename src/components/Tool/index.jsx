import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faSass,
    faJs,
    faHtml5,
    faCss3Alt,
    faNodeJs,
    faGitAlt,
    faGithub,
    faFigma
} from "@fortawesome/free-brands-svg-icons";
import {
    faDatabase,
    faGroupArrowsRotate
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Tool.module.scss";
import { ReactComponent as Express } from "../../assets/express.svg";
import { ReactComponent as MongoDb } from "../../assets/mongodb.svg";
import { ReactComponent as ChatGpt } from "../../assets/chatgpt.svg";

const logoMap = {
    react: faReact,
    sass: faSass,
    javascript: faJs,
    html: faHtml5,
    css: faCss3Alt,
    nodejs: faNodeJs,
    express: Express,
    nosql: faDatabase,
    mongodb: MongoDb,
    git: faGitAlt,
    github: faGithub,
    agile: faGroupArrowsRotate,
    figma: faFigma,
    chatgpt: ChatGpt
};

const Tool = ({ mern, column, color, logo, title }) => {
    return (
        <li
            className={`${styles.tool} ${mern && styles["tool--mern"]} ${
                column && styles["tool--column"]
            }`}
            style={{ color: color }}
        >
            <div className={styles.tool__logos}>
                {logo.map((logo, index) => {
                    const Logo = logoMap[logo];

                    return Logo?.$$typeof ? (
                        <Logo key={index} className={styles.tool__logo} />
                    ) : (
                        <FontAwesomeIcon key={index} icon={Logo} size="3x" />
                    );
                })}
            </div>
            {title}
        </li>
    );
};

export default Tool;
