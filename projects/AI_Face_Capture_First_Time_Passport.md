#### AI Face-Capture for First-Time Passport Application  

**Abstract**  
<div style="text-align: justify;">
This paper presents the development and implementation of a Pan-Tilt-Zoom (PTZ) camera interfaced with a Jetson processor hosting Artificial Intelligence (AI) algorithms, designed to address the challenges of traditional biometric capture for first-time passport photos of young children. The system enhances the accuracy, efficiency, and adaptability of facial biometric capture by recognizing and accommodating the dynamic and diverse behaviors of children. Utilizing AI, the system detects faces and analyzes facial features using 68 landmark points, ensuring high-quality images that meet ISO standards. These technical specifications, implementation process, and performance evaluations of the developed system are provided in this paper, demonstrating the potential of the proposed AI Face-Capture to advance biometric identification and verification for young children.
</div>  

**Project Description**  
The proposed **AI Face-Capture System** consists of the following components:  
- **Hardware:** Jetson Nano, 12MP IMX477 PTZ camera, Arducam PTZ controller, LCD display.  
- **Software:** Dlib-based face detection, 68 landmark point analysis, ISO-compliant face quality checks.  
**System Features:**  
  - AI-powered automatic camera adjustments (pan, tilt, zoom).  
  - Facial landmark-based quality verification.  
  - User interface for real-time review and selection.  
- **Validation:** 99% of system-accepted images were successfully validated against the U.S. passport photo compliance tool.  
- **Open-source:** The source code and methodology are available for future research and customization.  

**System Overview**  
- The PTZ camera captures real-time images.  
- AI-based facial detection locates and analyzes landmark points.  
- The system performs geometric and photographic quality checks.  
- The best image is selected, verified, and securely stored.  

**Results**  
- **Processing Speed:** The system operates in real-time with automated PTZ adjustments.  
- **Accuracy:** Achieved 99% compliance with passport photo standards.  
- **Usability:** Reduces manual intervention and ensures optimal face positioning.  

**Conclusion**  
<div style="text-align: justify;">
This AI-driven PTZ camera system streamlines the process of capturing passport-compliant images of young children by integrating real-time facial analysis and automatic framing adjustments. The system significantly reduces rejection rates and improves efficiency. Future enhancements include adaptive brightness control and full-range vertical positioning to further optimize image quality.  
</div>  
<br/>

**Paper Details**  
&nbsp;&nbsp;&nbsp; **Title:** AI Face-Capture for First-Time Passport Application  
&nbsp;&nbsp;&nbsp; **Authors:** Md Abdul Baset Sarker, Masudul H. Imtiaz  
&nbsp;&nbsp;&nbsp; **Published in:** *Preprints* (2024)  
&nbsp;&nbsp;&nbsp; **DOI:** [10.20944/preprints202406.0392.v1](https://doi.org/10.20944/preprints202406.0392.v1)  
&nbsp;&nbsp;&nbsp; **GitHub Repository:** [PTZ Face-Capture System](https://github.com/baset-sarker/ptz-first-time-passport)  
&nbsp;&nbsp;&nbsp; **Full Paper:** [Read Here](https://doi.org/10.20944/preprints202406.0392.v1)  
