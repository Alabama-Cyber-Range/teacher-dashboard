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
                    <Link to="brute-and-loot">Brute and Loot Instructions</Link>
                </li>
            </ul>

            {/* Render the sub-route if it matches */}
            {element}
        </div>
    );
};

export default KaliTop10;
