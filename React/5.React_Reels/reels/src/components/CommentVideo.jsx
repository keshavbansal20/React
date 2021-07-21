import React from 'react'

function CommentVideo({commentVideoObj}) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            position: "relative",
        }}>
                <video
                    width="288"
                    autoPlay
                    loop
                    muted={true}
                    src={commentVideoObj.videoUrl}
                    style={{ minHeight: "100%" }}></video>
        </div>
    )
}

export default CommentVideo;
