import { Link, useRoutes } from "react-router-dom";
import BruteAndLootInstructions from "./BruteAndLootInstructions";

const KaliTop10 = () => {
    const element = useRoutes([
        { path: "brute-and-loot", element: <BruteAndLootInstructions /> },
    ]);

    return (
        <div>
            <h3>Kali Top 10</h3>
            <p>This learning path covers the top 10 tools in Kali Linux.</p>

            <h4>Modules:</h4>
            <ul>
                <li>
                    <Link to="cache-me-outside">ARP: Cache Me Oustide</Link>
                </li>
                <li>
                    <Link to="brute-and-loot">Brute and Loot</Link>
                </li>
                <li>
                    <Link to="cats-out-of-the-bag">Cat's Out of the Bag</Link>
                </li>
                <li>
                    <Link to="crack-the-web">Crack The Web</Link>
                </li>
                <li>
                    <Link to="hash-it-out-with-NTLM">Hash it Out with NTLM</Link>
                </li>
                <li>
                    <Link to="house-of-eternal-blues">How of Eternal Blues</Link>
                </li>
                <li>
                    <Link to="maltego-mindmap">Maltego Mindmap</Link>
                </li>
                <li>
                    <Link to="metasploit-mayhem">Metasploit Mayhem</Link>
                </li>
                <li>
                    <Link to="the-credential-cracker">The Credential Cracker</Link>
                </li>
                <li>
                    <Link to="the-network-navigator">The Network Navigator</Link>
                </li>
                <li>
                    <Link to="wireshark-wizardry">Wireshark Wizardry</Link>
                </li>

            </ul>

            {/* Render the sub-route if it matches */}
            {element}
        </div>
    );
};

export default KaliTop10;
