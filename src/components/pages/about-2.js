// import React, { Component } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// import img1 from "../../images/img1.png";
// import img2 from "../../images/img2.png";
// import img3 from "../../images/img3.png";

// const images = [img1, img2, img3];
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

// export default class About extends Component {
//   const classes = useStyles();
  
//   renderImages = () => {
//     return images.map((image, idx) => {
//       return (
//             <Grid
//               item
//               key={idx}
//               component={Card}
//               xs={12}
//               md={3}
//               className="card infected"
//             >
//               <CardContent>
//                 <CardMedia image={image}>
//                   <Typography color="textSecondary" gutterBottom>
//                     {image === img1 ? "Infected" : "Some other title"}
//                   </Typography>

//                   <Typography variant="h5"></Typography>

//                   <Typography color="textSecondary"></Typography>
//                   <Typography variant="body2">
//                     Number of active cases of COVID-19
//                   </Typography>
//                 </CardMedia>
//               </CardContent>
//             </Grid>
//         // <div
//         //   key={idx}
//         //   style={{ height: "100px", width: "100px", borderRadius: "16px", border: "1px black transparent" }}
//         // >
//         //   <img src={image} style={{ height: "100%", width: "100%" }} />
//         // </div>
//       );
//     });
//   };
//   render() {
//     return (
//       // <div className="card-section">
//         <Grid container spacing={3} justify="center">
//         {this.renderImages()}
//         </Grid>

//     );
//   }
// }
