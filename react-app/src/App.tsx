import { Button } from "@mono/ui";
import { add } from "@mono/utils";
import { useState } from "react";
function App() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [result, setResult] = useState("");
    return (
        <>
            <input
                type="text"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
            />
            <input
                type="text"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
            />
            <div>Result: {result}</div>
            <Button
                onClick={() =>
                    setResult(add(Number(value1), Number(value2)).toString())
                }
            >
                Add
            </Button>
        </>
    );
}

export default App;
