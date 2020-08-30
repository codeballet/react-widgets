import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a JavaScript front end framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is very popular among engineers.'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.'
    }
];

export default () => {
    return(
        <div>
            <Search />
        </div>
    );
};