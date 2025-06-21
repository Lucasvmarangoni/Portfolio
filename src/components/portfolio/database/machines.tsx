
export enum Difficulty {
    EASY = 'Easy',
    MEDIUM = 'Medium',
    HARD = 'Hard',
    INSANE = 'Insane'
}

export enum Status {
    ACTIVE = 'Active',
    RETIRED = 'Retired'
}

export enum OS {
    Linux = 'Linux',
    Windows = 'Windows'
}

export interface MachinesProps {
    name: string;
    link: string;
    date: Date;
    difficulty: Difficulty;
    skills: string[];
    picture: string;
    writeup?: string | JSX.Element;
    description: string;
    status: Status;
    os: OS;
}

export const machinesDB: MachinesProps[] = [
    {
        name: "FormulaX",
        link: "https://www.hackthebox.com/achievement/machine/2088593/592",
        picture: "https://labs.hackthebox.com/storage/avatars/897faece9f60bf69d8e109833f63da48.png",
        date: new Date("2025-06-20"),
        difficulty: Difficulty.HARD,
        skills: ["Reverse Engineering", "Binary Exploitation", "Privilege Escalation"],
        writeup: "",
        description: "A difficult Linux machine involving reverse engineering and binary exploitation.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "Caption",
        link: "https://www.hackthebox.com/achievement/machine/2088593/625",
        picture: "https://labs.hackthebox.com/storage/avatars/d3cb6edd2a219f122696655d0015b101.png",
        date: new Date("2025-06-14"),
        difficulty: Difficulty.HARD,
        skills: ["Web Exploitation", "Image Analysis", "Privilege Escalation"],
        writeup: "",
        description: "A challenging Linux machine involving steganography and advanced privilege escalation.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "Cypher",
        link: "https://www.hackthebox.com/achievement/machine/2088593/650",
        picture: "https://labs.hackthebox.com/storage/avatars/765cd4be6f3a366ca83c7ea60bbcaaa8.png",
        date: new Date("2025-06-11"),
        difficulty: Difficulty.MEDIUM,
        skills: ["Cryptography", "Web Exploitation", "Linux Privilege Escalation"],
        writeup: "",
        description: "A Linux machine focusing on cryptographic vulnerabilities and web exploitation leading to privilege escalation.",
        status: Status.ACTIVE,
        os: OS.Linux,
    },
    {
        name: "EscapeTwo",
        link: "https://www.hackthebox.com/achievement/machine/2088593/642",
        picture: "https://labs.hackthebox.com/storage/avatars/d5fcf2425893a73cf137284e2de580e1.png",
        date: new Date("2025-06-08"),
        difficulty: Difficulty.EASY,
        skills: ["Windows Exploitation", "Active Directory", "Privilege Escalation"],
        writeup: "",
        description: "A Windows machine involving Active Directory misconfigurations and lateral movement.",
        status: Status.RETIRED,
        os: OS.Windows
    },
    {
        name: "RedCross",
        link: "https://www.hackthebox.com/achievement/machine/2088593/162",
        picture: "https://labs.hackthebox.com/storage/avatars/6c735b462ef58f59d3561966d31f7e48.png",
        date: new Date("2025-06-06"),
        difficulty: Difficulty.MEDIUM,
        skills: ["Web Exploitation", "Linux Privilege Escalation", "API Abuse"],
        writeup: "",
        description: "A Linux machine with a focus on web vulnerabilities and misconfigured services leading to privilege escalation.",
        status: Status.RETIRED,
        os: OS.Linux,
    },
    {
        name: "SteamCloud",
        link: "https://www.hackthebox.com/achievement/machine/2088593/443",
        picture: "https://labs.hackthebox.com/storage/avatars/a1fbd7cce1df4145b6a95df4644321bf.png",
        date: new Date("2025-06-02"),
        difficulty: Difficulty.EASY,
        skills: ["Cloud Security", "Misconfigurations", "Linux Privilege Escalation"],
        writeup: "",
        description: "A Linux machine focusing on cloud security misconfigurations.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "TwoMillion",
        link: "https://www.hackthebox.com/achievement/machine/2088593/547",
        picture: "https://labs.hackthebox.com/storage/avatars/d7bc2758fb7589dfa046bee9ce4d75cb.png",
        date: new Date("2025-06-02"),
        difficulty: Difficulty.EASY,
        skills: ["Web Exploitation", "API Abuse", "Linux Privilege Escalation"],
        writeup: "",
        description: "A machine celebrating HackTheBox's 2 million users, involving web exploitation and privilege escalation.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "BoardLight",
        link: "https://www.hackthebox.com/achievement/machine/2088593/603",
        picture: "https://labs.hackthebox.com/storage/avatars/7768afed979c9abe917b0c20df49ceb8.png",
        date: new Date("2025-05-31"),
        difficulty: Difficulty.EASY,
        skills: ["Web Exploitation", "SQL Injection", "Privilege Escalation"],
        writeup: "",
        description: "A Linux machine focusing on web vulnerabilities and database exploitation.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "Cicada",
        link: "https://www.hackthebox.com/achievement/machine/2088593/627",
        picture: "https://labs.hackthebox.com/storage/avatars/79616a32a057e5e672dadb51bb96dd04.png",
        date: new Date("2025-05-31"),
        difficulty: Difficulty.EASY,
        skills: ["Web Exploitation", "Cryptography", "File Inclusion"],
        writeup: "",
        description: "A Linux machine with web-based challenges and cryptographic weaknesses.",
        status: Status.RETIRED,
        os: OS.Windows
    },
    {
        name: "Driver",
        link: "https://www.hackthebox.com/achievement/machine/2088593/387",
        picture: "https://labs.hackthebox.com/storage/avatars/ce42ce9fd28d117b8d6c045aefeb5cdb.png",
        date: new Date("2025-05-29"),
        difficulty: Difficulty.EASY,
        skills: ["Windows Exploitation", "Driver Vulnerabilities", "Privilege Escalation"],
        writeup: "",
        description: "A Windows machine involving driver exploitation and privilege escalation.",
        status: Status.RETIRED,
        os: OS.Windows
    },
    {
        name: "Writeup",
        link: "https://www.hackthebox.com/achievement/machine/2088593/192",
        picture: "https://labs.hackthebox.com/storage/avatars/ca06c447787b38ec940eb55d5c54b14c.png",
        date: new Date("2025-05-28"),
        difficulty: Difficulty.EASY,
        skills: ["Web Exploitation", "Document Analysis", "Linux Privilege Escalation"],
        writeup: "",
        description: "A Linux machine focusing on document analysis and web-based vulnerabilities leading to privilege escalation.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "Precious",
        link: "https://www.hackthebox.com/achievement/machine/2088593/513",
        picture: "https://labs.hackthebox.com/storage/avatars/3adcfd6093f8ddb4dffe8422da6377c8.png",
        date: new Date("2025-05-28"),
        difficulty: Difficulty.EASY,
        skills: ["Web Exploitation", "File Upload Vulnerabilities", "Linux Privilege Escalation"],
        writeup: "",
        description: "A Linux machine focusing on insecure file uploads and privilege escalation.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "Paper",
        link: "https://www.hackthebox.com/achievement/machine/2088593/432",
        picture: "https://labs.hackthebox.com/storage/avatars/eb4e685c033d8af0b8cc00446f295f9d.png",
        date: new Date("2025-05-27"),
        difficulty: Difficulty.EASY,
        skills: ["Web Exploitation", "File Inclusion", "Linux Privilege Escalation"],
        writeup: "",
        description: "A Linux machine involving Local File Inclusion (LFI) and privilege escalation.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "GoodGames",
        link: "https://www.hackthebox.com/achievement/machine/2088593/446",
        picture: "https://labs.hackthebox.com/storage/avatars/f49b988a9f7df99dba3d7644f55021fd.png",
        date: new Date("2025-05-26"),
        difficulty: Difficulty.EASY,
        skills: ["Web Exploitation", "SQL Injection", "Linux Privilege Escalation"],
        writeup: "",
        description: "A Linux machine involving SQL injection and web exploitation.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "Devvortex",
        link: "https://www.hackthebox.com/achievement/machine/2088593/577",
        picture: "https://labs.hackthebox.com/storage/avatars/2565d292772abc4a2d774117cf4d36ff.png",
        date: new Date("2025-05-26"),
        difficulty: Difficulty.EASY,
        skills: ["Web Exploitation", "Subdomain Enumeration", "Linux Privilege Escalation"],
        writeup: "",
        description: "A Linux machine focusing on web vulnerabilities and subdomain takeover.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "Sau",
        link: "https://www.hackthebox.com/achievement/machine/2088593/551",
        picture: "https://labs.hackthebox.com/storage/avatars/1ea2980b9dc2d11cf6a3f82f10ba8702.png",
        date: new Date("2025-05-25"),
        difficulty: Difficulty.EASY,
        skills: ["Web Exploitation", "SSRF", "Linux Privilege Escalation"],
        writeup: "",
        description: "A Linux machine involving Server-Side Request Forgery (SSRF) and privilege escalation.",
        status: Status.RETIRED,
        os: OS.Linux
    },
    {
        name: "Jerry",
        link: "https://www.hackthebox.com/achievement/machine/2088593/144",
        picture: "https://labs.hackthebox.com/storage/avatars/59f03a24178dbb2bdc94968c201e21f8.png",
        date: new Date("2025-05-24"),
        difficulty: Difficulty.EASY,
        skills: ["Windows Exploitation", "Misconfigured Services", "File Upload Vulnerabilities"],
        writeup: "",
        description: "A Windows machine featuring a misconfigured service allowing unauthorized access and command execution.",
        status: Status.RETIRED,
        os: OS.Windows,
    },
    {
        name: "Cap",
        link: "https://www.hackthebox.com/achievement/machine/2088593/351",
        picture: "https://labs.hackthebox.com/storage/avatars/70ea3357a2d090af11a0953ec8717e90.png",
        date: new Date("2025-03-23"),
        difficulty: Difficulty.EASY,
        skills: ["Network Security", "Packet Analysis", "Privilege Escalation"],
        writeup: "",
        description: "A Linux machine focusing on network security and packet capture analysis.",
        status: Status.RETIRED,
        os: OS.Linux
    },
];
