import React from 'react' 
import {render} from 'react-dom' 
import Stage from './components/stage'

window.React = React

render(<Stage />,document.getElementById('react-container'))

