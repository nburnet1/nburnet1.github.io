import React, {useState, useEffect} from 'react';

interface WordCyclerProps {
    words: string[];
    interval: number;
}

const WordCycler: React.FC<WordCyclerProps> = ({words, interval}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [words, interval]);

    return <>{words[currentIndex]}</>;
};

export default WordCycler;