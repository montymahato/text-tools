import { useState } from "react";

function TextArea() {

    const [texts, updateText] = useState("");
    const makeUpperCase = () => {
        const newText = texts.toUpperCase();
        updateText(newText);
    }
    const makeLowerCase = () => {
        const newText = texts.toLowerCase();
        updateText(newText);
    }
    const onChangeUp = (event) => {
        updateText(event.target.value)
    }
    const clearText = () => updateText('');
    const capitlizeText = () => {
        const matches = texts.replace(/\b(\w)/g, c => c.toUpperCase())
        updateText(matches)
    }

    const sentenceText = () => {
        const fmatches = texts.replace(/\b(\w)/, c => c.toUpperCase())
        const smatches = fmatches.replace(/\. \b(\w)/g, c => c.toUpperCase())
        const lmatches = smatches.replace(/ i /g, c => c.toUpperCase())
        updateText(lmatches)
    }

    const alternateText = () => {
        let chars = texts.toLowerCase().split("");
         for (var i = 0; i < texts.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
        }
        updateText(chars.join(""));
    }

    const invertedText = () => {
        const newText = texts.toUpperCase();
        const matches = newText.replace(/\b(\w)/g, c => c.toLowerCase());
        updateText(matches);
    }

    const copyText = () => navigator.clipboard.writeText(texts);
    const extraSpaces = () => {
        const newText = texts.replace(/\s[ ]+/g, " ")
        updateText(newText)
    }

    return (
    <div>
      <div className="mb-3">
      <h4 className="my-3">Enter your string</h4>
      <textarea value={texts} onChange={onChangeUp} className="form-control" id="myBoxwhite" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mb-3 mx-2" onClick={makeUpperCase}>Uppercase</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={makeLowerCase}>Lowercase</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={capitlizeText}>Capitalize</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={sentenceText}>Sentence</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={alternateText}>Alternate</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={invertedText}>Inverted</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={copyText}>Copy Text</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={extraSpaces}>Extra Spaces</button>
    <button className="btn btn-danger mb-3 mx-1" onClick={clearText}>Clear</button>

    <h4 className="my-2">Your text summary</h4>
    There are <b>{texts.split(' ').length}</b> words and <b>{texts.length}</b> characters<br/>
    <b>{texts.split(' ').length / 200}</b> minutes read

    <h4 className="my-4">Here is a preview</h4>
    {texts}
</div>
    );
}

export default TextArea;