# Proof of work - Cybersecurity

Sat Mar 23 2026 20:00:00 GMT+0100 (Central European Standard Time)

![Cover image of a multi-monitor setup.](./cover_images/cybersecurity.jpeg)

This post is my proof of work as I am breaking into Cybersecurity. I am learning Networking, Cybersecurity Fundamentals, Linux, Bash, and Cloud.

# 23 March 2026

### Network Security

Today I focused on network structure and segmentation. I practiced thinking like an attacker and considered how flat networks allow lateral movement, while smaller subnets (/25) slow attacks and make them easier to detect.

I reviewed device isolation strategies:

* Web Servers in a DMZ
* Workstations limited to each other
* Printers restricted from internet access

This helped me connect theory to practical security implications and attacker behavior.

### Network Types

**WAN** – connects multiple LANs over long distances.

**LAN / WLAN** – small networks, wired or wireless; wireless adds extra attack surface.

**VPN** – secure connection over untrusted networks; types include site-to-site, remote access, and SSL VPN.

### Network Topologies

I learned about different network topologies. Common types include:

- Point-to-Point
- Bus
- Star
- Ring
- Mesh
- Tree
- Hybrid
- Daisy Chain

I thought about how each topology changes how devices talk to each other and how attackers might move across the network. For example, in a bus network, a single compromised device can affect all others, while in a star network, the central switch/router is a single point of failure.

### Proxies

Later on I worked on understanding proxies, but this topic was more complex and I didn’t fully understand everything yet.

From what I understood so far, a proxy is a device or service that sits in the middle of a connection and acts as a mediator. This means it can inspect and control the traffic instead of just forwarding it like a normal gateway.

I learned about different types of proxies:

- Forward Proxy – used by clients to send requests to the internet through a middle system (e.g. in corporate networks or tools like Burp Suite)
- Reverse Proxy – sits in front of servers and filters incoming traffic (used for protection, e.g. against attacks or to hide internal services)
- Transparent vs Non-Transparent Proxy – transparent proxies intercept traffic without the client knowing, while non-transparent proxies require configuration

I also saw that proxies are important for security because they can filter traffic, block malicious requests, and be used in attacks (e.g. bypassing firewalls or hiding traffic).

This topic is still a bit confusing to me, especially the differences in how proxies are used in real environments, so I will revisit it later and try to practice it more.

# 24 March 2026 - 27 March 2026

### Networking Models

Learned about networking models. More specifically TCP/IP and ISO/OSI Models.

- Learned the difference between OSI (7 layers) and TCP/IP (4 layers) models and how they structure network communication.
- Understood encapsulation and how data is processed layer by layer, which is important for inspecting and intercepting traffic.
- Recognized that breaking communication into layers helps identify where attacks (e.g. sniffing, MITM) can occur.

Next steps: The OSI Model.

### The OSI Model

- This model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation and Application.
- When two systems communicate, all seven layers of the models are run through at least twice, since both the sender and the receiver need to take the model into account.
- Layers 2-4 are transport oriented and the layers 5-7 are application oriented.

Next steps: The TCP/IP Model.

### The TCP/IP Model

- This model has 4 layers, namely: Link, Internet, Transport & Application.
- With this model, every application can transfer and exchange data over any network, and it does not matter where the receiver is located.
- The most important tasks of this model are: Name Resolution, Application Support, Error & Control Flow, Routing & Logical Addressing.
- IP handles addressing and routing, while TCP ensures reliable data transfer between applications.

Next steps: Network Layer.

### Network Layer (OSI Layer 3)

- Handles logical addressing (IP) and routing of packets between different networks.
- Packets are forwarded from node to node (via routers) until they reach the destination.
- Common protocols include IPv4/IPv6, ICMP, and routing protocols like OSPF and RIP.

Next steps: IP Addresses.

### IP Addresses

- IP addresses identify devices across networks; MAC addresses work within local networks.
- IPv4 uses 32-bit addresses split into network and host portions.
- Subnetting (e.g. /24) controls network size and communication boundaries.
- Each subnet has reserved addresses (network, broadcast, gateway).

Next steps: Subnetting

### Subnetting

- Divides a network into smaller subnets using CIDR.
- Defines network, broadcast, and usable host ranges.
- Controls how devices communicate and how traffic is routed.

Next steps: MAC Addresses

### MAC Addresses

- Unique physical address used for communication on local networks (Layer 2).
- ARP maps IP addresses to MAC addresses.
- Used for local delivery; routers are used for other networks.
- Vulnerable to spoofing, flooding, and ARP poisoning attacks.

Next steps: IPv6 Addresses

### IPv6 Addresses

- 128-bit address system using hexadecimal notation.
- Provides a much larger address space than IPv4.
- Uses unicast, anycast, and multicast (no broadcast).
- Supports auto-configuration and removes the need for NAT.

Next steps: Common Protocols

### Common Protocols

- TCP = reliable, connection-based communication.
- UDP = fast, connectionless communication.
- ICMP = diagnostics (ping, errors, TTL).
- Protocols like HTTP, DNS, SSH, FTP enable network services.
- VoIP (SIP) enables voice communication and can be used for enumeration.

Next steps: Wireless Networks

### Wireless Networks

- Wireless networks use radio signals (WiFi / IEEE 802.11) and a Wireless Access Point (WAP) to connect devices to each other and the internet without cables.
- Devices must provide the correct SSID and credentials to connect, and communication depends on signal strength, distance, and environmental factors.
- Security relies on encryption (WPA2/WPA3), authentication methods, and protections against attacks like WEP weaknesses, MAC spoofing, and disassociation attacks.

Next steps: Ethernet

### Ethernet

- Ethernet is a standard (IEEE 802.3): It’s not just a cable—it’s a full networking standard defining cables, speeds, communication rules, and especially the Ethernet frame.
- Frame consistency: The Ethernet frame (MAC addresses, data, FCS) has stayed mostly unchanged, allowing backward compatibility across different hardware and media (copper, fiber).
- Naming convention: Formats like 10Base-T describe speed (10 Mbps), transmission type (baseband), and medium (twisted pair), with modern Ethernet supporting much higher speeds.

Next steps: Hubs vs Switches

### Hubs vs Switches

- A hub is nothing more than a multiport repeater. It is created to create a network. It repeats all the frames from a communication to all the hosts connected to it.
- A switch forwards frames intelligently based on MAC addresses.
- A switch builds a table with all the connected devices, and when a packet/frame comes in, it knows where to send it to.
- Hubs have lower throughput per communication, and switches have a higher throughput and dont degrade their speed.

Next steps: Gigabit Ethernet and 10-Gigabit Ethernet

### Gigabit Ethernet and 10-Gigabit Ethernet

- Gigabit Ethernet (1000Base): Includes standards like 1000Base-T (UTP, ~100m), 1000Base-SX (multimode fiber, ~500m), 1000Base-LX (single-mode fiber, ~5km), and rare 1000Base-CX (coax, ~25m).
- 10 Gigabit Ethernet (10GBase): Uses copper (10GBase-T: 55–100m depending on cable) and fiber standards like SR (multimode, up to ~400m), LR (single-mode, ~10km), and ER (single-mode, ~40km).
- SONET variants: Versions like SW, LW, and EW match SR/LR/ER specs but are designed for SONET networks, with the same distances and performance.

Next steps: Daily HackTheBox challenge.

### Daily HackTheBox Challenge

The challenge is called meow. The goal is to find an open port in a target machine and connect to the service listening to the open port. I was connected to a ParrotOS VM using SSH.

Luckily the open port was port 23(telnet) which uses unencrypted credentials.

Steps I took:

1. Enumeration - ping the target machine IP address, use nmap -sV to show its open ports.
2. Once I saw that port 23 was open, the next step was to brute force the username and password. The username was root and the password was blank. Easy.
3. Next step is to look around the file system, more specifically the root home directory if there are any files of interest there. There was a file called `flag.txt`.
4. Show the contents of the file using `cat` and submit the challenge.

In this challenge, I learned about enumeration using nmap, identifying open ports and services, and exploiting insecure services like Telnet that allow weak or no authentication.

Next steps: Introduction to ARP

# 28 March 2026 - 31 March 2026

### Introduction to ARP

- ARP purpose: ARP (Address Resolution Protocol) is used to map an IP address to a MAC address so a device can send data within the same network.
- How it works: The sender broadcasts a request (“Who has this IP?”), and only the device with that IP responds with its MAC address.
- Ethernet requirement: An IP packet must be encapsulated in an Ethernet frame, which requires the destination MAC address.
- ARP cache: Devices store IP-to-MAC mappings temporarily (ARP cache), viewable with arp -a, to avoid repeated broadcasts.

Next steps: Subnet Masks

### Subnet Masks

- The subnet mask determines whether communication is local or remote: if the destination IP matches the network portion, the host uses ARP; otherwise, it sends traffic to the default gateway (router).
- A subnet is defined by a network ID (shared portion) and a host ID (unique part), with common masks like /24 (255.255.255.0) allowing up to 254 hosts per network.
- Variable Length Subnet Masking (VLSM) improves efficiency by allowing different subnet sizes within the same network, reducing wasted IP addresses compared to fixed-length subnetting (FLSM).

Next steps: Virtual Private Networks

### Virtual Private Networks

- A VPN creates an encrypted tunnel over the internet, allowing remote devices to securely access a private network as if they were locally connected, often receiving an internal IP address.
- It relies on key components like a VPN client and server, encryption (e.g., AES, IPsec), and authentication methods to ensure secure communication and prevent data interception.
- IPsec is the main secure protocol (using AH + ESP in transport or tunnel mode), while older protocols like PPTP exist but are considered insecure and largely deprecated.

Next steps: Key Exchange Mechanisms

### Key Exchange Mechanisms

- Key exchange mechanisms allow two parties to securely agree on a shared secret over an insecure channel, forming the foundation for encrypted communication (e.g., TLS, VPNs).
- Diffie-Hellman enables key exchange without prior secrets but is vulnerable to MITM attacks, while ECDH improves it with better speed and security; RSA is widely used for encryption, authentication, and digital signatures.
- IKE combines these methods (DH, RSA, AES) to establish secure VPN tunnels, with main mode offering stronger security and aggressive mode trading some security for speed, often using pre-shared keys for authentication.

Next steps: TCP/UDP Connections

### TCP/UDP Connections

- TCP is connection-oriented and reliable (ensures delivery, uses acknowledgments and retransmissions), while UDP is connectionless, faster, and used when speed matters more than reliability (e.g., streaming, gaming).
- An IP packet consists of a header (routing, TTL, protocol, source/destination) and payload (actual data), with fields like IP ID and Record-Route helping analyze traffic and trace packet paths.
- TCP segments include detailed control info (ports, sequence numbers, flags), while UDP sends simple datagrams; techniques like traceroute and concepts like spoofing rely on manipulating these packet behaviors.

Next steps: Cryptography

### Cryptography

- Encryption protects data by transforming it into unreadable form using keys, with two main types: symmetric (same key, fast but key-sharing problem) and asymmetric (public/private keys, more secure but slower).
- Symmetric algorithms like AES (modern standard) and DES/3DES (older, less secure) are used for bulk data encryption, while asymmetric methods like RSA and ECC enable secure key exchange, authentication, and digital signatures.
- Cipher modes (e.g., CBC, CTR, GCM) define how data is encrypted in blocks, with modern modes like GCM providing both confidentiality and integrity, while older ones like ECB are insecure and should be avoided.

Next steps: Daily HackTheBox challenge

### Daily HackTheBox challenge

The challenge is called fawn. The goal was to find an open service on the target machine and interact with it to retrieve the flag. I was connected to a ParrotOS VM through the HTB VPN.

This time the open port was 21 (FTP), which is commonly misconfigured and can allow anonymous access.

Steps I took:

1. Enumeration - ping the target machine to confirm connectivity, then use `nmap -sV` to identify open ports and services.
2. Discovered FTP running on port 21, so I connected using the `ftp` command.
3. Logged in using the username `anonymous` with any password, since anonymous login was enabled.
4. Used basic FTP commands like `ls` to list files and found `flag.txt`.
5. Downloaded the file using `get flag.txt`, then read its contents locally and submitted it.

In this challenge, I learned how to enumerate services with nmap, identify FTP, exploit anonymous login misconfigurations, and interact with FTP to navigate and download files.

Next steps: Introduction to Routers

### Introduction to Routers

- Routers connect **different network IDs (subnets)** together. Unlike switches that forward traffic using **MAC addresses**, routers read the **destination IP address** and decide where to send the packet based on their **routing table**.
- Every router interface belongs to a **different network** and therefore has its own **IP address**. The router checks its routing table to see whether the destination network is **directly connected** or if the packet must be forwarded to another router.
- If the router doesn’t know where a packet should go, it uses a **default route** to forward it to an **upstream router (default gateway)**. Routers can even have **multiple default routes**, and they use a **metric value** to decide which path is preferred.

Next steps: Network Address Translation

### Network Address Translation

- NAT (Network Address Translation) lets many devices inside a private network (like 192.168.x.x) share a single public IP address when accessing the internet. The router replaces the internal IP with its public WAN IP and keeps a table so responses can be sent back to the correct internal device.
- Because of NAT, internal devices can browse the internet normally, but outside systems usually cannot initiate connections directly to them unless the router is configured to allow it. This is why servers behind NAT need special configuration.
- There are different NAT types: static NAT (one public IP always maps to one internal device, often used with port forwarding), dynamic NAT (a pool of public IPs shared by internal devices), and PAT/regular NAT where many devices share one public IP using different ports.

Next steps: Port Forwarding

### Port Forwarding

- Home routers block unsolicited incoming traffic by default, only allowing responses to connections that devices inside the network started. Port forwarding changes this behavior by allowing specific incoming traffic (for example `publicIP:8181`) to be redirected to a specific internal device and port (like `192.168.x.x:80`) so services such as cameras or remote access can work from the internet.
- Port range forwarding opens many ports at once instead of configuring them individually, which is useful for applications like game servers that require multiple ports. Port triggering is more dynamic: when a device inside the network initiates traffic on a specific port (like FTP on port 21), the router temporarily allows related ports (like port 20) to come back in.
- A SOHO DMZ forwards all unsolicited internet traffic to one internal device, effectively exposing it directly to the internet. This is extremely risky because that machine will constantly be probed and attacked, so it is generally avoided except for testing or controlled scenarios.

Next steps: SOHO vs Enterprise

### SOHO vs Enterprise

- SOHO routers are compact, all-in-one devices that combine a router, switch, wireless access point, firewall, and DHCP server, designed for small networks of a few devices and managed via simple web interfaces. They are convenient but limited in power, bandwidth, and scalability.
- Enterprise routers are robust, rack-mounted devices built for large-scale networks, supporting dozens or hundreds of connections, higher throughput, redundant power supplies, and advanced features like dynamic routing and VPNs. They separate roles like switching and wireless into dedicated devices for better performance.
- Enterprise routers are configured through a command-line interface (e.g., Cisco IOS), requiring specialized knowledge and certifications like CCNA/CCNP. Despite the differences in size, complexity, and interfaces, both SOHO and enterprise routers fundamentally perform the same task: routing data between network segments.

Next steps: Static Routing

# 01 April 2026 - 07 April 2026

### Static Routing

- Every device on a TCP/IP network (routers and normal computers) has a routing table. This table tells the device where to send packets based on the destination IP address, deciding whether the traffic stays on the local network or gets sent to the default gateway.
- Static routes are manually configured routes in a routing table. They never change automatically, which makes them simple and predictable, but also fragile because if a network path breaks, traffic will fail unless someone manually updates the route.
- Routing tables include special routes like the default route (send unknown traffic to the gateway), local network routes (keep traffic inside the LAN), loopback routes (127.0.0.0/8 for internal communication), and multicast routes (224.x.x.x for one-to-many communication).

Next steps: Dynamic Routing

### Dynamic Routing

- Large networks like the internet cannot rely on static routes because links fail, routers go down, and connections constantly change. Dynamic routing solves this by allowing routers to automatically update their routing tables and quickly restore network convergence when topology changes.
- Dynamic routing protocols use metrics to determine the best path for traffic. These metrics can consider factors like hop count, bandwidth, MTU size, latency, and cost, allowing routers to choose more efficient routes instead of simply counting the number of routers along the path.
- Dynamic routing protocols fall into two main categories: distance vector (older, shares entire routing tables periodically and converges slowly) and link state (modern, sends updates only when changes occur and converges faster). They also operate as either Interior Gateway Protocols (within one organization’s network) or Exterior Gateway Protocols between networks, with Border Gateway Protocol (BGP) being the primary protocol used to connect autonomous systems across the internet.

Next steps: TCP and UDP

### TCP and UDP

- TCP is connection-oriented, ensuring reliable, ordered delivery of data.
- UDP is connectionless, fast, and has minimal overhead with no delivery verification.
- TCP uses a three-way handshake (SYN → SYN-ACK → ACK) to establish connections.

Next steps: Traffic Types

### Traffic Types

- Network traffic is all data moving across a network at any moment, carried as binary signals and organized into PDUs such as frames, packets, or segments.
- Traffic can carry voice, video, or data and is delivered using different transmission methods: unicast (one-to-one), multicast (one-to-many specific), broadcast (one-to-all), and anycast (one-to-nearest node).
- Network technicians monitor and manage traffic to prevent congestion, latency, and security issues using tools and strategies like traffic monitoring, traffic shaping, load balancing, and bandwidth management.

Next steps: Daily HackTheBox Challenge

### Daily HackTheBox Challenge

The challenge is called Dancing. The goal was to find an exposed SMB share on the target machine and retrieve the flag from it. I was connected to a ParrotOS VM through the HTB VPN.

This time the open port was 445 (SMB), which allows shared access to files and resources over a network and is commonly found on Windows systems.

Steps I took:

- Enumeration - pinged the target machine to confirm connectivity, then used nmap -sV to identify open ports and services.
- Discovered SMB running on port 445, so I used smbclient to list available shares on the target system.
- Identified several shares including ADMIN$, C$, IPC$, and a custom share called WorkShares.
- Attempted to access the shares without credentials and found that WorkShares allowed anonymous login due to misconfigured permissions.
- Navigated the directories using ls and cd, found files belonging to users Amy.J and James.P.
- Downloaded files using get, including flag.txt.
- Read the file locally and submitted the flag.

In this challenge, I learned how to enumerate SMB services, identify accessible shares, exploit anonymous access misconfigurations, and use smbclient to navigate and download files from a remote SMB share.

Next steps: Next challenge

### Next challenge

The challenge is called Cap. The goal was to enumerate the machine, find a vulnerability in the web application, gain a foothold, and then escalate privileges to root. I was connected through my ParrotOS VM using the HTB VPN.

This time the target had three open ports: 21 (FTP), 22 (SSH), and 80 (HTTP).

Steps I took:

- Enumeration – used nmap to scan the target machine and identify open ports and services. Found FTP, SSH, and a web server running on port 80.
- Web exploration – visited the HTTP dashboard and noticed a feature that allowed downloading packet capture files. The capture IDs were sequential (/data/<id>), which led to discovering an IDOR vulnerability.
- Packet analysis – accessed /data/0 to download another user's capture file and opened it in Wireshark. The capture contained plaintext FTP credentials.
- Foothold – extracted the username and password from the FTP traffic (nathan / Buck3tH4TF0RM3!) and used them to log in to the machine via SSH.
- Privilege escalation – ran linpeas to enumerate privilege escalation vectors and discovered that python3.8 had the cap_setuid capability.
- Root access – exploited the capability by using Python to set the UID to 0 and spawn a root shell.

In this challenge, I learned how to exploit IDOR vulnerabilities, analyze pcap files in Wireshark to extract credentials, and abuse Linux capabilities (cap_setuid) to escalate privileges to root.

Next steps: File Transfer Protocol

### File Transfer Protocol

- FTP (File Transfer Protocol) is a protocol used to transfer files between a client and a server over a network. It typically uses port 21 for client requests and port 20 for server responses.
- FTP servers can allow normal user accounts or an anonymous login, which lets anyone access shared files (usually with read-only permissions). Clients can upload or download files using graphical FTP programs or command-line tools.
- FTP is not secure because usernames, passwords, and data are transmitted in plaintext. Secure alternatives include SFTP or FTPS, which encrypt the connection to protect credentials and file transfers.

Next steps: Telnet and SSH

### Telnet and SSH

- Telnet is an old protocol used to remotely access the command prompt of another computer over a network. It operates on TCP port 23 and allows users to log in with a username and password to run commands on a remote system.
- Telnet is insecure because all communication, including usernames, passwords, and commands, is transmitted in plaintext and can easily be captured and read using tools like packet analyzers.
- SSH (Secure Shell) is the modern replacement for Telnet. It provides the same remote command-line access but encrypts all traffic using cryptographic keys and runs on TCP port 22, making it much more secure for remote administration.

Next steps: Daily Hack The Box challenge

### Daily Hack The Box challenge

The challenge is called Redeemer. The goal was to identify an exposed service on the target machine and interact with it to retrieve the flag. I was connected to my ParrotOS VM through the HTB platform.

This time the open port was 6379, which is the default port for Redis, an in-memory key-value database often used for caching.

Steps I took:

- Enumeration - pinged the target to confirm connectivity, then used nmap -p- -sV to discover open ports and services.
- Discovered Redis running on port 6379, so I connected using the redis-cli tool.
- Used the info command to inspect the Redis server and identify the available database.
- Selected the database using select 0 and listed all stored keys with keys *.
Retrieved the value of the key containing the flag using get <key>.

In this challenge, I learned how Redis works as an in-memory key-value database, how to connect to it using redis-cli, enumerate its contents, and extract stored data from exposed Redis instances.

Next steps: Another challenge

### Another challenge

Snapped.

I started with enumeration and ran an nmap scan against the target. It
showed two open ports: SSH (22) and HTTP (80). The web server redirected
to snapped.htb, so I added the domain to /etc/hosts.

After checking the website, nothing interesting appeared on the main
page, so I fuzzed for subdomains using ffuf and discovered
admin.snapped.htb. Visiting it showed an Nginx‑UI login page.

Since I had no credentials, I fuzzed the /api endpoints and discovered
/api/backup which returned a backup file. The response also contained an
X‑Backup‑Security header with encoded values.

Research showed this was CVE‑2026‑27944, which allows downloading a full
backup and exposes the key needed to decrypt it. I decoded the values to
get the key and IV, then used openssl to decrypt the nginx‑ui backup.

Inside the decrypted archive I found a SQLite database containing user
password hashes. I extracted the bcrypt hashes and cracked one of them
with hashcat, revealing the password "linkinpark" for the user jonathan.

Using these credentials I logged in via SSH and obtained a shell on the
machine, allowing me to read the user flag. I was not able to escalate to
root.














