# Segment Anything Backend for Annotation Hub

1. To run the SAM backend, you have to clone the repository and install all dependencies using pip:

```shell
git clone https://github.com/HumanSignal/label-studio-ml-backend.git
cd label-studio-ml-backend
pip install -e .
cd label_studio_ml/examples/segment_anything_2_image
pip install -r requirements.txt
```

2. Download [`segment-anything-2` repo](https://github.com/facebookresearch/sam2) into the root directory. Install SegmentAnything model and download checkpoints using [the official Meta documentation](https://github.com/facebookresearch/sam2?tab=readme-ov-file#installation) You should now have the following folder structure:
    
    | root directory | label-studio-ml-backend | label-studio-ml | examples | segment_anything_2_image | sam2 | sam2 | checkpoints
    
3. Then you can start the ML backend on the default port `9090`:
    

```shell
cd ~/sam2
label-studio-ml start ../label-studio-ml-backend/label_studio_ml/examples/segment_anything_2_image
```

Due to breaking changes from Meta [HERE](https://github.com/facebookresearch/sam2/blob/c2ec8e14a185632b0a5d8b161928ceb50197eddc/sam2/build_sam.py#L20), it is CRUCIAL that you run this command from the sam2 directory at your root directory.

4. Connect running ML backend server to Label Studio: go to your project `Settings -> Machine Learning -> Add Model` and specify `http://localhost:9090` as a URL. Read more in the official [Label Studio documentation](https://labelstud.io/guide/ml#Connect-the-model-to-Label-Studio).