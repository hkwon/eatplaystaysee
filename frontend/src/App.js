import React from "react";
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

import "./App.css";
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

function App() {
  return (
    <>
      <FlexRow margin>
        <Typography variant="h3" component="h1">
          Eat
        </Typography>
        <Typography variant="h3" component="h1">
          Play
        </Typography>
        <Typography variant="h3" component="h1">
          See
        </Typography>
        <Typography variant="h3" component="h1">
          Stay
        </Typography>
      </FlexRow>
      <Typography variant="subtitle1" align="center">
        지역을 선택해주세요.
      </Typography>
      <FlexRow>
        <Card className="card">
          <CardContent>
            <Typography variant="h6">London</Typography>
            <Typography variant="subtitle2" gutterBottom>
              UK
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
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h6">London</Typography>
            <Typography variant="subtitle2" gutterBottom>
              UK
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
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h6">London</Typography>
            <Typography variant="subtitle2" gutterBottom>
              UK
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
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h6">London</Typography>
            <Typography variant="subtitle2" gutterBottom>
              UK
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
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </FlexRow>
    </>
  );
}

export default App;
