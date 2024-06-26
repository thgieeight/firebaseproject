import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
    databaseURL: "https://codebloomwebsite-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const ContactPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, email } = event.target.elements;
        const data = {
            name: name.value,
            email: email.value,
        };
        try {
            push(ref(database, 'users'), data)
                .then(() => {
                    console.log("Data pushed successfully!");
                })
                .catch((error) => {
                    console.error("Error pushing data:", error);
                });
        } catch (error) {
            console.error("Error pushing data:", error);
        }
    };

    return (
        <>
            <h1>contact form</h1>
            <a href="/"><button>click me to visit index</button></a>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default ContactPage;
