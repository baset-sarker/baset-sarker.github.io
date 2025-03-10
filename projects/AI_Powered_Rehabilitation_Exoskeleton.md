#### AI-Powered Camera and Sensors for the Rehabilitation Hand Exoskeleton  

**Abstract**  
<div style="text-align: justify;">
Motor Neuron Diseases (MND) cause severe impairments in hand and forearm function, reducing independence and quality of life. This paper presents a vision-enabled rehabilitation hand exoskeleton designed to assist individuals in hand movement. Unlike EMG-based systems that require extensive user training, this design employs a camera, an embedded processor, and an accelerometer to automate grasping and releasing functions. The exoskeleton uses air pressure control for actuation, enabling intuitive hand movements. Future improvements will focus on reducing cost, weight, and power consumption to facilitate mass deployment.  
</div>  
<br/>

**Project Description**  
The proposed **AI-Powered Rehabilitation Hand Exoskeleton** consists of the following components:  
- **Hardware:** 5MP Coral camera, Coral Dev Board Mini, accelerometer (ADXL345), VL6180X Time-of-Flight (ToF) distance sensor, air pressure control system.  
- **Software:** EfficientDet-Lite0 model for object detection, running on the Coral Dev Board Mini with a Tensor Processing Unit (TPU).  
- **Sensors & Actuation:**  
  - The camera enables object detection for grasping.  
  - The accelerometer detects gestures for object release.  
  - The ToF sensor measures object distance.  
  - Air pressure controls finger actuation.  
- **Validation:** Achieved **6 FPS real-time object detection** and successfully performed grasp and release tasks.  
- **Open-source:** The design and implementation details are publicly available for future research and development.  

**System Overview**  
- The camera captures real-time images for object recognition.  
- The ToF sensor calculates the object's proximity.  
- The air pressure system actuates fingers for grasping.  
- The accelerometer detects hand movement for object release.  

**Results**  
- **Processing Speed:** Runs EfficientDet at **6 FPS** on Coral Dev Board Mini.  
- **Exoskeleton Operation:** Successfully grasped and released objects using air pressure control.  
- **Usability:** Simplifies user interaction, requiring no extensive training.  

**Conclusion**  
<div style="text-align: justify;">
This vision-enabled rehabilitation exoskeleton introduces a novel, user-friendly assistive device that automates grasping and releasing without requiring individualized EMG training. By integrating AI and air pressure-based actuation, the system provides an accessible and affordable solution for individuals with motor impairments. Future research will focus on improving gesture recognition, optimizing power efficiency, and conducting clinical trials for broader adoption.  
</div>  
<br/>

**Paper Details**  
&nbsp;&nbsp;&nbsp; **Title:** AI-Powered Camera and Sensors for the Rehabilitation Hand Exoskeleton  
&nbsp;&nbsp;&nbsp; **Authors:** Md Abdul Baset Sarker, Juan Pablo Sola-Thomas, Masudul H. Imtiaz  
&nbsp;&nbsp;&nbsp; **Published in:** *Preprints* (2024)  
&nbsp;&nbsp;&nbsp; **DOI:** [10.20944/preprints202406.0677.v1](https://doi.org/10.20944/preprints202406.0677.v1)  
&nbsp;&nbsp;&nbsp; **Full Paper:** [Read Here](https://doi.org/10.20944/preprints202406.0677.v1)  
