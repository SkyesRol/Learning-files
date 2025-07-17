import React,{useState} from 'react';
import './style.css';


const PictureCard = (props)=>{
    //console.log(props);
    const {uploadImage,word} = props; // 解构
    // console.log(uploadImage);
    
    const [imgPreview,setImgPreview] = useState('https://res.bearboo.com')
    
    const updateImageData = (e)=>{
            // html5的文件上传功能
            const file = e.target.files?.[0]; // ? 会检查e.target.files是否为null undefined
                        // ?. 可选链操作符  相当于 e.target.files? e.target.files[0]:null
            if(!file) return;
            //console.log(file);
            return new Promise((resolve,reject)=>{
                // html5 
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) =>{
                    //console.log(reader.result); //得到Base64格式的结果
                    // 响应式业务
                    setImgPreview(reader.result);
                    // 如何将图片数据交给父组件
                    uploadImage(reader.result);
                    resolve(reader.result);
                }
            })
    
        }                       



    return(
        <>
        <div className="card">
            <input type="file" 
            id="selectImage"
            accept='.jpg,.jpeg,.png,.gif'
            onChange={updateImageData}
            />
            <label className='upload' htmlFor="selectImage">
                <img src={imgPreview} alt="preview" />

            </label>
            {/* template -> JSX -> JSX -> {数据绑定} -> 响应式 -> 单词业务 */}
            <div className="word">{word}</div>
        </div>
        
        </>
    )
}


export default PictureCard;