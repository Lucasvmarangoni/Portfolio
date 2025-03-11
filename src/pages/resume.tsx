import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function CurriculumButton() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonContainerRef = useRef<HTMLDivElement>(null);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && containerRef.current && !containerRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        if (buttonRef.current && buttonContainerRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            buttonContainerRef.current.style.width = `${buttonRect.width}px`;
            buttonContainerRef.current.style.height = `${buttonRect.height}px`;
        }
    }, []);

    return (
        <div ref={buttonContainerRef} className="relative">
            {!isOpen ? (
                <button
                    ref={buttonRef}
                    id="button-icon"
                    className="buttons n5:w24"
                    onClick={(e) => {
                        e.stopPropagation(); 
                        toggleOptions();
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="18" rx="2" fill="none" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 15.0588V16.4706H3V15.0588H15ZM15 11.5294V12.9412H3V11.5294H15ZM15 8V9.41176H3V8H15Z" fill="#ffffff85" fillOpacity="1.4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.2661 1L7.96147 5.30466L5.73336 3.07656L5 3.80991L7.96147 6.7719L13 1.73388L12.2661 1Z" fill="#ffffff85" fillOpacity="1.4" />
                    </svg>
                    <p className="brightness-[1.2]">Resume</p>
                </button>
            ) : (
                <button
                    className="invisible buttons n5:w24 w-full h-full"
                    aria-hidden="true"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="18" rx="2" fill="none" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 15.0588V16.4706H3V15.0588H15ZM15 11.5294V12.9412H3V11.5294H15ZM15 8V9.41176H3V8H15Z" fill="#ffffff85" fillOpacity="1.4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.2661 1L7.96147 5.30466L5.73336 3.07656L5 3.80991L7.96147 6.7719L13 1.73388L12.2661 1Z" fill="#ffffff85" fillOpacity="1.4" />
                    </svg>
                    <p className="brightness-[1.2]">Resume</p>
                </button>
            )}

            {isOpen && (
                <div
                    ref={containerRef}
                    className="absolute z-50 flex flex-col gap-2 bg-none rounded-md shadow-lg p-1"
                    style={{
                        top: '0',
                        left: '0',
                        width: buttonContainerRef.current?.offsetWidth || 'auto'
                    }}
                    onClick={(e) => e.stopPropagation()} 
                >
                    <button
                        className="absolute top-[0.39rem] left-[6.4rem] text-T2 opacity-60 hover:opacity-100 flex items-center justify-center w-6 h-6"
                        onClick={closeMenu}
                        aria-label="Fechar menu"
                    >
                        {/* <svg  viewBox="0 0 24 24" fill="#375949" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Close_Square"> <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" 
                       width={55} stroke="#030303" stroke-width="2" ></path> </g> </g></svg> */}
                    </button>

                    <NavLink
                        to="/resume-lucasvmarangoni-en.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buttons flex items-center justify-start gap-2 px-4 py-2 text-T2 bg-BGH hover:brightness-200"
                        onClick={closeMenu}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="2" fill="none" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15 15.0588V16.4706H3V15.0588H15ZM15 11.5294V12.9412H3V11.5294H15ZM15 8V9.41176H3V8H15Z" fill="#ffffff85" fillOpacity="1.4" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.2661 1L7.96147 5.30466L5.73336 3.07656L5 3.80991L7.96147 6.7719L13 1.73388L12.2661 1Z" fill="#ffffff85" fillOpacity="1.4" />
                        </svg>
                        en
                    </NavLink>

                    <NavLink
                        to="/curriculo-lucasvmarangoni-ptbr.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buttons flex items-center justify-start gap-2 px-4 py-2 text-T2 bg-BGH hover:brightness-200"
                        onClick={closeMenu}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="2" fill="none" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15 15.0588V16.4706H3V15.0588H15ZM15 11.5294V12.9412H3V11.5294H15ZM15 8V9.41176H3V8H15Z" fill="#ffffff85" fillOpacity="1.4" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.2661 1L7.96147 5.30466L5.73336 3.07656L5 3.80991L7.96147 6.7719L13 1.73388L12.2661 1Z" fill="#ffffff85" fillOpacity="1.4" />
                        </svg>
                        pt-br
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default CurriculumButton;