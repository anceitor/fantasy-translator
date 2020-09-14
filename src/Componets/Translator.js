import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../App.css';

class Translator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            translated: '',
            toTranslate: '',
         };
    }

    tranlate(phrase){
        this.setState({
            toTranslate: phrase,
        })
    }

    render() { 
        return ( 
            <div>
                <TextField className="input" label="Translate" variant="outlined" 
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                            this.tranlate(ev.target.value)
                        }
                    }}
                />
            </div>
        );
    }
}
 
export default Translator;