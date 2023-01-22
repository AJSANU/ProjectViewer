import React, { Component } from "react";
import { Input, Footer, Card, CardBody, CardTitle, CardText } from "mdbreact";
import "video-player-for-react/dist/index.css";
import { YouTubePlayer } from "react-video-players";
import SubTabs from "../subTabs";
import Divider from "@mui/material/Divider";
import Rating from "./Rating";

import "./style.css";

import projectList from "./project.json";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

class App extends Component {
  state = {
    search: "",
    customCss: false,
  };

  renderproject = (project) => {
    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card
          style={{
            backgroundColor: this.state.customCss ? " " : project.colorCode,
          }}
        >
          <CardBody>
            <p className="">
              <YouTubePlayer
                style={{ width: "225" }}
                videoId={project.video_uploadLink}
              />
            </p>
            <Divider />
            <CardTitle
              title={project.name}
              style={{ fontFamily: "Comic Sans MS" }}
            >
              {project.name.substring(0, 20)}
              {project.name.length > 20 && "..."}
            </CardTitle>
            <CardText>
              <div>
                <div style={{ fontFamily: "Comic Sans MS", color: "black" }}>
                  {project.about_project}
                </div>
                <SubTabs
                  linkYoutube={project.youtube_link}
                  linkGithub={project.GitHub_Link}
                  linkInstagram={project.instagram_link}
                  linkLinkedin={project.Linkedin_link}
                />
              </div>
            </CardText>
            <Rating ratingValue={project.rating} />
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredCountries = projectList.filter((project) => {
      return project.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    var cssChange = () => {
      if (this.state.customCss === false) this.setState({ customCss: true });
      else this.setState({ customCss: false });
    };

    return (
      <div className="flyout">
        <main style={{ marginTop: "1 rem" }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <Input
                  label="Search Project"
                  icon="search"
                  onChange={this.onchange}
                />
                <Stack spacing={2} direction="row">
                  <ColorButton
                    variant="contained"
                    onClick={() => {
                      cssChange();
                    }}
                  >
                    {this.state.customCss ? "Change Color" : "Default Color"}
                  </ColorButton>
                </Stack>
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredCountries.map((project) => {
                return this.renderproject(project);
              })}
            </div>
          </div>
        </main>

        <Footer color="purple" style={{ marginTop: "20px" }}>
          <p className="footer-copyright mb-0">
            &copy; {new Date().getFullYear()} Copyright
          </p>
        </Footer>
      </div>
    );
  }
}

export default App;
