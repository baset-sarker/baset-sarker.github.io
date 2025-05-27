#### Automatic Detection of Microplastics in the Aqueous Environment  

**Abstract**  
<div style="text-align: justify;">
Microplastics (<5 mm) have become a global concern due to their growing threat to the marine and freshwater environment. There is a lack of technologies for the rapid and accurate identification and quantification of microplastics in the aqueous environment. This paper presents a deep-learning-based methodology for real-time detection, tracking, and counting of microplastics in freshwater environments through real-time object detection. A prototype was developed to detect microplastics of 1 mm to 5 mm in size and different shapes (e.g., spherical) and colors (e.g., red, green, blue). The microplastics detection model employed the small YOLOv5 architecture as we focused on low-power applications. In-situ image collection was performed using a Logitech C270 camera, and the microplastics were manually annotated on those images before being applied for model training. For real-time object tracking, we used Simple Online and Real-time Tracking with a Deep Association Metric (DeepSORT), an extended version of the Simple Online and Real-time Tracking (SORT) algorithm. Our developed system can work up to 34 cm/sec of water velocity and successfully detect, track, count, and calculate the velocity of microplastic of size 5mm.
</div>  
<br/>

**Project Description**  
The proposed **Microplastic Detection System** consists of the following components:  
- **Hardware:** Logitech C270  camera, controlled water flume system, Jetson Nano for real-time processing.  
- **Software:** YOLOv5 for object detection, DeepSORT for object tracking and velocity estimation.  
- **System Features:**  
  - Automated **real-time detection** of microplastics in moving water.  
  - **Deep learning-based tracking** to monitor microplastic motion.  
  - Accurate velocity calculation of detected microplastics.  
- **Validation:** Conducted experiments in a **12-meter recirculating flume**, using a dataset of **2000 manually labeled images**.  
- **Open-source:** The dataset and model implementation are publicly available for further research.  

**System Overview**  
- The high-resolution camera captures real-time images of flowing water.  
- The **YOLOv5 model detects microplastic particles** of different shapes and colors.  
- The **DeepSORT tracker assigns unique IDs** to detected particles and monitors their motion.  
- The system calculates the **velocity of microplastics** based on frame-by-frame tracking.  

**Results**  
- **Detection Accuracy:** Achieved up to **95% accuracy** for 5mm particles moving at speeds up to **35 cm/sec**.  
- **Experimental Validation:** Successfully tracked microplastic particles of varying sizes and colors in controlled conditions.  
- **Challenges:** Detection accuracy decreased for 1mm particles at higher velocities.  

**Conclusion**  
<div style="text-align: justify;">
This research presents an AI-powered, real-time microplastic detection system capable of accurately identifying and tracking microplastic movement in water. The approach provides an effective alternative to manual microplastic identification, offering higher efficiency and accuracy. Future improvements may include **enhancing detection for smaller particles**, **improving performance in dynamic environments**, and **integrating real-world deployment strategies**.  
</div>  
<br/>

**Paper Details**  
&nbsp;&nbsp;&nbsp; **Title:** Automatic Detection of Microplastics in the Aqueous Environment  
&nbsp;&nbsp;&nbsp; **Authors:** Md Abdul Baset Sarker, Masudul H. Imtiaz, Thomas M. Holsen, Abul B. M. Baki  
&nbsp;&nbsp;&nbsp; **Published in:** *2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC), Las Vegas, NV, USA, 2023, pp. 0768-0772*  
<!-- &nbsp;&nbsp;&nbsp; **DOI:** [doi: 10.1109/CCWC57344.2023.10099253] (https://doi.org/10.1109/CCWC57344.2023.10099253). 
&nbsp;&nbsp;&nbsp; **Full Paper:** [Read Here](https://ieeexplore.ieee.org/abstract/document/10099253)   -->
&nbsp;&nbsp;&nbsp; <strong>DOI:</strong> <a href="https://doi.org/10.1109/CCWC57344.2023.10099253" target="_blank">doi: 10.1109/CCWC57344.2023.10099253</a><br>
&nbsp;&nbsp;&nbsp; <strong>Full Paper:</strong> <a href="https://ieeexplore.ieee.org/abstract/document/10099253" target="_blank">Read Here</a>

