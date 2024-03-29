import React,{useState} from 'react'
import { makeStyles, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { AuthContext } from '../contexts/AuthProvider';
import { database, firestore } from '../firebase';
import { classExpression } from '@babel/types';

function CommentEditor({commentVideoObj , setLoading}) {
    const useStyles = makeStyles({
        commentSectionWriter: {
            // backgroundColor: "yellow",
            height: "4rem",
            width: "100%",
            display: "flex",
            borderWidth: "1px 0 0 0",
            borderStyle: "solid",
            borderColor: "#f1f2f6",
        },
        commentEditor: {
            width: "85%",
            height: "100%",
            border: "none",
            resize: "none",
            outline: "none",
            paddingLeft: "1.5rem",
            paddingTop: "1.2rem",
            fontFamily: "Heebo, sans-serif",
            fontSize: "0.9rem",
            '&::-webkit-scrollbar': {
                width: '0'
              },
        },
        sendIcon: {
            width: "15%",
            fontFamily: "Roboto, sans-serif",
            fontSize: "small",
            color: "#a5b1c2"
        },
    })
    const classes = useStyles();
    const [comment , setComment] = useState('');
    
    const handleCommentText = (e) =>{
        setComment(e.target.value);
    }
    
    const handleCommentPost = async () => {

        let commentObjStructure = {
            puid:commentVideoObj.puid,
            profileImageURl:commentVideoObj.userProfileImageURL ,
            username:commentVideoObj.username,
            description:comment,
            createdAt:database.getUserTimeStamp()
        }
        setLoading(true);
        // Add the new posted comment doc in firestore comments collection
        let commentObj = await database.comments.add(commentObjStructure);

        // Get the post current comments and update doc by merging the new comment into doc
        let postRef = await database.posts.doc(commentVideoObj.puid).get();
        let post = postRef.data();
        await database.posts.doc(commentVideoObj.puid).update({
            comments:[...post.comments ,commentObj.id]
        })
        setLoading(false);
        setComment("");
    }
    
    return (
        <div className={classes.commentSectionWriter}>
            <textArea
                placeholder="Add a comment..."
                className = {classes.commentEditor}
                value={comment}
                onChange={handleCommentText}></textArea>
                <IconButton onClick={() => {handleCommentPost()}} className={classes.sendIcon}>
                    <SendIcon ></SendIcon>
                </IconButton>
        
        </div>
    )
}

export default CommentEditor
