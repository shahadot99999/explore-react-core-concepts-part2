//import React from 'react';

const Haiku = () => {
    const lines = [
        "I write, erase, rewrite",
        "Erase again, and then",
        "i am very happy",
        "A poppy blooms."
      ];

    return (
        <article>
            {lines.map((line, index) => [
                <p key={`line-${index}`}>{line}</p>,
                index < lines.length - 1 && <hr key={`sep-${index}`} />
            ])}
        </article>
    );
};

export default Haiku;