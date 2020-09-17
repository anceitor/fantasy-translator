import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../App.css';
import { Languages } from '../info/Languages.json'

class Translator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            translated: '',
            toTranslate: '',
            Language: Languages,
         };
    }

    tranlate(phrase){
        this.setState({
            toTranslate: phrase
        })
    }

    render() { 
        return ( 
            <div>
                <div>
                    <TextField 
                        className="input" 
                        label="Translate" 
                        variant="outlined"
                        defaultValue="Broken blades and shattered bones, face me down if you have the stones"
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                this.tranlate(ev.target.value)
                            }
                        }}
                    />
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}
 
export default Translator;