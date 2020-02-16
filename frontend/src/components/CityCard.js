import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Button
} from "@material-ui/core";
import {
  RestaurantOutlined,
  HotelOutlined,
  LocalSeeOutlined,
  EmojiEmotionsOutlined
} from "@material-ui/icons";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  // margin: ${props => (props.margin ? "1rem" : "0")};
  margin: 0.5rem;
  .card {
    margin: 0.3rem;
  }
`;

function CityCard({ name, nation }) {
  const path = `/cities/${name}`;

  return (
    <FlexRow>
      <Card className="card">
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle2" gutterBottom>
            {nation}
          </Typography>
          <FlexRow>
            <RestaurantOutlined />
            <Typography variant="subtitle2" component="span">
              0개
            </Typography>
          </FlexRow>
          <FlexRow>
            <EmojiEmotionsOutlined />
            <Typography variant="subtitle2" component="span">
              0개
            </Typography>
          </FlexRow>
          <FlexRow>
            <LocalSeeOutlined />
            <Typography variant="subtitle2" component="span">
              0개
            </Typography>
          </FlexRow>
          <FlexRow>
            <HotelOutlined />
            <Typography variant="subtitle2" component="span">
              0개
            </Typography>
          </FlexRow>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link to={path}>Learn More</Link>
          </Button>
        </CardActions>
      </Card>
    </FlexRow>
  );
}

export default CityCard;
