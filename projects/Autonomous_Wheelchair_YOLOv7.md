#### Autonomous Movement of Wheelchair by Cameras and YOLOv7  

**Abstract**  
<div style="text-align: justify;">
A wheelchair can provide limited but crucial mobility to an injured or disabled individual.This paper presents the first stage of the development of a smart wheelchair which is the customization of a manually controlled wheelchair with a novel implementation of octascopic vision. This relatively inexpensive design of an autonomous wheelchair consists of two monochromic camera arrays (each
having four cameras) placed around the frame of the wheelchair to achieve a view of 360 degrees. The
initial research goal was to design a wheelchair controlled by the embedded processor, allowing the
wheelchair to navigate autonomously around an indoor facility with and without human intervention.
Additionally, it was intended to allow those previously denied access to the world of automatic
wheelchairs because of a low personal income. Through the testing of wheelchair functionality, (a) a
large dataset of octascopic images was captured from this wheelchair, and (b) a YOLOv7-based object
detection model was developed to avoid obstacles and autonomously control the movement. This
paper presents the camera placement and the obstacle detection model using octascopic images. All
the project design files have been granted an open-source license and can be reproduced publicly.
</div>  
<br/>

**Project Description**  
The proposed **Autonomous Wheelchair System** consists of the following components:  
- **Hardware:** Standard wheelchair modified with eight 1MP monochrome cameras, Jetson Nano, motor controller.  
- **Software:** YOLOv7-based object detection model for real-time obstacle avoidance.  
- **System Features:**  
  - 360-degree vision for environmental awareness.  
  - Custom-trained YOLOv7 model for detecting obstacles such as walls, chairs, and doors.  
  - Integrated motor control for autonomous navigation.  
- **Validation:** Achieved 92% mAP accuracy in object detection, successfully navigating an indoor facility.  
- **Open-source:** The system's design files and dataset are publicly available for further development.  

**System Overview**  
- The octascopic camera system captures real-time images.  
- YOLOv7 detects obstacles and sends navigation commands.  
- The motor controller adjusts the wheelchair's movement to avoid collisions.  
- The system operates autonomously while allowing manual control if needed.  

**Results**  
- **Object Detection Accuracy:** 92% mAP for 10 indoor object classes.  
- **Navigation Performance:** Successfully avoided obstacles and navigated autonomously in real-world tests.  
- **Cost-Effectiveness:** Conversion cost of ~$1300 compared to commercial alternatives.  

**Conclusion**  
<div style="text-align: justify;">
This research presents a low-cost, vision-based autonomous wheelchair system, leveraging multiple cameras and deep learning for obstacle detection. The approach eliminates the need for expensive LiDAR sensors while providing robust 360-degree vision. Future improvements may include real-time SLAM integration, voice commands, and a wireless charging system.  
</div>  
<br/>

**Paper Details**  
&nbsp;&nbsp;&nbsp; **Title:** Autonomous Movement of Wheelchair by Cameras and YOLOv7  
&nbsp;&nbsp;&nbsp; **Authors:** Md Abdul Baset Sarker, Ernesto Sola-Thomas, Collin Jamieson, Masudul H. Imtiaz  
&nbsp;&nbsp;&nbsp; **Published in:** *Engineering Proceedings* (2023), Volume 31, Article 60  
&nbsp;&nbsp;&nbsp; **DOI:** [10.3390/ASEC2022-13834](https://doi.org/10.3390/ASEC2022-13834)  
&nbsp;&nbsp;&nbsp; **Full Paper:** [Read Here](https://doi.org/10.3390/ASEC2022-13834)  
