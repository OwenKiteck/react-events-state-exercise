import {useState} from "react";


function Bonus(){
    const variables = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [letter, setLetter] = useState(0)
    const update = () => setLetter(letter + 1)

    return (
        <div>
            <h1>{variables[letter]}</h1>
            <button onClick={ letter < 26 ? update : setLetter(0) }>NEXT LETTER</button>
        </div>
    );
}

export default Bonus