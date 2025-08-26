# MQTT IoT React Node

![Front Wall](https://github.com/user-attachments/assets/c773bb4b-0480-4c07-8387-2ff702dc290b)

## IoT Serve v1.0

This repository contains a monitoring and control system for microcontrollers branded as **IoT Serve** (tested with: **ESP8266**) based on IoT (protocol: **MQTT** | tested with: **HiveMQ Cloud Broker**) and a web application using the Javascript stack (**MySql**, **Express**, **React**, **NodeJs**). This source code is created solely as a base system for IoT and is designed to be compatible with **shared hosting**. As an example, I created it as a garden monitoring and control system. **Best Regards: Aman Jain**

## Features

- Monitor panel view (Chart Log View & Realtime Sensor Value)
- Control panel view
- Uses MQTT Protocol over WebSocket
- Authenticated connection via API Auth key
- ESP8266 code (Support MQTT over SSL)

## Installation

### Web Application

1. Clone/Download this repository.
2. Pre-install packages in the **backend** and **frontend** folders using "npm install" in the terminal.
3. Configure the environment files in the **backend** and **frontend** folders using "cp .env.example .env" in the terminal.Ready to use.

#### ESP8266 Code

1. Download the code from this repository.
2. If using MQTT over SSL, inject the SSL certificate by referring to the HiveMQ documentation:
Log in or sign up at HiveMQ Cloud -> In the Console, go to your Cluster -> Navigate to the "Getting Started" tab -> Choose Arduino.
   ![Screenshot 2025-06-07 112524](https://github.com/user-attachments/assets/35cd1de4-1ca7-461d-8fcc-42dec78361f0)
   Note :
   - LittleFS Uploader only works on Arduino IDE 1.8.x. [Tutor](https://randomnerdtutorials.com/install-esp8266-nodemcu-littlefs-arduino/).
   - Generate the certificate using Python by running the file "certs-from-mozilla.py" (run it with Python to generate "data/certs.ar", which will be uploaded using LittleFS).
  
### Microcontroller Setup Instructions

1. Enter your own Wi-Fi SSID/Password and MQTT credentials.
2. The code currently uses randomly generated values via Arduino syntax — you can modify this based on your sensor needs.
3. Set the board and port -> Upload.
4. Ready to use.
