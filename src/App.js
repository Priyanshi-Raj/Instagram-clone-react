import React , {useState , useEffect}from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from '@material-ui/core';  
function getModalStyle(){
  const top = 50 ;
  const left = 50 ;
  return{
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-$(top)% , -$(left)%)`,
  };
}
const useStyles = makeStyles((theme)=>({
  paper:{
    position: 'absolute',
    width : 400,
    backgroundColor: theme.palette.background.paper,
    border:'2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),

  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const[posts ,setPosts] = useState([
    // {
    //   username: "Tom",
    //   caption: "Heya!!",
    //   imageUrl:""
    // },
    // {
    //   username: "Jerry",
    //   caption: "lol",
    //   imageUrl:""
    // }
  ]);
  const [open , setOpen] = useState(false);
  useEffect(()=>{

db.collection('posts').onSnapshot(snapshot=>{
  setPosts(snapshot.docs.map(doc=>({
id: doc.id,
post: doc.data()
  })));
})
  } , []);

  return (
    <div className="App">
      <Modal open={open}
      onClose={()=> setOpen(false)}>
        <div style={modalStyle} className={classes.paper}></div>

      </Modal>
      <div className="app_header">
        <img src="" alt="" className="app_headerImage" />
        <h2>I am a Modal</h2>
      </div>
      <Button> sign up </Button>
      <h1>hiiiii</h1>
      {
        posts.map(({id ,post}) =>{
          <Post key={id} username={post.username} caption={post.caption} imageUrl = {post.imageUrl}/>
        })
      }
     
      
    </div>
  );
}

export default App;
