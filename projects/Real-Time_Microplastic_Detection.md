#### Real-Time Detection of Microplastics Using an AI Camera  

**Abstract**  
<div style="text-align: justify;">
Microplastics (MPs, size ≤ 5 mm) pose a significant threat to marine and freshwater ecosystems, yet effective detection technologies remain scarce. This study introduces a real-time microplastic detection system using AI and computer vision. The system employs multiple camera configurations, including fixed-focus 2D and autofocus (2D and 3D), to detect and track MPs. A YOLOv5-based object detection model identifies MPs, while DeepSORT tracks their motion across consecutive images. The system achieved 97% accuracy in lab testing and 96% accuracy in a real-world river test. This research lays the foundation for AI-based environmental monitoring and microplastic mitigation strategies.  
</div>  
<br/>

**Project Description**  
The proposed **AI-Powered Microplastic Detection System** consists of the following components:  
- **Hardware:** Multiple camera configurations (fixed-focus 2D, autofocus 2D & 3D), waterproof casing, LED lighting.  
- **Software:** YOLOv5-based object detection and DeepSORT tracking for real-time MP identification.  
- **Validation:** Lab tests (97% accuracy) and field tests in a river (96% accuracy) demonstrated high precision.  
- **Open-source:** The system’s dataset and methodology are publicly available for further research and development.  

**System Overview**  
- The system captures real-time images of flowing water samples.  
- YOLOv5 detects MPs, and DeepSORT assigns unique IDs to track them.  
- The size, velocity, and trajectory of MPs are computed.  
- The system adapts to different environmental conditions, including variable lighting and water turbulence.  

**Results**  
- **Lab Study:** Conducted with various camera setups and water velocities, achieving 97% precision.  
- **Field Study:** Deployed in a river with a custom mounting system, yielding 96% accuracy.  
- **Processing Time:** The system processes frames in **real-time**, adjusting for environmental variations.  

**Conclusion**  
<div style="text-align: justify;">
This study presents a pioneering AI-driven system for real-time microplastic detection in aquatic environments. By integrating object detection, tracking, and velocity measurement, the system achieves high accuracy in both controlled and natural settings. Future enhancements may include 3D imaging, lightweight deep learning models, and deployment on embedded platforms for wider environmental applications.  
</div>  
<br/>
**Paper Details**  
&nbsp;&nbsp;&nbsp; **Title:** Real-Time Detection of Microplastics Using an AI Camera  
&nbsp;&nbsp;&nbsp; **Authors:** Md Abdul Baset Sarker, Masudul H. Imtiaz, Thomas M. Holsen, Abul B. M. Baki  
&nbsp;&nbsp;&nbsp; **Published in:** *Sensors* (2024), Volume 24, Issue 4394  
&nbsp;&nbsp;&nbsp; **DOI:** [10.3390/s24134394](https://doi.org/10.3390/s24134394)  
&nbsp;&nbsp;&nbsp; **Full Paper:** [Read Here](https://doi.org/10.3390/s24134394)  
