"use client"
import React from 'react';
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const LinkContainer = styled.a`
    margin-right: 1rem;
    display: inline-block;
    cursor: pointer; // Ensure it's clickable
`;

const IconContainer = styled.div<{ color?: string }>`
    padding: 0.5rem;
    font-size: 2.9rem;
    color: ${props => props.color || 'black'};
    transition: all 0.3s ease;
    
    &:hover, &:active {
        transform: scale(1.4);
    }
`;

interface SocialLinkProps {
    action: string | (() => void);
    icon: IconDefinition;
    alt: string;
    color?: string;
}

export default function FAIconWithAction({ action, icon, alt, color }: SocialLinkProps){
    const handleAction = () => {
        if (typeof action === 'string') {
            window.open(action, '_blank');
        } else if (typeof action === 'function') {
            action();
        }
    };

    return (
        <LinkContainer onClick={handleAction} aria-label={alt}>
            <IconContainer color={color}>
                <FontAwesomeIcon icon={icon} />
            </IconContainer>
        </LinkContainer>
    );
};
