#### An Open-Source Face-Aware Capture System  

**Abstract**  
<div style="text-align: justify;">
Poor-quality facial images present challenges in biometric authentication, particularly for passport photo acquisition and recognition. This paper proposes an open-source, real-time facial image quality analysis system utilizing computer vision on a low-power Jetson-based hardware platform. The system includes a Jetson processor, a 16 MP autofocus camera, a touchscreen LCD, and AES encryption for secure image storage. Through pilot data collection, the system demonstrated 98.98% accuracy in capturing high-quality images. This cost-effective and customizable solution has potential applications in passport verification, security, and identity verification systems.  
</div>

**Project Description**  
The proposed **Face-Aware Capture System** consists of the following components:  
- **Hardware:** Jetson Nano, 16 MP autofocus camera, touchscreen LCD.  
- **Software:** Image quality assessment algorithms to evaluate geometric, pose, and photographic features in real-time.  
- **Encryption:** AES-128 encryption secures stored images.  
- **Validation:** The system was tested against the U.S. Travel passport image check website, achieving a high acceptance rate (98.98% accuracy).  
- **Open-source:** The project’s hardware and software designs are publicly available for customization and deployment.  

**System Overview**  
- The user positions themselves in front of the camera.  
- The system captures and evaluates multiple images for quality.  
- The best images are presented for selection.  
- The selected image is encrypted and securely stored.  
- The system ensures compliance with **ISO/IEC-19794-5** biometric standards.  


<div style="display: flex; flex-wrap: wrap; justify-content: center; text-align: center;">
  <div style="margin: 10px;">
    <img src="assets/img/projects/face_aware.png" alt="Image 1" style="width: 98%; min-width: 200px;">
    <p><strong>Figure 1:</strong> Wokring of face aware capture system</p>
  </div>
  <!-- <div style="margin: 10px;">
    <img src="image2.jpg" alt="Image 2" style="width: 48%; min-width: 200px;">
    <p><strong>Figure 2:</strong> Description of Image 2</p>
  </div> -->
</div>


**Results**  
- **Pilot Study:** Conducted with 39 participants, capturing over 6000 images.  
- **Quality Validation:** 98.98% accuracy in producing passport-compliant images.  
- **Processing Time:** Jetson Nano processes frames in **0.075s per image**.  

**Conclusion**  
<div style="text-align: justify;">
This research introduces an efficient and secure face-aware capture system that enhances image quality for biometric applications. By leveraging real-time quality assessment, ISO standards, and AES encryption, the system ensures high accuracy and security. Future improvements may include automatic height adjustment, deep learning-based quality assessment, and background separation techniques.  
</div>
<br/>

**Paper Details**  
&nbsp;&nbsp;&nbsp; **Title:** An Open-Source Face-Aware Capture System  
&nbsp;&nbsp;&nbsp; **Authors:** Md Abdul Baset Sarker, S. M. Safayet Hossain, Naveenkumar G. Venkataswamy, Stephanie Schuckers, Masudul H. Imtiaz  
&nbsp;&nbsp;&nbsp; **Published in:** *Electronics* (2024), Volume 13, Issue 1178  
<!-- &nbsp;&nbsp;&nbsp; **DOI:** [10.3390/electronics13071178](https://doi.org/10.3390/electronics13071178)  
&nbsp;&nbsp;&nbsp; **GitHub Repository:** [Face-Aware Capture System](https://github.com/baset-sarker/face-aware-capture)  
&nbsp;&nbsp;&nbsp; **Full Paper:** [Read Here](https://doi.org/10.3390/electronics13071178)   -->
&nbsp;&nbsp;&nbsp; <strong>DOI:</strong> <a href="https://doi.org/10.3390/electronics13071178" target="_blank">10.3390/electronics13071178</a><br>
&nbsp;&nbsp;&nbsp; <strong>GitHub Repository:</strong> <a href="https://github.com/baset-sarker/face-aware-capture" target="_blank">Face-Aware Capture System</a><br>
&nbsp;&nbsp;&nbsp; <strong>Full Paper:</strong> <a href="https://doi.org/10.3390/electronics13071178" target="_blank">Read Here</a>

