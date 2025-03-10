#### Vision Controlled Sensorized Prosthetic Hand  

**Abstract**  
<div style="text-align: justify;">
This paper introduces a vision-enabled, sensorized prosthetic hand designed to replicate natural hand functions while ensuring accessibility and ease of use. Unlike conventional EMG-based prosthetic hands, this design integrates a camera, pressure sensors, an accelerometer, and a distance sensor to enhance object interaction. The system employs the Coral Dev Board Mini for real-time processing and EfficientDet for object detection. The prosthetic hand successfully performed grasping, lifting, and releasing actions with 90% accuracy in real-world tests.  
</div>  
<br/>

**Project Description**  
The proposed **Vision Controlled Sensorized Prosthetic Hand** consists of the following components:  
- **Hardware:** 5MP camera, five force-sensitive resistors (FSRs), accelerometer (ADXL345), distance sensor (VL6180X), Coral Dev Board Mini, and SG90 servo motors.  
- **Software:** EfficientDet object detection running on Coral Dev Board Mini with Tensor Processing Unit (TPU).  
- **Sensors & Actuation:**  
  - The camera enables object recognition for automated grasping.  
  - Pressure sensors ensure safe grasping by preventing excessive force.  
  - The accelerometer detects gestures for object release.  
  - The distance sensor determines object proximity before grasping.  
- **Validation:** Achieved 90% accuracy in grasping and object interaction tasks.  
- **Open-source:** The design, firmware, and dataset are publicly available for further development.  

**System Overview**  
- The camera detects and identifies an object.  
- The distance sensor calculates the object’s proximity.  
- The motor controller actuates the fingers based on sensor feedback.  
- Pressure sensors ensure safe and stable grasping.  
- The accelerometer detects hand movement for releasing the object.  

**Results**  
- **Prosthetic Hand Size:** 373mm total length, palm size 80mm x 86mm x 33.5mm.  
- **Battery Life:** 1-hour continuous operation using an 11.1V lithium-polymer battery.  
- **Object Detection Speed:** Runs EfficientDet at 9 FPS on Coral Dev Board Mini.  
- **Accuracy:** 90% success rate in object grasping and release tasks.  

**Conclusion**  
<div style="text-align: justify;">
This study presents a vision-based prosthetic hand that eliminates the need for extensive user training by integrating AI-driven object detection and multi-sensor feedback. The system successfully grasps, lifts, and releases objects with high accuracy. Future enhancements may include adaptive fitting mechanisms, lightweight deep learning models, and deployment on edge AI platforms for real-world usability.  
</div>  
<br/>

**Paper Details**  
&nbsp;&nbsp;&nbsp; **Title:** Vision Controlled Sensorized Prosthetic Hand  
&nbsp;&nbsp;&nbsp; **Authors:** Md Abdul Baset Sarker, Juan Pablo S. Sola, Aaron Jones, Evan Laing, Ernesto Sola-Thomas, Masudul H. Imtiaz  
&nbsp;&nbsp;&nbsp; **Published in:** *arXiv* (2024)  
&nbsp;&nbsp;&nbsp; **GitHub Repository:** [Vision-Enabled Prosthetic Hand](https://github.com/baset-sarker/vision_enabled_prosthetic_hand)  
&nbsp;&nbsp;&nbsp; **Full Paper:** [Read Here](https://arxiv.org/abs/2407.12807v2)  
