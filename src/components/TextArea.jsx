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
      <h4 className="my-3">Enter your string below</h4>
      <textarea value={texts} onChange={onChangeUp} className="form-control" id="myBoxwhite" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mb-3 mx-2" onClick={makeUpperCase}><i class="fa fa-a" style={{fontSize:"20px"}}></i> Uppercase</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={makeLowerCase}><i class="fa fa-angle-down" style={{fontSize:"20px"}}></i> Lowercase</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={capitlizeText}><i class="fa fa-t" style={{fontSize:"20px"}}></i> Capitalize</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={sentenceText}><i class="fa fa-arrow-down-short-wide" style={{fontSize:"20px"}}></i> Sentence</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={alternateText}><i class="fa fa-arrow-down-a-z" style={{fontSize:"20px"}}></i> Alternate</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={invertedText}><i class="fa fa-arrow-up-a-z" style={{fontSize:"20px"}}></i> Inverted</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={copyText}><i class="fa fa-copy" style={{fontSize:"20px"}}></i> Copy Text</button>
    <button className="btn btn-primary mb-3 mx-1" onClick={extraSpaces}><i class="fa fa-filter" style={{fontSize:"20px"}}></i> Extra Spaces</button>
    <button className="btn btn-danger mb-3 mx-2" onClick={clearText}><i class="fa fa-x" style={{fontSize:"20px"}}></i> Clear Text</button>

    <h4 className="my-2">Your text summary</h4>
    There are <b>{texts.split(' ').length}</b> words and <b>{texts.length}</b> characters<br/>
    <b>{texts.split(' ').length / 200}</b> minutes read
</div>
    );
}

export default TextArea;