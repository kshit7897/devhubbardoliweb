import React from 'react';

// const GIF_URL = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnhhMnMxbHBvaThhaW54cnJpM2F4MWZkcm1wODZ1aXU0ZmowMnNraCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/66M6ZwJkTLYikvhrqZ/giphy.gif';
const GIF_URL = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNndiNmg3cjM3a3Z0dmx5NzdzbWh2ZXo2YXY4ZmUwandzNnB5eXVoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OumCa12QC9CIvBe2c1/giphy.gif';

const CodeBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${GIF_URL})` }}
                aria-hidden="true"
                role="presentation"
            />
            <div className="absolute inset-0 w-full h-full bg-dark-navy/80" aria-hidden="true" />
        </div>
    );
};

export default CodeBackground;