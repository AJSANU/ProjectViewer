import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
} from "mdbreact";
import { ReactVideoPlayer } from "video-player-for-react";
import "video-player-for-react/dist/index.css";
import { YouTubePlayer } from "react-video-players";
import SubTabs from "../subTabs";
import Divider from '@mui/material/Divider';
import Rating from './Rating';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import "./style.css";

import projectList from "./project.json";

class App extends Component {
  state = {
    search: "",
  };

  renderproject = (project) => {
    const { search } = this.state;
    var code = project.code.toLowerCase();

    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card style={{ backgroundColor: " " }}>
          <CardBody>
            <p className="">
              <YouTubePlayer
                style={{ width: "225" }}
                videoId={project.video_uploadLink}
              />
            </p>
            <Divider/>
            <CardTitle
              title={project.name}
              style={{ fontFamily: "Comic Sans MS" }}
            >
              {project.name.substring(0, 15)}
              {project.name.length > 15 && "..."}
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
            <Rating ratingValue = {project.rating} />
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
