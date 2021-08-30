import Card from 'react-bootstrap/Card';

interface Props {
    fontSize: number;
    darkTheme: boolean;
    flavor: string;
}
const Ad = (props: Props) => {
    return (
        <Card style={{textAlign: "center" }}>
            <Card.Body className={props.darkTheme ? "dark" : "light"}>
                <Card.Title>Vote For</Card.Title>
                <Card.Subtitle className="mb-2" style={{fontFamily: 'Caveat', fontSize: props.fontSize}}>{props.flavor}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
};

export default Ad;