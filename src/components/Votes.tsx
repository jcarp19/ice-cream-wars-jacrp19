import {useState} from "react";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'
import "./Votes.css";

const Votes = () => {
    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0);

    return (
        <div className="Votes">
            <h2>Vote Here</h2>
            <Button onClick={() => {setChocolateVotes(prv => prv + 1); setTotalVotes(prv => prv + 1)}}>Chocolate</Button>
            <Button onClick={() => {setStrawberryVotes(prv => prv + 1); setTotalVotes(prv => prv + 1)}}>Strawberry</Button>
            <Button onClick={() => {setVanillaVotes(prv => prv + 1); setTotalVotes(prv => prv + 1)}}>Vanilla</Button>
            <div className={totalVotes == 0 ? "not-hidden" : "hidden"}>No votes yet.</div>
            <div className={chocolateVotes == 0 ? "hidden" : "not-hidden"}>
                <p>Chocolate: {chocolateVotes} ({((chocolateVotes / totalVotes) * 100).toFixed(1)})%</p>
                <ProgressBar className="chocolateBar" now={((chocolateVotes / totalVotes) * 100)} />
            </div>
            <div className={strawberryVotes == 0 ? "hidden" : "not-hidden"}>
                <p>Strawberry: {strawberryVotes} ({((strawberryVotes / totalVotes) * 100).toFixed(1)})%</p>
                <ProgressBar className="strawberryBar" now={((strawberryVotes / totalVotes) * 100)} />
            </div>
            <div className={vanillaVotes == 0 ? "hidden" : "not-hidden"}>
                <p>Vanilla: {vanillaVotes} ({((vanillaVotes / totalVotes) * 100).toFixed(1)})%</p>
                <ProgressBar className="vanillaBar" now={((vanillaVotes / totalVotes) * 100)} />
            </div>
        </div>
    );
};

export default Votes;