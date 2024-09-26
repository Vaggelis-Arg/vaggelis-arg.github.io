import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        await loadSlim(main);
    };

    const particlesOptions = {
        background: {
            color: {
                value: "#eae7dc",
            },
        },
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 2,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#6e6658",
            },
            links: {
                color: "#6e6658",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 700,
                },
                value: 55,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
    };

    const particlesStyle = {
        position: 'sticky',
    };
    return (
        <div style={particlesStyle}>
            <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
        </div>
    );
};

export default ParticlesBackground;
