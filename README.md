# 🎧 Deep Audio CNN – Sound Classification Platform  

An end-to-end **AI-powered sound classification system** built with **Deep Learning, FastAPI, and Next.js**, featuring **serverless GPU inference on Modal** and an interactive dashboard for real-time audio analysis.  

---

## ✨ Features  

- 🧠 **Deep Audio CNN** – Custom ResNet-style CNN with residual blocks for robust sound classification  
- 🎼 **Mel Spectrogram Conversion** – Transforms audio into image-like inputs for the CNN  
- 🎛️ **Data Augmentation** – Mixup, Time Masking, Frequency Masking for improved generalization  
- ⚡ **Serverless GPU Inference** – Deployed on [Modal](https://modal.com) for scalable low-latency predictions  
- 📊 **Interactive Dashboard** – Built with Next.js + React for real-time monitoring  
- 👁️ **CNN Feature Map Visualization** – Peek inside the network’s internal representations  
- 📈 **Real-time Classification** – Get predictions with confidence scores instantly  
- 🌊 **Waveform & Spectrogram Views** – Visualize input audio alongside classification results  
- 🚀 **FastAPI Inference API** – Optimized backend with Pydantic validation  
- ⚙️ **Efficient Training** – AdamW optimizer + OneCycleLR scheduler for faster convergence  
- 📈 **Training Analysis** – TensorBoard integration for performance tracking  
- 🛡️ **Stable Training** – Batch Normalization for reliable convergence  
- 🎨 **Modern UI** – Tailwind CSS + Shadcn UI components  
- ✅ **Robust API** – Strong input validation using Pydantic  



---

## 🏗️ Architecture  


- **Backend:** FastAPI + PyTorch (deployed on Modal GPU)  
- **Frontend:** Next.js + React + TailwindCSS + Shadcn UI  
- **Infra:** Modal for inference, TensorBoard for training logs  

---

## 🚀 Getting Started  

### 1️⃣ Clone Repository  
```bash
git clone
cd deep-audio-cnn
cd backend
pip install -r requirements.txt
modal run main.py
modal deploy main.py
http://localhost:3000


