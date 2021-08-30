import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState} from "react";
import "./AdDesigner.css";
import Ad from "./Ad";

const AdDesigner = () => {
    const [ad, setAd] = useState("Chocolate");
    const [theme, setTheme] = useState("Light");
    const [font, setFont] = useState(16);

    let styles = { width: '100%', textAlign: "center" };
    return (
        <div className="AdDesigner">
            {/* <Card style={{ width: '100%', textAlign: "center" }}>
                <Card.Body className={theme == "Light" ? "light" : "dark"}>
                    <Card.Title>Vote For</Card.Title>
                    <Card.Subtitle className="mb-2" style={{fontSize: `${font}px`, fontFamily: 'Caveat' }}>{ad}</Card.Subtitle>
                </Card.Body>
            </Card> */}
            <Ad flavor={ad} fontSize={font} darkTheme={theme === "Dark"} />

            <h2>What to Support</h2>
            <Button disabled={ad === "Chocolate"} onClick={() => {setAd("Chocolate")}}>Chocolate</Button>
            <Button disabled={ad === "Strawberry"} onClick={() => {setAd("Strawberry")}}>Strawberry</Button>
            <Button disabled={ad === "Vanilla"} onClick={() => {setAd("Vanilla")}}>Vanilla</Button>
            
            <h2>Color Theme</h2>
            <Button disabled={theme === "Light"} onClick={() => {setTheme("Light")}}>Light</Button>
            <Button disabled={theme === "Dark"} onClick={() => {setTheme("Dark")}}>Dark</Button>

            <h2>Font Size</h2>
            <Button onClick={() => {setFont(prv => prv - 1)}}>Down</Button>
            <span className="fontSize">{font.toString().padStart(3, "0")}</span>
            <Button onClick={() => {setFont(prv => prv + 1)}}>Up</Button>
        </div>
    );
};

export default AdDesigner;