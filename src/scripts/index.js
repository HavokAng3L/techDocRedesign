//  Source Codes
import {JSNodeSource, CppNodeSource, JSInstructionsSource, CppInstructionsSource} from "./SourceCodes.js";

const implementSection = document.getElementById('imp-display');
const instructionSection = document.getElementById('inst-display');

//  Will refactor over time.
function renderCode(){
    //  Sets the displays to none on initial loading
    document.getElementById("imp-render").style.display = "none";
    document.getElementById("inst-render").style.display = "none";

    document.addEventListener('click', (event)=>{
        //  Depending on what button is clicked, adds textContent (source code) and toggles display
        if(event.target.id === 'JS_imp_button') {
            implementSection.textContent = JSNodeSource;
            document.getElementById("imp-render").style.display = "block";
        }
        else if(event.target.id === 'Cpp_imp_button') {
            implementSection.textContent = CppNodeSource;
            document.getElementById("imp-render").style.display = "block";
        }
        else if(event.target.id === 'JS_inst_button') {
            instructionSection.textContent = JSInstructionsSource;
            document.getElementById("inst-render").style.display = "block";
        }
        else if(event.target.id === 'Cpp_inst_button') {
            instructionSection.textContent = CppInstructionsSource;
            document.getElementById("inst-render").style.display = "block";
        }
    })
}

renderCode();