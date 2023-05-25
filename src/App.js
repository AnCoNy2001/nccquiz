import "./App.scss";
import content1 from "./assets/content1.png";
import content2 from "./assets/content2.png";
import content3 from "./assets/content3.png";

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="content-left">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li className="active">News</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="content-right">
          <div className="menu-logo">
            <div className="menu">
              <i class="fas fa-bars"></i>
            </div>
            <div className="content-right-logo"></div>
          </div>
          <div className="content-right-container">
            <div>Lorem ipsum dolor sit asmet?</div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              fugit labore magni ipsum voluptates nesciunt cupiditate. Nobis,
              accusamus? Odit velit vitae quae quo saepe quos rerum voluptatum
              sint consectetur vel. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Dolore fugit labore magni ipsum voluptates
              nesciunt cupiditate. Nobis, accusamus? Odit velit vitae quae quo
              saepe quos rerum voluptatum sint consectetur vel.
            </div>
          </div>
          <div className="content-right-content">
            <div className="content-right-child">
              <div className="child-title">Lorem ipsum dolor sit amet</div>
              <div className="child-content">
                <img src={content1} alt="" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Autem dolorem eveniet qui odit sapiente, reprehenderit velit
                  odio repellat nulla molestias voluptatibus hic eum est,
                  voluptates neque? Cumque fugit explicabo neque? Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Autem dolorem
                  eveniet qui odit sapiente, reprehenderit velit odio repellat
                  nulla molestias voluptatibus hic eum est, voluptates neque?
                  Cumque fugit explicabo neque?
                </p>
              </div>
            </div>
            <div className="content-right-child">
              <div className="child-title">Lorem ipsum dolor sit amet</div>
              <div className="child-content">
                <img src={content2} alt="" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Autem dolorem eveniet qui odit sapiente, reprehenderit velit
                  odio repellat nulla molestias voluptatibus hic eum est,
                  voluptates neque? Cumque fugit explicabo neque? Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Autem dolorem
                  eveniet qui odit sapiente, reprehenderit velit odio repellat
                  nulla molestias voluptatibus hic eum est, voluptates neque?
                  Cumque fugit explicabo neque?
                </p>
              </div>
            </div>
            <div className="content-right-child">
              <div className="child-title">Lorem ipsum dolor sit amet</div>
              <div className="child-content">
                <img src={content3} alt="" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Autem dolorem eveniet qui odit sapiente, reprehenderit velit
                  odio repellat nulla molestias voluptatibus hic eum est,
                  voluptates neque? Cumque fugit explicabo neque? Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Autem dolorem
                  eveniet qui odit sapiente, reprehenderit velit odio repellat
                  nulla molestias voluptatibus hic eum est, voluptates neque?
                  Cumque fugit explicabo neque?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2023 Bùi Hoàng Ân.</p>
      </div>
    </div>
  );
}

export default App;
