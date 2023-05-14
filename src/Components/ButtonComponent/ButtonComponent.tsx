import React, { useEffect, useRef, MouseEvent } from 'react';

import ButtonComponentProps from './ButtonComponentProps';
import './ButtonComponent.css';

const ButtonComponent: React.FC<ButtonComponentProps> = ({ type, className, text, onClick }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setSizeProperties();
        bindMouseMoveEvent();
    }, []);

    const setSizeProperties = () => {
        const button = buttonRef.current;
        if (!button) return;

        const buttonProps = {
            sizeSquare: { name: '--size-square', value: 0 },
            diameterHighlight: { name: '--diameter-highlight', value: 0 },
        };

        setTimeout(() => {
            const buttonWidth = button.offsetWidth;
            const buttonHeight = button.offsetHeight;

            if (buttonWidth + buttonHeight !== 0) {
                buttonProps.sizeSquare.value = Math.sqrt(buttonWidth * buttonWidth + buttonHeight * buttonHeight);
            }

            buttonProps.diameterHighlight.value = Math.sqrt(
                buttonWidth * buttonWidth + buttonHeight * buttonHeight + Math.sqrt(buttonWidth * buttonHeight)
            );

            Object.entries(buttonProps).forEach(([_, prop]) => {
                button.style.setProperty(prop.name, `${prop.value}px`);
            });
        }, 200);
    };

    const bindMouseMoveEvent = () => {
        const button = buttonRef.current;
        if (!button) return;

        const onMouseMoveEvent = (e: Event) => {
            const { clientX, clientY } = e as unknown as MouseEvent;
            const buttonRect = button.getBoundingClientRect();

            const coordX = clientX - buttonRect.left;
            const coordY = clientY - buttonRect.top;

            const buttonProps = {
                coordinateX: { name: '--coord-x', value: coordX },
                coordinateY: { name: '--coord-y', value: coordY },
            };

            Object.entries(buttonProps).forEach(([_, prop]) => {
                button.style.setProperty(prop.name, `${prop.value}px`);
            });
        };

        button.addEventListener('mousemove', onMouseMoveEvent);

        return () => {
            button.removeEventListener('mousemove', onMouseMoveEvent);
        };
    };


    return (
        <div className="">
            <button
                ref={buttonRef}
                className={`gradient-button gradient-button--blue ${className}`}
                type={type}
                onClick={onClick}
            >
                <div className="gradient-button__border js-gradient-button__border"></div>
                {text && <span className="gradient-button__text">{text}</span>}
            </button>
        </div>
    );
};

export default ButtonComponent;
