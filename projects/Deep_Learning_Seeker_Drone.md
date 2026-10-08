#### Deep Learning-Based Seeker Drone  

**Abstract**  
<div style="text-align: justify;">
In the realm of making Unmanned Aerial Vehicles (UAVs) or drones precise in performing autonomous functions, their real-time detection capabilities have to be enhanced. Multiple approaches have been implemented in this work to nurture a drone movement to detect and discriminate between seven different toy cars. The YOLOv7 model was trained for object detection, followed by different methods (one mathematical algorithm and two deep learning-based approaches) used to move the drone. The drone was able to detect a particular car and move towards it. The object detection and DNN-based model accuracy was 95%. Both deep learning and mathematical algorithms worked well, as expected.  
</div>  
<br/>

**Dataset**  
An indoor environment was used for data collection. As no existing indoor UAV-based image dataset was available, a new dataset was created using the official Tello app. Videos were captured at 5fps with a resolution of 720p, covering different backgrounds, angles, altitudes, and variations in illumination. Frames were extracted from these videos and manually labeled.  

- **Total Images:** 4545  
- **Image Resolution:** 1280 x 720  
- **Training Samples:** 3636  
- **Validation Samples:** 454  
- **Test Samples:** 454  

**Object Categories**  
- **garbage_truck_g, van_g, garbage_truck_y, schoolbus_y, dump_truck_y, sedan_r, suv_r**  
- *_g or y, _r* represent colors (green, yellow, and red, respectively).  

**Dataset Preparation for Drone Movement Model**  
To prepare data for the sequential DNN model, the camera frame was divided into sections. The drone's actions were assigned based on the object's x and y pixel coordinates. A Python script generated 20,000 data points used to train the model.  

**Methodology**  
YOLOv7 was employed to detect small toy cars with minimal variation in features. The model was fine-tuned using transfer learning techniques, initialized with weights pre-trained on the COCO dataset. It achieved an impressive **95% accuracy at 0.5 mean average precision (mAP).**  
The model predicted the next movement of the drone based on the object's bounding box coordinates. The camera frame was divided, and actions were assigned to each section. A simple sequential model with 4 dense layers predicted the drone's movement. The model achieved an accuracy of **over 95%** on the validation and test sets.  

**Results**  
- **Object Detection Accuracy:** 95% @ 0.5 mAP  
- **Drone Movement Model Accuracy:** Over 95%  
- The model achieved high accuracy in predicting the drone's movement directions based on object detection.  

**Limitations**  
- The dataset only contained images of toy cars, which may not represent real-world conditions.  
- Object detection and discrimination in dynamic environments were not addressed in the study.  

**Conclusion**  
<div style="text-align: justify;">
An autonomous drone was developed to detect and move towards seven different types of toy cars. The system achieved high accuracy, with a **95% success rate** in both object detection and movement prediction. Future iterations may include a wider range of objects and complex environments for real-world application.  
</div>  
<br/>  
