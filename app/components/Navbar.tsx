export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f]/90 backdrop-blur-md border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <h1 className="font-bold text-xl text-white">
                    Michael.
                </h1>

                <ul className="hidden md:flex gap-8 text-sm font-medium">
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#skills">Skills</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#experience">Experience</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}