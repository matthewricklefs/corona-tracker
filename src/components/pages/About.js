import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";

import "../../styles/about.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="page-container">
      <h1 className="heading">COVID Statistics & Research</h1>
      <p className="paragraph">
        Our researchers are working day and night to try and understand COVID
        better. From how COVID spreads, to new symptoms. This is shared with
        doctors, and published in the top academic journals. Discover what you
        have made possible on our News & Research Page.
      </p>

      <div className="latest-news">

        <span className="middle-span">Latest COVID News & Research</span>
      
      </div>
      <div className="blog-wrapper">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="COVID Research"
              height="140"
              image={img1}
              title="Research"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                COVID-19 Vitamin Info
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Can vitamin supplements reduce your risk of catching COVID-19?
                We’ve been analysing your data to find out.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="COVID Research"
              height="140"
              image={img2}
              title="Studies"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                COVID-19 Symptom Studies
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Our latest study shows that one in 20 people will suffer
                symptoms for more than 8 weeks and reveals who is most at risk
                of developing ‘long COVID’.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="COVID Research"
              height="140"
              image={img3}
              title="Vaccinations"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                COVID-19 Vaccinination
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Your daily logging is making a difference. Here's how millions
                of COVID Symptom Study app users are helping the hunt for a
                COVID-19 vaccine.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
