import React from "react";
import "./styles.css";
// Importing Breadcrumbs components
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// Importing images
import gingerHouse from './static/gingerHouse.jpg';
import event from './static/event.jpg';
// Importing components
import Header from "./../Header";
import NavBar from "./../NavBar";
import Footer from "./../Footer";

/* Component for the ExtraCurricular page */
class HouseRepresentative extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Header component with text props. */}
        <Header
          title={`${this.props.appState.title}`}
          subtitle={`${this.props.appState.subtitle}`}
        />
        {/* NavBar component with text props. */}
        <NavBar/>
        {/* HouseRepresentative content. */}
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <MuiLink underline="hover" color="inherit" href="/">
              About Me
            </MuiLink>
            <Typography color="text.primary">
              Extra Curricular
            </Typography>
            <Typography color="text.primary">
              House Representative
            </Typography>
          </Breadcrumbs>

          <h1>My House Representative Experience</h1>
          <hr/>
          <figure style={{
              float: 'left',
              color: 'grey'
            }}>
          <img
            src={gingerHouse}
            alt={"Gingerbread house decorating"}
            style={{
              width: '20rem',
            }}/>
            <figcaption>Fig. 1 - Gingerbread house decorating event. 
            </figcaption>
          </figure>
          <p>
            In first year, I was the Junior Representative in our House Council at New College. Our main goal was to help students de-stress during the school year and feel more connected within the dorm. 
          </p>
          <p>
            When Chinese New Year was approaching, I suggested hosting an event where students try paper cutting and eat dumplings. My job was to prepare the materials and food, so I bought the frozen dumplings three days before the event started. However, on the event day, we opened the packages and found that the dumplings were all broken and not eatable. Eating dumplings together was an important part of our event, but we did not expect this to happen. Also, there was not enough time to buy another pack of dumplings. 
          </p>
          <figure style={{
              width: '20rem',
              float: 'right',
            }}>
          <img
            src={event}
            alt={"De-tress Painting Event"}
            style={{
              width: 'inherit',
            }}/>
            <figcaption>Fig. 2 - De-tress painting event.</figcaption>
          </figure>
          <p>
            I had to think quickly to solve this problem. Then, I came up with the idea of drawing everyone's attention mainly on paper cutting and had some extra small activities like cutting words to make up a sentence. I also brought my handmade dumplings to make up the food part. Eventually, the tragedy did not ruin our event, but I still did a self-reflection. The event could be better if I did some research before buying the dumplings, since it was my responsibility to make sure the food was fine. Although I came up with the solution and saved the event, I could be more proactive. This experience of being a leader helped me find my weaknesses and become better in the future.
          </p>
          <p>
            With a fixed budget for the whole year, I had learned how to use our budget wisely and come up with creative and fun ideas. I built stronger leadership skills by organizing house events, and some of them were very successful. Being the Representative also improved my problem-solving skills because when things were out of control, I needed to react quickly. I really appreciate this interesting experience.
          </p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default HouseRepresentative;
