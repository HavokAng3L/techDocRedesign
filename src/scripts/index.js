//  Source Codes
import {JSNodeSource, CppNodeSource, JSInstructionsSource, CppInstructionsSource} from "./SourceCodes.js";

const implementSection = document.getElementById('imp-display')
const instructionSection = document.getElementById('inst-display')

function renderCode(){
    document.addEventListener('click', (event)=>{
        if(event.target.id === 'JS_imp_button') {
            implementSection.textContent = JSNodeSource;
        }
        else if(event.target.id === 'Cpp_imp_button') {
            implementSection.textContent = CppNodeSource;
        }
        else if(event.target.id === 'JS_inst_button') {
            instructionSection.textContent = JSInstructionsSource;
        }
        else if(event.target.id === 'Cpp_inst_button') {
            instructionSection.textContent = CppInstructionsSource;
        }
    })
}

renderCode();