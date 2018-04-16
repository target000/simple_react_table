import React from "react";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="Xi Lu"
      avatar="https://vignette.wikia.nocookie.net/justdance/images/9/9f/Smiley-Face-7.jpg/revision/latest?cb=20150825191621"
    />
    <CardMedia>
      <img
        src="http://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg"
        alt=""
        height="300"
      />
    </CardMedia>
  </Card>
);

export default CardExampleWithAvatar;
