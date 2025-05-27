#### Vision-Enabled Prosthetic Hand for Children with Upper Limb Disabilities

**Abstract**  
<div style="text-align: justify;">
This paper introduces a novel AI vision-enabled pediatric prosthetic hand for children aged 10–12 with upper limb disabilities. Featuring a soft anthropomorphic design, the prosthesis integrates a micro camera, FPGA, pressure sensors, and IMUs for adaptive grasping. It achieves real-time object detection and gesture-based control using a quantized YOLOv7-tiny model and CNN classifiers on an embedded platform. The system is lightweight, low-cost, and customizable, making it suitable for underserved populations.
</div>  

**Project Description**  
The **Vision-Enabled Pediatric Prosthetic Hand** includes:  
- **Hardware:** 2MP USB camera, 5 force sensors (FMA), 11 IMUs (MPU-6500), VL6180X TOF distance sensor, 3 SG90-type servo motors, Xilinx KV260 FPGA board.  
- **Software & Models:**  
  - YOLOv7-tiny object detector (QAT, 96% mAP)  
  - Force prediction and grasp classification (100% accuracy, MAE: 0.018)  
  - Gesture classification CNN (100% test accuracy)  
- **Mechanics:** PLA structure with silicone fingertips for grip; 3 DOF underactuated design for reduced weight and power use.  
- **Control:** Gesture activation, visual targeting, force-controlled grasp, and IMU-based release.  
- **Validation:** Successfully lifted objects with 5N force, 1.5s grasp time, 0.6s release.  

**System Overview**  
- Idle mode activated by gesture.  
- Camera detects object, distance measured with TOF sensor.  
- DL models run on FPGA to classify object, grasp type, and predict force.  
- Motors actuate fingers with real-time pressure feedback.  
- IMU triggers release gesture recognition.  

<div style="display: flex; flex-wrap: wrap; justify-content: center; text-align: center;">
  <div style="margin: 10px;">
    <img src="assets/img/projects/object_and_grasp_force.png" alt="Vision Prosthetic Hand" style="width: 98%; min-width: 200px;">
    <p><strong>Figure 1:</strong>  Object detection , Grasp and force classification model</p>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; justify-content: center; text-align: center;">
  <div style="margin: 10px;">
    <img src="assets/img/projects/gesture_model.png" alt="Vision Prosthetic Hand" style="width: 98%; min-width: 200px;">
    <p><strong>Figure 1:</strong>  Gesture detection model</p>
  </div>
</div>

**Results**  
- **Prosthetic Size:** Hand length 13 cm, total forearm-hand 30 cm, total weight 400g.  
- **Object Detection:** YOLOv7-tiny, 96% mAP @ 9 FPS on FPGA DPU.  
- **Gesture Classification:** CNN achieved 100% accuracy with 3 IMU gesture classes.  
- **Force Prediction:** MAE = 0.018; Grasp type classification = 100%.  
- **Power System:** 11.1V LiPo battery with buck converters; runtime ≈ 1 hour.  

**Conclusion**  
<div style="text-align: justify;">
The FPGA-based pediatric prosthetic hand demonstrates real-time, low-power operation with intelligent vision and sensor fusion for adaptive grasping. It eliminates the need for complex EMG/EEG training and enables use in resource-constrained settings. Future work includes adding slip detection, expanding datasets, and exploring ASIC implementation for mass production.
</div>  

**Paper Details**  
- **Title:** A Vision-Enabled Prosthetic Hand for Children with Upper Limb Disabilities  
- **Authors:** Md Abdul Baset Sarker, Art Nguyen, Sigmond Kukla, Kevin Fite, Masudul H. Imtiaz  
- **Published in:** IEEE Access, 2025  (under review)
<!-- - **Paper preview:** [https://arxiv.org/abs/2504.15654](https://arxiv.org/abs/2504.15654)   -->
- <strong>Paper preview:</strong> <a href="https://arxiv.org/abs/2504.15654" target="_blank">https://arxiv.org/abs/2504.15654</a>


<!-- - **DOI:** [10.1109/ACCESS.2024.0429000](https://doi.org/10.1109/ACCESS.2024.0429000)   -->
<!-- - **GitHub Repository:** *Coming Soon*   -->
<!-- - **Video Demo:** [Watch Here](https://www.youtube.com/watch?v=yInMzl4Ef7A)   -->
