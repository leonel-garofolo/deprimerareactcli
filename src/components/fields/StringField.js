import React from 'react';

class StringField extends React.Component {
    render() {
        return (
            <div class="container">
                <label for="fname">Name</label>
                <input id="fname" type="text" name="firstname" placeholder="Your name.." />
            </div>
        );
    }
}

  export default StringField;