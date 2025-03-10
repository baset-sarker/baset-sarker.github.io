#### Autonomous Navigation System from Simultaneous Localization and Mapping  

**Abstract**  
<div style="text-align: justify;">
This paper presents the development of a Simultaneous Localization and Mapping (SLAM) based Autonomous Navigation system. The motivation for this study was to find a solution for navigating interior spaces autonomously. Interior navigation is challenging as it can be forever evolving. Solving this issue is necessary for multitude of services, like cleaning, the health industry, and in manufacturing industries. The focus of this paper is the description of the SLAM-based software architecture developed for this proposed autonomous system. A potential application of this system, oriented to a smart wheelchair, was evaluated. Current interior navigation solutions require some sort of guiding line, like a black line on the floor. With this proposed solution, interiors do not require renovation to accommodate this solution. The source code of this application has been made open source so that it could be re-purposed for a similar application. Also, this open-source project is envisioned to be improved by the broad open-source community upon past its current state.
</div>  

**Project Description**  
The proposed **Autonomous Navigation System** consists of the following components:  
- **Hardware:** Intel Realsense D415 depth camera, Jetson Xavier, YDLiDAR X2L, motor controller.  
- **Software:** OpenVSLAM-based localization, A* path planning, and deep learning-based obstacle avoidance.  
- **System Features:**  
  - Monocular SLAM for real-time indoor mapping.  
  - A* algorithm for optimal pathfinding.  
  - LiDAR-assisted obstacle detection and avoidance.  
  - Android-based user interface for navigation control.  
- **Validation:** Successfully navigated a smart wheelchair through a medical building using real-time SLAM updates.  
- **Open-source:** The source code and implementation details are available for further research and development.  

**System Overview**  
- The camera captures real-time frames for SLAM-based mapping.  
- OpenVSLAM generates a 2D occupancy grid map.  
- The A* algorithm determines the shortest path to the target location.  
- The LiDAR sensor detects obstacles and updates the path dynamically.  
- A deep learning model processes navigation data for precise movement control.  

**Results**  
- **Mapping Performance:** Successfully generated real-time occupancy grid maps.  
- **Navigation Accuracy:** The system followed predefined routes with minimal deviation.  
- **Obstacle Avoidance:** Effectively detected and avoided dynamic obstacles using LiDAR.  

**Conclusion**  
<div style="text-align: justify;">
This research presents an autonomous navigation system that eliminates the need for predefined guiding lines by leveraging SLAM, AI-driven path planning, and LiDAR-based obstacle avoidance. Future improvements include optimizing deep learning models for real-time navigation and integrating voice-based user commands for enhanced accessibility.  
</div>  
<br/>

**Paper Details**  
&nbsp;&nbsp;&nbsp; **Title:** Autonomous Navigation System from Simultaneous Localization and Mapping  
&nbsp;&nbsp;&nbsp; **Authors:** Micheal Caracciolo, Owen Casciotti, Christopher Lloyd, Ernesto Sola-Thomas, Matthew Weaver, Kyle Bielby, Md Abdul Baset Sarker, Masudul H. Imtiaz  
&nbsp;&nbsp;&nbsp; **Published in:** *arXiv* (2021)  
<!-- &nbsp;&nbsp;&nbsp; **GitHub Repository:** [VSLAM Mapping](https://github.com/michealcarac/VSLAM-Mapping)   -->
&nbsp;&nbsp;&nbsp; **Full Paper:** [Read Here](https://arxiv.org/abs/2112.07723v1)  
