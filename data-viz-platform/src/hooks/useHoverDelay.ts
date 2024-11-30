import { useRef, useEffect, useCallback, useState } from 'react';

interface UseHoverDelayProps {
    onHoverStart: () => void;
    onHoverEnd: () => void;
    delay?: number;
}

export const useHoverDelay = ({
    onHoverStart,
    onHoverEnd,
    delay = 1500
}: UseHoverDelayProps) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [isHovering, setIsHovering] = useState(false);

    const clearHoverTimeout = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    useEffect(() => {
        return () => {
            clearHoverTimeout();
        };
    }, [clearHoverTimeout]);

    const handleMouseEnter = useCallback(() => {
        clearHoverTimeout();
        timeoutRef.current = setTimeout(() => {
            setIsHovering(true);
            onHoverStart();
        }, delay);
    }, [onHoverStart, delay, clearHoverTimeout]);

    const handleMouseLeave = useCallback(() => {
        clearHoverTimeout();
        timeoutRef.current = setTimeout(() => {
            setIsHovering(false);
            onHoverEnd();
        }, delay);
    }, [onHoverEnd, delay, clearHoverTimeout]);

    return {
        handleMouseEnter,
        handleMouseLeave,
        isHovering
    };
};