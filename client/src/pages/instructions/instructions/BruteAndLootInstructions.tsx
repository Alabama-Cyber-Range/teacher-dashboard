import React from "react";
const BruteAndLootInstructions = () => {
    return (
        <div>
            <h3>Brute and Loot Instructions</h3>
            <p>
                <strong>Scenario:</strong>
                <br />
                A web server protected by HTTP basic authentication has been identified during a reconnaissance scan. Your goal is to brute-force the login credentials and access the restricted area of the server. Using Hydra and the RockYou wordlist, you'll simulate an attack to reveal weak passwords and gain access.
            </p>
            <ol>
                <li>
                    <strong>Reconnaissance</strong>
                    <p>Perform reconnaissance from your attacker machine to identify live hosts and open HTTP services.</p>
                    <ul>
                        <li>
                            <strong>Determine your subnet:</strong> Identify the range of IP addresses to scan for live hosts.
                            <pre>
                                <code>ip a</code>
                            </pre>
                            Example output:
                            <pre>
                                <code>inet 192.168.1.100/24</code>
                            </pre>
                        </li>
                        <li>
                            <strong>Scan for live hosts in the subnet:</strong> Use nmap to identify reachable devices in the network.
                            <pre>
                                <code>nmap -sn 192.168.1.0/24</code>
                            </pre>
                        </li>
                        <li>
                            <strong>Scan for HTTP services:</strong> Check for web services running on a target.
                            <pre>
                                <code>nmap -p80,443 {"<target_ip>"}</code>
                            </pre>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Confirm HTTP Basic Authentication</strong>
                    <p>
                        Access the web server using your browser. If prompted for a username and password, this confirms that the server is protected by HTTP basic authentication.
                    </p>
                </li>
                <li>
                    <strong>Brute-Force HTTP Basic Authentication</strong>
                    <p>Use Hydra to brute-force login credentials.</p>
                    <pre>
                        <code>hydra -l admin -P /usr/share/wordlists/rockyou.txt http-get://{"<target_ip>"}</code>
                    </pre>
                </li>
                <li>
                    <strong>Access the Restricted Area</strong>
                    <p>
                        Once valid credentials are found, log in to the admin dashboard and explore the sensitive data.
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default BruteAndLootInstructions;
