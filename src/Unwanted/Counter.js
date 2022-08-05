import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbDownOffAltTwoToneIcon from '@mui/icons-material/ThumbDownOffAltTwoTone';

// hook is function - stars with 'use'
// useState 
// const [state,setState] = useState(InitialValue);
// setState - Informs React  State is changed - re-render (updating)
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  const incrementLike = () => { setLike(like + 1); }
  const incrementDisLike = () => { setdisLike(dislike + 1); }
  return (
    <div className="btn-like">
      <IconButton color="primary" 
      aria-label="like" onClick={incrementLike}>
              <Badge badgeContent={like} color="primary">
              {/* < ThumbUpTwoToneIcon/> */}
              👍
              </Badge>
     </IconButton>

     <IconButton color="error" aria-label="like"  onClick={incrementDisLike}>
              <Badge badgeContent={dislike} color="error">
              {/* <ThumbDownOffAltTwoToneIcon /> */}
              👎
              </Badge>
     </IconButton>
     
      {/* <button className="btn-like" onClick={incrementLike}>👍{like}</button>
      <button className="btn-dislike" onClick={incrementDisLike}>👎{dislike}</button> */}
    </div>
  );
}
