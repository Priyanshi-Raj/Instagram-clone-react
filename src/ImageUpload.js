import React , {useState} from 'react';
import {Button} from "@material-ui/core";
import {storage ,db} from "./firebase"

function ImageUpload({username}) {
    const [image , setImage] = useState('');
    // const [url , setUrl] = useState('');
    const [progress , setProgres] = useState(0);
    const [caption , setCaption] = useState('');
    const handleChange =(e) =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    const handleUpload =() =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes)*100
                );
                setProgres (progress);

            },
            () =>{
                storage
.ref("images")
.child(image.name)
.getDownloadURL()
.then(url =>{
    db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        caption: caption,
        ImageUrl : url,
        username: username

    });
    setProgress(0);
    setCaption("");
    setImage(null);

});

            }
            
        );

    };
    return (
        <div>
            <progress className="imageupload_progress" value={progress} max="100"></progress>
            <input type="text" placeholder="enter a caption" onChange={event => setCaption(event.target.value)} value={caption} />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>Upload </Button>
        </div>
    )
}

export default ImageUpload
