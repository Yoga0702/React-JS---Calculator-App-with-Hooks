import React, {useState} from "react";

const HookCalculator = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    
    const handleClear = () => {
        setResult("");
    }

    const handleDelete = () => {
        setResult(result.slice(0, -1));
    }

    const handleResult = () => {
        try{
            setResult(eval(result).toString()); //sari xeberdarliq duzelt.
        } 
        catch(error){
            setResult("Error")
        }
    }

    return(
        <div className="container">
            <form>
                <input type="text" value={result} />
            </form>
            <div className="buttons">
                <button type="button" name="." onClick={handleClick}>.</button>
                <button type="button" name="1" onClick={handleClick}>1</button>
                <button type="button" name="2" onClick={handleClick}>2</button>
                <button type="button" name="3" onClick={handleClick}>3</button>
                <button type="button" name="4" onClick={handleClick}>4</button>
                <button type="button" name="5" onClick={handleClick}>5</button>
                <button type="button" name="6" onClick={handleClick}>6</button>
                <button type="button" name="7" onClick={handleClick}>7</button>
                <button type="button" name="8" onClick={handleClick}>8</button>
                <button type="button" name="9" onClick={handleClick}>9</button>
                <button type="button" name="0" onClick={handleClick}>0</button>
                <button type="button" name="+" onClick={handleClick}>+</button>
                <button type="button" name="*" onClick={handleClick}>*</button>
                <button type="button" name="/" onClick={handleClick}>/</button>
                <button type="button" name="-" onClick={handleClick}>-</button>
                <button type="button" id="clear" onClick={handleClear}>Clear</button>
                <button type="button" id="delete" onClick={handleDelete}>C</button>
                <button type="button" id="result" onClick={handleResult}>=</button>
            </div>
        </div>
    );
}
export default HookCalculator;