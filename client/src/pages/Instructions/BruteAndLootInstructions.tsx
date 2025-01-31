const BruteAndLootInstructions = () => {
  return (
      <div className="brute-loot-demo">
          <h2>Brute &amp; Loot: Exploiting HTTP Basic Authentication</h2>
          <h3>Scenario:</h3>
          <p>
              A web server protected by HTTP basic authentication has been identified during a reconnaissance scan. Your goal is to brute-force the login credentials and access the restricted area of the server. Using Hydra and the RockYou wordlist, you'll simulate an attack to reveal weak passwords and gain access.
          </p>
          <h3>Steps to Complete the Challenge:</h3>
          <h4>1. Reconnaissance</h4>
          <p>
              Perform the reconnaissance steps <strong>from your attacker machine</strong> to identify live hosts and open HTTP services:
          </p>
          <ul>
              <li>
                  <strong>Determine your subnet:</strong> This helps you identify the range of IP addresses to scan for live hosts.
              </li>
          </ul>
          <div style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>ip a</pre>
          </div>
          <ul>
              <li>Look for the <strong>inet</strong> line under the <code>eth0</code> network interface. For example:</li>
          </ul>
          <div style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>inet 192.168.1.100/24</pre>
          </div>
          <ul>
              <li>
                  <strong>Scan for live hosts in the subnet:</strong> Use the <code>nmap</code> tool to identify which devices are reachable in your network.
              </li>
          </ul>
          <div style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>nmap -sn 192.168.1.0/24</pre>
          </div>
          <p>Example output:</p>
          <div style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>Nmap scan report for 192.168.1.10
Host is up (0.0010s latency).</pre>
          </div>
          <p>
              <strong>Check other similar IP addresses:</strong> Look for devices with IP addresses similar to your attacker machine’s IP (e.g., 192.168.1.x). These could be potential targets.
          </p>
          <ul>
              <li>
                  <strong>Scan for HTTP services:</strong> Use <code>nmap</code> to check if web services (ports 80 and 443) are running on a specific target.
              </li>
          </ul>
          <div style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>nmap -p80,443 &lt;target_ip&gt;</pre>
          </div>
          <p>Example output:</p>
          <div style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>PORT   STATE SERVICE
80/tcp open  http
443/tcp open  https</pre>
          </div>
          <p>Note the IP address of the machine with HTTP services. This will be your target.</p>
          <h4>2. Confirm HTTP Basic Authentication</h4>
          <p>
              Access the web server using your browser. If prompted for a username and password, this confirms that the server is protected by HTTP basic authentication.
          </p>
          <h4>3. Brute-Force HTTP Basic Authentication</h4>
          <p>
              <strong>Use Hydra to brute-force login credentials:</strong> Hydra systematically tests username and password combinations from a wordlist to find valid credentials.
          </p>
          <div style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>hydra -l admin -P /usr/share/wordlists/rockyou.txt http-get://&lt;target_ip&gt;</pre>
          </div>
          <ul>
              <li>
                  <code>-l admin</code>: Specifies the username to test (e.g., admin).
              </li>
              <li>
                  <code>-P /usr/share/wordlists/rockyou.txt</code>: Specifies the wordlist file containing potential passwords.
              </li>
              <li>
                  <code>http-get://&lt;target_ip&gt;</code>: Specifies the target protocol (HTTP GET) and the URL to attack.
              </li>
          </ul>
          <p>
              <strong>Review Hydra’s output:</strong> Once Hydra finds valid credentials, the success message will appear in bright blue text:
          </p>
          <div style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>[80][http-post-form] host: &lt;target_ip&gt; login: Andy password: P@S24DGWo0rd</pre>
          </div>
          <h4>4. Access the Restricted Area</h4>
          <p>Once you have valid credentials, access the restricted area using your Firefox browser:</p>
          <ul>
              <li>
                  <strong>Open a new tab in Firefox:</strong> At the top of your screen, open a new tab in your Firefox browser.
              </li>
              <li>
                  <strong>Enter the target URL:</strong> Type the following address in the browser’s address bar, replacing <code>192.168.1.5</code> with your target IP address:
              </li>
          </ul>
          <div style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>http://192.168.1.5</pre>
          </div>
          <ul>
              <li>
                  <strong>Provide the credentials:</strong> When prompted, use the cracked username and password (e.g., <code>admin</code> and <code>password123</code>).
              </li>
              <li>Once logged in, you should see the restricted admin dashboard. Example output:</li>
          </ul>
          <div style={{ backgroundColor: "#f8f9fa", border: "1px solid #ced4da", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>Admin Dashboard - Internal Use Only</pre>
          </div>
          <p>
              <strong>Find the Sensitive Data:</strong> Explore the admin dashboard for files, document your findings, and analyze potential vulnerabilities.
          </p>
      </div>
  );
};

export default BruteAndLootInstructions;
